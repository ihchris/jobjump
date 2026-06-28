import { Badge } from '../ui'
import { isPaid, planBadge } from '../../utils/plans'
import { getXP, getLevel, getLevelProgress } from '../../utils/gamification'

const TABS = [
  { id: 'home', label: 'Dashboard', icon: '🏠' },
  { id: 'modules', label: 'Módulos', icon: '📚' },
  { id: 'diagnosis', label: 'Diagnóstico', icon: '🗺️' },
  { id: 'planner', label: 'Plano Semanal', icon: '📅' },
  { id: 'templates', label: 'Templates', icon: '📁' },
  { id: 'tools', label: 'Ferramentas', icon: '🛠️' },
  { id: 'networking', label: 'Networking', icon: '🤝' },
  { id: 'community', label: 'Comunidade', icon: '👥' },
  { id: 'coach', label: 'Coach IA', icon: '🤖' },
  { id: 'settings', label: 'Configurações', icon: '⚙️' },
]

export { TABS }

export default function Sidebar({ tab, setTab, user, onLogout, mobile, onClose }) {
  const xp    = getXP()
  const level = getLevel(xp)
  const pct   = getLevelProgress(xp)

  return (
    <div className={`flex flex-col bg-[#1e3a5f] text-white ${mobile ? 'fixed inset-y-0 left-0 z-50 w-[280px] shadow-2xl sidebar-slide-in' : 'w-64 min-h-screen'}`}>
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div>
            <img src="/logo.png" alt="JobJump" className="h-8 w-auto brightness-0 invert" />
            <div className="text-blue-300 text-xs mt-0.5">Coach de Carreira</div>
          </div>
          {mobile && (
            <button
              onClick={onClose}
              className="ml-auto w-9 h-9 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors touch-manipulation text-xl"
              aria-label="Fechar menu"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => { setTab(t.id); if (mobile) onClose() }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all touch-manipulation
              ${tab === t.id ? 'bg-white/15 text-white' : 'text-blue-200 hover:bg-white/10 hover:text-white active:bg-white/20'}`}
          >
            <span>{t.icon}</span>
            <span className="flex-1 text-left">{t.label}</span>
            {t.id === 'community' && tab !== 'community' && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        {/* XP / Level mini bar */}
        <div className="px-1 mb-3">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className={`font-bold ${level.color.replace('text-', 'text-').replace('600', '300').replace('500', '300')}`}>
              Nível {level.level} · {level.label}
            </span>
            <span className="text-blue-300">{xp} XP</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400 rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className="flex items-center gap-3 mb-3 px-1">
          <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center font-bold text-sm">
            {user.name?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-sm truncate">{user.name}</div>
            <Badge className={`text-xs ${isPaid(user.plan) ? 'bg-amber-400/20 text-amber-300' : 'bg-white/10 text-blue-300'}`}>
              {planBadge(user.plan)}
            </Badge>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full text-left text-sm text-blue-300 hover:text-white px-1 py-1 transition-colors flex items-center gap-2"
        >
          <span>→</span> Sair
        </button>
      </div>
    </div>
  )
}
