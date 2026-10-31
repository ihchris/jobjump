import assert from 'node:assert/strict'
import { chromium } from 'playwright'
const browser = await chromium.launch({ ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}), args: ['--no-sandbox'] })
const base = process.env.BASE_URL || 'http://127.0.0.1:5173'
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } })
    page.setDefaultTimeout(15000)
    const errors = [], external = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('request', request => { if (/^https?:/.test(request.url()) && new URL(request.url()).origin !== new URL(base).origin) external.push(request.url()) })
    await page.goto(base)
    await page.getByRole('button', { name: 'Experimentar sem cadastro' }).click()
    await page.getByRole('heading', { name: 'Diagnóstico de Carreira' }).waitFor()
    for (let step = 0; step < 6; step++) {
      const previous = await page.locator('main h2').innerText()
      const button = step === 1 ? page.getByRole('button', { name: 'Trabalhar no exterior ou remoto internacional' }) : step === 4 ? page.getByRole('button', { name: 'Entrevistas e processos seletivos' }) : page.locator('main button').first()
      await button.click()
      if (step < 5) await page.waitForFunction(text => document.querySelector('main h2')?.textContent !== text, previous)
    }
    await page.getByRole('heading', { name: 'Seu Roteiro Personalizado' }).waitFor()
    await page.getByText('Você indicou este tema como sua maior dificuldade.', { exact: true }).waitFor()
    await page.getByRole('button', { name: 'Começar primeira aula' }).click()
    await page.getByRole('heading', { name: 'Prepare e ensaie uma resposta de entrevista' }).waitFor()
    const complete = page.getByRole('button', { name: 'Concluir tarefa prática', exact: true })
    assert.equal(await complete.isDisabled(), true)
    await page.getByRole('button', { name: 'Concluir leitura', exact: true }).click()
    assert.equal(await complete.isDisabled(), true, 'Reading must not complete practical work')
    assert.equal(await page.getByRole('checkbox').count(), 3)
    for (const checkbox of await page.getByRole('checkbox').all()) await checkbox.check()
    await complete.click()
    await page.getByRole('status').filter({ hasText: 'Tarefa prática concluída por você.' }).waitFor()
    const briefEvent = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Baixar roteiro da tarefa' }).click()
    const brief = await briefEvent
    assert.equal(brief.suggestedFilename(), 'JobJump-tarefa-4.txt')
    const chunks = []; for await (const chunk of await brief.createReadStream()) chunks.push(chunk)
    const text = Buffer.concat(chunks).toString()
    assert.equal((text.match(/\[x\]/g) || []).length, 3)
    assert.match(text, /Conclusão declarada por você/)
    await page.getByRole('button', { name: 'Abrir modelo de apoio', exact: true }).click()
    const card = page.getByRole('article', { name: 'Guia de Entrevista', exact: true })
    await card.waitFor()
    await page.waitForFunction(() => document.activeElement?.id === 'template-8')
    assert.equal(await card.evaluate(el => el === document.activeElement), true)
    async function navigate(name) {
      if (width < 768) await page.getByRole('button', { name: 'Abrir menu' }).click()
      await page.getByRole('navigation', { name: 'Recursos da demonstração' }).getByRole('button', { name, exact: true }).click()
    }
    await navigate('Início')
    await page.getByText('1 de 3 tarefas declaradas como concluídas', { exact: true }).waitFor()
    await page.getByRole('button', { name: 'Abrir aula e tarefa' }).click()
    await page.getByRole('heading', { name: 'Revise uma candidatura para uma vaga internacional', exact: true }).waitFor()
    assert.equal(await page.getByRole('button', { name: 'Concluir tarefa prática' }).isDisabled(), true)
    await page.reload()
    await page.getByRole('button', { name: 'Experimentar sem cadastro' }).click()
    await page.getByRole('heading', { name: 'Seu Roteiro Personalizado' }).waitFor()
    await page.getByText('✓ Tarefa declarada como concluída', { exact: true }).waitFor()
    // A previous task stays independently recorded across reloads and can be revised honestly.
    await page.getByRole('button', { name: /Preparação e Sucesso em Entrevistas/ }).click()
    await page.getByRole('button', { name: /Os tipos de perguntas e como preparar respostas/ }).click()
    await page.getByRole('button', { name: '✓ Tarefa concluída', exact: true }).waitFor()
    await page.getByRole('checkbox').first().uncheck()
    assert.equal(await page.getByRole('button', { name: 'Concluir tarefa prática' }).isDisabled(), true)
    await navigate('Início')
    await page.getByText('0 de 3 tarefas declaradas como concluídas', { exact: true }).waitFor()
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
    await page.screenshot({ path: `/tmp/jobjump-value-journey-${width}.png`, animations: 'disabled' })
    assert.deepEqual(errors, []); assert.deepEqual(external, [])
    console.log(`PASS ${width}px: explained priorities, reading/practice separation, completion criteria, truthful export, linked template, next action, persistence and revision`)
    await page.close()
  }
  const regression = await browser.newPage()
  await regression.goto(base)
  const reward = await regression.evaluate(async () => {
    const gam = await import('/src/utils/gamification.js')
    const initial = gam.getXP()
    const zero = gam.saveQuizScore(1, 0)
    const storedZero = gam.getQuizScores()[1]
    const first = gam.saveQuizScore(1, 3), repeat = gam.saveQuizScore(1, 3)
    const improve = gam.saveQuizScore(1, 5), repeatPerfect = gam.saveQuizScore(1, 5)
    gam.saveDiagnosis({ answers: {}, roadmap: [1, 4, 5] })
    gam.saveDiagnosis({ answers: {}, roadmap: [1, 4, 5] })
    return { zero, storedZero, first, repeat, improve, repeatPerfect, perfect: gam.getPerfectCount(), total: gam.getXP() - initial }
  })
  assert.deepEqual(reward, { zero: 0, storedZero: 0, first: 25, repeat: 0, improve: 25, repeatPerfect: 0, perfect: 1, total: 80 })
  await regression.close()
  console.log('PASS: diagnosis and quiz rewards cannot be farmed by repeating the same completion')
} finally { await browser.close() }
