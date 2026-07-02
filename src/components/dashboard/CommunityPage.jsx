import { useState, useEffect, useCallback, useRef } from 'react'
import { LS } from '../../utils/storage'
import { supabase, supabaseConfigured } from '../../lib/supabase'
import { addNotification } from '../../utils/notifications'

// ─── Config ────────────────────────────────────────────────────────────────────

const ADMIN_EMAIL = 'chrisafonsocontato@gmail.com'

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
    content: 'Compartilhando uma coisa que tá funcionando pra mim: quando aplico pra uma vaga, procuro alguém do time no linkedin e mando uma mensagem curta dizendo que me candidatei e por que me interessa. Bem direta mesmo, sem enrolação. Umas 4 de cada 10 vezes a pessoa passa meu nome internamente. minha taxa de resposta das aplicações subiu muito. demorei a ter coragem de fazer isso mas vale.',
    likes_count: 89, comments_count: 1, created_at: ago(5 * 3600000),
    comments: [
      { id: 'sc3', user_name: 'Carla M.', content: 'Fiz isso semana passada e funcionou!! vc compartilha a mensagem que manda? to curiosa pra ver o tom que usa', created_at: ago(3 * 3600000) },
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
    content: 'Galera, alguém já fez "home assignment" em processo tech? recebi um antes mesmo da primeira conversa com a empresa, estimativa de 5h. tô na dúvida se vale a pena fazer ou se é red flag. como vocês avaliam?',
    likes_count: 22, comments_count: 2, created_at: ago(26 * 3600000),
    comments: [
      { id: 'sc9', user_name: 'Lucas R.', content: '5h tá dentro do razoável. o que geralmente avaliam: código limpo, README mostrando como você raciocinou, estrutura que indica que você sabe o que tá fazendo. trata como miniatura de projeto real. é uma entrevista disfarçada.', created_at: ago(24 * 3600000) },
      { id: 'sc10', user_name: 'Pedro L.', content: 'Red flag seria: mais de 8h, pedido muito específico pra resolver problema real do negócio deles, sem entrevista depois. 5h com contexto técnico claro = normal em empresa séria.', created_at: ago(22 * 3600000) },
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
    content: 'Alguém conseguiu emprego em Portugal sem ter morado lá antes? tô pesquisando faz meses e fico em dúvida sobre como deixar o linkedin atrativo pra recrutadores de lá. meu perfil tá em pt-br — preciso mudar o idioma? colocar que estou aberto a relocação onde?',
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
    content: 'Mudança simples que fez diferença no LinkedIn: troquei meu headline de "Analista de Dados" pra "Data Analyst | Python · SQL · Power BI | ajudando empresas a tomar decisões com dados". parece besteira mas as visualizações do perfil subiram muito em duas semanas. palavras-chave técnicas + o que você faz de verdade = recrutador te acha.',
    likes_count: 67, comments_count: 1, created_at: ago(6 * 24 * 3600000),
    comments: [
      { id: 'sc14', user_name: 'Sofia T.', content: 'fui fazer o meu agora 😅 você separou as skills com · mesmo? funcionou no mobile também?', created_at: ago(5.5 * 24 * 3600000) },
    ],
  },
]

const LOCAL_POSTS_KEY = 'nj_community_v2'
const LOCAL_LIKES_KEY = 'nj_community_v2_likes'

// ─── Perfis demo (modo sem Supabase) ──────────────────────────────────────────

const AREA_LABELS = {
  tech:'Tecnologia / Dev', product_ux:'Product Design / UX', data_ai:'Dados, Analytics e IA',
  marketing:'Marketing / Comunicação', sales:'Vendas / Comercial', hr:'RH / Pessoas',
  finance:'Financeiro / Controladoria', management:'Gestão / Operações', consulting:'Consultoria',
  law:'Direito / Jurídico', engineering:'Engenharia', agro:'Agronegócio',
  health:'Saúde e Ciências da Vida', education:'Educação / EdTech', logistics:'Logística',
  security:'Segurança da Informação', investment:'Mercado Financeiro', creative:'Audiovisual e Design',
  media:'Jornalismo e Mídia', hospitality:'Turismo e Hotelaria', fashion:'Moda e Varejo',
  public:'Concursos Públicos', startup:'Startups e Empreendedorismo', purpose:'ESG e Terceiro Setor',
}

const SEED_PROFILES = {
  'Maria S.': { area:'marketing',  job_title:'Analista de Marketing Sênior', location:'São Paulo, SP', bio:'Fechei um contrato após 4 meses de busca — reescrever o CV para ATS fez toda a diferença. Feliz em compartilhar o que aprendi.', open_to_mentor:true,  looking_for_peer:false, skills:['Google Ads','SEO','CRM','Copywriting'], linkedin_url:'' },
  'Pedro L.': { area:'sales',      job_title:'Executivo de Vendas B2B', location:'Campinas, SP', bio:'Acredito que networking direto com o time é o diferencial. Passando por processo seletivo em 3 empresas — bora trocar experiência?', open_to_mentor:false, looking_for_peer:true,  skills:['CRM','Outbound','Negociação','SaaS'], linkedin_url:'' },
  'Lucas R.': { area:'finance',    job_title:'Analista Financeiro Pleno', location:'Rio de Janeiro, RJ', bio:'Aprendi a negociar salário — e quero ajudar outros a não deixar dinheiro na mesa. Aqui para trocar experiências sobre FP&A.', open_to_mentor:true,  looking_for_peer:false, skills:['Excel','Power BI','FP&A','Valuation'], linkedin_url:'' },
  'Carla M.': { area:'creative',   job_title:'UX/UI Designer', location:'Florianópolis, SC', bio:'Fiz transição de RH para UX/Design em 6 meses, 1h por dia antes do trabalho. Tenho portfólio público — me pergunte!', open_to_mentor:false, looking_for_peer:true,  skills:['Figma','User Research','Prototipagem','Acessibilidade'], linkedin_url:'' },
  'João F.':  { area:'tech',       job_title:'Frontend Developer', location:'Remoto (Brasil)', bio:'Dev frontend buscando o próximo desafio. Curioso por natureza, especialmente sobre processos técnicos e pair programming.', open_to_mentor:false, looking_for_peer:true,  skills:['React','TypeScript','Node.js','CSS'], linkedin_url:'' },
  'Sofia T.': { area:'hr',         job_title:'People Partner', location:'Belo Horizonte, MG', bio:'RH estratégico — processos seletivos, cultura e bem-estar. Partilho aprendizagens sobre saúde mental na busca de emprego.', open_to_mentor:true,  looking_for_peer:false, skills:['Employer Branding','ATS','HRBP','D&I'], linkedin_url:'' },
  'Ana O.':   { area:'product_ux', job_title:'UX Researcher', location:'São Paulo, SP', bio:'Pesquisadora UX em transição de carreira. Portfólio em construção, trocando figurinhas com quem está no mesmo caminho.', open_to_mentor:false, looking_for_peer:true,  skills:['Pesquisa Qualitativa','Entrevistas','Usabilidade','Figma'], linkedin_url:'' },
  'Rafa M.':  { area:'management', job_title:'Gerente de Projetos', location:'Lisboa, Portugal', bio:'Gestão de projetos internacionais. Explorando oportunidades na Europa — dicas sobre mercado europeu são sempre bem-vindas.', open_to_mentor:false, looking_for_peer:true,  skills:['PMP','Agile','Scrum','OKRs'], linkedin_url:'' },
  'Bruno K.': { area:'tech',       job_title:'Engenheiro de Software Sênior', location:'Curitiba, PR', bio:'Especialista em ATS e otimização de CV. Pequenas mudanças de formatação que geram muito mais retornos de recrutadores.', open_to_mentor:true,  looking_for_peer:false, skills:['Python','AWS','System Design','SQL'], linkedin_url:'' },
}

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

function Avatar({ name, size = 'md', src }) {
  const [imgErr, setImgErr] = useState(false)
  const sz = size === 'sm' ? 'w-7 h-7 text-xs' : size === 'lg' ? 'w-11 h-11 text-base' : 'w-9 h-9 text-sm'
  if (src && !imgErr) {
    return <img src={src} alt={name} className={`${sz} rounded-full object-cover flex-shrink-0`} onError={() => setImgErr(true)} />
  }
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

// ─── Profile modal ────────────────────────────────────────────────────────────

function ProfileModal({ name, userId, onClose, onMessage, currentUser }) {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [imgErr, setImgErr] = useState(false)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      if (!userId || userId === 'seed') {
        const seed = SEED_PROFILES[name]
        if (!cancelled) setProfile(seed ? { name, ...seed } : { name })
      } else if (supabaseConfigured) {
        const { data } = await supabase
          .from('profiles')
          .select('name, area, bio, open_to_mentor, looking_for_peer, profile_private, avatar_url, job_title, location, linkedin_url, skills')
          .eq('id', userId)
          .single()
        if (!cancelled) setProfile(data || { name })
      } else {
        // demo mode — show logged-in user's own profile data
        const saved = LS.get('nj_net_profile', null)
        if (!cancelled) setProfile(saved ? { name, ...saved } : { name })
      }
      if (!cancelled) setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [userId, name])

  const displayName = profile?.name || name
  const isSeed = !userId || userId === 'seed'
  const canDM = !profile?.profile_private && onMessage && !isSeed && userId !== currentUser?.id

  // Small reusable avatar (handles photo + initials fallback)
  const AvatarDisplay = ({ sizeClass, textClass }) => {
    if (profile?.avatar_url && !imgErr) {
      return (
        <img src={profile.avatar_url} alt={displayName}
          className={`${sizeClass} rounded-full object-cover flex-shrink-0`}
          onError={() => setImgErr(true)} />
      )
    }
    return (
      <div className={`${sizeClass} ${avatarColor(displayName)} rounded-full flex items-center justify-center text-white font-black flex-shrink-0`}>
        <span className={textClass}>{displayName.slice(0, 2).toUpperCase()}</span>
      </div>
    )
  }

  // ── Expanded (full profile) ──────────────────────────────────────────────────
  if (expanded) {
    return (
      <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-2 sm:p-4 animate-fade-in" onClick={onClose}>
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>

          {/* Cover header */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-6 pt-6 pb-14 relative flex-shrink-0">
            <button onClick={() => setExpanded(false)} className="absolute top-4 left-4 flex items-center gap-1 text-white/70 hover:text-white text-sm transition-colors">
              ← Voltar
            </button>
            <button onClick={onClose} className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-lg transition-colors">×</button>
          </div>

          {/* Avatar + action row */}
          <div className="-mt-10 px-6 flex items-end justify-between flex-shrink-0">
            <div className="border-4 border-white rounded-full shadow-lg">
              <AvatarDisplay sizeClass="w-20 h-20" textClass="text-2xl" />
            </div>
            {canDM && (
              <button
                onClick={() => { onClose(); onMessage(userId) }}
                className="mb-1 flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors shadow"
              >
                💬 Mensagem
              </button>
            )}
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
            {loading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-7 bg-slate-200 rounded w-48" />
                <div className="h-4 bg-slate-100 rounded w-32" />
              </div>
            ) : profile?.profile_private ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">🔒</div>
                <h2 className="font-black text-slate-800 text-xl mb-2">{displayName}</h2>
                <p className="text-slate-400 text-sm">Este utilizador optou por manter o perfil privado.</p>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="font-black text-slate-800 text-xl leading-tight">{displayName}</h2>
                  {profile?.job_title && <p className="text-slate-500 text-sm mt-0.5">{profile.job_title}</p>}
                  {profile?.location && (
                    <p className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                      <span>📍</span>{profile.location}
                    </p>
                  )}
                </div>

                {profile?.area && (
                  <span className="inline-block text-blue-600 text-xs font-semibold px-3 py-1 bg-blue-50 rounded-full">
                    {AREA_LABELS[profile.area] || profile.area}
                  </span>
                )}

                {profile?.bio && (
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Sobre</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{profile.bio}</p>
                  </div>
                )}

                {profile?.skills?.length > 0 && (
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((s) => (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold">{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                {(profile?.open_to_mentor || profile?.looking_for_peer) && (
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Disponibilidade</p>
                    <div className="flex gap-2 flex-wrap">
                      {profile.open_to_mentor && <span className="text-xs px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 font-semibold">🧭 Disponível para mentoria</span>}
                      {profile.looking_for_peer && <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">🔎 Busca parceiro(a)</span>}
                    </div>
                  </div>
                )}

                {profile?.linkedin_url && (
                  <a
                    href={profile.linkedin_url.startsWith('http') ? profile.linkedin_url : `https://${profile.linkedin_url}`}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    🔗 Ver LinkedIn
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ── Compact card (default) ───────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <AvatarDisplay sizeClass="w-16 h-16" textClass="text-2xl" />
          </div>

          {loading ? (
            <div className="space-y-2 animate-pulse">
              <div className="h-5 bg-slate-200 rounded-lg w-36 mx-auto" />
              <div className="h-3 bg-slate-100 rounded w-24 mx-auto" />
            </div>
          ) : profile?.profile_private ? (
            <>
              <h2 className="font-black text-slate-800 text-lg mb-4">{displayName}</h2>
              <div className="flex flex-col items-center gap-2 text-slate-400">
                <span className="text-3xl">🔒</span>
                <span className="text-sm">Este utilizador optou por manter o perfil privado.</span>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-black text-slate-800 text-lg leading-tight">{displayName}</h2>
              {profile?.job_title && <p className="text-slate-500 text-xs mt-0.5 mb-1">{profile.job_title}</p>}
              {profile?.location && <p className="text-slate-400 text-[11px] mb-2">📍 {profile.location}</p>}
              {profile?.area && (
                <span className="inline-block text-blue-600 text-xs font-semibold px-3 py-1 bg-blue-50 rounded-full mb-3">
                  {AREA_LABELS[profile.area] || profile.area}
                </span>
              )}
              {profile?.bio ? (
                <p className="text-slate-600 text-sm leading-relaxed mb-3 line-clamp-3">{profile.bio}</p>
              ) : (
                <p className="text-slate-400 text-sm mb-3">Perfil de networking não preenchido.</p>
              )}
              {(profile?.open_to_mentor || profile?.looking_for_peer) && (
                <div className="flex justify-center gap-2 flex-wrap mb-3">
                  {profile.open_to_mentor && <span className="text-xs px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 font-semibold">🧭 Mentoria</span>}
                  {profile.looking_for_peer && <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">🔎 Parceiro(a)</span>}
                </div>
              )}
              <button onClick={() => setExpanded(true)} className="text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Ver perfil completo →
              </button>
            </>
          )}
        </div>
        <div className="border-t border-slate-100 px-6 py-3 flex items-center justify-between gap-3">
          <button onClick={onClose} className="text-sm text-slate-500 hover:text-slate-700 font-semibold transition-colors">
            Fechar
          </button>
          {!loading && canDM && (
            <button
              onClick={() => { onClose(); onMessage(userId) }}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors"
            >
              💬 Enviar mensagem
            </button>
          )}
        </div>
      </div>
    </div>
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

function CommentsSection({ post, user, isAdmin, onAddComment, onDeleteComment, onClickName }) {
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

  const deleteComment = async (commentId) => {
    await onDeleteComment(post.id, commentId)
    setComments((prev) => (prev || []).filter((c) => c.id !== commentId))
  }

  const list = comments || []

  return (
    <div className="mt-3 pt-3 border-t border-slate-100 space-y-2.5">
      {comments === null && supabaseConfigured && (
        <p className="text-center text-xs text-slate-400 py-2">Carregando comentários...</p>
      )}
      {list.map((c) => (
        <div key={c.id} className="flex gap-2.5 group">
          <button onClick={() => onClickName({ name: c.user_name, userId: c.user_id || 'seed' })} className="flex-shrink-0">
            <Avatar name={c.user_name} size="sm" />
          </button>
          <div className="flex-1 bg-slate-50 rounded-xl px-3 py-2">
            <div className="flex items-baseline gap-2 mb-0.5">
              <button
                onClick={() => onClickName({ name: c.user_name, userId: c.user_id || 'seed' })}
                className="font-semibold text-slate-700 text-xs hover:text-blue-600 transition-colors"
              >
                {c.user_name}
              </button>
              <span className="text-slate-400 text-[11px]">{formatTime(c.created_at)}</span>
              {isAdmin && (
                <button
                  onClick={() => deleteComment(c.id)}
                  className="ml-auto text-[10px] text-slate-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                >
                  excluir
                </button>
              )}
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

function PostCard({ post, user, isAdmin, onLike, onDelete, onAddComment, onDeleteComment, onClickName }) {
  const [showComments, setShowComments] = useState(false)
  const commentCount = post.comments_count ?? post.comments?.length ?? 0
  const isOwn = post.user_id === user?.id && post.user_id !== 'seed'
  const canDelete = isOwn || isAdmin

  return (
    <div className={`bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow ${isAdmin && !isOwn ? 'border-slate-200' : 'border-slate-100'}`}>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <button onClick={() => onClickName({ name: post.user_name, userId: post.user_id })} className="flex-shrink-0">
              <Avatar name={post.user_name} />
            </button>
            <div>
              <button
                onClick={() => onClickName({ name: post.user_name, userId: post.user_id })}
                className="font-semibold text-slate-800 text-sm hover:text-blue-600 transition-colors text-left"
              >
                {post.user_name}
              </button>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-slate-400 text-xs">{formatTime(post.created_at)}</span>
                <CatBadge category={post.category} />
                {post.user_id === 'seed' && isAdmin && (
                  <span className="text-[10px] text-slate-400 font-medium">seed</span>
                )}
              </div>
            </div>
          </div>
          {canDelete && (
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
          <CommentsSection
            post={post}
            user={user}
            isAdmin={isAdmin}
            onAddComment={onAddComment}
            onDeleteComment={onDeleteComment}
            onClickName={onClickName}
          />
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

// ─── Admin: painel de notificação de sistema ──────────────────────────────────

function AdminNotifPanel() {
  const [title, setTitle]   = useState('')
  const [body, setBody]     = useState('')
  const [sent, setSent]     = useState(false)

  const handleSend = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addNotification('system', title.trim(), body.trim())
    setTitle('')
    setBody('')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <form onSubmit={handleSend} className="bg-red-50 border border-red-200 rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-bold text-red-700">📢 Enviar Notificação de Sistema</span>
        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-600">ADMIN</span>
      </div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título da notificação"
        maxLength={80}
        className="w-full text-sm border border-red-200 rounded-xl px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-red-300 bg-white"
        required
      />
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Mensagem (opcional)"
        maxLength={160}
        className="w-full text-sm border border-red-200 rounded-xl px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-red-300 bg-white"
      />
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors"
      >
        {sent ? '✓ Enviada!' : 'Enviar'}
      </button>
    </form>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function CommunityPage({ user, onGoToMessages }) {
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('recent')
  const [composerOpen, setComposerOpen] = useState(false)
  const [composerCategory, setComposerCategory] = useState('geral')
  const [loading, setLoading] = useState(true)
  const [profileTarget, setProfileTarget] = useState(null) // { name, userId }

  const isAdmin = user?.email === ADMIN_EMAIL || !supabaseConfigured
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
      const current = posts.find((p) => p.id === postId)?.comments_count || 0
      await supabase.from('community_posts').update({ comments_count: current + 1 }).eq('id', postId)
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

  const handleDeleteComment = async (postId, commentId) => {
    if (supabaseConfigured) {
      await supabase.from('community_comments').delete().eq('id', commentId)
      const current = posts.find((p) => p.id === postId)?.comments_count || 0
      await supabase.from('community_posts').update({ comments_count: Math.max(0, current - 1) }).eq('id', postId)
    } else {
      setPosts((prev) => prev.map((p) => {
        if (p.id !== postId) return p
        const updated = { ...p, comments: (p.comments || []).filter((c) => c.id !== commentId), comments_count: Math.max(0, (p.comments_count || 0) - 1) }
        if (p.user_id !== 'seed') {
          const saved = LS.get(LOCAL_POSTS_KEY, [])
          LS.set(LOCAL_POSTS_KEY, saved.map((sp) => sp.id === postId ? updated : sp))
        }
        return updated
      }))
    }
    setPosts((prev) => prev.map((p) =>
      p.id === postId ? { ...p, comments_count: Math.max(0, (p.comments_count || 0) - 1) } : p
    ))
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
      {profileTarget && (
        <ProfileModal
          name={profileTarget.name}
          userId={profileTarget.userId}
          onClose={() => setProfileTarget(null)}
          onMessage={onGoToMessages ? (id) => { setProfileTarget(null); onGoToMessages(id) } : null}
          currentUser={user}
        />
      )}

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-800">Comunidade</h1>
            {isAdmin && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 border border-red-200">Admin</span>
            )}
          </div>
          <p className="text-slate-500 text-sm mt-1">Partilhe, aprenda e cresça com outros na mesma jornada.</p>
        </div>
        <button
          onClick={() => { setComposerCategory('geral'); setComposerOpen(true) }}
          className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex-shrink-0"
        >
          + Publicar
        </button>
      </div>

      {/* Admin: enviar notificação de sistema */}
      {isAdmin && <AdminNotifPanel />}

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
              isAdmin={isAdmin}
              onLike={handleLike}
              onDelete={handleDelete}
              onAddComment={handleAddComment}
              onDeleteComment={handleDeleteComment}
              onClickName={setProfileTarget}
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
