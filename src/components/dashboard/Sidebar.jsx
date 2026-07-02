import { useState, useEffect, useRef } from 'react'
import { Badge } from '../ui'
import { isPaid, planBadge } from '../../utils/plans'
import { getXP, getLevel, getLevelProgress } from '../../utils/gamification'
import {
  getNotifications, getUnreadCount,
  markRead, markAllRead, clearNotifications,
  NOTIF_TYPES, timeAgo,
} from '../../utils/notifications'

function SidebarBell() {
  const [open, setOpen]     = useState(false)
  const [notifs, setNotifs] = useState(getNotifications)
  const [unread, setUnread] = useState(getUnreadCount)
  const ref                 = useRef(null)

  const refresh = () => { setNotifs(getNotifications()); setUnread(getUnreadCount()) }

  useEffect(() => {
    window.addEventListener('nj:notification', refresh)
    return () => window.removeEventListener('nj:notification', refresh)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative w-9 h-9 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Notificações"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {unread > 0 && (
          <span className="absolute top-1 right-1 min-w-[14px] h-3.5 px-0.5 flex items-center justify-center rounded-full bg-rose-500 text-white text-[9px] font-bold leading-none">
            {unread > 9 ? '9+' : unread}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute left-0 top-11 z-50 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <span className="font-bold text-slate-800 text-sm">Notificações</span>
            <div className="flex items-center gap-2">
              {unread > 0 && (
                <button onClick={markAllRead} className="text-xs text-blue-600 hover:text-blue-800 font-medium">Marcar todas lidas</button>
              )}
              {notifs.length > 0 && (
                <button onClick={clearNotifications} className="text-xs text-slate-400 hover:text-slate-600">Limpar</button>
              )}
            </div>
          </div>
          <div className="max-h-80 overflow-y-auto divide-y divide-slate-50">
            {notifs.length === 0 ? (
              <div className="py-10 text-center text-slate-400 text-sm">
                <div className="text-3xl mb-2">🔔</div>Sem notificações
              </div>
            ) : (
              notifs.map((n) => {
                const meta = NOTIF_TYPES[n.type] || NOTIF_TYPES.system
                return (
                  <button key={n.id} onClick={() => markRead(n.id)}
                    className={`w-full text-left px-4 py-3 flex gap-3 items-start hover:bg-slate-50 transition-colors ${n.read ? 'opacity-60' : ''}`}
                  >
                    <span className={`mt-0.5 w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-base ${meta.color}`}>{n.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <span className="font-semibold text-xs text-slate-800 leading-snug">{n.title}</span>
                        {!n.read && <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1" />}
                      </div>
                      {n.body && <p className="text-xs text-slate-500 mt-0.5 leading-snug">{n.body}</p>}
                      <span className="text-[10px] text-slate-400 mt-1 block">{timeAgo(n.createdAt)}</span>
                    </div>
                  </button>
                )
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}

const TABS = [
  { id: 'home',       label: 'Dashboard',     icon: '🏠' },
  { id: 'modules',    label: 'Módulos',        icon: '📚' },
  { id: 'diagnosis',  label: 'Diagnóstico',    icon: '🗺️' },
  { id: 'planner',    label: 'Plano Semanal',  icon: '📅' },
  { id: 'templates',  label: 'Templates',      icon: '📁' },
  { id: 'tools',      label: 'Ferramentas',    icon: '🛠️' },
  { id: 'networking', label: 'Networking',     icon: '🤝' },
  { id: 'messages',   label: 'Mensagens',      icon: '💬' },
  { id: 'community',  label: 'Comunidade',     icon: '👥' },
  { id: 'coach',      label: 'Coach IA',       icon: '🤖' },
  { id: 'settings',   label: 'Configurações',  icon: '⚙️' },
]

export { TABS }

export default function Sidebar({ tab, setTab, user, onLogout, mobile, onClose, msgUnread }) {
  const xp    = getXP()
  const level = getLevel(xp)
  const pct   = getLevelProgress(xp)

  return (
    <div className={`flex flex-col bg-[#1e3a5f] text-white ${mobile ? 'fixed inset-y-0 left-0 z-50 w-[280px] shadow-2xl sidebar-slide-in' : 'w-64 h-full'}`}>
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <img src="/logo.png" alt="JobJump" className="h-8 w-auto brightness-0 invert" />
            <div className="text-blue-300 text-xs mt-0.5">Coach de Carreira</div>
          </div>
          {!mobile && <SidebarBell />}
          {mobile && (
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors touch-manipulation text-xl"
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
            {t.id === 'messages' && msgUnread > 0 && tab !== 'messages' && (
              <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-black flex items-center justify-center flex-shrink-0">
                {msgUnread > 9 ? '9+' : msgUnread}
              </span>
            )}
            {t.id === 'community' && tab !== 'community' && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Upgrade CTA — só para free */}
      {!isPaid(user.plan) && (
        <div className="px-4 pb-2">
          <button
            onClick={() => { setTab('settings'); if (mobile) onClose() }}
            className="w-full border border-amber-400/30 hover:border-amber-400/50 bg-amber-400/5 hover:bg-amber-400/10 text-amber-300 hover:text-amber-200 rounded-lg px-3 py-2 text-left flex items-center gap-2 transition-colors group"
          >
            <span className="text-sm">⭐</span>
            <span className="flex-1 min-w-0 text-xs font-medium truncate">Upgrade para Pro</span>
            <span className="text-amber-400/60 group-hover:text-amber-300 transition-colors text-xs">→</span>
          </button>
        </div>
      )}

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
