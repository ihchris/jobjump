import { storageAvailable } from './utils/storage'
import { lazy, Suspense, useState } from 'react'

const LandingPage = lazy(() => import('./components/landing/LandingPage'))
const Dashboard = lazy(() => import('./components/dashboard/Dashboard'))
const TermsOfService = lazy(() => import('./components/legal/TermsOfService'))
const PrivacyPolicy = lazy(() => import('./components/legal/PrivacyPolicy'))

// There are no accounts, passwords, subscriptions or external calls in this release.
const visitor = { id: 'preview-user', name: 'Visitante', plan: 'demo' }

export default function App() {
  const [page, setPage] = useState('landing')
  const [persistent] = useState(storageAvailable)
  const [previousPage, setPreviousPage] = useState('landing')
  const legal = target => { setPreviousPage(page); setPage(target) }
  const openDemo = () => setPage('demo')
  return <Suspense fallback={<div role="status" className="min-h-screen flex items-center justify-center text-slate-600">Carregando…</div>}>
    <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[80] focus:bg-white focus:text-brand-navy focus:p-3 focus:rounded-lg">Ir para o conteúdo</a>
    {page === 'landing' && <LandingPage onStart={openDemo} onPreview={openDemo} onTerms={() => legal('terms')} onPrivacy={() => legal('privacy')} />}
    {page === 'terms' && <TermsOfService onBack={() => setPage(previousPage)} />}
    {page === 'privacy' && <PrivacyPolicy onBack={() => setPage(previousPage)} />}
    {page === 'demo' && <div className="flex flex-col h-[100dvh]">
      <div className="flex-1 min-h-0"><Dashboard user={visitor} initialTab="diagnosis" onLogout={() => setPage('landing')} refreshUser={() => {}} onTerms={() => legal('terms')} onPrivacy={() => legal('privacy')} /></div>
      <p className="bg-brand-navy text-brand-muted text-xs text-center px-3 py-2 border-t border-white/20">Demonstração gratuita · {persistent ? 'Dados salvos apenas neste navegador' : 'Armazenamento indisponível: dados podem durar apenas nesta sessão'} · Sem cadastro ou cobranças.</p>
    </div>}
  </Suspense>
}
