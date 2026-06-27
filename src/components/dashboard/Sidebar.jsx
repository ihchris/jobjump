import { Badge } from '../ui'
import { isPaid, planBadge } from '../../utils/plans'

const TABS = [
  { id: 'home', label: 'Dashboard', icon: '🏠' },
  { id: 'modules', label: 'Módulos', icon: '📚' },
  { id: 'planner', label: 'Plano Semanal', icon: '📅' },
  { id: 'templates', label: 'Templates', icon: '📁' },
  { id: 'tools', label: 'Ferramentas', icon: '🛠️' },
  { id: 'community', label: 'Comunidade', icon: '👥' },
  { id: 'coach', label: 'Coach IA', icon: '🤖' },
  { id: 'settings', label: 'Configurações', icon: '⚙️' },
]

export { TABS }

export default function Sidebar({ tab, setTab, user, onLogout, mobile, onClose }) {
  return (
    <div className={`flex flex-col bg-[#1e3a5f] text-white ${mobile ? 'fixed inset-y-0 left-0 z-50 w-64 shadow-2xl' : 'w-64 min-h-screen'}`}>
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center font-black text-sm">JJ</div>
          <div>
            <div className="font-black text-sm">JobJump</div>
            <div className="text-blue-300 text-xs">Coach de Carreira</div>
          </div>
          {mobile && (
            <button onClick={onClose} className="ml-auto text-white/60 hover:text-white text-xl">&times;</button>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => { setTab(t.id); if (mobile) onClose() }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
              ${tab === t.id ? 'bg-white/15 text-white' : 'text-blue-200 hover:bg-white/10 hover:text-white'}`}
          >
            <span>{t.icon}</span>{t.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
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
