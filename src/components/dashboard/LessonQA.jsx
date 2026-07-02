import { useState, useEffect, useCallback } from 'react'
import { LS } from '../../utils/storage'
import { supabase, supabaseConfigured } from '../../lib/supabase'

const AVATAR_COLORS = ['bg-blue-500', 'bg-indigo-500', 'bg-violet-500', 'bg-emerald-500', 'bg-orange-500', 'bg-rose-500', 'bg-cyan-500', 'bg-teal-500']
function avatarColor(name) {
  let h = 0
  for (const c of (name || '')) h = ((h * 31) + c.charCodeAt(0)) | 0
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length]
}

function formatTime(ts) {
  const diff = Date.now() - new Date(ts).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'agora mesmo'
  if (m < 60) return `há ${m} min`
  const h = Math.floor(m / 60)
  if (h < 24) return `há ${h}h`
  return `há ${Math.floor(h / 24)}d`
}

const LOCAL_KEY = 'nj_lesson_qa'

// ─── Demo: perguntas simuladas para a primeira lição de cada módulo ───────────
const SEED_QA = {
  '1-1': [{
    id: 'seed_q1', user_name: 'Marina T.', content: 'Alguém sabe se vale a pena colocar objetivo profissional no topo do CV ou isso já caiu em desuso?',
    created_at: new Date(Date.now() - 3 * 3600000).toISOString(),
    answers: [{ id: 'seed_a1', user_name: 'Diego S.', content: 'Já caiu bastante em desuso — recrutadores preferem um resumo com suas competências e resultados. O objetivo geralmente já fica implícito na vaga que você aplicou.', created_at: new Date(Date.now() - 2.5 * 3600000).toISOString() }],
  }],
}

function loadDemoQA(lessonId) {
  const all = LS.get(LOCAL_KEY, {})
  const mine = all[lessonId] || []
  const seed = SEED_QA[lessonId] || []
  return [...mine, ...seed]
}

export default function LessonQA({ user, moduleId, lessonId }) {
  const [questions, setQuestions] = useState([])
  const [newQuestion, setNewQuestion] = useState('')
  const [answerDrafts, setAnswerDrafts] = useState({})
  const [openAnswerFor, setOpenAnswerFor] = useState(null)

  const load = useCallback(async () => {
    if (supabaseConfigured) {
      const { data: qs } = await supabase
        .from('content_questions')
        .select('*')
        .eq('lesson_id', lessonId)
        .order('created_at', { ascending: false })
      const ids = (qs || []).map((q) => q.id)
      let answersByQ = {}
      if (ids.length) {
        const { data: as } = await supabase.from('content_answers').select('*').in('question_id', ids).order('created_at', { ascending: true })
        answersByQ = (as || []).reduce((acc, a) => {
          (acc[a.question_id] ||= []).push(a)
          return acc
        }, {})
      }
      setQuestions((qs || []).map((q) => ({ ...q, answers: answersByQ[q.id] || [] })))
    } else {
      setQuestions(loadDemoQA(lessonId))
    }
  }, [lessonId])

  useEffect(() => { load() }, [load])

  const userName = user?.name?.split(' ').slice(0, 2).join(' ') || 'Utilizador'

  const saveDemo = (updated) => {
    const all = LS.get(LOCAL_KEY, {})
    all[lessonId] = updated.filter((q) => !q.id.startsWith('seed_'))
    LS.set(LOCAL_KEY, all)
  }

  const askQuestion = async () => {
    const content = newQuestion.trim()
    if (content.length < 5) return
    setNewQuestion('')

    if (supabaseConfigured) {
      const { data } = await supabase.from('content_questions')
        .insert({ module_id: moduleId, lesson_id: lessonId, user_id: user.id, user_name: userName, content })
        .select().single()
      if (data) setQuestions((prev) => [{ ...data, answers: [] }, ...prev])
    } else {
      const q = { id: `q_${Date.now()}`, user_name: userName, content, created_at: new Date().toISOString(), answers: [] }
      const updated = [q, ...questions]
      setQuestions(updated)
      saveDemo(updated)
    }
  }

  const answerQuestion = async (questionId) => {
    const content = (answerDrafts[questionId] || '').trim()
    if (content.length < 2) return
    setAnswerDrafts((prev) => ({ ...prev, [questionId]: '' }))

    if (supabaseConfigured) {
      const { data } = await supabase.from('content_answers')
        .insert({ question_id: questionId, user_id: user.id, user_name: userName, content })
        .select().single()
      if (data) {
        setQuestions((prev) => prev.map((q) => q.id === questionId ? { ...q, answers: [...q.answers, data] } : q))
      }
    } else {
      const a = { id: `a_${Date.now()}`, user_name: userName, content, created_at: new Date().toISOString() }
      const updated = questions.map((q) => q.id === questionId ? { ...q, answers: [...q.answers, a] } : q)
      setQuestions(updated)
      saveDemo(updated)
    }
    setOpenAnswerFor(null)
  }

  return (
    <div className="mt-6 bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">💬</span>
        <h3 className="font-bold text-slate-800 text-sm">Dúvidas sobre esta lição</h3>
        <span className="text-slate-400 text-xs">{questions.length > 0 ? `${questions.length} pergunta${questions.length > 1 ? 's' : ''}` : ''}</span>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && askQuestion()}
          placeholder="Ficou com alguma dúvida? Pergunte para a comunidade..."
          className="flex-1 px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={askQuestion}
          disabled={newQuestion.trim().length < 5}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${newQuestion.trim().length >= 5 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
        >
          Perguntar
        </button>
      </div>

      {questions.length === 0 && (
        <p className="text-slate-400 text-xs text-center py-4">Seja o primeiro a perguntar algo sobre esta lição!</p>
      )}

      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="border-t border-slate-100 pt-4 first:border-t-0 first:pt-0">
            <div className="flex items-start gap-2.5">
              <div className={`w-7 h-7 rounded-full ${avatarColor(q.user_name)} text-white flex items-center justify-center font-bold text-xs flex-shrink-0`}>
                {q.user_name[0]?.toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700 text-xs">{q.user_name}</span>
                  <span className="text-slate-300 text-xs">{formatTime(q.created_at)}</span>
                </div>
                <p className="text-slate-700 text-sm mt-0.5">{q.content}</p>

                {q.answers.map((a) => (
                  <div key={a.id} className="flex items-start gap-2 mt-3 ml-2 pl-3 border-l-2 border-blue-100">
                    <div className={`w-6 h-6 rounded-full ${avatarColor(a.user_name)} text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0`}>
                      {a.user_name[0]?.toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-600 text-xs">{a.user_name}</span>
                        <span className="text-slate-300 text-xs">{formatTime(a.created_at)}</span>
                      </div>
                      <p className="text-slate-600 text-xs mt-0.5">{a.content}</p>
                    </div>
                  </div>
                ))}

                {openAnswerFor === q.id ? (
                  <div className="flex gap-2 mt-2 ml-2">
                    <input
                      autoFocus
                      value={answerDrafts[q.id] || ''}
                      onChange={(e) => setAnswerDrafts((prev) => ({ ...prev, [q.id]: e.target.value }))}
                      onKeyDown={(e) => e.key === 'Enter' && answerQuestion(q.id)}
                      placeholder="Escreva sua resposta..."
                      className="flex-1 px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button onClick={() => answerQuestion(q.id)} className="text-xs font-bold text-blue-600 hover:text-blue-800 px-2">Enviar</button>
                  </div>
                ) : (
                  <button onClick={() => setOpenAnswerFor(q.id)} className="text-xs font-bold text-blue-500 hover:text-blue-700 mt-2 ml-2">
                    Responder
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
