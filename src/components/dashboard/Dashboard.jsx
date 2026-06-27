import { useState } from 'react'
import { LS } from '../../utils/storage'
import Sidebar from './Sidebar'
import DashHome from './DashHome'
import ModulesPage from './ModulesPage'
import TemplatesPage from './TemplatesPage'
import CommunityPage from './CommunityPage'
import CoachPage from './CoachPage'
import ToolsPage from './ToolsPage'
import SettingsPage from './SettingsPage'
import PlannerPage from './PlannerPage'

export default function Dashboard({ user, onLogout, refreshUser }) {
  const [tab, setTab] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState(null)
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [progress, setProgress] = useState(() => LS.get('nj_progress', {}))

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

  const sidebarProps = { tab, setTab: goTab, user, onLogout }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <div className="hidden md:block flex-shrink-0">
        <Sidebar {...sidebarProps} />
      </div>

      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
          <Sidebar {...sidebarProps} mobile onClose={() => setSidebarOpen(false)} />
        </>
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="md:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-slate-100 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="text-slate-600 text-xl">☰</button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-black text-xs">JJ</div>
            <span className="font-black text-[#1e3a5f] text-sm">JobJump</span>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto">
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
            />
          )}
          {tab === 'templates' && <TemplatesPage user={user} />}
          {tab === 'tools' && <ToolsPage />}
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
