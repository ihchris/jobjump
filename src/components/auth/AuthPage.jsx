import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { Btn, Spinner } from '../ui'
import TermsOfService from '../legal/TermsOfService'

export default function AuthPage({ mode: initialMode, defaultPlan, onBack }) {
  const [mode, setMode] = useState(initialMode || 'register')
  const [form, setForm] = useState({ name: '', email: '', password: '', plan: defaultPlan || 'free' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [showReset, setShowReset] = useState(false)
  const [resetEmail, setResetEmail] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async () => {
    setError('')
    setSuccess('')

    if (mode === 'register') {
      if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
        setError('Preencha todos os campos.')
        return
      }
      if (!form.email.includes('@')) { setError('E-mail inválido.'); return }
      if (form.password.length < 6) { setError('A senha deve ter pelo menos 6 caracteres.'); return }
      if (!acceptedTerms) { setError('Você precisa aceitar os Termos de Uso para continuar.'); return }
    } else {

      if (!form.email.trim() || !form.password.trim()) {
        setError('Preencha todos os campos.')
        return
      }
    }

    setLoading(true)

    if (mode === 'register') {
      const { error: err } = await supabase.auth.signUp({
        email: form.email.trim(),
        password: form.password,
        options: { data: { name: form.name.trim() } },
      })
      if (err) { setError(err.message); setLoading(false); return }
      if (form.plan === 'pro' || form.plan === 'annual') {
        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          const { data } = await supabase.functions.invoke('create-checkout', {
            body: { returnUrl: window.location.origin, plan: form.plan },
          })
          if (data?.url) { window.location.href = data.url; return }
        }
      }
      setSuccess('Conta criada! Verifique seu e-mail para confirmar o cadastro.')
    } else {
      const { error: err } = await supabase.auth.signInWithPassword({
        email: form.email.trim(),
        password: form.password,
      })
      if (err) {
        setError('E-mail ou senha incorretos.')
        setLoading(false)
        return
      }
    }

    setLoading(false)
  }

  const handleReset = async () => {
    if (!resetEmail.trim() || !resetEmail.includes('@')) { setError('Introduza um e-mail válido.'); return }
    setLoading(true); setError('')
    const { error: err } = await supabase.auth.resetPasswordForEmail(resetEmail.trim(), {
      redirectTo: window.location.origin,
    })
    setLoading(false)
    if (err) { setError(err.message); return }
    setSuccess('Link enviado! Verifique o seu e-mail para redefinir a senha.')
  }

  const inp =
    'w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'

  if (showReset) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <img src="/logo.png" alt="JobJump" className="h-14 w-auto mx-auto mb-3" />
            <h1 className="text-2xl font-black text-slate-800">Redefinir senha</h1>
            <p className="text-slate-500 text-sm mt-1">Enviaremos um link para o seu e-mail</p>
          </div>
          <div className="space-y-4">
            <input
              className={inp}
              type="email"
              placeholder="O seu e-mail"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleReset()}
              autoFocus
            />
            <div aria-live="polite">
              {error   && <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
              {success && <p className="text-green-700 text-sm bg-green-50 px-3 py-2 rounded-lg">{success}</p>}
            </div>
            <Btn onClick={handleReset} variant="primary" size="md" className="w-full" disabled={loading}>
              {loading ? <Spinner size="w-4 h-4" color="border-white" /> : 'Enviar link de redefinição'}
            </Btn>
          </div>
          <div className="mt-4 text-center">
            <button onClick={() => { setShowReset(false); setError(''); setSuccess('') }} className="text-slate-400 text-sm hover:text-slate-600">
              ← Voltar ao login
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (showTerms) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
        <TermsOfService onBack={() => setShowTerms(false)} />
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-4 flex justify-center">
          <Btn
            variant="primary"
            size="md"
            onClick={() => { setAcceptedTerms(true); setShowTerms(false) }}
          >
            Aceitar e voltar ao cadastro
          </Btn>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="JobJump" className="h-14 w-auto mx-auto mb-3" />
          <h1 className="text-2xl font-black text-slate-800">
            {mode === 'register' ? 'Crie sua conta' : 'Bem-vindo de volta'}
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            {mode === 'register'
              ? 'Comece sua jornada para o emprego dos sonhos'
              : 'Continue de onde parou'}
          </p>
        </div>

        <div className="space-y-4" role="form" aria-label={mode === 'register' ? 'Formulário de cadastro' : 'Formulário de login'}>
          {mode === 'register' && (
            <div>
              <label htmlFor="auth-name" className="sr-only">Nome completo</label>
              <input
                id="auth-name"
                className={inp}
                placeholder="Nome completo"
                value={form.name}
                onChange={set('name')}
                autoComplete="name"
                aria-required="true"
              />
            </div>
          )}
          <div>
            <label htmlFor="auth-email" className="sr-only">E-mail</label>
            <input
              id="auth-email"
              className={inp}
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={set('email')}
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!error && !form.email}
            />
          </div>
          <div>
            <label htmlFor="auth-password" className="sr-only">Senha</label>
            <input
              id="auth-password"
              className={inp}
              type="password"
              placeholder="Senha"
              value={form.password}
              onChange={set('password')}
              autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              aria-required="true"
              aria-invalid={!!error && !form.password}
            />
          </div>

          {mode === 'register' && (
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-2">
                Escolha seu plano:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { v: 'free',   label: 'Grátis',        desc: '2 módulos · Grátis' },
                  { v: 'pro',    label: 'Pro Mensal',     desc: 'R$29,90/mês' },
                  { v: 'annual', label: 'Pro Anual',      desc: 'R$19,90/mês · -33%' },
                ].map((p) => (
                  <div
                    key={p.v}
                    onClick={() => setForm((f) => ({ ...f, plan: p.v }))}
                    className={`p-3 border-2 rounded-xl cursor-pointer transition-all
                      ${form.plan === p.v
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300'}`}
                  >
                    <div className={`font-bold text-sm ${form.plan === p.v ? 'text-blue-700' : 'text-slate-700'}`}>
                      {p.label}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {mode === 'register' && (
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => { setAcceptedTerms(e.target.checked); setError('') }}
                className="mt-0.5 w-4 h-4 accent-blue-600 flex-shrink-0 cursor-pointer"
              />
              <span className="text-sm text-slate-600 leading-snug">
                Li e aceito os{' '}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Termos de Uso
                </button>
              </span>
            </label>
          )}

          <div aria-live="polite" aria-atomic="true">
            {error && (
              <p role="alert" className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</p>
            )}
            {success && (
              <p className="text-green-700 text-sm bg-green-50 px-3 py-2 rounded-lg">{success}</p>
            )}
          </div>

          <Btn
            onClick={handleSubmit}
            variant="primary"
            size="md"
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <Spinner size="w-4 h-4" color="border-white" />
            ) : mode === 'register' ? (
              'Criar conta'
            ) : (
              'Entrar'
            )}
          </Btn>
          {mode === 'login' && (
            <div className="text-center">
              <button
                type="button"
                onClick={() => { setShowReset(true); setResetEmail(form.email); setError(''); setSuccess('') }}
                className="text-sm text-slate-400 hover:text-blue-600 transition-colors"
              >
                Esqueceu a senha?
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          {mode === 'register' ? 'Já tem conta? ' : 'Ainda não tem conta? '}
          <button
            onClick={() => { setMode(mode === 'register' ? 'login' : 'register'); setError(''); setSuccess('') }}
            className="text-blue-600 font-semibold hover:underline"
          >
            {mode === 'register' ? 'Entre aqui' : 'Cadastre-se grátis'}
          </button>
        </div>
        <div className="mt-3 text-center">
          <button
            onClick={onBack}
            className="text-slate-400 text-sm hover:text-slate-600 transition-colors"
          >
            ← Voltar ao início
          </button>
        </div>
      </div>
    </div>
  )
}
