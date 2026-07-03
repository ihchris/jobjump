import { useState, useMemo } from 'react'
import {
  getBookmarks, updateBookmarkNote, addTagToBookmark, removeTagFromBookmark,
  removeBookmark, getAllTags, TYPE_LABELS, TYPE_ICONS,
} from '../../utils/bookmarks'
import { addNotification, timeAgo } from '../../utils/notifications'

const TYPES = [
  { id: 'all', label: 'Todos', icon: '🌐' },
  { id: 'lesson', label: 'Lições', icon: '📚' },
  { id: 'tool', label: 'Ferramentas', icon: '🛠️' },
  { id: 'template', label: 'Templates', icon: '📄' },
  { id: 'community_post', label: 'Posts', icon: '💬' },
]

export default function SavedPage({ onNavigateLesson, onNavigateTool, onNavigateTemplate }) {
  const [version, setVersion] = useState(0)
  const [filterType, setFilterType] = useState('all')
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [tagInput, setTagInput] = useState('')

  const bookmarks = useMemo(() => getBookmarks(), [version])
  const allTags = useMemo(() => getAllTags(), [version])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return bookmarks.filter((b) => {
      if (filterType !== 'all' && b.type !== filterType) return false
      if (activeTag && !b.tags.includes(activeTag)) return false
      if (!q) return true
      return (
        b.title.toLowerCase().includes(q) ||
        (b.subtitle || '').toLowerCase().includes(q) ||
        (b.note || '').toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q))
      )
    })
  }, [bookmarks, filterType, activeTag, search])

  const counts = useMemo(() => {
    const c = { all: bookmarks.length }
    for (const t of ['lesson', 'tool', 'template', 'community_post']) {
      c[t] = bookmarks.filter((b) => b.type === t).length
    }
    return c
  }, [bookmarks])

  const onOpen = (b) => {
    if (b.type === 'lesson' && onNavigateLesson) {
      onNavigateLesson(b.meta?.moduleId, b.meta?.lessonId)
    } else if (b.type === 'tool' && onNavigateTool) {
      onNavigateTool(b.meta?.toolId)
    } else if (b.type === 'template' && onNavigateTemplate) {
      onNavigateTemplate()
    }
  }

  const onRemove = (b) => {
    removeBookmark(b.type, b.refId)
    setVersion((v) => v + 1)
    addNotification('system', 'Removido dos Guardados', b.title, '🗑️')
  }

  const onSaveNote = (id, note) => {
    updateBookmarkNote(id, note)
    setVersion((v) => v + 1)
  }

  const onAddTag = (id) => {
    if (!tagInput.trim()) return
    addTagToBookmark(id, tagInput.trim())
    setTagInput('')
    setVersion((v) => v + 1)
  }

  const openableTypes = new Set(['lesson', 'tool', 'template'])

  return (
    <div className="p-6 animate-fade-in max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-800">🔖 Guardados</h1>
        <p className="text-slate-500 text-sm mt-1">
          Os seus recursos favoritos num só lugar — lições, ferramentas, templates e posts.
        </p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-10 text-center">
          <div className="text-5xl mb-3">🔖</div>
          <h3 className="font-black text-slate-700 text-lg mb-2">Nenhum recurso guardado</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Toque no ícone de tag nos módulos, ferramentas, templates ou posts da comunidade para os guardar aqui.
          </p>
        </div>
      ) : (
        <>
          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Pesquisar nos guardados…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Type filters */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
            {TYPES.map((t) => (
              <button
                key={t.id}
                onClick={() => { setFilterType(t.id); setActiveTag(null) }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all
                  ${filterType === t.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
                <span className={`text-[10px] ${filterType === t.id ? 'text-blue-100' : 'text-slate-400'}`}>
                  {counts[t.id]}
                </span>
              </button>
            ))}
          </div>

          {/* Tag filter */}
          {allTags.length > 0 && (
            <div className="flex gap-1.5 mb-5 flex-wrap items-center">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mr-1">Tags:</span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`text-xs px-2.5 py-1 rounded-full transition-all
                    ${activeTag === tag
                      ? 'bg-violet-600 text-white'
                      : 'bg-violet-50 text-violet-700 hover:bg-violet-100'}`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center">
              <p className="text-slate-500 text-sm">Nenhum resultado com esses filtros.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((b) => (
                <div key={b.id} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {TYPE_ICONS[b.type]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-0.5">
                            {TYPE_LABELS[b.type]}
                          </div>
                          <div className="font-bold text-slate-800 text-sm truncate">{b.title}</div>
                          {b.subtitle && (
                            <div className="text-slate-500 text-xs mt-0.5 truncate">{b.subtitle}</div>
                          )}
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {openableTypes.has(b.type) && (
                            <button
                              onClick={() => onOpen(b)}
                              className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold rounded-lg transition-colors"
                            >
                              Abrir →
                            </button>
                          )}
                          <button
                            onClick={() => setEditingId(editingId === b.id ? null : b.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-400 transition-colors text-sm"
                            title="Editar"
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => onRemove(b)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-slate-300 hover:text-red-500 transition-colors"
                            title="Remover"
                          >
                            ✕
                          </button>
                        </div>
                      </div>

                      {b.tags.length > 0 && (
                        <div className="flex gap-1 mt-2 flex-wrap">
                          {b.tags.map((t) => (
                            <span key={t} className="text-[10px] px-2 py-0.5 bg-violet-50 text-violet-700 rounded-full font-semibold">
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="text-[10px] text-slate-400 mt-1.5">
                        Guardado {timeAgo(b.createdAt)}
                      </div>

                      {editingId === b.id && (
                        <div className="mt-3 pt-3 border-t border-slate-100 space-y-3">
                          <div>
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                              Nota pessoal
                            </label>
                            <textarea
                              defaultValue={b.note}
                              onBlur={(e) => onSaveNote(b.id, e.target.value)}
                              rows={2}
                              placeholder="Por que guardou isto? O que quer lembrar?"
                              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                              Tags ({b.tags.length}/6)
                            </label>
                            <div className="flex gap-2">
                              <input
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); onAddTag(b.id) } }}
                                placeholder="Adicionar tag…"
                                className="flex-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                              <button
                                onClick={() => onAddTag(b.id)}
                                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                              >
                                +
                              </button>
                            </div>
                            {b.tags.length > 0 && (
                              <div className="flex gap-1 mt-2 flex-wrap">
                                {b.tags.map((t) => (
                                  <button
                                    key={t}
                                    onClick={() => { removeTagFromBookmark(b.id, t); setVersion((v) => v + 1) }}
                                    className="text-[10px] px-2 py-0.5 bg-violet-50 text-violet-700 rounded-full font-semibold hover:bg-red-50 hover:text-red-600 transition-colors"
                                  >
                                    #{t} ×
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}