// Future authenticated app; deliberately not imported by the public demonstration.
import { useState, useEffect, lazy, Suspense } from 'react'
import { supabase } from '../lib/supabase'
import { LS } from '../utils/storage'
const LandingPage = lazy(() => import('../components/landing/LandingPage'))
const Dashboard = lazy(() => import('../components/dashboard/Dashboard'))
const AuthPage = lazy(() => import('../components/auth/AuthPage'))
const RecoveryPage = lazy(() => import('../components/auth/RecoveryPage'))
const TermsOfService = lazy(() => import('../components/legal/TermsOfService'))
const PrivacyPolicy = lazy(() => import('../components/legal/PrivacyPolicy'))
function WithSuspense({ children }) { return <Suspense fallback={<p role="status">Carregando…</p>}>{children}</Suspense> }
const LOCAL_KEYS_TO_CLEAR = ['nj_chat', 'nj_progress']

async function fetchProfile(authUser) {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', authUser.id)
    .single()
  return data ? { ...data, email: authUser.email } : null
}

export default function ConnectedApp({ onPreview }) {
  const [page, setPage] = useState('landing')
  const [prevPage, setPrevPage] = useState('landing')
  const [authMode, setAuthMode] = useState('register')
  const [defaultPlan, setDefaultPlan] = useState('free')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [recovering, setRecovering] = useState(() => new URLSearchParams(window.location.hash.slice(1)).get('type') === 'recovery')

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
      if (event === 'PASSWORD_RECOVERY') { setRecovering(true); setLoading(false); return }
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

  if (recovering) return <WithSuspense><RecoveryPage onDone={() => { setRecovering(false); setPage('landing') }} /></WithSuspense>

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
  return <LandingPage onPreview={onPreview} onStart={goAuth} onLogin={() => { setAuthMode('login'); setPage('auth') }} onTerms={goTerms} onPrivacy={goPrivacy} />
}

