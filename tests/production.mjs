import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { chromium } from 'playwright'
const child = spawn(process.execPath, ['tests/serve-production.mjs'], { stdio: ['ignore', 'pipe', 'pipe'] })
let browser
try {
  const port = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Static server did not start')), 10000)
    child.once('exit', code => { clearTimeout(timeout); reject(new Error(`Static server exited ${code}`)) })
    child.stdout.once('data', value => { clearTimeout(timeout); resolve(JSON.parse(String(value)).port) })
    child.stderr.on('data', value => process.stderr.write(value))
  })
  const origin = `http://127.0.0.1:${port}`
  const response = await fetch(origin)
  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-security-policy'), /connect-src 'self'/)
  assert.match(response.headers.get('permissions-policy'), /payment=\(\)/)
  browser = await chromium.launch({ ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}), args: ['--no-sandbox'] })
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
  const errors = [], external = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  page.on('request', request => { if (/^https?:/.test(request.url()) && new URL(request.url()).origin !== origin) external.push(request.url()) })
  await page.goto(origin)
  await page.getByRole('heading', { level: 1 }).waitFor()
  await page.getByRole('button', { name: 'Experimentar sem cadastro' }).click()
  await page.getByRole('heading', { name: 'Diagnóstico de Carreira' }).waitFor()
  await page.getByRole('button', { name: 'Abrir menu' }).click()
  await page.getByRole('navigation', { name: 'Recursos da demonstração' }).getByRole('button', { name: 'Templates', exact: true }).click()
  await page.getByRole('heading', { name: 'Templates', exact: true }).waitFor()
  const documentDownload = page.waitForEvent('download')
  await page.getByRole('button', { name: /Download/ }).first().click()
  assert.match((await documentDownload).suggestedFilename(), /\.(doc|csv)$/)
  // Validate the real formats of every remaining document and the blank CSV.
  const downloads = await page.getByRole('button', { name: /Download/ }).all()
  for (const button of downloads.slice(1)) {
    const event = page.waitForEvent('download'); await button.click(); const file = await event
    const stream = await file.createReadStream(), chunks = []
    for await (const chunk of stream) chunks.push(chunk)
    const text = Buffer.concat(chunks).toString('utf8')
    if (file.suggestedFilename().endsWith('.csv')) {
      assert.equal(text.split('\r\n').length, 2, 'CSV must have real CRLF records')
      assert.match(text, /"Empresa","Cargo"/)
      assert.equal(/Nubank|iFood|@/.test(text), false, 'No fabricated applications or contacts')
      assert.equal(text.split('\r\n')[1].split(',').length, 12)
    } else {
      assert.match(file.suggestedFilename(), /\.doc$/)
      assert.match(text, /<html/)
      assert.match(text, /Modelo de treino/)
    }
  }

  const pdf = page.getByRole('button', { name: /Abrir para salvar PDF/ }).first()
  assert.ok(await pdf.count(), 'At least one printable PDF template must exist')
  {
    const popupEvent = page.waitForEvent('popup')
    await pdf.click()
    const popup = await popupEvent
    await popup.waitForLoadState()
    const print = popup.getByRole('button', { name: 'Salvar como PDF' })
    await print.waitFor()
    assert.equal(await popup.evaluate(() => window.opener === null), true)
    await popup.evaluate(() => { window.print = () => { window.didPrint = true } })
    await print.click()
    assert.equal(await popup.evaluate(() => window.didPrint), true, 'Printable templates must work with the deployed CSP')
    await popup.close()
  }
  await page.screenshot({ path: '/tmp/jobjump-production-templates.png' })
  await page.getByRole('button', { name: 'Abrir menu' }).click()
  await page.getByRole('navigation', { name: 'Recursos da demonstração' }).getByRole('button', { name: 'Configurações', exact: true }).click()
  await page.evaluate(() => { localStorage.setItem('another_app_example', 'keep'); localStorage.setItem('nj_networking_week_tasks', JSON.stringify(['example task'])); localStorage.setItem('nj_practice_tasks', JSON.stringify({ 1: { completedAt: 'example' } })); localStorage.setItem('nj_progress', JSON.stringify({ '1-1': true })) })
  await page.getByRole('button', { name: 'Apagar dados da demonstração' }).click()
  await page.getByRole('button', { name: 'Confirmar exclusão' }).click()
  await page.getByRole('heading', { level: 1 }).filter({ hasText: 'Seu próximo passo' }).waitFor()
  assert.deepEqual(await page.evaluate(() => [localStorage.getItem('nj_progress'), localStorage.getItem('nj_networking_week_tasks'), localStorage.getItem('nj_practice_tasks'), localStorage.getItem('another_app_example')]), [null, null, null, 'keep'])

  const blocked = await browser.newPage({ viewport: { width: 390, height: 844 } })
  blocked.on('pageerror', error => errors.push(error.message))
  await blocked.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked for this test') } }))
  await blocked.goto(origin)
  await blocked.getByRole('button', { name: 'Experimentar sem cadastro' }).click()
  await blocked.getByText(/Armazenamento indisponível: dados podem durar apenas nesta sessão/).waitFor()
  await blocked.getByRole('heading', { name: 'Diagnóstico de Carreira' }).waitFor()
  for (let step = 0; step < 6; step++) {
    const question = await blocked.locator('main h2').innerText()
    await blocked.locator('main button').first().click()
    if (step < 5) await blocked.waitForFunction(text => document.querySelector('main h2')?.textContent !== text, question)
  }
  await blocked.getByRole('heading', { name: 'Seu Roteiro Personalizado' }).waitFor()
  await blocked.getByRole('button', { name: 'Começar primeira aula' }).click()
  await blocked.locator('main .prose p').first().waitFor()
  await blocked.getByRole('button', { name: 'Concluir leitura', exact: true }).click()
  await blocked.getByRole('button', { name: '✓ Leitura concluída', exact: true }).waitFor()
  await blocked.close()

  assert.deepEqual(external, [])
  assert.deepEqual(errors, [])
  console.log('PASS: production bundle, deployment security headers, local template download/print under CSP, scoped data deletion and storage-blocked fallback; no external requests')
} finally { if (browser) await browser.close(); child.kill('SIGTERM') }
