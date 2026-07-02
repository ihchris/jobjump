import { useState, useEffect, lazy, Suspense } from 'react'
import { supabase, supabaseConfigured } from './lib/supabase'
import { LS } from './utils/storage'

// Heavy pages: code-split so the initial bundle only loads landing + auth
const LandingPage  = lazy(() => import('./components/landing/LandingPage'))
const AuthPage     = lazy(() => import('./components/auth/AuthPage'))
const Dashboard    = lazy(() => import('./components/dashboard/Dashboard'))
const TermsOfService = lazy(() => import('./components/legal/TermsOfService'))
const PrivacyPolicy  = lazy(() => import('./components/legal/PrivacyPolicy'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
    </div>
  )
}

function WithSuspense({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>
}

// ─── Demo mode (sem Supabase configurado) ─────────────────────────────────
const DEMO_USER_KEY = 'nj_demo_user'

function DemoBanner() {
  return (
    <div className="w-full bg-amber-500 text-white text-xs text-center py-2 px-4 flex-shrink-0">
      ⚠️ <strong>Modo Demo</strong> — configure o arquivo <code className="bg-amber-600 px-1 rounded">.env.local</code> com as credenciais do Supabase para ativar autenticação e pagamentos reais.
    </div>
  )
}

function DemoApp() {
  const [page, setPage] = useState(() => LS.get(DEMO_USER_KEY) ? 'dashboard' : 'landing')
  const [authMode, setAuthMode] = useState('register')
  const [user, setUser] = useState(() => LS.get(DEMO_USER_KEY))
  const [prevPage, setPrevPage] = useState('landing')

  const goTerms = () => { setPrevPage(page); setPage('terms') }
  const goPrivacy = () => { setPrevPage(page); setPage('privacy') }
  const backFromLegal = () => setPage(prevPage)

  const handleDemoAuth = (name, email, plan = 'free') => {
    const demoUser = { id: 'demo-user', name: name || 'Utilizador Demo', email: email || 'demo@jobjump.co', plan }
    LS.set(DEMO_USER_KEY, demoUser)
    setUser(demoUser)
    setPage('dashboard')
  }

  const onLogout = () => {
    LS.del(DEMO_USER_KEY)
    setUser(null)
    setPage('landing')
  }

  if (page === 'terms') return <WithSuspense><TermsOfService onBack={backFromLegal} /></WithSuspense>
  if (page === 'privacy') return <WithSuspense><PrivacyPolicy onBack={backFromLegal} /></WithSuspense>

  if (page === 'dashboard' && user) {
    return (
      <div className="flex flex-col h-[100dvh]">
        <div className="flex-1 min-h-0">
          <WithSuspense>
            <Dashboard user={user} onLogout={onLogout} refreshUser={() => {}} />
          </WithSuspense>
        </div>
        <DemoBanner />
      </div>
    )
  }

  if (page === 'auth') {
    return (
      <>
        <DemoAuthPage
          mode={authMode}
          onAuth={handleDemoAuth}
          onBack={() => setPage('landing')}
          onPrivacy={goPrivacy}
        />
        <DemoBanner />
      </>
    )
  }

  return (
    <>
      <WithSuspense>
        <LandingPage
          onStart={() => { setAuthMode('register'); setPage('auth') }}
          onLogin={() => { setAuthMode('login'); setPage('auth') }}
          onTerms={goTerms}
          onPrivacy={goPrivacy}
        />
      </WithSuspense>
      <DemoBanner />
    </>
  )
}

function DemoAuthPage({ mode, onAuth, onBack, onPrivacy }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [plan, setPlan] = useState('free')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [error, setError] = useState('')

  const handleEnter = () => {
    if (mode === 'register' && !acceptedTerms) {
      setError('Você precisa aceitar os Termos de Uso para continuar.')
      return
    }
    onAuth(name, email, plan)
  }

  if (showTerms) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
        <TermsOfService onBack={() => setShowTerms(false)} />
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-4 flex justify-center">
          <button
            onClick={() => { setAcceptedTerms(true); setShowTerms(false) }}
            className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Aceitar e voltar ao cadastro
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 w-full max-w-sm">
        <button onClick={onBack} className="text-slate-400 text-sm hover:text-slate-600 mb-6 flex items-center gap-1">
          ← Voltar
        </button>
        <div className="text-center mb-8">
          <img src="/logo.png" alt="JobJump" className="h-14 w-auto mx-auto mb-3" />
          <h1 className="text-xl font-black text-slate-800">Modo Demo</h1>
          <p className="text-slate-500 text-sm mt-1">Entre sem credenciais reais</p>
        </div>
        <div className="space-y-3 mb-4">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail (opcional)" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <select value={plan} onChange={(e) => setPlan(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="free">Plano Grátis (demo)</option>
            <option value="pro">Plano Pro Mensal (demo)</option>
            <option value="annual">Plano Pro Anual (demo)</option>
          </select>
        </div>
        {mode === 'register' && (
          <label className="flex items-start gap-3 cursor-pointer select-none mb-4">
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
              {' '}e a{' '}
              <button
                type="button"
                onClick={onPrivacy}
                className="text-blue-600 font-semibold hover:underline"
              >
                Política de Privacidade
              </button>
            </span>
          </label>
        )}
        {error && <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg mb-3">{error}</p>}
        <button
          onClick={handleEnter}
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          Entrar no Demo →
        </button>
        <p className="text-center text-xs text-slate-400 mt-4">
          Configure o Supabase para autenticação real
        </p>
      </div>
    </div>
  )
}

// ─── Produção (com Supabase) ───────────────────────────────────────────────
const LOCAL_KEYS_TO_CLEAR = ['nj_chat', 'nj_progress']

async function fetchProfile(authUser) {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', authUser.id)
    .single()
  return data ? { ...data, email: authUser.email } : null
}

function SupabaseApp() {
  const [page, setPage] = useState('landing')
  const [prevPage, setPrevPage] = useState('landing')
  const [authMode, setAuthMode] = useState('register')
  const [defaultPlan, setDefaultPlan] = useState('free')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const goTerms = () => { setPrevPage(page); setPage('terms') }
  const goPrivacy = () => { setPrevPage(page); setPage('privacy') }
  const backFromLegal = () => setPage(prevPage)

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        const profile = await fetchProfile(session.user)
        if (profile) { setUser(profile); setPage('dashboard') }
      }
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        const profile = await fetchProfile(session.user)
        if (profile) { setUser(profile); setPage('dashboard') }
      }
      if (event === 'SIGNED_OUT') {
        LOCAL_KEYS_TO_CLEAR.forEach((k) => LS.del(k))
        setUser(null)
        setPage('landing')
      }
      if (event === 'TOKEN_REFRESHED' && session) {
        const profile = await fetchProfile(session.user)
        if (profile) setUser(profile)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const goAuth = (plan) => {
    setDefaultPlan(typeof plan === 'string' ? plan : 'free')
    setAuthMode('register')
    setPage('auth')
  }

  const onLogout = () => supabase.auth.signOut()

  const refreshUser = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      const profile = await fetchProfile(session.user)
      if (profile) setUser(profile)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    )
  }

  if (page === 'terms') return <TermsOfService onBack={backFromLegal} />
  if (page === 'privacy') return <PrivacyPolicy onBack={backFromLegal} />

  if (page === 'dashboard' && user) {
    return <Dashboard user={user} onLogout={onLogout} refreshUser={refreshUser} />
  }
  if (page === 'auth') {
    return (
      <AuthPage
        mode={authMode}
        defaultPlan={defaultPlan}
        onBack={() => setPage('landing')}
      />
    )
  }
  return <LandingPage onStart={goAuth} onLogin={() => { setAuthMode('login'); setPage('auth') }} onTerms={goTerms} onPrivacy={goPrivacy} />
}

// ─── Root ──────────────────────────────────────────────────────────────────
export default function App() {
  return supabaseConfigured ? <SupabaseApp /> : <DemoApp />
}
