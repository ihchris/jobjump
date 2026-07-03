import { LS } from './storage'

const KEY = 'nj_bookmarks'

// Tipos: 'lesson' | 'tool' | 'template' | 'community_post'
export const getBookmarks = () => LS.get(KEY, [])

export const isBookmarked = (type, refId) =>
  getBookmarks().some((b) => b.type === type && b.refId === refId)

export const addBookmark = ({ type, refId, title, subtitle = '', meta = {} }) => {
  if (isBookmarked(type, refId)) return false
  const entry = {
    id: crypto.randomUUID(),
    type,
    refId,
    title,
    subtitle,
    note: '',
    tags: [],
    createdAt: Date.now(),
    meta,
  }
  const next = [entry, ...getBookmarks()]
  LS.set(KEY, next)
  return entry
}

export const removeBookmark = (type, refId) => {
  const next = getBookmarks().filter((b) => !(b.type === type && b.refId === refId))
  LS.set(KEY, next)
}

export const toggleBookmark = (data) => {
  if (isBookmarked(data.type, data.refId)) {
    removeBookmark(data.type, data.refId)
    return false
  }
  addBookmark(data)
  return true
}

export const updateBookmarkNote = (id, note) => {
  const next = getBookmarks().map((b) => (b.id === id ? { ...b, note } : b))
  LS.set(KEY, next)
}

export const updateBookmarkTags = (id, tags) => {
  const clean = [...new Set(tags.map((t) => String(t).trim()).filter(Boolean))].slice(0, 6)
  const next = getBookmarks().map((b) => (b.id === id ? { ...b, tags: clean } : b))
  LS.set(KEY, next)
}

export const addTagToBookmark = (id, tag) => {
  const t = String(tag).trim()
  if (!t) return
  const next = getBookmarks().map((b) => {
    if (b.id !== id) return b
    if (b.tags.includes(t) || b.tags.length >= 6) return b
    return { ...b, tags: [...b.tags, t] }
  })
  LS.set(KEY, next)
}

export const removeTagFromBookmark = (id, tag) => {
  const next = getBookmarks().map((b) =>
    b.id === id ? { ...b, tags: b.tags.filter((t) => t !== tag) } : b
  )
  LS.set(KEY, next)
}

export const getAllTags = () => {
  const set = new Set()
  for (const b of getBookmarks()) b.tags.forEach((t) => set.add(t))
  return [...set].sort()
}

export const TYPE_LABELS = {
  lesson: 'Lição',
  tool: 'Ferramenta',
  template: 'Template',
  community_post: 'Post da Comunidade',
}

export const TYPE_ICONS = {
  lesson: '📚',
  tool: '🛠️',
  template: '📄',
  community_post: '💬',
}

// Fábricas para criar bookmarks tipados a partir do contexto
export const bookmarkLesson = (lesson, module) => ({
  type: 'lesson',
  refId: `${module.id}::${lesson.id}`,
  title: lesson.title,
  subtitle: module.title,
  meta: { moduleId: module.id, lessonId: lesson.id, duration: lesson.duration },
})

export const bookmarkTool = (toolId, title, subtitle = '') => ({
  type: 'tool',
  refId: toolId,
  title,
  subtitle,
  meta: { toolId },
})

export const bookmarkTemplate = (template) => ({
  type: 'template',
  refId: `tpl_${template.id}`,
  title: template.title,
  subtitle: template.desc,
  meta: { templateId: template.id, format: template.format, isPro: template.isPro },
})

export const bookmarkCommunityPost = (post) => ({
  type: 'community_post',
  refId: post.id,
  title: (post.content || '').slice(0, 80) + ((post.content || '').length > 80 ? '…' : ''),
  subtitle: `${post.user_name || 'Membro'} · ${post.category}`,
  meta: { userName: post.user_name, category: post.category },
})