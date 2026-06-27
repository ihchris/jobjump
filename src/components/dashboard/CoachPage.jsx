import { useState, useEffect, useRef } from 'react'
import { supabase } from '../../lib/supabase'
import { Btn, Spinner } from '../ui'
import { LS } from '../../utils/storage'
import { isPaid } from '../../utils/plans'

const MAX_MSG_LENGTH = 2000
const THROTTLE_MS = 2000

const friendlyError = (msg) => {
  if (!msg) return 'Erro desconhecido. Tente novamente.'
  if (msg.includes('429') || msg.includes('limit_reached'))
    return msg.includes('Limite') ? msg : 'Muitas solicitações. Aguarde um momento e tente novamente.'
  if (msg.includes('500') || msg.includes('529'))
    return 'Serviço temporariamente indisponível. Tente novamente em breve.'
  if (msg.toLowerCase().includes('network') || msg.toLowerCase().includes('fetch'))
    return 'Erro de conexão. Verifique sua internet.'
  return 'Não foi possível obter resposta. Tente novamente.'
}

const SUGGESTIONS = [
  'Como posso melhorar meu CV?',
  'Quais perguntas podem fazer em uma entrevista?',
  'Como negociar o salário?',
  'Como abordar recrutadores no LinkedIn?',
]

export default function CoachPage({ user }) {
  const [msgs, setMsgs] = useState(() => LS.get('nj_chat', []))
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [lastSent, setLastSent] = useState(0)
  const bottomRef = useRef(null)

  useEffect(() => {
    LS.set('nj_chat', msgs.slice(-10))
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    if (Date.now() - lastSent < THROTTLE_MS) return
    if (text.length > MAX_MSG_LENGTH) {
      setMsgs((m) => [...m, {
        role: 'assistant',
        content: `⚠️ Mensagem muito longa (máximo ${MAX_MSG_LENGTH} caracteres).`,
        ts: Date.now(),
      }])
      return
    }

    setLastSent(Date.now())
    const userMsg = { role: 'user', content: text, ts: Date.now() }
    setMsgs((m) => [...m, userMsg])
    setInput('')
    setLoading(true)

    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) throw new Error('Sessão expirada. Faça login novamente.')

      const history = [...msgs.slice(-8), userMsg]
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { messages: history.map((m) => ({ role: m.role, content: m.content })) },
      })

      if (error) throw new Error(error.message)

      if (data?.error === 'limit_reached') {
        setMsgs((m) => [...m, {
          role: 'assistant',
          content: `🔒 ${data.message}`,
          ts: Date.now(),
        }])
        setLoading(false)
        return
      }

      setMsgs((m) => [...m, { role: 'assistant', content: data.content[0].text, ts: Date.now() }])
    } catch (e) {
      setMsgs((m) => [...m, {
        role: 'assistant',
        content: `⚠️ ${friendlyError(e.message)}`,
        ts: Date.now(),
      }])
    }

    setLoading(false)
  }

  const isPro = isPaid(user?.plan)

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] md:h-screen animate-fade-in">
      <div className="p-5 border-b border-slate-100 bg-white flex items-center justify-between flex-shrink-0">
        <div>
          <h1 className="text-xl font-black text-slate-800">Coach IA 🤖</h1>
          <p className="text-slate-400 text-xs mt-0.5">
            {isPro ? 'Plano Pro · mensagens ilimitadas' : `Plano Grátis · ${5} mensagens/dia`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isPro
            ? <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">⭐ Pro</span>
            : <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Grátis</span>
          }
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {msgs.length === 0 && (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="font-bold text-slate-700 mb-2">Seu Coach de Carreira pessoal</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto">
              Faça qualquer pergunta sobre CV, entrevistas, networking ou estratégia de carreira.
            </p>
            <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setInput(s)}
                  className="text-left text-xs bg-white border border-slate-200 rounded-xl p-3 hover:border-blue-300 hover:bg-blue-50 transition-all text-slate-600"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : ''}`}>
            {m.role === 'assistant' && (
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-1">
                🤖
              </div>
            )}
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
              ${m.role === 'user'
                ? 'bg-blue-600 text-white rounded-tr-sm'
                : 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm shadow-sm'}`}>
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">🤖</div>
            <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <div className="dot-typing"><span /><span /><span /></div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="p-4 border-t border-slate-100 bg-white flex-shrink-0">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value.slice(0, MAX_MSG_LENGTH))}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && send()}
            placeholder="Faça uma pergunta sobre carreira..."
            className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Btn onClick={send} disabled={loading || !input.trim()} variant="primary" size="md">
            {loading ? <Spinner size="w-4 h-4" color="border-white" /> : '→'}
          </Btn>
        </div>
        <div className="flex items-center justify-between mt-1.5">
          {msgs.length > 0 ? (
            <button
              onClick={() => { setMsgs([]); LS.del('nj_chat') }}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Limpar conversa
            </button>
          ) : <span />}
          {input.length > MAX_MSG_LENGTH * 0.8 && (
            <span className={`text-xs ${input.length >= MAX_MSG_LENGTH ? 'text-red-500' : 'text-amber-500'}`}>
              {input.length}/{MAX_MSG_LENGTH}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
