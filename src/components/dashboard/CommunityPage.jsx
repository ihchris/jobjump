import { useState, useEffect, useCallback, useRef } from 'react'
import { LS } from '../../utils/storage'
import { supabase, supabaseConfigured } from '../../lib/supabase'

// ─── Config ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 'all',     label: 'Todos',    icon: '🌐' },
  { id: 'vitoria', label: 'Vitórias', icon: '🏆' },
  { id: 'dica',    label: 'Dicas',    icon: '💡' },
  { id: 'duvida',  label: 'Dúvidas',  icon: '❓' },
  { id: 'desafio', label: 'Desafio',  icon: '🎯' },
]

const CAT_META = {
  vitoria: { label: 'Vitória', icon: '🏆', color: 'bg-amber-100 text-amber-700' },
  dica:    { label: 'Dica',    icon: '💡', color: 'bg-blue-100 text-blue-700' },
  duvida:  { label: 'Dúvida',  icon: '❓', color: 'bg-violet-100 text-violet-700' },
  desafio: { label: 'Desafio', icon: '🎯', color: 'bg-emerald-100 text-emerald-700' },
  geral:   { label: 'Geral',   icon: '💬', color: 'bg-slate-100 text-slate-600' },
}

const WEEK_CHALLENGES = [
  { title: 'Vitória da Semana',               prompt: 'Qual foi sua maior vitória esta semana? Pode ser pequena — uma candidatura enviada, uma resposta recebida, um contato de networking feito. Partilhe!' },
  { title: 'Seu Melhor Script de Entrevista', prompt: 'Compartilhe a resposta que mais funcionou em entrevistas. Qual foi a pergunta e como respondeu? Outros podem aprender muito com isso.' },
  { title: 'Dica de Produtividade',           prompt: 'Qual hábito ou ferramenta mais aumentou sua produtividade na busca de emprego? Partilhe com a comunidade!' },
  { title: 'Erro e Aprendizagem',             prompt: 'Qual foi o maior erro que cometeu numa candidatura ou entrevista — e o que aprendeu com ele?' },
  { title: 'Vaga que Achou Interessante',     prompt: 'Partilhe a vaga mais interessante que encontrou esta semana. Empresa, cargo e o que chamou sua atenção nela.' },
  { title: 'O que te Mantém Motivado',        prompt: 'Qual frase, história ou pessoa te mantém motivado durante a busca? Partilhe o que te faz continuar nos dias difíceis.' },
  { title: 'Feedback Recebido',               prompt: 'Recebeu feedback de uma empresa ou recrutador — bom ou mau? Partilhe. A experiência dos outros ajuda todos a melhorar.' },
  { title: 'Mudança no CV que Funcionou',     prompt: 'Que mudança específica fez no CV que resultou em mais respostas? Antes e depois em uma frase.' },
  { title: 'Pergunta Difícil de Entrevista',  prompt: 'Qual foi a pergunta mais difícil que recebeu numa entrevista? Como respondeu — e o que faria diferente hoje?' },
  { title: 'Networking que Funcionou',        prompt: 'Já conseguiu uma oportunidade através de networking? Como foi a abordagem? Dê detalhes — a comunidade quer aprender.' },
  { title: 'Rejeição e Resiliência',          prompt: 'Fale sobre uma rejeição que foi difícil de superar. Como recuperou? Isso ajuda quem está passando pelo mesmo.' },
  { title: 'Plano para a Semana',             prompt: 'Que metas específicas tem para a sua busca esta semana? Declare publicamente — a comunidade vai torcer por você!' },
]

const AVATAR_COLORS = [
  'bg-blue-500','bg-indigo-500','bg-violet-500','bg-emerald-500',
  'bg-orange-500','bg-rose-500','bg-cyan-500','bg-teal-500','bg-pink-500',
]

// ─── Seed posts (demo mode) ────────────────────────────────────────────────────

const now = Date.now()
const ago = (ms) => new Date(now - ms).toISOString()

const SEED_POSTS = [
  {
    id: 'seed_1', user_id: 'seed', user_name: 'Maria S.', category: 'vitoria',
    content: 'pessoal assinei contrato hoje 🥲 analista de marketing, empresa de tecnologia aqui em sp. foram 4 meses muito pesados, muito silêncio de recrutador, muito questionando minha própria competência. o que funcionou mesmo: reescrevi o cv inteiro com foco em ATS e parei de improvisar nas entrevistas. treinei as respostas em voz alta igual maluca. de quase nenhum retorno passei pra 3 entrevistas numa semana. aguentem.',
    likes_count: 47, comments_count: 2, created_at: ago(2 * 3600000),
    comments: [
      { id: 'sc1', user_name: 'João F.', content: 'merecidíssimo!! que área de marketing? startup?', created_at: ago(1 * 3600000) },
      { id: 'sc2', user_name: 'Ana O.', content: 'que alívio hein 😭 feliz demais por você', created_at: ago(40 * 60000) },
    ],
  },
  {
    id: 'seed_2', user_id: 'seed', user_name: 'Pedro L.', category: 'dica',
    content: 'compartilhando uma coisa que tá funcionando pra mim: quando aplico pra uma vaga, procuro alguém do time no linkedin e mando uma mensagem curta dizendo que me candidatei e por que me interessa. bem direta mesmo, sem enrolação. umas 4 de cada 10 vezes a pessoa passa meu nome internamente. minha taxa de resposta das aplicações subiu muito. demorei a ter coragem de fazer isso mas vale.',
    likes_count: 89, comments_count: 1, created_at: ago(5 * 3600000),
    comments: [
      { id: 'sc3', user_name: 'Carla M.', content: 'fiz isso semana passada e funcionou!! você compartilha a mensagem que manda? to curiosa pra ver o tom que você usa', created_at: ago(3 * 3600000) },
    ],
  },
  {
    id: 'seed_3', user_id: 'seed', user_name: 'Lucas R.', category: 'vitoria',
    content: 'NEGOCIEI 🎉 recebi proposta de R$7k e ia aceitar na hora porque estava precisando. mas dei uma respirada, pesquisei mercado, e mandei uma contraproposta com justificativa. ficou em R$8,8k + benefícios melhores. foi desconfortável, coração acelerado a hora toda. mas valeu. ficava deixando dinheiro na mesa todo processo sem saber.',
    likes_count: 118, comments_count: 3, created_at: ago(8 * 3600000),
    comments: [
      { id: 'sc4', user_name: 'Maria S.', content: 'parabéns!! você perguntou a faixa salarial antes de dar seu número ou foi direto na contraproposta?', created_at: ago(6 * 3600000) },
      { id: 'sc5', user_name: 'Lucas R.', content: 'pedi pra eles falarem a faixa antes de dar meu número — esse detalhe fez diferença. pesquisei no glassdoor e num relatório da área pra saber que minha âncora era razoável. quando falei o número, já tinha a justificativa pronta.', created_at: ago(5.5 * 3600000) },
      { id: 'sc6', user_name: 'João F.', content: 'cara tenho entrevista semana que vem e ia aceitar qualquer coisa 😅 mensagem salva', created_at: ago(4 * 3600000) },
    ],
  },
  {
    id: 'seed_4', user_id: 'seed', user_name: 'Carla M.', category: 'vitoria',
    content: 'hoje começo como analista de conteúdo. um ano atrás eu era advogada. todo mundo disse que era impossível, que ia ter que começar do zero, que ia ganhar menos. algumas dessas coisas eram verdade. o que funcionou: montei portfólio real (blog + perfil na área) sem esperar permissão de ninguém, e aprendi a contar minha experiência jurídica como diferencial — não como problema.',
    likes_count: 73, comments_count: 2, created_at: ago(18 * 3600000),
    comments: [
      { id: 'sc7', user_name: 'Ana O.', content: 'isso me deu esperança. tô tentando ir de rh pra ux e sinto que ninguém acredita. como você fazia o portfólio com emprego em paralelo? sumia de casa de madrugada? 😅', created_at: ago(14 * 3600000) },
      { id: 'sc8', user_name: 'Carla M.', content: '1h de manhã antes do trabalho. parece nada mas em 6 meses tinha material pra mostrar evolução real. o mais difícil foi parar de perfeccionar e começar a publicar mesmo imperfeito.', created_at: ago(12 * 3600000) },
    ],
  },
  {
    id: 'seed_5', user_id: 'seed', user_name: 'João F.', category: 'duvida',
    content: 'galera, alguém já fez "home assignment" em processo tech? recebi um antes mesmo da primeira conversa com a empresa, estimativa de 5h. tô na dúvida se vale a pena fazer ou se é red flag. como vocês avaliam?',
    likes_count: 22, comments_count: 2, created_at: ago(26 * 3600000),
    comments: [
      { id: 'sc9', user_name: 'Lucas R.', content: '5h tá dentro do razoável. o que geralmente avaliam: código limpo, README mostrando como você raciocinou, estrutura que indica que você sabe o que tá fazendo. trata como miniatura de projeto real. é uma entrevista disfarçada.', created_at: ago(24 * 3600000) },
      { id: 'sc10', user_name: 'Pedro L.', content: 'red flag seria: mais de 8h, pedido muito específico pra resolver problema real do negócio deles, sem entrevista depois. 5h com contexto técnico claro = normal em empresa séria.', created_at: ago(22 * 3600000) },
    ],
  },
  {
    id: 'seed_6', user_id: 'seed', user_name: 'Sofia T.', category: 'desafio',
    content: 'minha resposta pro desafio: passei 2 semanas mandando cv pra tudo que aparecia, sem retorno nenhum. resolvi parar, escolher 3 vagas por semana e adaptar tudo do zero pra cada uma. resultado: 2 respostas essa semana. não é escala, mas funciona. demorei pra aceitar isso.',
    likes_count: 41, comments_count: 1, created_at: ago(3 * 24 * 3600000),
    comments: [
      { id: 'sc11', user_name: 'Ana O.', content: 'precisava ver isso hoje mesmo, tô exatamente nesse ciclo. obg por compartilhar', created_at: ago(2.5 * 24 * 3600000) },
    ],
  },
  {
    id: 'seed_7', user_id: 'seed', user_name: 'Rafa M.', category: 'duvida',
    content: 'alguém conseguiu emprego em portugal sem ter morado lá antes? tô pesquisando faz meses e fico em dúvida sobre como deixar o linkedin atrativo pra recrutadores de lá. meu perfil tá em pt-br — preciso mudar o idioma? colocar que estou aberto a relocação onde?',
    likes_count: 31, comments_count: 2, created_at: ago(4 * 24 * 3600000),
    comments: [
      { id: 'sc12', user_name: 'Carla M.', content: 'tem um módulo inteiro aqui sobre isso (mercado europeu), fala de linkedin, vistos, diferenças culturais na candidatura... me ajudou muito quando tava na mesma dúvida', created_at: ago(3.8 * 24 * 3600000) },
      { id: 'sc13', user_name: 'Pedro L.', content: 'coloca "open to work" visível pra recrutadores e no headline adiciona algo como "available for relocation to Portugal". funcionou pra mim — recrutadores de lá começaram a aparecer.', created_at: ago(3.5 * 24 * 3600000) },
    ],
  },
  {
    id: 'seed_8', user_id: 'seed', user_name: 'Ana O.', category: 'dica',
    content: 'aprendi da forma difícil: mantém um rastreador desde o primeiro dia de busca. ficava tudo perdido nos meus e-mails e esquecia de fazer followup. comecei a usar uma planilha simples (empresa, cargo, quando mandei, status, próximo passo, com quem falei) e percebi que certos canais não estavam me dando retorno nenhum. mudei o foco e a diferença foi imediata.',
    likes_count: 56, comments_count: 0, created_at: ago(5 * 24 * 3600000),
    comments: [],
  },
  {
    id: 'seed_9', user_id: 'seed', user_name: 'Bruno K.', category: 'dica',
    content: 'mudança simples que fez diferença no linkedin: troquei meu headline de "Analista de Dados" pra "Data Analyst | Python · SQL · Power BI | ajudando empresas a tomar decisões com dados". parece besteira mas as visualizações do perfil subiram muito em duas semanas. palavras-chave técnicas + o que você faz de verdade = recrutador te acha.',
    likes_count: 67, comments_count: 1, created_at: ago(6 * 24 * 3600000),
    comments: [
      { id: 'sc14', user_name: 'Sofia T.', content: 'fui fazer o meu agora 😅 você separou as skills com · mesmo? funcionou no mobile também?', created_at: ago(5.5 * 24 * 3600000) },
    ],
  },
]

const LOCAL_POSTS_KEY = 'nj_community_v2'
const LOCAL_LIKES_KEY = 'nj_community_v2_likes'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getWeekChallenge() {
  const weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000))
  return WEEK_CHALLENGES[weekNum % WEEK_CHALLENGES.length]
}

function formatTime(ts) {
  if (!ts) return 'agora'
  const diff = Date.now() - new Date(ts).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'agora mesmo'
  if (m < 60) return `há ${m} min`
  const h = Math.floor(m / 60)
  if (h < 24) return `há ${h}h`
  const d = Math.floor(h / 24)
  if (d < 7) return `há ${d}d`
  return new Date(ts).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })
}

function avatarColor(name) {
  let h = 0
  for (const c of (name || '')) h = ((h * 31) + c.charCodeAt(0)) | 0
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length]
}

// ─── UI atoms ─────────────────────────────────────────────────────────────────

function Avatar({ name, size = 'md' }) {
  const sz = size === 'sm' ? 'w-7 h-7 text-xs' : size === 'lg' ? 'w-11 h-11 text-base' : 'w-9 h-9 text-sm'
  return (
    <div className={`${sz} ${avatarColor(name)} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 select-none`}>
      {(name || '?').slice(0, 2).toUpperCase()}
    </div>
  )
}

function CatBadge({ category }) {
  const m = CAT_META[category] || CAT_META.geral
  return (
    <span className={`inline-flex items-center gap-0.5 text-[11px] font-semibold px-2 py-0.5 rounded-full ${m.color}`}>
      {m.icon} {m.label}
    </span>
  )
}

// ─── Weekly challenge ─────────────────────────────────────────────────────────

function WeeklyChallengeCard({ challenge, onRespond }) {
  return (
    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-5 text-white">
      <div className="flex items-center gap-2 mb-1.5">
        <span>🎯</span>
        <span className="text-emerald-200 text-xs font-bold uppercase tracking-wider">Desafio da Semana · Muda toda segunda-feira</span>
      </div>
      <h3 className="font-black text-xl mb-2">{challenge.title}</h3>
      <p className="text-emerald-100 text-sm leading-relaxed mb-4">{challenge.prompt}</p>
      <button
        onClick={onRespond}
        className="bg-white text-emerald-700 font-bold text-sm px-5 py-2 rounded-xl hover:bg-emerald-50 transition-colors"
      >
        Participar →
      </button>
    </div>
  )
}

// ─── Composer ─────────────────────────────────────────────────────────────────

function Composer({ user, onPost, defaultCategory, onCancel }) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState(defaultCategory || 'geral')
  const [busy, setBusy] = useState(false)
  const ref = useRef(null)

  useEffect(() => { ref.current?.focus() }, [])
  useEffect(() => { if (defaultCategory) setCategory(defaultCategory) }, [defaultCategory])

  const submit = async () => {
    if (text.trim().length < 10 || busy) return
    setBusy(true)
    await onPost(text.trim(), category)
    setText('')
    setBusy(false)
    onCancel?.()
  }

  return (
    <div className="bg-white rounded-2xl border border-blue-200 shadow-sm p-5">
      <div className="flex gap-3">
        <Avatar name={user?.name} size="lg" />
        <div className="flex-1 min-w-0">
          <textarea
            ref={ref}
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 800))}
            onKeyDown={(e) => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) submit() }}
            placeholder="Partilhe uma conquista, dica, dúvida ou experiência... (Ctrl+Enter para publicar)"
            rows={4}
            className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-3"
          />
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex gap-1.5 flex-wrap flex-1">
              {Object.entries(CAT_META).map(([k, m]) => (
                <button
                  key={k}
                  onClick={() => setCategory(k)}
                  className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold border transition-all ${
                    category === k
                      ? `${m.color} border-transparent`
                      : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {m.icon} {m.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className={`text-xs ${text.length > 700 ? 'text-red-400' : 'text-slate-400'}`}>{text.length}/800</span>
              {onCancel && (
                <button onClick={onCancel} className="text-xs text-slate-400 hover:text-slate-600 transition-colors">cancelar</button>
              )}
              <button
                onClick={submit}
                disabled={text.trim().length < 10 || busy}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {busy ? 'Publicando...' : 'Publicar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Comments ─────────────────────────────────────────────────────────────────

function CommentsSection({ post, user, onAddComment }) {
  const [comments, setComments] = useState(post.comments || null)
  const [text, setText] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (post.comments !== undefined || !supabaseConfigured) return
    supabase
      .from('community_comments')
      .select('*')
      .eq('post_id', post.id)
      .order('created_at')
      .then(({ data }) => setComments(data || []))
  }, [post.id, post.comments])

  const submit = async () => {
    if (text.trim().length < 2 || busy) return
    setBusy(true)
    const newComment = await onAddComment(post.id, text.trim())
    if (newComment) setComments((prev) => [...(prev || []), newComment])
    setText('')
    setBusy(false)
  }

  const list = comments || []

  return (
    <div className="mt-3 pt-3 border-t border-slate-100 space-y-2.5">
      {comments === null && supabaseConfigured && (
        <p className="text-center text-xs text-slate-400 py-2">Carregando comentários...</p>
      )}
      {list.map((c) => (
        <div key={c.id} className="flex gap-2.5">
          <Avatar name={c.user_name} size="sm" />
          <div className="flex-1 bg-slate-50 rounded-xl px-3 py-2">
            <div className="flex items-baseline gap-2 mb-0.5">
              <span className="font-semibold text-slate-700 text-xs">{c.user_name}</span>
              <span className="text-slate-400 text-[11px]">{formatTime(c.created_at)}</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">{c.content}</p>
          </div>
        </div>
      ))}
      <div className="flex gap-2 pt-1">
        <Avatar name={user?.name} size="sm" />
        <input
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 400))}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); submit() } }}
          placeholder="Comentário... (Enter para enviar)"
          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={submit}
          disabled={text.trim().length < 2 || busy}
          className="px-3 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-40 transition-all flex-shrink-0"
        >
          {busy ? '...' : '↵'}
        </button>
      </div>
    </div>
  )
}

// ─── Post card ────────────────────────────────────────────────────────────────

function PostCard({ post, user, onLike, onDelete, onAddComment }) {
  const [showComments, setShowComments] = useState(false)
  const commentCount = post.comments_count ?? post.comments?.length ?? 0
  const isOwn = post.user_id === user?.id && post.user_id !== 'seed'

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar name={post.user_name} />
            <div>
              <div className="font-semibold text-slate-800 text-sm">{post.user_name}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-slate-400 text-xs">{formatTime(post.created_at)}</span>
                <CatBadge category={post.category} />
              </div>
            </div>
          </div>
          {isOwn && (
            <button
              onClick={() => onDelete(post.id)}
              className="text-slate-300 hover:text-red-400 text-xs transition-colors"
            >
              excluir
            </button>
          )}
        </div>

        <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">{post.content}</p>

        <div className="flex items-center gap-5 mt-4 pt-3 border-t border-slate-50">
          <button
            onClick={() => onLike(post)}
            className={`flex items-center gap-1.5 transition-all active:scale-125 ${
              post.liked ? 'text-red-500' : 'text-slate-400 hover:text-red-400'
            }`}
          >
            <span className="text-base">{post.liked ? '❤️' : '🤍'}</span>
            <span className="text-xs font-semibold">{post.likes_count}</span>
          </button>

          <button
            onClick={() => setShowComments((v) => !v)}
            className={`flex items-center gap-1.5 transition-colors ${
              showComments ? 'text-blue-600' : 'text-slate-400 hover:text-blue-500'
            }`}
          >
            <span className="text-base">💬</span>
            <span className="text-xs font-semibold">
              {commentCount > 0 ? commentCount : 'Comentar'}
            </span>
          </button>
        </div>

        {showComments && (
          <CommentsSection post={post} user={user} onAddComment={onAddComment} />
        )}
      </div>
    </div>
  )
}

// ─── Stats bar ────────────────────────────────────────────────────────────────

function CommunityStats({ userPostsCount }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 px-5 py-4">
      <div className="flex divide-x divide-slate-100">
        {[
          { label: 'Membros ativos', value: '1.247' },
          { label: 'Posts esta semana', value: String(12 + userPostsCount) },
          { label: 'Taxa de resposta', value: '91%' },
        ].map((s) => (
          <div key={s.label} className="flex-1 text-center px-2">
            <div className="font-black text-slate-800 text-lg leading-tight">{s.value}</div>
            <div className="text-slate-400 text-[11px] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function CommunityPage({ user }) {
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('recent')
  const [composerOpen, setComposerOpen] = useState(false)
  const [composerCategory, setComposerCategory] = useState('geral')
  const [loading, setLoading] = useState(true)

  const challenge = getWeekChallenge()

  // ── Load ────────────────────────────────────────────────────────────────────

  const load = useCallback(async () => {
    if (supabaseConfigured) {
      const [postsRes, likesRes] = await Promise.all([
        supabase.from('community_posts').select('*').order('created_at', { ascending: false }).limit(100),
        supabase.from('community_likes').select('post_id').eq('user_id', user?.id || ''),
      ])
      const likedSet = new Set((likesRes.data || []).map((l) => l.post_id))
      setPosts((postsRes.data || []).map((p) => ({ ...p, liked: likedSet.has(p.id) })))
    } else {
      const saved = LS.get(LOCAL_POSTS_KEY, [])
      const liked = new Set(LS.get(LOCAL_LIKES_KEY, []))
      const all = [...saved, ...SEED_POSTS].map((p) => ({ ...p, liked: liked.has(p.id) }))
      setPosts(all)
    }
    setLoading(false)
  }, [user?.id])

  useEffect(() => { load() }, [load])

  // ── Real-time (Supabase only) ────────────────────────────────────────────────

  useEffect(() => {
    if (!supabaseConfigured) return
    const channel = supabase
      .channel('community_feed')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'community_posts' }, ({ new: incoming }) => {
        if (incoming.user_id === user?.id) return // own post, handled optimistically
        setPosts((prev) => {
          if (prev.some((p) => p.id === incoming.id)) return prev
          return [{ ...incoming, liked: false }, ...prev]
        })
      })
      .subscribe()
    return () => supabase.removeChannel(channel)
  }, [user?.id])

  // ── Actions ──────────────────────────────────────────────────────────────────

  const handlePost = async (content, cat) => {
    const userName = user?.name?.split(' ').slice(0, 2).join(' ') || 'Utilizador'
    const tempId = `temp_${Date.now()}`
    const tempPost = {
      id: tempId, user_id: user?.id || 'local', user_name: userName,
      category: cat, content,
      likes_count: 0, comments_count: 0,
      created_at: new Date().toISOString(),
      liked: false, comments: [],
    }

    setPosts((prev) => [tempPost, ...prev])

    if (supabaseConfigured) {
      const { data } = await supabase
        .from('community_posts')
        .insert({ user_id: user.id, user_name: userName, category: cat, content })
        .select().single()
      if (data) {
        setPosts((prev) => prev.map((p) => p.id === tempId ? { ...data, liked: false, comments: [] } : p))
      }
    } else {
      const saved = LS.get(LOCAL_POSTS_KEY, [])
      LS.set(LOCAL_POSTS_KEY, [tempPost, ...saved])
    }
  }

  const handleLike = async (post) => {
    const liked = !post.liked
    const delta = liked ? 1 : -1

    setPosts((prev) => prev.map((p) =>
      p.id === post.id ? { ...p, liked, likes_count: Math.max(0, p.likes_count + delta) } : p
    ))

    if (supabaseConfigured) {
      if (liked) {
        await supabase.from('community_likes').insert({ post_id: post.id, user_id: user.id })
        await supabase.from('community_posts').update({ likes_count: post.likes_count + 1 }).eq('id', post.id)
      } else {
        await supabase.from('community_likes').delete().eq('post_id', post.id).eq('user_id', user.id)
        await supabase.from('community_posts').update({ likes_count: Math.max(0, post.likes_count - 1) }).eq('id', post.id)
      }
    } else {
      const likedArr = LS.get(LOCAL_LIKES_KEY, [])
      const likedSet = new Set(likedArr)
      liked ? likedSet.add(post.id) : likedSet.delete(post.id)
      LS.set(LOCAL_LIKES_KEY, [...likedSet])
    }
  }

  const handleDelete = async (id) => {
    if (supabaseConfigured) {
      await supabase.from('community_posts').delete().eq('id', id).eq('user_id', user.id)
    } else {
      const saved = LS.get(LOCAL_POSTS_KEY, [])
      LS.set(LOCAL_POSTS_KEY, saved.filter((p) => p.id !== id))
    }
    setPosts((prev) => prev.filter((p) => p.id !== id))
  }

  const handleAddComment = async (postId, content) => {
    const userName = user?.name?.split(' ')[0] || 'Você'
    const comment = {
      id: `cm_${Date.now()}`,
      post_id: postId, user_id: user?.id || 'local',
      user_name: userName, content,
      created_at: new Date().toISOString(),
    }

    setPosts((prev) => prev.map((p) =>
      p.id === postId ? { ...p, comments_count: (p.comments_count || 0) + 1 } : p
    ))

    if (supabaseConfigured) {
      const { data } = await supabase
        .from('community_comments')
        .insert({ post_id: postId, user_id: user.id, user_name: userName, content })
        .select().single()
      await supabase.from('community_posts').update({ comments_count: supabase.rpc ? undefined : undefined }).eq('id', postId)
      return data || comment
    }

    // localStorage: add comment inline on user-owned posts
    setPosts((prev) => prev.map((p) => {
      if (p.id !== postId) return p
      const updated = { ...p, comments: [...(p.comments || []), comment] }
      if (p.user_id !== 'seed') {
        const saved = LS.get(LOCAL_POSTS_KEY, [])
        LS.set(LOCAL_POSTS_KEY, saved.map((sp) => sp.id === postId ? updated : sp))
      }
      return updated
    }))
    return comment
  }

  // ── Filter & sort ────────────────────────────────────────────────────────────

  const filtered = posts
    .filter((p) => category === 'all' || p.category === category)
    .sort((a, b) => {
      if (sort === 'hot') return (b.likes_count - a.likes_count) || (new Date(b.created_at) - new Date(a.created_at))
      return new Date(b.created_at) - new Date(a.created_at)
    })

  const openChallenge = () => {
    setComposerCategory('desafio')
    setComposerOpen(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const userPostsCount = posts.filter((p) =>
    p.user_id !== 'seed' && Date.now() - new Date(p.created_at).getTime() < 7 * 24 * 3600000
  ).length

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="p-4 sm:p-6 space-y-5 animate-fade-in max-w-2xl">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Comunidade</h1>
          <p className="text-slate-500 text-sm mt-1">Partilhe, aprenda e cresça com outros na mesma jornada.</p>
        </div>
        <button
          onClick={() => { setComposerCategory('geral'); setComposerOpen(true) }}
          className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex-shrink-0"
        >
          + Publicar
        </button>
      </div>

      {/* Stats */}
      <CommunityStats userPostsCount={userPostsCount} />

      {/* Composer */}
      {composerOpen && (
        <Composer
          user={user}
          onPost={handlePost}
          defaultCategory={composerCategory}
          onCancel={() => setComposerOpen(false)}
        />
      )}

      {/* Weekly challenge */}
      <WeeklyChallengeCard challenge={challenge} onRespond={openChallenge} />

      {/* Category + sort filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap border transition-all flex-shrink-0 ${
              category === c.id
                ? 'bg-slate-800 text-white border-slate-800'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
            }`}
          >
            {c.icon} {c.label}
          </button>
        ))}
        <div className="ml-auto flex gap-1.5 flex-shrink-0">
          {[{ id: 'recent', label: '🕐 Recentes' }, { id: 'hot', label: '🔥 Em alta' }].map((s) => (
            <button
              key={s.id}
              onClick={() => setSort(s.id)}
              className={`text-xs px-3 py-1.5 rounded-full font-semibold border transition-all ${
                sort === s.id ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Feed */}
      {loading ? (
        <div className="text-center text-slate-400 py-10">Carregando...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center text-slate-400 py-12">
          <div className="text-5xl mb-3">💬</div>
          <div className="font-semibold text-slate-600">Ainda não há publicações aqui.</div>
          <div className="text-sm mt-1">Seja o primeiro a compartilhar nesta categoria!</div>
          <button
            onClick={() => { setComposerCategory(category === 'all' ? 'geral' : category); setComposerOpen(true) }}
            className="mt-4 text-sm text-blue-600 font-semibold hover:underline"
          >
            Publicar agora →
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((p) => (
            <PostCard
              key={p.id}
              post={p}
              user={user}
              onLike={handleLike}
              onDelete={handleDelete}
              onAddComment={handleAddComment}
            />
          ))}
        </div>
      )}

      {/* Demo mode notice */}
      {!supabaseConfigured && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
          <p className="text-amber-700 text-sm">
            <strong>Modo Demo:</strong> As publicações são locais. Configure o Supabase para ativar a comunidade compartilhada entre todos os usuários com atualizações em tempo real.
          </p>
        </div>
      )}
    </div>
  )
}
