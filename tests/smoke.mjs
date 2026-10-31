import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({ ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}), args: ['--no-sandbox'] })
try {
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }, { width: 320, height: 740 }]) {
    const page = await browser.newPage({ viewport })
    page.setDefaultTimeout(15000)
    const errors = [], lessonRequests = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('request', request => { if (/\/lessons\//.test(request.url())) lessonRequests.push(request.url()) })
    await page.goto(process.env.BASE_URL || 'http://127.0.0.1:5173')
    await page.getByRole('heading', { level: 1 }).waitFor()
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'Landing must fit the viewport')
    await page.getByRole('button', { name: 'Experimentar sem cadastro' }).click()
    await page.getByRole('heading', { name: 'Diagnóstico de Carreira' }).waitFor()
    assert.equal(lessonRequests.length, 0, 'Diagnosis must not download lesson bodies')
    for (let step = 0; step < 6; step++) {
      const question = await page.locator('main h2').innerText()
      await page.locator('main button').first().click()
      if (step < 5) await page.waitForFunction(text => document.querySelector('main h2')?.textContent !== text, question)
    }
    await page.getByRole('heading', { name: 'Seu Roteiro Personalizado' }).waitFor()
    await page.getByRole('button', { name: 'Começar primeira aula' }).click()
    await page.locator('main h1, main h2').first().waitFor()
    await page.waitForFunction(() => document.querySelector('main')?.textContent.length > 1500)
    assert.equal(lessonRequests.length, 1, 'Only the selected module body should load')
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'Lesson must fit the viewport')
    await page.getByRole('button', { name: 'Marcar como concluída' }).click()
    await page.getByRole('button', { name: '✓ Concluída' }).waitFor()
    if (viewport.width >= 768) {
      const learning = page.locator('details').filter({ has: page.getByText('Aprender e praticar', { exact: true }) })
      if (await learning.getAttribute('open') === null) await page.getByText('Aprender e praticar', { exact: true }).click()
      await page.getByRole('button', { name: /Coach IA/ }).click()
      await page.getByRole('button', { name: 'Como posso melhorar meu CV?' }).click()
      await page.getByPlaceholder('Faça uma pergunta sobre carreira...').press('Enter')
      await page.getByText(/O coach IA não está disponível na demonstração/).waitFor()
      await page.getByText('Conta', { exact: true }).click()
      await page.getByRole('button', { name: /Configurações/ }).click()
      await page.getByRole('button', { name: /Fazer upgrade para Pro/ }).click()
      await page.getByText(/Pagamentos indisponíveis na demonstração/).waitFor()
    }
    if (viewport.width < 768) await page.getByRole('button', { name: /Abrir menu/ }).click()
    await page.getByRole('button', { name: /Sair/ }).first().click()
    await page.getByRole('button', { name: 'Experimentar sem cadastro' }).waitFor()
    assert.deepEqual(errors, [], 'No browser runtime errors')
    await page.screenshot({ path: `/tmp/jobjump-${viewport.width}.png`, fullPage: true })
    console.log(`PASS ${viewport.width}px: landing → preview → diagnosis → first lesson → exit; on-demand lesson loading`)
    await page.close()
  }
} finally { await browser.close() }
