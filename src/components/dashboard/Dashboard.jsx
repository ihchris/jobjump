import { useState, useEffect } from 'react'
import { LS } from '../../utils/storage'
import Sidebar from './Sidebar'
import NotificationBell from './NotificationBell'
import DashHome from './DashHome'
import ModulesPage from './ModulesPage'
import TemplatesPage from './TemplatesPage'
import CommunityPage from './CommunityPage'
import CoachPage from './CoachPage'
import ToolsPage from './ToolsPage'
import SettingsPage from './SettingsPage'
import PlannerPage from './PlannerPage'
import NetworkingPage from './NetworkingPage'
import DiagnosisPage from './DiagnosisPage'

// ─── Onboarding Modal ────────────────────────────────────────────────────────
const ONBOARDING_KEY = 'nj_onboarded'

const ONBOARDING_STEPS = [
  { icon: '🗺️', title: 'Comece pelo Diagnóstico', desc: 'Responda 6 perguntas rápidas e receba um roteiro personalizado dos módulos mais importantes para o seu momento agora. +30 XP garantidos!' },
  { icon: '📚', title: '102 módulos de carreira', desc: 'Do CV perfeito a trilhas de carreira específicas para dezenas de áreas. Cada lição concluída dá XP e desbloqueia conquistas. Comece pelos 43 módulos gratuitos!' },
  { icon: '🛠️', title: '30 ferramentas interativas', desc: 'Construtor STAR, extrator ATS, rastreador de candidaturas, simulador de entrevistas, scripts de negociação e muito mais.' },
  { icon: '🤝', title: 'Rede de apoio real', desc: 'Conecte-se com outros membros por área, encontre um mentor ou parceiro de responsabilidade, e tire dúvidas direto nas lições.' },
  { icon: '🏆', title: 'Sistema de XP e conquistas', desc: 'Suba de nível, desbloqueie badges e mantenha seu streak diário. Cada ação conta — lições, quizzes e diagnóstico geram XP.' },
]

function OnboardingModal({ onDone }) {
  const [step, setStep] = useState(0)
  const s = ONBOARDING_STEPS[step]
  const isLast = step === ONBOARDING_STEPS.length - 1

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">
        <div className="text-5xl mb-4">{s.icon}</div>
        <div className="flex justify-center gap-1.5 mb-5">
          {ONBOARDING_STEPS.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all ${i === step ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-200'}`} />
          ))}
        </div>
        <h2 className="text-xl font-black text-slate-800 mb-3">{s.title}</h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">{s.desc}</p>
        <div className="flex gap-3">
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50">
              Voltar
            </button>
          )}
          <button
            onClick={() => isLast ? onDone() : setStep(step + 1)}
            className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-black text-sm hover:bg-blue-700 transition-colors"
          >
            {isLast ? 'Começar agora! 🚀' : 'Próximo →'}
          </button>
        </div>
        <button onClick={onDone} className="text-xs text-slate-400 hover:text-slate-600 mt-4 underline block mx-auto">
          Pular introdução
        </button>
      </div>
    </div>
  )
}

export default function Dashboard({ user, onLogout, refreshUser }) {
  const [tab, setTab] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState(null)
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [progress, setProgress] = useState(() => LS.get('nj_progress', {}))
  const [showOnboarding, setShowOnboarding] = useState(() => !LS.get(ONBOARDING_KEY, false))

  const saveProgress = (fn) => {
    setProgress((prev) => {
      const next = typeof fn === 'function' ? fn(prev) : fn
      LS.set('nj_progress', next)
      return next
    })
  }

  const goTab = (t) => {
    setTab(t)
    if (t !== 'modules') { setSelectedModule(null); setSelectedLesson(null) }
  }

  // navigate to a module directly from the Diagnosis roadmap
  const navigateToModule = (mod) => {
    setSelectedModule(mod)
    setSelectedLesson(null)
    setTab('modules')
  }

  const finishOnboarding = () => {
    LS.set(ONBOARDING_KEY, true)
    setShowOnboarding(false)
    setTab('diagnosis')
  }

  const sidebarProps = { tab, setTab: goTab, user, onLogout }

  return (
    <div className="flex h-full overflow-hidden bg-slate-50">
      {showOnboarding && <OnboardingModal onDone={finishOnboarding} />}

      <div className="hidden md:block flex-shrink-0 h-full">
        <Sidebar {...sidebarProps} />
      </div>

      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in" onClick={() => setSidebarOpen(false)} />
          <Sidebar {...sidebarProps} mobile onClose={() => setSidebarOpen(false)} />
        </>
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="md:hidden flex items-center gap-3 px-4 bg-white border-b border-slate-200 fixed top-0 left-0 right-0 z-30 h-14 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-1 rounded-xl text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition-colors touch-manipulation"
            aria-label="Abrir menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          </button>
          <img src="/logo.png" alt="JobJump" className="h-6 w-auto" />
          <NotificationBell className="ml-auto" />
        </div>

        <main className="flex-1 overflow-y-auto overscroll-contain pt-14 md:pt-0">
          {tab === 'home' && (
            <DashHome
              user={user} progress={progress}
              setTab={goTab}
              setSelectedModule={setSelectedModule}
              setSelectedLesson={setSelectedLesson}
            />
          )}
          {tab === 'modules' && (
            <ModulesPage
              user={user} progress={progress} setProgress={saveProgress}
              selectedModule={selectedModule} selectedLesson={selectedLesson}
              setSelectedModule={setSelectedModule} setSelectedLesson={setSelectedLesson}
              onGoToDiagnosis={() => setTab('diagnosis')}
              onUpgrade={() => goTab('settings')}
            />
          )}
          {tab === 'diagnosis' && (
            <DiagnosisPage user={user} onNavigateModule={navigateToModule} />
          )}
          {tab === 'templates' && <TemplatesPage user={user} />}
          {tab === 'tools' && <ToolsPage />}
          {tab === 'networking' && <NetworkingPage user={user} />}
          {tab === 'community' && <CommunityPage user={user} />}
          {tab === 'coach' && <CoachPage user={user} />}
          {tab === 'planner' && <PlannerPage user={user} />}
          {tab === 'settings' && (
            <SettingsPage user={user} onLogout={onLogout} refreshUser={refreshUser} />
          )}
        </main>
      </div>
    </div>
  )
}
