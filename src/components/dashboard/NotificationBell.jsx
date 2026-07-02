import { useState, useEffect, useRef } from 'react'
import {
  getNotifications, getUnreadCount,
  markRead, markAllRead, clearNotifications,
  NOTIF_TYPES, timeAgo,
} from '../../utils/notifications'

export default function NotificationBell({ className = '' }) {
  const [open, setOpen]       = useState(false)
  const [notifs, setNotifs]   = useState(getNotifications)
  const [unread, setUnread]   = useState(getUnreadCount)
  const ref                   = useRef(null)

  const refresh = () => {
    setNotifs(getNotifications())
    setUnread(getUnreadCount())
  }

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

  const handleOpen = () => {
    setOpen((o) => !o)
  }

  const handleMarkRead = (id) => {
    markRead(id)
  }

  const handleMarkAll = () => {
    markAllRead()
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={handleOpen}
        className="relative w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
        aria-label="Notificações"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {unread > 0 && (
          <span className="absolute top-1 right-1 min-w-[16px] h-4 px-0.5 flex items-center justify-center rounded-full bg-rose-500 text-white text-[10px] font-bold leading-none">
            {unread > 9 ? '9+' : unread}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <span className="font-bold text-slate-800 text-sm">Notificações</span>
            <div className="flex items-center gap-2">
              {unread > 0 && (
                <button onClick={handleMarkAll} className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                  Marcar todas lidas
                </button>
              )}
              {notifs.length > 0 && (
                <button onClick={clearNotifications} className="text-xs text-slate-400 hover:text-slate-600">
                  Limpar
                </button>
              )}
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-slate-50">
            {notifs.length === 0 ? (
              <div className="py-10 text-center text-slate-400 text-sm">
                <div className="text-3xl mb-2">🔔</div>
                Sem notificações
              </div>
            ) : (
              notifs.map((n) => {
                const meta = NOTIF_TYPES[n.type] || NOTIF_TYPES.system
                return (
                  <button
                    key={n.id}
                    onClick={() => handleMarkRead(n.id)}
                    className={`w-full text-left px-4 py-3 flex gap-3 items-start transition-colors hover:bg-slate-50 ${n.read ? 'opacity-60' : ''}`}
                  >
                    <span className={`mt-0.5 w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-base ${meta.color}`}>
                      {n.icon}
                    </span>
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
