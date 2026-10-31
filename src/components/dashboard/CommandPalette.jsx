import { useState, useEffect, useMemo, useRef } from 'react'
import { getModules } from '../../lib/content'
import { TEMPLATES } from '../../data/templates'
import { isPaid } from '../../utils/plans'
import { TOOLS } from '../../data/toolCatalog'

export default function CommandPalette({ user, onNavigate, onClose }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [modules, setModules] = useState([])
  const [modulesLoaded, setModulesLoaded] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const inputRef = useRef(null)

  // Global hotkey — registered once; reads latest `open` via ref instead of
  // re-subscribing to `keydown` on every open/close.
  const openRef = useRef(open)
  useEffect(() => { openRef.current = open }, [open])

  useEffect(() => {
    const onKey = (e) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC')
      const cmdK = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'k'
      if (cmdK) {
        e.preventDefault()
        setOpen((o) => !o)
      } else if (e.key === 'Escape' && openRef.current) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open && !modulesLoaded) {
      getModules().then((mods) => {
        setModules(mods)
        setModulesLoaded(true)
      }).catch(() => setModulesLoaded(true))
    }
    if (open) {
      setQuery('')
      setActiveIdx(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open, modulesLoaded])

  // Also listen to a custom event so other components can open the palette
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('nj:open-search', handler)
    return () => window.removeEventListener('nj:open-search', handler)
  }, [])

  const isPro = isPaid(user?.plan)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) {
      // Sugestões quando vazio: ferramentas + templates
      return [
        ...TOOLS.map((t) => ({ type: 'tool', icon: t.icon, title: t.title, subtitle: t.desc, refId: t.id, isPro: t.isPro })),
        ...TEMPLATES.map((t) => ({ type: 'template', icon: t.icon, title: t.title, subtitle: t.desc, refId: `tpl_${t.id}`, isPro: t.isPro })),
      ].slice(0, 12)
    }
    const out = []

    // Tools
    for (const t of TOOLS) {
      const text = (t.title + ' ' + t.desc).toLowerCase()
      if (text.includes(q)) {
        out.push({ type: 'tool', icon: t.icon, title: t.title, subtitle: t.desc, refId: t.id, isPro: t.isPro })
      }
    }
    // Templates
    for (const t of TEMPLATES) {
      const text = (t.title + ' ' + t.desc).toLowerCase()
      if (text.includes(q)) {
        out.push({ type: 'template', icon: t.icon, title: t.title, subtitle: t.desc, refId: `tpl_${t.id}`, isPro: t.isPro })
      }
    }
    // Modules & lessons
    for (const m of modules) {
      const modText = (m.title + ' ' + (m.desc || '')).toLowerCase()
      if (modText.includes(q)) {
        out.push({
          type: 'module', icon: m.icon, title: m.title, subtitle: m.duration,
          refId: m.id, isPro: m.isPro, kind: 'module',
        })
      }
      for (const l of m.lessons || []) {
        const lessonText = (l.title + ' ' + (m.title || '')).toLowerCase()
        if (lessonText.includes(q)) {
          out.push({
            type: 'lesson', icon: '📖', title: l.title, subtitle: `${m.title} · ${l.duration}`,
            refId: { moduleId: m.id, lessonId: l.id }, isPro: m.isPro || !!l.isPro,
          })
        }
      }
    }
    return out.slice(0, 30)
  }, [query, modules])

  useEffect(() => {
    setActiveIdx(0)
  }, [query])

  const isLocked = (r) => r.isPro && !isPro

  const onPick = (r) => {
    if (isLocked(r)) {
      // Mostrar toast genérico seria melhor — aqui só fechamos
      setOpen(false)
      if (onNavigate) onNavigate({ kind: 'upgrade-from-search', ref: r })
      return
    }
    setOpen(false)
    if (onNavigate) onNavigate(r)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx((i) => Math.max(0, i - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const r = results[activeIdx]
      if (r) onPick(r)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[10vh] px-4"
         onClick={() => setOpen(false)}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
          <span className="text-slate-400">🔍</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Pesquisar módulos, ferramentas, templates…"
            className="flex-1 text-sm focus:outline-none placeholder:text-slate-300"
          />
          <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-mono border border-slate-200">
            ESC
          </kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {results.length === 0 ? (
            <div className="py-10 text-center text-slate-400 text-sm">
              <div className="text-3xl mb-2">🔎</div>
              Sem resultados para "{query}"
            </div>
          ) : (
            <div className="py-2">
              {results.map((r, i) => {
                const active = i === activeIdx
                const locked = isLocked(r)
                return (
                  <button
                    key={`${r.type}-${i}`}
                    onClick={() => onPick(r)}
                    onMouseEnter={() => setActiveIdx(i)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors
                      ${active ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                  >
                    <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                      {r.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-sm text-slate-800 truncate">{r.title}</div>
                        {locked && <span className="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full font-bold">🔒 Pro</span>}
                      </div>
                      {r.subtitle && (
                        <div className="text-xs text-slate-500 truncate">{r.subtitle}</div>
                      )}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-slate-300 flex-shrink-0">
                      {r.type === 'module' ? 'Módulo' : r.type === 'lesson' ? 'Lição' : r.type === 'tool' ? 'Ferramenta' : 'Template'}
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-2 border-t border-slate-100 bg-slate-50 text-[10px] text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ navegar</span>
            <span>↵ abrir</span>
            <span>ESC fechar</span>
          </div>
          <div>{results.length} resultados</div>
        </div>
      </div>
    </div>
  )
}