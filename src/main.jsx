import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

// Apply theme before React renders to avoid FOUC
;(() => {
  let saved
  try { saved = localStorage.getItem('nj_theme') } catch {}
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  const isDark = saved === 'dark' || ((!saved || saved === 'system') && prefersDark)
  if (isDark) document.documentElement.classList.add('dark')
})()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<div role="status" className="min-h-screen flex items-center justify-center text-slate-500">Carregando…</div>}><App /></Suspense>
    </ErrorBoundary>
  </StrictMode>,
)
