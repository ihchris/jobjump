import { useState, useEffect, useRef } from 'react'
import { toggleBookmark, isBookmarked } from '../../utils/bookmarks'
import { addNotification } from '../../utils/notifications'

// size: 'sm' | 'md'
export default function BookmarkButton({ type, refId, title, subtitle = '', meta = {}, size = 'md' }) {
  const [saved, setSaved] = useState(() => isBookmarked(type, refId))
  const [pulse, setPulse] = useState(false)
  const mounted = useRef(false)

  // Resync when the item this button refers to changes (e.g. same instance reused
  // for a different lesson). Skips the initial mount — the lazy useState above
  // already computed the correct value once.
  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return }
    setSaved(isBookmarked(type, refId))
  }, [type, refId])

  const onClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const isNowSaved = toggleBookmark({ type, refId, title, subtitle, meta })
    setSaved(isNowSaved)
    setPulse(true)
    setTimeout(() => setPulse(false), 600)
    addNotification(
      'system',
      isNowSaved ? 'Guardado nos favoritos ⭐' : 'Removido dos favoritos',
      isNowSaved ? title : '',
      isNowSaved ? '🔖' : '🗑️'
    )
  }

  const sz = size === 'sm' ? 'w-7 h-7 text-xs' : 'w-9 h-9 text-sm'
  return (
    <button
      onClick={onClick}
      title={saved ? 'Remover dos Guardados' : 'Guardar'}
      aria-label={saved ? 'Remover dos Guardados' : 'Guardar'}
      className={`${sz} flex items-center justify-center rounded-xl transition-all
        ${saved
          ? 'bg-amber-100 text-amber-600 hover:bg-amber-200'
          : 'bg-white/80 text-slate-400 hover:bg-slate-100 hover:text-slate-600 border border-slate-200'}
        ${pulse ? 'scale-125' : 'scale-100'} active:scale-95`}
    >
      {saved ? '🔖' : '🏷️'}
    </button>
  )
}