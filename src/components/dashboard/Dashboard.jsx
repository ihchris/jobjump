import Brand from '../ui/Brand'
import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { getModules } from '../../lib/content'
import { LS } from '../../utils/storage'
import Sidebar from './Sidebar'
import NotificationBell from './NotificationBell'
import DashHome from './DashHome'
const ModulesPage = lazy(() => import('./ModulesPage'))
const TemplatesPage = lazy(() => import('./TemplatesPage'))
const ToolsPage = lazy(() => import('./ToolsPage'))
const SettingsPage = lazy(() => import('./SettingsPage'))
const PlannerPage = lazy(() => import('./PlannerPage'))
const DiagnosisPage = lazy(() => import('./DiagnosisPage'))
const SavedPage = lazy(() => import('./SavedPage'))
const JournalPage = lazy(() => import('./JournalPage'))
import CommandPalette from './CommandPalette'

export default function Dashboard({ user, onLogout, refreshUser, initialTab, onTerms, onPrivacy }) {
  const [tab, setTab] = useState(initialTab || 'home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState(null)
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [toolTarget, setToolTarget] = useState(null)
  const [templateTarget, setTemplateTarget] = useState(null)
  const [progress, setProgress] = useState(() => LS.get('nj_progress', {}))
  const mainRef = useRef(null)
  useEffect(() => { mainRef.current?.scrollTo({ top: 0 }) }, [tab, selectedModule?.id, selectedLesson?.id])
  // Navigation handler from Command Palette and SavedPage
  const navigateFromSearch = (result) => {
    if (!result) return
    if (result.kind === 'upgrade-from-search') {
      setTab('settings')
      return
    }
    if (result.type === 'tool') { navigateToToolFromSaved(result.refId); return }
    if (result.type === 'template') { navigateToTemplateFromSaved(result.refId); return }
    if (result.type === 'module') {
      getModules().then(modules => { const mod = modules.find(m => m.id === result.refId); if (mod) navigateToModule(mod) })
      return
    }
    if (result.type === 'lesson') navigateToLessonFromSaved(result.refId.moduleId, result.refId.lessonId)
  }

  const navigateToLessonFromSaved = (moduleId, lessonId) => {
    getModules().then(modules => {
      const mod = modules.find(m => m.id === Number(moduleId))
      const lesson = mod?.lessons.find(l => l.id === lessonId)
      if (mod && lesson) navigateToModule(mod, lesson)
    })
  }

  const navigateToToolFromSaved = toolId => {
    setToolTarget({ id: toolId })
    setTab('tools')
  }

  const navigateToTemplateFromSaved = templateId => {
    const id = Number(String(templateId).replace(/^tpl_/, ''))
    setTemplateTarget({ id })
    setTab('templates')
  }

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
  const navigateToModule = (mod, lesson = null) => {
    setSelectedModule(mod)
    setSelectedLesson(lesson)
    setTab('modules')
  }

  const sidebarProps = { tab, setTab: goTab, user, onLogout }

  return (
    <div className="flex h-full overflow-hidden bg-slate-50">
      <CommandPalette user={user} onNavigate={navigateFromSearch} />

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
          <Brand className="h-6" />
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('nj:open-search'))}
            className="ml-auto p-2 rounded-xl text-slate-500 hover:bg-slate-100 active:bg-slate-200 transition-colors touch-manipulation"
            aria-label="Pesquisar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="20" y1="20" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <NotificationBell />
        </div>

        <main ref={mainRef} id="conteudo" tabIndex={-1} className="flex-1 overflow-y-auto scroll-pt-20 overscroll-contain pt-14 md:pt-0">
          <Suspense fallback={<div role="status" className="p-6 text-slate-500">Carregando sua próxima etapa…</div>}>
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
              onOpenTool={navigateToToolFromSaved}
              onOpenTemplates={navigateToTemplateFromSaved}
            />
          )}
          {tab === 'diagnosis' && (
            <DiagnosisPage user={user} onNavigateModule={navigateToModule} />
          )}
          {tab === 'journal' && (
            <JournalPage user={user} progress={progress} modules={[]} />
          )}
          {tab === 'saved' && (
            <SavedPage
              onNavigateLesson={navigateToLessonFromSaved}
              onNavigateTool={navigateToToolFromSaved}
              onNavigateTemplate={navigateToTemplateFromSaved}
            />
          )}
          {tab === 'templates' && <TemplatesPage user={user} targetTemplate={templateTarget} />}
          {tab === 'tools' && <ToolsPage user={user} targetTool={toolTarget} />}
          {tab === 'planner' && <PlannerPage user={user} />}
          {tab === 'settings' && (
            <SettingsPage onTerms={onTerms} onPrivacy={onPrivacy} />
          )}
          </Suspense>
        </main>
      </div>
    </div>
  )
}
