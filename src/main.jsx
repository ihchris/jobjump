import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

// Apply theme before React renders to avoid FOUC
;(() => {
  const saved = localStorage.getItem('nj_theme')
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  const isDark = saved === 'dark' || ((!saved || saved === 'system') && prefersDark)
  if (isDark) document.documentElement.classList.add('dark')
})()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
