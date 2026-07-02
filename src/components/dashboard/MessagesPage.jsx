import { useState, useEffect, useRef, useCallback } from 'react'
import { LS } from '../../utils/storage'
import { supabase, supabaseConfigured } from '../../lib/supabase'
import { addNotification } from '../../utils/notifications'

// ─── Constantes partilhadas ────────────────────────────────────────────────────
const AVATAR_COLORS = ['bg-blue-500','bg-indigo-500','bg-violet-500','bg-emerald-500','bg-orange-500','bg-rose-500','bg-cyan-500','bg-teal-500']
function avatarColor(name) {
  let h = 0
  for (const c of (name || '')) h = ((h * 31) + c.charCodeAt(0)) | 0
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length]
}

const AREA_LABELS = {
  tech:'Tecnologia / Dev', product_ux:'Product Design / UX', data_ai:'Dados, Analytics e IA',
  marketing:'Marketing / Comunicação', sales:'Vendas / Comercial', hr:'RH / Pessoas',
  finance:'Financeiro / Controladoria', management:'Gestão / Operações', consulting:'Consultoria',
  law:'Direito / Jurídico', engineering:'Engenharia', agro:'Agronegócio',
  health:'Saúde', education:'Educação / EdTech', logistics:'Logística',
  security:'Segurança da Informação', investment:'Mercado Financeiro', creative:'Audiovisual e Design',
  media:'Jornalismo e Mídia', hospitality:'Turismo e Hotelaria', fashion:'Moda e Varejo',
  public:'Concursos Públicos', startup:'Startups e Empreendedorismo', purpose:'ESG e Terceiro Setor',
}

const CONNECTIONS_KEY = 'nj_connections'
const MESSAGES_KEY    = 'nj_messages'

const SEED_MEMBERS = [
  { id:'seed_m1', name:'Beatriz Nunes',  area:'tech',       bio:'Frontend há 4 anos, migrando para dados.' },
  { id:'seed_m2', name:'Rodrigo Alves',  area:'finance',    bio:'Controller há 8 anos. Mentoria disponível.' },
  { id:'seed_m3', name:'Camila Duarte',  area:'marketing',  bio:'Growth marketer buscando vaga sênior.' },
  { id:'seed_m4', name:'Thiago Ramos',   area:'data_ai',    bio:'Data Scientist, 6 anos de mercado.' },
  { id:'seed_m5', name:'Larissa Prado',  area:'hr',         bio:'People Partner numa scale-up.' },
]
const SEED_REPLIES = [
  'Oi! Que bom te conectar por aqui 🙂 me conta um pouco mais do que você está buscando agora?',
  'Fico à disposição! Qual é o maior desafio que você está enfrentando na busca hoje?',
  'Legal saber disso. Já pensou em focar primeiro numa meta bem específica pra essa semana?',
  'Adorei a mensagem! Vamos combinar de trocar figurinha semanalmente por aqui mesmo?',
]

// ─── Helpers de data/hora ─────────────────────────────────────────────────────
function fmtPreview(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  const diff = Math.floor((Date.now() - d) / 86400000)
  if (diff === 0) return d.toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit' })
  if (diff === 1) return 'Ontem'
  if (diff < 7)  return d.toLocaleDateString('pt-BR', { weekday:'short' })
  return d.toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit' })
}

function fmtMsgTime(iso) {
  return new Date(iso).toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit' })
}

function fmtDateLabel(iso) {
  const d = new Date(iso)
  const diff = Math.floor((Date.now() - d) / 86400000)
  if (diff === 0) return 'Hoje'
  if (diff === 1) return 'Ontem'
  return d.toLocaleDateString('pt-BR', { day:'2-digit', month:'long' })
}

function newDay(msg, prev) {
  if (!prev) return true
  return new Date(prev.created_at).toDateString() !== new Date(msg.created_at).toDateString()
}

// ─── Chat thread ───────────────────────────────────────────────────────────────
function ChatThread({ user, peer, messages, onSend, onBack, loading }) {
  const [text, setText] = useState('')
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:'smooth' }) }, [messages])
  useEffect(() => { inputRef.current?.focus() }, [peer?.id])

  const send = () => {
    const t = text.trim()
    if (!t) return
    onSend(t)
    setText('')
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 bg-white flex-shrink-0">
        <button onClick={onBack} className="text-slate-400 hover:text-slate-600 text-xl leading-none md:hidden">←</button>
        <div className={`w-9 h-9 rounded-full ${avatarColor(peer.name)} text-white flex items-center justify-center font-black text-sm flex-shrink-0`}>
          {peer.name[0]?.toUpperCase()}
        </div>
        <div className="min-w-0">
          <div className="font-bold text-slate-800 text-sm">{peer.name}</div>
          {peer.area && <div className="text-xs text-slate-400">{AREA_LABELS[peer.area] || peer.area}</div>}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-0.5">
        {loading && (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full" />
          </div>
        )}
        {!loading && messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-4xl mb-3">👋</div>
            <p className="text-slate-400 text-sm text-center">Sem mensagens ainda.<br />Diga olá a {peer.name}!</p>
          </div>
        )}
        {messages.map((m, i) => {
          const mine = m.sender_id === user.id
          return (
            <div key={m.id}>
              {newDay(m, messages[i - 1]) && (
                <div className="flex justify-center my-4">
                  <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{fmtDateLabel(m.created_at)}</span>
                </div>
              )}
              <div className={`flex ${mine ? 'justify-end' : 'justify-start'} mb-0.5`}>
                <div className="max-w-[75%]">
                  <div className={`rounded-2xl px-3.5 py-2 text-sm leading-relaxed break-words
                    ${mine ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-slate-100 text-slate-800 rounded-bl-sm'}`}>
                    {m.content}
                  </div>
                  <div className={`text-[10px] text-slate-300 mt-0.5 ${mine ? 'text-right' : 'text-left'}`}>
                    {fmtMsgTime(m.created_at)}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-3 pb-3 pt-2 border-t border-slate-100 bg-white flex-shrink-0">
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
            placeholder={`Mensagem para ${peer.name}…`}
            rows={1}
            className="flex-1 px-3.5 py-2.5 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none max-h-24 overflow-y-auto"
          />
          <button
            onClick={send}
            disabled={!text.trim()}
            className="w-9 h-9 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-base"
          >
            ➤
          </button>
        </div>
        <p className="text-[10px] text-slate-300 mt-1.5 text-center">Enter para enviar · Shift+Enter para nova linha</p>
      </div>
    </div>
  )
}

// ─── Lista de conversas ────────────────────────────────────────────────────────
function ConversationList({ user, conversations, activePeerId, onSelect, onGoNetworking }) {
  return (
    <div className="flex flex-col h-full bg-white border-r border-slate-100">
      <div className="px-4 pt-4 pb-3 border-b border-slate-100 flex-shrink-0">
        <h2 className="font-black text-slate-800 text-lg">Mensagens</h2>
        <p className="text-xs text-slate-400 mt-0.5">Apenas conexões aceites podem trocar mensagens</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="text-5xl mb-4">💬</div>
            <p className="text-slate-600 text-sm font-bold mb-1">Sem conversas ainda</p>
            <p className="text-slate-400 text-xs mb-4 leading-relaxed">
              Conecte-se com outros membros em Networking e inicie uma conversa direta.
            </p>
            <button
              onClick={onGoNetworking}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 border border-blue-200 px-3 py-1.5 rounded-xl"
            >
              Ir para Networking →
            </button>
          </div>
        )}
        {conversations.map((conv) => (
          <button
            key={conv.peer.id}
            onClick={() => onSelect(conv.peer)}
            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left
              ${activePeerId === conv.peer.id ? 'bg-blue-50 border-l-[3px] border-blue-600' : 'border-l-[3px] border-transparent'}`}
          >
            <div className="relative flex-shrink-0">
              <div className={`w-10 h-10 rounded-full ${avatarColor(conv.peer.name)} text-white flex items-center justify-center font-black text-sm`}>
                {conv.peer.name[0]?.toUpperCase()}
              </div>
              {conv.unread > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-black flex items-center justify-center">
                  {conv.unread > 9 ? '9+' : conv.unread}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className={`text-sm truncate ${conv.unread > 0 ? 'font-bold text-slate-900' : 'font-semibold text-slate-700'}`}>
                  {conv.peer.name}
                </span>
                {conv.lastMessage && (
                  <span className="text-[10px] text-slate-400 flex-shrink-0">{fmtPreview(conv.lastMessage.created_at)}</span>
                )}
              </div>
              <p className={`text-xs truncate mt-0.5 ${conv.unread > 0 ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>
                {conv.lastMessage
                  ? (conv.lastMessage.sender_id === user.id ? 'Você: ' : '') + conv.lastMessage.content
                  : <em>Diga olá!</em>}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── MessagesPage ────────────────────────────────────────────────────────────
export default function MessagesPage({ user, initPeerId, onUnreadChange, onGoNetworking }) {
  const [members,      setMembers]      = useState([])
  const [connections,  setConnections]  = useState([])
  const [allMsgs,      setAllMsgs]      = useState([])    // used in demo mode for conversation list
  const [chatMsgs,     setChatMsgs]     = useState([])    // current thread
  const [activePeer,   setActivePeer]   = useState(null)
  const [chatLoading,  setChatLoading]  = useState(false)
  const [showChat,     setShowChat]     = useState(false) // mobile: toggle between panels

  // ── Load ──────────────────────────────────────────────────────────────────
  const load = useCallback(async () => {
    if (supabaseConfigured) {
      const [connRes, membersRes, msgsRes] = await Promise.all([
        supabase.from('connections').select('*').or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`).eq('status', 'accepted'),
        supabase.from('profiles').select('id, name, area, bio').neq('id', user.id),
        supabase.from('messages').select('*').or(`sender_id.eq.${user.id},recipient_id.eq.${user.id}`).order('created_at', { ascending: true }),
      ])
      setConnections(connRes.data || [])
      setMembers(membersRes.data || [])
      setAllMsgs(msgsRes.data || [])
      const unread = (msgsRes.data || []).filter(m => m.recipient_id === user.id && !m.read_at).length
      onUnreadChange?.(unread)
    } else {
      const conns = LS.get(CONNECTIONS_KEY, [])
      const msgs  = LS.get(MESSAGES_KEY, [])
      setConnections(conns)
      setMembers(SEED_MEMBERS)
      setAllMsgs(msgs)
      const unread = msgs.filter(m => m.recipient_id === user.id && !m.read).length
      onUnreadChange?.(unread)
    }
  }, [user.id, onUnreadChange])

  useEffect(() => { load() }, [load])

  // ── Auto-open initPeerId ──────────────────────────────────────────────────
  useEffect(() => {
    if (!initPeerId || members.length === 0) return
    const peer = members.find(m => m.id === initPeerId)
    if (peer) openChat(peer)
  }, [initPeerId, members]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Real-time (Supabase) ──────────────────────────────────────────────────
  useEffect(() => {
    if (!supabaseConfigured) return
    const ch = supabase.channel('msg_page_rt')
      .on('postgres_changes', {
        event: 'INSERT', schema: 'public', table: 'messages',
        filter: `recipient_id=eq.${user.id}`,
      }, ({ new: msg }) => {
        setAllMsgs(prev => [...prev, msg])
        if (activePeer?.id === msg.sender_id) {
          setChatMsgs(prev => [...prev, msg])
          supabase.from('messages').update({ read_at: new Date().toISOString() }).eq('id', msg.id)
        } else {
          const sender = members.find(m => m.id === msg.sender_id)
          if (sender) addNotification('system', `Nova mensagem de ${sender.name}`, msg.content.slice(0, 80))
          setAllMsgs(prev => {
            const unread = prev.filter(m => m.recipient_id === user.id && !m.read_at).length + 1
            onUnreadChange?.(unread)
            return [...prev, msg]
          })
        }
      })
      .subscribe()
    return () => supabase.removeChannel(ch)
  }, [user.id, activePeer?.id, members, onUnreadChange])

  // ── Open conversation ─────────────────────────────────────────────────────
  const openChat = async (peer) => {
    setActivePeer(peer)
    setShowChat(true)
    setChatLoading(true)

    if (supabaseConfigured) {
      const { data } = await supabase.from('messages').select('*')
        .or(`and(sender_id.eq.${user.id},recipient_id.eq.${peer.id}),and(sender_id.eq.${peer.id},recipient_id.eq.${user.id})`)
        .order('created_at', { ascending: true })
      setChatMsgs(data || [])
      setChatLoading(false)
      // Mark all from peer as read
      await supabase.from('messages').update({ read_at: new Date().toISOString() })
        .eq('recipient_id', user.id).eq('sender_id', peer.id).is('read_at', null)
      setAllMsgs(prev => prev.map(m =>
        m.sender_id === peer.id && m.recipient_id === user.id ? { ...m, read_at: new Date().toISOString() } : m
      ))
      const newUnread = allMsgs.filter(m => m.recipient_id === user.id && !m.read_at && m.sender_id !== peer.id).length
      onUnreadChange?.(newUnread)
    } else {
      const all = LS.get(MESSAGES_KEY, [])
      const thread = all.filter(m =>
        (m.sender_id === user.id && m.recipient_id === peer.id) ||
        (m.sender_id === peer.id && m.recipient_id === user.id)
      )
      setChatMsgs(thread)
      setChatLoading(false)
      const updated = all.map(m =>
        m.sender_id === peer.id && m.recipient_id === user.id ? { ...m, read: true } : m
      )
      LS.set(MESSAGES_KEY, updated)
      setAllMsgs(updated)
      const unread = updated.filter(m => m.recipient_id === user.id && !m.read).length
      onUnreadChange?.(unread)
    }
  }

  // ── Send message ──────────────────────────────────────────────────────────
  const sendMessage = async (content) => {
    const tempId = `msg_${Date.now()}`
    const tempMsg = { id: tempId, sender_id: user.id, recipient_id: activePeer.id, content, created_at: new Date().toISOString() }
    setChatMsgs(prev => [...prev, tempMsg])

    if (supabaseConfigured) {
      const { data } = await supabase.from('messages')
        .insert({ sender_id: user.id, recipient_id: activePeer.id, content })
        .select().single()
      if (data) {
        setChatMsgs(prev => prev.map(m => m.id === tempId ? data : m))
        setAllMsgs(prev => [...prev.filter(m => m.id !== tempId), data])
      }
    } else {
      const all = LS.get(MESSAGES_KEY, [])
      LS.set(MESSAGES_KEY, [...all, tempMsg])
      setAllMsgs(prev => [...prev, tempMsg])
      if (activePeer.id.startsWith('seed_')) {
        setTimeout(() => {
          const reply = {
            id: `msg_${Date.now() + 1}`,
            sender_id: activePeer.id, recipient_id: user.id,
            content: SEED_REPLIES[Math.floor(Math.random() * SEED_REPLIES.length)],
            created_at: new Date().toISOString(),
            read: false,
          }
          setChatMsgs(prev => [...prev, reply])
          const all2 = LS.get(MESSAGES_KEY, [])
          LS.set(MESSAGES_KEY, [...all2, reply])
          setAllMsgs(prev => [...prev, reply])
          onUnreadChange?.((n) => typeof n === 'function' ? n(0) + 0 : n) // already in chat, stays 0
          addNotification('system', `Nova mensagem de ${activePeer.name}`, reply.content.slice(0, 80))
        }, 1200)
      }
    }
  }

  // ── Build conversation list ───────────────────────────────────────────────
  const membersById = Object.fromEntries(members.map(m => [m.id, m]))
  const peerIds = connections.map(c => c.requester_id === user.id ? c.addressee_id : c.requester_id).filter(id => membersById[id])

  const conversations = peerIds.map(peerId => {
    const peer = membersById[peerId]
    const thread = allMsgs.filter(m =>
      (m.sender_id === user.id && m.recipient_id === peerId) ||
      (m.sender_id === peerId && m.recipient_id === user.id)
    ).sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    const lastMessage = thread[thread.length - 1] || null
    const unread = thread.filter(m => m.sender_id === peerId && m.recipient_id === user.id && !(supabaseConfigured ? m.read_at : m.read)).length
    return { peer, lastMessage, unread }
  }).sort((a, b) => {
    if (!a.lastMessage && !b.lastMessage) return 0
    if (!a.lastMessage) return 1
    if (!b.lastMessage) return -1
    return new Date(b.lastMessage.created_at) - new Date(a.lastMessage.created_at)
  })

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="h-full flex overflow-hidden">
      {/* Lista — oculta no mobile se chat estiver aberto */}
      <div className={`${showChat ? 'hidden md:flex' : 'flex'} flex-col w-full md:w-80 lg:w-96 flex-shrink-0`}>
        <ConversationList
          user={user}
          conversations={conversations}
          activePeerId={activePeer?.id}
          onSelect={openChat}
          onGoNetworking={onGoNetworking}
        />
      </div>

      {/* Chat thread */}
      <div className={`${showChat ? 'flex' : 'hidden md:flex'} flex-col flex-1 min-w-0`}>
        {activePeer ? (
          <ChatThread
            user={user}
            peer={activePeer}
            messages={chatMsgs}
            onSend={sendMessage}
            onBack={() => setShowChat(false)}
            loading={chatLoading}
          />
        ) : (
          <div className="hidden md:flex flex-col items-center justify-center h-full text-center p-8 bg-slate-50">
            <div className="text-5xl mb-4">💬</div>
            <p className="text-slate-500 text-sm font-medium">Selecione uma conversa para começar</p>
          </div>
        )}
      </div>
    </div>
  )
}
