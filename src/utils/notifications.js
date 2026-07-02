import { LS } from './storage'

const KEY = 'nj_notifications'
const MAX = 60

export const NOTIF_TYPES = {
  xp:     { color: 'bg-blue-100 text-blue-700',    defaultIcon: '⚡' },
  badge:  { color: 'bg-amber-100 text-amber-700',  defaultIcon: '🏅' },
  module: { color: 'bg-emerald-100 text-emerald-700', defaultIcon: '📚' },
  streak: { color: 'bg-orange-100 text-orange-700', defaultIcon: '🔥' },
  system: { color: 'bg-violet-100 text-violet-700', defaultIcon: '📢' },
}

export const getNotifications = () => LS.get(KEY, [])
export const getUnreadCount   = () => getNotifications().filter((n) => !n.read).length

export const addNotification = (type, title, body, icon) => {
  const notif = {
    id:        crypto.randomUUID(),
    type,
    title,
    body:      body || '',
    icon:      icon || NOTIF_TYPES[type]?.defaultIcon || '🔔',
    read:      false,
    createdAt: Date.now(),
  }
  const list = [notif, ...getNotifications()].slice(0, MAX)
  LS.set(KEY, list)
  window.dispatchEvent(new CustomEvent('nj:notification', { detail: notif }))
  return notif
}

export const markRead = (id) => {
  const list = getNotifications().map((n) => n.id === id ? { ...n, read: true } : n)
  LS.set(KEY, list)
  window.dispatchEvent(new CustomEvent('nj:notification'))
}

export const markAllRead = () => {
  const list = getNotifications().map((n) => ({ ...n, read: true }))
  LS.set(KEY, list)
  window.dispatchEvent(new CustomEvent('nj:notification'))
}

export const clearNotifications = () => {
  LS.set(KEY, [])
  window.dispatchEvent(new CustomEvent('nj:notification'))
}

export const timeAgo = (ts) => {
  const diff = Date.now() - ts
  const m = Math.floor(diff / 60000)
  if (m < 1)  return 'agora mesmo'
  if (m < 60) return `${m}m atrás`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h atrás`
  const d = Math.floor(h / 24)
  return `${d}d atrás`
}
