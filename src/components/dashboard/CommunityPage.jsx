import { useState } from 'react'
import { LS } from '../../utils/storage'

const SEED_POSTS = [
  {
    id: 's1', user: 'Maria S.', avatar: 'MS', color: 'bg-blue-500', time: 'há 2h',
    content: 'Consegui! Depois de aplicar o método STAR em todas as respostas, a entrevista correu muito melhor. Obrigada a todos pelo apoio! 🎉',
    likes: 24, liked: false,
    comments: [
      { id: 'c1', user: 'João F.', avatar: 'JF', color: 'bg-indigo-500', time: 'há 1h', content: 'Parabéns!! O STAR muda tudo mesmo. Que empresa foi?' },
      { id: 'c2', user: 'Ana O.', avatar: 'AO', color: 'bg-violet-500', time: 'há 40min', content: 'Que notícia incrível! 🙌 Mandou bem!' },
    ],
  },
  {
    id: 's2', user: 'João F.', avatar: 'JF', color: 'bg-indigo-500', time: 'há 5h',
    content: 'Dica rápida: usem o verificador de palavras-chave ATS aqui nas Ferramentas antes de candidatarem. Aumentou muito a taxa de resposta dos meus CVs!',
    likes: 18, liked: false,
    comments: [
      { id: 'c3', user: 'Pedro L.', avatar: 'PL', color: 'bg-emerald-500', time: 'há 3h', content: 'Verdade! Eu estava com score de 30% e subi para 85% depois de ajustar.' },
    ],
  },
  {
    id: 's3', user: 'Ana O.', avatar: 'AO', color: 'bg-violet-500', time: 'há 1d',
    content: 'O módulo de LinkedIn é incrível. Em 3 dias de perfil otimizado já recebi 2 mensagens de recrutadores. Funcionou mesmo!',
    likes: 31, liked: false,
    comments: [],
  },
  {
    id: 's4', user: 'Pedro L.', avatar: 'PL', color: 'bg-emerald-500', time: 'há 2d',
    content: 'Negociei o salário pela primeira vez na vida usando os scripts do Módulo 6. Consegui R$3.000 acima da oferta inicial. Vale muito estudar a parte de negociação!',
    likes: 45, liked: false,
    comments: [
      { id: 'c4', user: 'Carla M.', avatar: 'CM', color: 'bg-rose-500', time: 'há 1d', content: 'R$3k de diferença?! Preciso estudar esse módulo agora 😱' },
      { id: 'c5', user: 'Maria S.', avatar: 'MS', color: 'bg-blue-500', time: 'há 22h', content: 'Uau! Qual foi a abordagem que funcionou melhor?' },
      { id: 'c6', user: 'Pedro L.', avatar: 'PL', color: 'bg-emerald-500', time: 'há 20h', content: 'A técnica de deixar eles falarem primeiro e depois ancorar alto. Funcionou perfeitamente!' },
    ],
  },
  {
    id: 's5', user: 'Carla M.', avatar: 'CM', color: 'bg-rose-500', time: 'há 3d',
    content: 'Mudei de área (de Direito para Marketing) usando as técnicas do Módulo de Transição. Levou 8 meses mas consegui. O CV híbrido fez toda a diferença!',
    likes: 67, liked: false,
    comments: [
      { id: 'c7', user: 'Ana O.', avatar: 'AO', color: 'bg-violet-500', time: 'há 2d', content: 'Que inspiração! Estou tentando sair de RH para UX. Esse módulo ajuda mesmo?' },
      { id: 'c8', user: 'Carla M.', avatar: 'CM', color: 'bg-rose-500', time: 'há 2d', content: 'Muito! O segredo é fazer projetos paralelos para mostrar no CV enquanto ainda está na área antiga.' },
    ],
  },
]

const AVATAR_COLORS = ['bg-blue-500', 'bg-indigo-500', 'bg-violet-500', 'bg-emerald-500', 'bg-orange-500', 'bg-rose-500', 'bg-cyan-500']

function Avatar({ name, color, size = 'md' }) {
  const initials = name?.slice(0, 2).toUpperCase() || '??'
  const sz = size === 'sm' ? 'w-7 h-7 text-xs' : 'w-9 h-9 text-sm'
  return (
    <div className={`${sz} ${color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  )
}

function CommentItem({ comment }) {
  return (
    <div className="flex gap-2.5">
      <Avatar name={comment.avatar} color={comment.color} size="sm" />
      <div className="flex-1 bg-slate-50 rounded-xl px-3 py-2">
        <div className="flex items-baseline gap-2 mb-0.5">
          <span className="font-semibold text-slate-700 text-xs">{comment.user}</span>
          <span className="text-slate-400 text-[11px]">{comment.time}</span>
        </div>
        <p className="text-slate-600 text-xs leading-relaxed">{comment.content}</p>
      </div>
    </div>
  )
}

function CommentsSection({ post, user, onAddComment }) {
  const [text, setText] = useState('')
  const [posting, setPosting] = useState(false)

  const submit = () => {
    if (!text.trim() || text.trim().length < 2) return
    setPosting(true)
    setTimeout(() => {
      onAddComment(post.id, text.trim())
      setText('')
      setPosting(false)
    }, 250)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  return (
    <div className="mt-3 pt-3 border-t border-slate-100 space-y-2.5">
      {post.comments.map((c) => (
        <CommentItem key={c.id} comment={c} />
      ))}

      {/* Comment composer */}
      <div className="flex gap-2.5 pt-1">
        <Avatar
          name={(user?.name?.[0] || 'U').toUpperCase()}
          color={AVATAR_COLORS[0]}
          size="sm"
        />
        <div className="flex-1 flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 300))}
            onKeyDown={handleKey}
            placeholder="Escreva um comentário... (Enter para enviar)"
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <button
            onClick={submit}
            disabled={text.trim().length < 2 || posting}
            className="px-3 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0"
          >
            {posting ? '...' : '↵'}
          </button>
        </div>
      </div>
    </div>
  )
}

function PostCard({ post, user, openComments, onToggleComments, onLike, onDelete, onAddComment }) {
  const commentCount = post.comments?.length ?? 0

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar name={post.avatar} color={post.color} />
            <div>
              <div className="font-semibold text-slate-800 text-sm">{post.user}</div>
              <div className="text-slate-400 text-xs">{post.time}</div>
            </div>
          </div>
          {post.isOwn && (
            <button
              onClick={() => onDelete(post.id)}
              className="text-slate-300 hover:text-red-400 text-xs transition-colors"
            >
              excluir
            </button>
          )}
        </div>

        {/* Content */}
        <p className="text-slate-600 text-sm leading-relaxed">{post.content}</p>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-50">
          <button
            onClick={() => onLike(post.id)}
            className={`flex items-center gap-1.5 text-sm transition-colors ${post.liked ? 'text-red-500' : 'text-slate-400 hover:text-red-400'}`}
          >
            {post.liked ? '❤️' : '🤍'}
            <span className="font-medium">{post.likes}</span>
          </button>

          <button
            onClick={() => onToggleComments(post.id)}
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              openComments ? 'text-blue-600 font-semibold' : 'text-slate-400 hover:text-blue-500'
            }`}
          >
            💬
            <span className="font-medium">
              {commentCount > 0 ? commentCount : 'Comentar'}
            </span>
            {commentCount > 0 && (
              <span className="text-xs text-slate-400 font-normal">
                {openComments ? '▲' : '▼'}
              </span>
            )}
          </button>
        </div>

        {/* Comments */}
        {openComments && (
          <CommentsSection
            post={post}
            user={user}
            onAddComment={onAddComment}
          />
        )}
      </div>
    </div>
  )
}

export default function CommunityPage({ user }) {
  const [posts, setPosts] = useState(() => {
    const saved = LS.get('nj_community_posts', [])
    return [...saved, ...SEED_POSTS]
  })
  const [text, setText] = useState('')
  const [posting, setPosting] = useState(false)
  const [openComments, setOpenComments] = useState(new Set())

  const handlePost = () => {
    if (!text.trim() || text.trim().length < 10) return
    setPosting(true)
    setTimeout(() => {
      const newPost = {
        id: `u_${Date.now()}`,
        user: user?.name?.split(' ')[0] || 'Utilizador',
        avatar: (user?.name?.slice(0, 2) || 'U').toUpperCase(),
        color: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)],
        time: 'agora mesmo',
        content: text.trim(),
        likes: 0,
        liked: false,
        comments: [],
        isOwn: true,
      }
      const savedPosts = LS.get('nj_community_posts', [])
      LS.set('nj_community_posts', [newPost, ...savedPosts])
      setPosts((prev) => [newPost, ...prev])
      setText('')
      setPosting(false)
    }, 400)
  }

  const toggleLike = (id) => {
    setPosts((prev) => prev.map((p) => {
      if (p.id !== id) return p
      const liked = !p.liked
      const updated = { ...p, liked, likes: liked ? p.likes + 1 : p.likes - 1 }
      if (p.isOwn) {
        const saved = LS.get('nj_community_posts', [])
        LS.set('nj_community_posts', saved.map((sp) => sp.id === id ? updated : sp))
      }
      return updated
    }))
  }

  const deletePost = (id) => {
    const saved = LS.get('nj_community_posts', [])
    LS.set('nj_community_posts', saved.filter((p) => p.id !== id))
    setPosts((prev) => prev.filter((p) => p.id !== id))
    setOpenComments((prev) => { const s = new Set(prev); s.delete(id); return s })
  }

  const toggleComments = (id) => {
    setOpenComments((prev) => {
      const s = new Set(prev)
      s.has(id) ? s.delete(id) : s.add(id)
      return s
    })
  }

  const addComment = (postId, content) => {
    const newComment = {
      id: `cm_${Date.now()}`,
      user: user?.name?.split(' ')[0] || 'Você',
      avatar: (user?.name?.slice(0, 2) || 'VO').toUpperCase(),
      color: AVATAR_COLORS[0],
      time: 'agora mesmo',
      content,
    }

    setPosts((prev) => prev.map((p) => {
      if (p.id !== postId) return p
      const updated = { ...p, comments: [...(p.comments || []), newComment] }
      if (p.isOwn) {
        const saved = LS.get('nj_community_posts', [])
        LS.set('nj_community_posts', saved.map((sp) => sp.id === postId ? updated : sp))
      }
      return updated
    }))
  }

  return (
    <div className="p-6 animate-fade-in max-w-2xl">
      <h1 className="text-2xl font-black text-slate-800 mb-2">Comunidade</h1>
      <p className="text-slate-500 text-sm mb-6">Compartilhe experiências e aprenda com outros na mesma jornada.</p>

      {/* Composer */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm mb-6">
        <div className="flex gap-3">
          <Avatar
            name={(user?.name?.slice(0, 2) || 'U').toUpperCase()}
            color={AVATAR_COLORS[0]}
          />
          <div className="flex-1">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 500))}
              placeholder="Compartilhe uma conquista, dica ou experiência..."
              rows={3}
              className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <div className="flex items-center justify-between mt-2">
              <span className={`text-xs ${text.length > 450 ? 'text-red-500' : 'text-slate-400'}`}>
                {text.length}/500
              </span>
              <button
                onClick={handlePost}
                disabled={text.trim().length < 10 || posting}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {posting ? 'Publicando...' : 'Publicar'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((p) => (
          <PostCard
            key={p.id}
            post={p}
            user={user}
            openComments={openComments.has(p.id)}
            onToggleComments={toggleComments}
            onLike={toggleLike}
            onDelete={deletePost}
            onAddComment={addComment}
          />
        ))}
      </div>
    </div>
  )
}
