import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const base = process.env.BASE_URL || 'http://127.0.0.1:5173'
const browser = await chromium.launch({ ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}), args: ['--no-sandbox'] })
const forbidden = /\b(?:IA|ChatGPT|Anthropic)\b|inteligência artificial|coach|depoimentos|2\.400|garantia de 7 dias|R\$\s*\d/i
try {
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }, { width: 320, height: 740 }]) {
    const page = await browser.newPage({ viewport })
    page.setDefaultTimeout(15000)
    const errors = [], lessonRequests = [], external = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('request', request => {
      if (/\/lessons\//.test(request.url())) lessonRequests.push(request.url())
      if (/^https?:/.test(request.url()) && new URL(request.url()).origin !== new URL(base).origin) external.push(request.url())
    })
    await page.goto(base)
    await page.getByRole('heading', { level: 1 }).waitFor()
    assert.equal(forbidden.test(await page.locator('body').innerText()), false, 'No unavailable offers or excluded features on landing')
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
    await page.getByRole('button', { name: 'Experimentar sem cadastro' }).click()
    await page.getByRole('heading', { name: 'Diagnóstico de Carreira' }).waitFor()
    assert.equal(lessonRequests.length, 0)
    for (let step = 0; step < 6; step++) {
      const question = await page.locator('main h2').innerText()
      await page.locator('main button').first().click()
      if (step < 5) await page.waitForFunction(text => document.querySelector('main h2')?.textContent !== text, question)
    }
    await page.getByRole('heading', { name: 'Seu Roteiro Personalizado' }).waitFor()
    await page.getByRole('button', { name: 'Começar primeira aula' }).click()
    await page.locator('main .prose p').first().waitFor()
    assert.equal(lessonRequests.length, 1, 'Download only the selected module body')
    assert.equal(forbidden.test(await page.locator('main').innerText()), false)
    await page.getByRole('button', { name: 'Marcar como concluída' }).click()
    await page.getByRole('button', { name: '✓ Concluída' }).waitFor()
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
    await page.reload()
    await page.getByRole('button', { name: 'Experimentar sem cadastro' }).click()
    await page.getByRole('heading', { name: 'Seu Roteiro Personalizado' }).waitFor()
    await page.getByRole('button', { name: 'Começar primeira aula' }).click()
    await page.getByRole('button', { name: '✓ Concluída' }).waitFor()
    async function navigate(name) {
      if (viewport.width < 768) await page.getByRole('button', { name: 'Abrir menu' }).click()
      await page.getByRole('navigation', { name: 'Recursos da demonstração' }).getByRole('button', { name, exact: true }).click()
    }
    await navigate('Ferramentas')
    await page.getByRole('heading', { name: 'Ferramentas', exact: true }).waitFor()
    await page.getByRole('button', { name: /Construtor de Respostas STAR/ }).click()
    await page.getByLabel('📍 Situação', { exact: true }).fill('A equipe recebia solicitações repetidas.')
    await page.getByLabel('🎯 Tarefa', { exact: true }).fill('Organizar as respostas da equipe')
    await page.getByLabel('⚡ Ação', { exact: true }).fill('Criei um guia de atendimento')
    await page.getByLabel('🏆 Resultado', { exact: true }).fill('Reduzimos o tempo de atendimento')
    await page.getByRole('button', { name: 'Gerar resposta STAR' }).click()
    await page.getByText(/A equipe recebia solicitações repetidas\. Nesse contexto/).waitFor()
    if (viewport.width === 1440) {
      await page.getByRole('button', { name: '← Ferramentas', exact: true }).click()
      await page.getByRole('button', { name: /Extrator de Palavras-chave ATS/ }).click()
      await page.getByLabel('📋 Descrição da vaga (cole aqui)', { exact: true }).fill('Requisitos: python python sql sql excel excel desenvolvimento desenvolvimento')
      await page.getByLabel('📄 Texto do seu CV (opcional)', { exact: true }).fill('Experiência com python')
      await page.getByRole('button', { name: 'Analisar palavras-chave' }).click()
      await page.getByText('Ausentes no CV', { exact: true }).waitFor()
      await page.getByText(/^sql \(2×\)$/).first().waitFor()
      await page.keyboard.press('Control+k')
      await page.getByRole('dialog', { name: 'Pesquisar no conteúdo' }).waitFor()
      await page.getByLabel('Pesquisar módulos, ferramentas e templates').fill('CV que Passa')
      await page.getByLabel('Pesquisar módulos, ferramentas e templates').press('Enter')
      await page.getByRole('heading', { name: 'CV que Passa pelos Filtros ATS', exact: true }).waitFor()
    }
    await navigate('Configurações')
    await page.getByLabel('Tema do site').selectOption('dark')
    assert.equal(await page.locator('html').getAttribute('class'), 'dark')
    const download = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Exportar dados locais' }).click()
    const exported = await download
    assert.equal(exported.suggestedFilename(), 'jobjump-demonstracao.json')
    const stream = await exported.createReadStream(), chunks = []
    for await (const chunk of stream) chunks.push(chunk)
    const payload = JSON.parse(Buffer.concat(chunks).toString())
    assert.equal(payload.data.nj_theme, 'dark')
    assert.ok(Object.values(payload.data.nj_progress).some(Boolean))
    await page.getByRole('button', { name: 'Apagar dados da demonstração' }).click()
    await page.getByRole('dialog', { name: 'Apagar dados locais?' }).waitFor()
    await page.keyboard.press('Escape')
    assert.equal(await page.getByRole('dialog').count(), 0)
    await page.getByRole('button', { name: 'Privacidade', exact: true }).click()
    await page.getByRole('heading', { name: 'Privacidade na demonstração' }).waitFor()
    await page.getByRole('button', { name: '← Voltar', exact: true }).click()
    // Returning from a legal page keeps the demonstration and its local progress usable.
    if (viewport.width < 768) {
      await page.getByRole('button', { name: 'Abrir menu' }).click()
      await page.waitForFunction(() => document.activeElement?.getAttribute('aria-label') === 'Fechar menu')
      await page.keyboard.press('Shift+Tab')
      assert.equal(await page.locator(':focus').innerText(), 'Sair da demonstração')
      await page.keyboard.press('Tab')
      assert.equal(await page.locator(':focus').getAttribute('aria-label'), 'Fechar menu')
      await page.keyboard.press('Escape')
      assert.equal(await page.getByRole('dialog', { name: 'Menu de navegação' }).count(), 0)
      assert.equal(await page.locator(':focus').getAttribute('aria-label'), 'Abrir menu')
      await page.getByRole('button', { name: 'Abrir menu' }).click()
    }
    await page.getByRole('button', { name: 'Sair da demonstração' }).first().click()
    await page.getByRole('button', { name: 'Experimentar sem cadastro' }).waitFor()
    assert.deepEqual(errors, [])
    assert.deepEqual(external, [], 'Public demo must make no external requests')
    await page.screenshot({ path: `/tmp/jobjump-release-${viewport.width}.png`, fullPage: true })
    console.log(`PASS ${viewport.width}px: local diagnosis, lesson, persistence, functional STAR, theme, export, legal, keyboard and exit; no external requests`)
    await page.close()
  }
} finally { await browser.close() }
