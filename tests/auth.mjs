import assert from 'node:assert/strict'
import { chromium } from 'playwright'
const browser = await chromium.launch({ ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}), args: ['--no-sandbox'] })
try {
  const page = await browser.newPage()
  await page.addInitScript(() => {
    window.testCalls = []
    window.testBackend = { auth: {
      signInWithPassword: async () => { window.testCalls.push('login'); return { error: { message: 'Invalid credentials' } } },
      resetPasswordForEmail: async () => { window.testCalls.push('reset'); return { error: null } },
      updateUser: async () => { window.testCalls.push('password'); return { error: null } },
    } }
  })
  await page.route('**/src/lib/supabase.js', route => route.fulfill({ contentType: 'application/javascript', body: 'export const supabase = window.testBackend; export const supabaseConfigured = false;' }))
  await page.goto(process.env.BASE_URL || 'http://127.0.0.1:5173')
  async function mount(path, props) {
    await page.evaluate(async ({ path, props }) => {
      const { default: React } = await import('/node_modules/.vite/deps/react.js')
      const { default: { createRoot } } = await import('/node_modules/.vite/deps/react-dom_client.js')
      const { default: Component } = await import(path)
      if (!window.testRoot) {
        const host = document.createElement('div'); document.body.replaceChildren(host)
        window.testRoot = createRoot(host)
      }
      window.testRoot.render(React.createElement(Component, { ...props, onDone: () => {}, onBack: () => {} }))
    }, { path, props })
  }
  await mount('/src/components/auth/AuthPage.jsx', { mode: 'login' })
  await page.locator('input[type=email]').fill('test@example.com')
  await page.locator('input[type=password]').fill('invalid-password')
  await page.getByRole('button', { name: /Entrar/, exact: false }).last().click()
  await page.getByText('E-mail ou senha incorretos.').waitFor()
  await page.getByRole('button', { name: /Esqueceu/ }).click()
  await page.locator('input[type=email]').fill('test@example.com')
  await page.getByRole('button', { name: /Enviar/ }).click()
  await page.getByText('Link enviado! Verifique o seu e-mail para redefinir a senha.').waitFor()
  await mount('/src/components/auth/RecoveryPage.jsx', {})
  await page.getByLabel('Nova senha', { exact: true }).fill('new-password')
  await page.getByLabel('Confirmar nova senha').fill('different')
  await page.getByRole('button', { name: 'Salvar nova senha' }).click()
  await page.getByRole('alert').filter({ hasText: 'As senhas precisam ser iguais.' }).waitFor()
  await page.getByLabel('Confirmar nova senha').fill('new-password')
  await page.getByRole('button', { name: 'Salvar nova senha' }).click()
  await page.getByRole('status').filter({ hasText: 'Senha atualizada com sucesso.' }).waitFor()
  assert.deepEqual(await page.evaluate(() => window.testCalls), ['login', 'reset', 'password'])
  console.log('PASS: login error, recovery email request, password confirmation validation and update (simulated backend; no external calls)')
} finally { await browser.close() }
