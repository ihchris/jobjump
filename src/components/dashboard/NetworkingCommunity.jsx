import { useState, useEffect, useCallback } from 'react'
import { LS } from '../../utils/storage'
import { supabase, supabaseConfigured } from '../../lib/supabase'
import ProfileModal from './ProfileModal'

// ─── Áreas (mesmo vocabulário do Diagnóstico, para consistência) ──────────────
const AREA_LIST = [
  { value: 'tech',        label: 'Tecnologia / Dev' },
  { value: 'product_ux',  label: 'Product Design / UX' },
  { value: 'data_ai',     label: 'Dados, Analytics e IA' },
  { value: 'marketing',   label: 'Marketing / Comunicação' },
  { value: 'sales',       label: 'Vendas / Comercial' },
  { value: 'hr',          label: 'RH / Pessoas' },
  { value: 'finance',     label: 'Financeiro / Controladoria' },
  { value: 'management',  label: 'Gestão / Operações' },
  { value: 'consulting',  label: 'Consultoria' },
  { value: 'law',         label: 'Direito / Jurídico' },
  { value: 'engineering', label: 'Engenharia' },
  { value: 'agro',        label: 'Agronegócio' },
  { value: 'health',      label: 'Saúde e Ciências da Vida' },
  { value: 'education',   label: 'Educação / EdTech' },
  { value: 'logistics',   label: 'Logística / Supply Chain' },
  { value: 'security',    label: 'Segurança da Informação' },
  { value: 'investment',  label: 'Mercado Financeiro / Banking' },
  { value: 'creative',    label: 'Audiovisual, Arquitetura e Design' },
  { value: 'media',       label: 'Jornalismo e Mídia Digital' },
  { value: 'hospitality', label: 'Turismo e Hotelaria' },
  { value: 'fashion',     label: 'Moda e Varejo' },
  { value: 'public',      label: 'Concursos Públicos' },
  { value: 'startup',     label: 'Startups e Empreendedorismo' },
  { value: 'purpose',     label: 'ESG e Terceiro Setor' },
]
const AREA_LABEL = Object.fromEntries(AREA_LIST.map((a) => [a.value, a.label]))

const AVATAR_COLORS = ['bg-blue-500', 'bg-indigo-500', 'bg-violet-500', 'bg-emerald-500', 'bg-orange-500', 'bg-rose-500', 'bg-cyan-500', 'bg-teal-500']
function avatarColor(name) {
  let h = 0
  for (const c of (name || '')) h = ((h * 31) + c.charCodeAt(0)) | 0
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length]
}

// ─── Modo demo: membros simulados ──────────────────────────────────────────────
const SEED_MEMBERS = [
  { id: 'seed_m1', name: 'Beatriz Nunes',  area: 'tech',       job_title: 'Frontend Developer → Dados', location: 'São Paulo, SP',      bio: 'Frontend há 4 anos, migrando para dados. Adoro trocar ideia sobre transição de carreira.', open_to_mentor: false, looking_for_peer: true,  skills: ['React','TypeScript','Python','SQL'],     linkedin_url: '', profile_private: false },
  { id: 'seed_m2', name: 'Rodrigo Alves',  area: 'finance',    job_title: 'Controller Sênior',           location: 'Rio de Janeiro, RJ', bio: 'Controller há 8 anos. Já ajudei várias pessoas a entrar em FP&A — de boa em conversar.',  open_to_mentor: true,  looking_for_peer: false, skills: ['FP&A','Excel','Power BI','Valuation'],  linkedin_url: '', profile_private: false },
  { id: 'seed_m3', name: 'Camila Duarte',  area: 'marketing',  job_title: 'Growth Marketer',             location: 'Belo Horizonte, MG', bio: 'Growth marketer, atualmente buscando vaga sênior. Bora fazer parceria de responsabilidade?', open_to_mentor: false, looking_for_peer: true,  skills: ['SEO','CRM','Growth','Analytics'],       linkedin_url: '', profile_private: false },
  { id: 'seed_m4', name: 'Thiago Ramos',   area: 'data_ai',    job_title: 'Data Scientist Sênior',       location: 'Campinas, SP',       bio: 'Data Scientist, 6 anos de mercado. Mentor voluntário para quem está migrando pra dados.',  open_to_mentor: true,  looking_for_peer: false, skills: ['Python','ML','SQL','Spark'],            linkedin_url: '', profile_private: false },
  { id: 'seed_m5', name: 'Larissa Prado',  area: 'hr',         job_title: 'People Partner',              location: 'Florianópolis, SC',  bio: 'People Partner numa scale-up. Feliz em trocar figurinha sobre processos seletivos.',       open_to_mentor: true,  looking_for_peer: true,  skills: ['HRBP','Recrutamento','D&I','OKRs'],    linkedin_url: '', profile_private: false },
  { id: 'seed_m6', name: 'Gustavo Lima',   area: 'consulting', job_title: 'Consultor Independente',      location: 'São Paulo, SP',      bio: 'Ex-Big4, hoje em consultoria independente. Buscando parceiros de estudo para case interview.', open_to_mentor: false, looking_for_peer: true, skills: ['Strategy','Cases','Excel','PowerPoint'], linkedin_url: '', profile_private: false },
  { id: 'seed_m7', name: 'Fernanda Costa', area: 'law',        job_title: 'Advogada → Compliance',       location: 'Curitiba, PR',       bio: 'Advogada migrando para compliance corporativo. Adoraria encontrar mentor(a) da área.',     open_to_mentor: false, looking_for_peer: true,  skills: ['LGPD','Contratos','Compliance','GDPR'], linkedin_url: '', profile_private: false },
  { id: 'seed_m8', name: 'Marcelo Vieira', area: 'management', job_title: 'Head de Operações',           location: 'Porto Alegre, RS',   bio: 'Head de operações, 12 anos de experiência. Mentor de gestão e liderança.',              open_to_mentor: true,  looking_for_peer: false, skills: ['Agile','OKRs','Gestão','PMP'],          linkedin_url: '', profile_private: false },
]

const SEED_REPLIES = [
  'Oi! Que bom te conectar por aqui 🙂 me conta um pouco mais do que você está buscando agora?',
  'Fico à disposição! Qual é o maior desafio que você está enfrentando na busca hoje?',
  'Legal saber disso. Já pensou em focar primeiro numa meta bem específica pra essa semana?',
  'Adorei a mensagem! Vamos combinar de trocar figurinha semanalmente por aqui mesmo?',
]

const PROFILE_KEY     = 'nj_net_profile'
const CONNECTIONS_KEY = 'nj_connections'
const MESSAGES_KEY    = 'nj_messages'

const SUB_TABS = [
  { id: 'directory',   label: 'Diretório',  icon: '🌐' },
  { id: 'connections', label: 'Conexões',   icon: '🤝' },
  { id: 'mentoria',    label: 'Mentoria',   icon: '🧭' },
]

// ─── Perfil de networking (área, bio, disponibilidade) ─────────────────────────
function ProfileEditor({ user, profile, onSave }) {
  const [open, setOpen] = useState(!profile?.area)
  const [form, setForm] = useState({
    area: profile?.area || '',
    bio: profile?.bio || '',
    open_to_mentor: profile?.open_to_mentor || false,
    looking_for_peer: profile?.looking_for_peer || false,
  })

  const inp = 'w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

  const save = () => {
    onSave(form)
    setOpen(false)
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3 text-left hover:border-blue-300 transition-colors"
      >
        <div className={`w-10 h-10 rounded-full ${avatarColor(user.name)} text-white flex items-center justify-center font-black text-sm flex-shrink-0`}>
          {user.name?.[0]?.toUpperCase() || 'U'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-slate-800 text-sm">{user.name}</div>
          <div className="text-slate-400 text-xs">
            {profile?.area ? AREA_LABEL[profile.area] : 'Complete seu perfil de networking'}
            {profile?.open_to_mentor ? ' · 🧭 mentor(a) disponível' : ''}
            {profile?.looking_for_peer ? ' · 🔎 procurando parceiro(a)' : ''}
          </div>
        </div>
        <span className="text-blue-500 text-xs font-semibold">Editar →</span>
      </button>
    )
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 space-y-3">
      <div className="font-bold text-slate-800 text-sm">Seu perfil de networking</div>
      <div>
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Área</label>
        <select className={inp} value={form.area} onChange={(e) => setForm((f) => ({ ...f, area: e.target.value }))}>
          <option value="">Selecione...</option>
          {AREA_LIST.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
        </select>
      </div>
      <div>
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Bio curta</label>
        <textarea className={inp} rows={2} placeholder="Em que você trabalha, o que está buscando..." value={form.bio} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} />
      </div>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input type="checkbox" checked={form.open_to_mentor} onChange={(e) => setForm((f) => ({ ...f, open_to_mentor: e.target.checked }))} />
          Quero ser mentor(a) de outros membros
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input type="checkbox" checked={form.looking_for_peer} onChange={(e) => setForm((f) => ({ ...f, looking_for_peer: e.target.checked }))} />
          Procuro um parceiro(a) de responsabilidade (accountability partner)
        </label>
      </div>
      <button
        onClick={save}
        disabled={!form.area}
        className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${form.area ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
      >
        Salvar perfil →
      </button>
    </div>
  )
}

// ─── Card de membro ─────────────────────────────────────────────────────────
function MemberCard({ member, connectionState, onConnect, onMessage, onViewProfile, intent }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-4 flex items-start gap-3">
      <button onClick={() => onViewProfile(member)} className="flex-shrink-0">
        {member.avatar_url
          ? <img src={member.avatar_url} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
          : <div className={`w-10 h-10 rounded-full ${avatarColor(member.name)} text-white flex items-center justify-center font-black text-sm`}>{member.name[0]?.toUpperCase()}</div>
        }
      </button>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <button onClick={() => onViewProfile(member)} className="font-bold text-slate-800 text-sm hover:text-blue-600 transition-colors">
            {member.name}
          </button>
          {member.area && <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-semibold">{AREA_LABEL[member.area] || member.area}</span>}
          {member.open_to_mentor && <span className="text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 font-semibold">🧭 Mentor(a)</span>}
          {member.looking_for_peer && <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">🔎 Parceiro(a)</span>}
        </div>
        {member.job_title && <p className="text-slate-400 text-xs mt-0.5">{member.job_title}{member.location ? ` · 📍 ${member.location}` : ''}</p>}
        {member.bio && <p className="text-slate-500 text-xs mt-1 leading-relaxed line-clamp-2">{member.bio}</p>}
        <div className="mt-2 flex items-center gap-3">
          {connectionState === 'accepted' ? (
            <button onClick={() => onMessage(member)} className="text-xs font-bold text-blue-600 hover:text-blue-800">💬 Mensagem</button>
          ) : connectionState === 'pending' ? (
            <span className="text-xs text-slate-400 font-semibold">Pedido enviado — aguardando resposta</span>
          ) : connectionState === 'incoming' ? (
            <span className="text-xs text-amber-600 font-semibold">Quer se conectar com você — veja em Conexões</span>
          ) : (
            <button onClick={() => onConnect(member)} className="text-xs font-bold text-blue-600 hover:text-blue-800">
              {intent === 'mentor_request' ? '🧭 Pedir mentoria' : '+ Conectar'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Chat 1:1 ─────────────────────────────────────────────────────────────────
function ChatThread({ user, peer, messages, onSend, onBack }) {
  const [text, setText] = useState('')

  const send = () => {
    if (!text.trim()) return
    onSend(peer, text.trim())
    setText('')
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 flex flex-col h-[28rem]">
      <div className="flex items-center gap-3 p-4 border-b border-slate-100">
        <button onClick={onBack} className="text-slate-400 hover:text-slate-600 text-sm">←</button>
        <div className={`w-8 h-8 rounded-full ${avatarColor(peer.name)} text-white flex items-center justify-center font-black text-xs`}>
          {peer.name[0]?.toUpperCase()}
        </div>
        <span className="font-bold text-slate-800 text-sm">{peer.name}</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.length === 0 && <p className="text-slate-300 text-xs text-center mt-8">Nenhuma mensagem ainda. Diga oi!</p>}
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.sender_id === user.id ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${m.sender_id === user.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-slate-100 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Escreva uma mensagem..."
          className="flex-1 px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={send} className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700">Enviar</button>
      </div>
    </div>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function NetworkingCommunity({ user, onGoToMessages }) {
  const [subTab, setSubTab] = useState('directory')
  const [profile, setProfile] = useState(null)
  const [members, setMembers] = useState([])
  const [connections, setConnections] = useState([])
  const [messages, setMessages] = useState([])
  const [areaFilter, setAreaFilter] = useState('all')
  const [chatWith, setChatWith] = useState(null)
  const [profileTarget, setProfileTarget] = useState(null) // member object

  // ── Load ──────────────────────────────────────────────────────────────────
  const load = useCallback(async () => {
    if (supabaseConfigured) {
      const [profileRes, membersRes, connRes] = await Promise.all([
        supabase.from('profiles').select('area, bio, open_to_mentor, looking_for_peer').eq('id', user.id).single(),
        supabase.from('profiles').select('id, name, plan, area, bio, open_to_mentor, looking_for_peer, avatar_url, job_title, location, linkedin_url, skills, profile_private').neq('id', user.id),
        supabase.from('connections').select('*').or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`),
      ])
      setProfile(profileRes.data || null)
      setMembers(membersRes.data || [])
      setConnections(connRes.data || [])
    } else {
      setProfile(LS.get(PROFILE_KEY, null))
      setMembers(SEED_MEMBERS)
      setConnections(LS.get(CONNECTIONS_KEY, []))
    }
  }, [user.id])

  useEffect(() => { load() }, [load])

  // ── Real-time (Supabase apenas) ──────────────────────────────────────────────
  useEffect(() => {
    if (!supabaseConfigured) return
    const channel = supabase
      .channel('networking_updates')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'connections' }, () => load())
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, ({ new: incoming }) => {
        if (incoming.sender_id === chatWith?.id || incoming.recipient_id === chatWith?.id) {
          setMessages((prev) => prev.some((m) => m.id === incoming.id) ? prev : [...prev, incoming])
        }
      })
      .subscribe()
    return () => supabase.removeChannel(channel)
  }, [load, chatWith?.id])

  // ── Perfil ────────────────────────────────────────────────────────────────
  const saveProfile = async (form) => {
    setProfile(form)
    if (supabaseConfigured) {
      await supabase.from('profiles').update(form).eq('id', user.id)
    } else {
      LS.set(PROFILE_KEY, form)
    }
  }

  // ── Conexões ──────────────────────────────────────────────────────────────
  const connectionWith = (memberId) => {
    const c = connections.find((c) =>
      (c.requester_id === user.id && c.addressee_id === memberId) ||
      (c.addressee_id === user.id && c.requester_id === memberId)
    )
    if (!c) return null
    if (c.status === 'accepted') return 'accepted'
    if (c.status === 'pending') return c.requester_id === user.id ? 'pending' : 'incoming'
    return null
  }

  const requestConnection = async (member, intent = 'peer') => {
    if (supabaseConfigured) {
      const { data } = await supabase.from('connections')
        .insert({ requester_id: user.id, addressee_id: member.id, intent })
        .select().single()
      if (data) setConnections((prev) => [...prev, data])
    } else {
      const conn = { id: `conn_${Date.now()}`, requester_id: user.id, addressee_id: member.id, status: 'accepted', intent, created_at: new Date().toISOString() }
      const next = [...connections, conn]
      setConnections(next)
      LS.set(CONNECTIONS_KEY, next)
    }
  }

  const respondConnection = async (conn, accept) => {
    const status = accept ? 'accepted' : 'declined'
    if (supabaseConfigured) {
      await supabase.from('connections').update({ status, responded_at: new Date().toISOString() }).eq('id', conn.id)
      setConnections((prev) => prev.map((c) => c.id === conn.id ? { ...c, status } : c))
    } else {
      const next = connections.map((c) => c.id === conn.id ? { ...c, status } : c)
      setConnections(next)
      LS.set(CONNECTIONS_KEY, next)
    }
  }

  // ── Mensagens ─────────────────────────────────────────────────────────────
  const openChat = async (member) => {
    setChatWith(member)
    if (supabaseConfigured) {
      const { data } = await supabase.from('messages').select('*')
        .or(`and(sender_id.eq.${user.id},recipient_id.eq.${member.id}),and(sender_id.eq.${member.id},recipient_id.eq.${user.id})`)
        .order('created_at', { ascending: true })
      setMessages(data || [])
    } else {
      const all = LS.get(MESSAGES_KEY, [])
      setMessages(all.filter((m) =>
        (m.sender_id === user.id && m.recipient_id === member.id) ||
        (m.sender_id === member.id && m.recipient_id === user.id)
      ))
    }
  }

  const sendMessage = async (peer, content) => {
    const msg = { id: `msg_${Date.now()}`, sender_id: user.id, recipient_id: peer.id, content, created_at: new Date().toISOString() }
    setMessages((prev) => [...prev, msg])

    if (supabaseConfigured) {
      const { data } = await supabase.from('messages').insert({ sender_id: user.id, recipient_id: peer.id, content }).select().single()
      if (data) setMessages((prev) => prev.map((m) => m.id === msg.id ? data : m))
    } else {
      const all = LS.get(MESSAGES_KEY, [])
      LS.set(MESSAGES_KEY, [...all, msg])
      // simula resposta de um membro demo, para a conversa parecer viva
      if (peer.id.startsWith('seed_')) {
        setTimeout(() => {
          const reply = { id: `msg_${Date.now() + 1}`, sender_id: peer.id, recipient_id: user.id, content: SEED_REPLIES[Math.floor(Math.random() * SEED_REPLIES.length)], created_at: new Date().toISOString() }
          setMessages((prev) => [...prev, reply])
          const all2 = LS.get(MESSAGES_KEY, [])
          LS.set(MESSAGES_KEY, [...all2, reply])
        }, 1200)
      }
    }
  }

  // ── Derivados ─────────────────────────────────────────────────────────────
  const membersById = Object.fromEntries(members.map((m) => [m.id, m]))
  const incomingRequests = connections.filter((c) => c.status === 'pending' && c.addressee_id === user.id)
  const acceptedConnections = connections
    .filter((c) => c.status === 'accepted')
    .map((c) => membersById[c.requester_id === user.id ? c.addressee_id : c.requester_id])
    .filter(Boolean)

  const directoryMembers = members.filter((m) => areaFilter === 'all' || m.area === areaFilter)
  const mentors = members.filter((m) => m.open_to_mentor)

  if (chatWith) {
    return (
      <div className="max-w-lg">
        <ChatThread user={user} peer={chatWith} messages={messages} onSend={sendMessage} onBack={() => setChatWith(null)} />
      </div>
    )
  }

  return (
    <div className="space-y-5">
      {profileTarget && (
        <ProfileModal
          name={profileTarget.name}
          userId={profileTarget.id}
          prefetchedProfile={profileTarget}
          onClose={() => setProfileTarget(null)}
          onMessage={profileTarget.id !== user.id
            ? (id) => { setProfileTarget(null); onGoToMessages ? onGoToMessages(id) : openChat(membersById[id]) }
            : null}
          currentUser={user}
        />
      )}
      <ProfileEditor user={user} profile={profile} onSave={saveProfile} />

      {!supabaseConfigured && (
        <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
          ⚠️ Modo Demo: os membros abaixo são simulados. Configure o Supabase para conectar com utilizadores reais da plataforma.
        </p>
      )}

      <div className="flex gap-2">
        {SUB_TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setSubTab(t.id)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all
              ${subTab === t.id ? 'bg-blue-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}
          >
            {t.icon} {t.label}
            {t.id === 'connections' && incomingRequests.length > 0 && (
              <span className="w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">{incomingRequests.length}</span>
            )}
          </button>
        ))}
      </div>

      {subTab === 'directory' && (
        <div className="space-y-3">
          <select
            value={areaFilter}
            onChange={(e) => setAreaFilter(e.target.value)}
            className="border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todas as áreas</option>
            {AREA_LIST.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
          </select>
          <div className="grid sm:grid-cols-2 gap-3">
            {directoryMembers.map((m) => (
              <MemberCard
                key={m.id}
                member={m}
                connectionState={connectionWith(m.id)}
                onConnect={(member) => requestConnection(member, 'peer')}
                onMessage={onGoToMessages ? (m) => onGoToMessages(m.id) : openChat}
                onViewProfile={setProfileTarget}
              />
            ))}
            {directoryMembers.length === 0 && <p className="text-slate-400 text-sm">Nenhum membro encontrado nessa área ainda.</p>}
          </div>
        </div>
      )}

      {subTab === 'connections' && (
        <div className="space-y-4">
          {incomingRequests.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Pedidos recebidos</div>
              {incomingRequests.map((c) => {
                const m = membersById[c.requester_id]
                if (!m) return null
                return (
                  <div key={c.id} className="bg-white rounded-2xl border border-amber-200 p-4 flex items-center gap-3">
                    <button onClick={() => setProfileTarget(m)} className="flex-shrink-0">
                      {m.avatar_url
                        ? <img src={m.avatar_url} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                        : <div className={`w-10 h-10 rounded-full ${avatarColor(m.name)} text-white flex items-center justify-center font-black text-sm`}>{m.name[0]}</div>
                      }
                    </button>
                    <div className="flex-1">
                      <button onClick={() => setProfileTarget(m)} className="font-bold text-slate-800 text-sm hover:text-blue-600 transition-colors">{m.name}</button>
                      <div className="text-slate-400 text-xs">{c.intent === 'mentor_request' ? 'Pediu mentoria' : 'Quer se conectar'}</div>
                    </div>
                    <button onClick={() => respondConnection(c, true)} className="text-xs font-bold bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700">Aceitar</button>
                    <button onClick={() => respondConnection(c, false)} className="text-xs text-slate-400 hover:text-slate-600 px-2">Recusar</button>
                  </div>
                )
              })}
            </div>
          )}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Suas conexões</div>
            {acceptedConnections.length === 0 && <p className="text-slate-400 text-sm">Ainda sem conexões — visite o Diretório para começar.</p>}
            {acceptedConnections.map((m) => (
              <div key={m.id} className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-3">
                <button onClick={() => setProfileTarget(m)} className="flex-shrink-0">
                  {m.avatar_url
                    ? <img src={m.avatar_url} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                    : <div className={`w-10 h-10 rounded-full ${avatarColor(m.name)} text-white flex items-center justify-center font-black text-sm`}>{m.name[0]}</div>
                  }
                </button>
                <div className="flex-1">
                  <button onClick={() => setProfileTarget(m)} className="font-bold text-slate-800 text-sm hover:text-blue-600 transition-colors block">{m.name}</button>
                  <div className="text-slate-400 text-xs">{AREA_LABEL[m.area] || m.area}</div>
                </div>
                <button onClick={() => onGoToMessages ? onGoToMessages(m.id) : openChat(m)} className="text-xs font-bold text-blue-600 hover:text-blue-800">💬 Mensagem</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {subTab === 'mentoria' && (
        <div className="space-y-3">
          <p className="text-slate-500 text-sm">
            Marque acima que quer ser mentor(a) ou procure alguém disponível para te orientar. Pareamento simples, sem burocracia.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {mentors.filter((m) => m.id !== user.id).map((m) => (
              <MemberCard
                key={m.id}
                member={m}
                connectionState={connectionWith(m.id)}
                onConnect={(member) => requestConnection(member, 'mentor_request')}
                onMessage={onGoToMessages ? (m) => onGoToMessages(m.id) : openChat}
                onViewProfile={setProfileTarget}
                intent="mentor_request"
              />
            ))}
            {mentors.length === 0 && <p className="text-slate-400 text-sm">Ainda não há mentores disponíveis nessa área — seja o primeiro a se marcar como mentor(a)!</p>}
          </div>
        </div>
      )}
    </div>
  )
}
