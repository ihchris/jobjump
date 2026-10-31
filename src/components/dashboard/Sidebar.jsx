import { useRef } from 'react'
import Brand from '../ui/Brand'
import { useDialogFocus } from '../../hooks/useDialogFocus'
import { getXP, getLevel, getLevelProgress } from '../../utils/gamification'

export const TABS = [
  { id: 'home', label: 'Início', icon: '🏠' },
  { id: 'diagnosis', label: 'Diagnóstico', icon: '🗺️' },
  { id: 'modules', label: 'Módulos', icon: '📚' },
  { id: 'tools', label: 'Ferramentas', icon: '🛠️' },
  { id: 'templates', label: 'Templates', icon: '📁' },
  { id: 'planner', label: 'Plano Semanal', icon: '📅' },
  { id: 'journal', label: 'Diário', icon: '📓' },
  { id: 'saved', label: 'Guardados', icon: '🔖' },
  { id: 'settings', label: 'Configurações', icon: '⚙️' },
]

export default function Sidebar({ tab, setTab, onLogout, mobile, onClose }) {
  const ref = useRef(null)
  useDialogFocus(ref, Boolean(mobile), onClose)
  const xp = getXP(), level = getLevel(xp)
  return <div ref={ref} role={mobile ? 'dialog' : undefined} aria-modal={mobile || undefined} aria-label={mobile ? 'Menu de navegação' : undefined} tabIndex={-1} className={`flex flex-col bg-brand-navy text-white ${mobile ? 'fixed inset-y-0 left-0 z-50 w-[min(280px,90vw)] shadow-2xl sidebar-slide-in' : 'w-64 h-full'}`}>
    <div className="p-5 border-b border-white/15 flex items-center justify-between gap-2"><div><Brand light className="h-8" /><p className="text-brand-muted text-xs mt-2">Desenvolvimento de carreira</p></div>{mobile && <button onClick={onClose} aria-label="Fechar menu" className="rounded-xl p-3 hover:bg-white/10 text-xl">×</button>}</div>
    <nav aria-label="Recursos da demonstração" className="flex-1 overflow-y-auto p-3 space-y-1">{TABS.map(item => <button key={item.id} aria-current={tab === item.id ? 'page' : undefined} onClick={() => { setTab(item.id); if (mobile) onClose() }} className={`w-full min-h-11 flex items-center gap-3 text-left rounded-xl px-4 py-3 text-sm font-medium ${tab === item.id ? 'bg-white/10 text-white border-l-2 border-brand-accent' : 'text-brand-muted hover:bg-white/10 hover:text-white'}`}><span aria-hidden="true">{item.icon}</span>{item.label}</button>)}</nav>
    <div className="p-5 border-t border-white/15"><div className="flex justify-between text-xs text-brand-muted mb-2"><span>Nível {level.level} · {level.label}</span><span>{xp} XP</span></div><div className="h-1.5 rounded-full bg-white/15 overflow-hidden"><div className="h-full rounded-full bg-brand-accent" style={{ width: `${getLevelProgress(xp)}%` }} /></div><p className="text-xs text-brand-muted mt-3 mb-2">Demonstração local</p><button onClick={onLogout} className="text-sm underline underline-offset-4 text-white min-h-11">Sair da demonstração</button></div>
  </div>
}
