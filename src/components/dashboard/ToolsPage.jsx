import { useState, useEffect } from 'react'
import { Btn, Badge } from '../ui'
import { LS } from '../../utils/storage'

// ─── Ferramenta 1: Construtor de Respostas STAR ───────────────────────────────
const STAR_LIBRARY_KEY = 'nj_star_library'

function StarBuilder() {
  const [form, setForm] = useState({ situation: '', task: '', action: '', result: '' })
  const [output, setOutput] = useState('')
  const [saveLabel, setSaveLabel] = useState('')
  const [library, setLibrary] = useState(() => LS.get(STAR_LIBRARY_KEY, []))
  const [showLibrary, setShowLibrary] = useState(false)
  const [saved, setSaved] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const build = () => {
    if (!form.situation || !form.task || !form.action || !form.result) return
    setOutput(
      `${form.situation.trim()} Nesse contexto, minha responsabilidade era ${form.task.trim().toLowerCase().replace(/^eu\s+era\s+/i, '')}. ` +
      `Para resolver a situação, ${form.action.trim().toLowerCase().replace(/^eu\s+/i, '')}. ` +
      `Como resultado, ${form.result.trim().toLowerCase().replace(/^(o resultado foi|o resultado:|resultado:)\s*/i, '')}.`
    )
    setSaved(false)
  }
  const copy = () => navigator.clipboard.writeText(output)
  const saveToLibrary = () => {
    const label = saveLabel.trim() || `Resposta STAR — ${new Date().toLocaleDateString('pt-BR')}`
    const entry = { id: Date.now(), label, text: output, date: new Date().toLocaleDateString('pt-BR') }
    const next = [entry, ...library]
    setLibrary(next)
    LS.set(STAR_LIBRARY_KEY, next)
    setSaved(true)
    setSaveLabel('')
  }
  const deleteFromLibrary = (id) => {
    const next = library.filter((e) => e.id !== id)
    setLibrary(next)
    LS.set(STAR_LIBRARY_KEY, next)
  }
  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { k: 'situation', label: '📍 Situação', placeholder: 'Qual era o contexto? Ex: "Estava numa empresa de e-commerce onde as vendas tinham caído 20% num trimestre..."', rows: 3 },
          { k: 'task', label: '🎯 Tarefa', placeholder: 'Qual era seu papel ou responsabilidade? Ex: "Eu era responsável por analisar as causas e propor soluções..."', rows: 3 },
          { k: 'action', label: '⚡ Ação', placeholder: 'O que você fez concretamente? Ex: "Conduzi análise de dados, identifiquei que o problema estava no checkout mobile e redesenhei o fluxo..."', rows: 3 },
          { k: 'result', label: '🏆 Resultado', placeholder: 'Qual foi o impacto? Usa números! Ex: "A taxa de conversão mobile subiu 34% em 6 semanas, recuperando R$180k em receita..."', rows: 3 },
        ].map(({ k, label, placeholder, rows }) => (
          <div key={k}>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">{label}</label>
            <textarea className={inp} rows={rows} placeholder={placeholder} value={form[k]} onChange={set(k)} />
          </div>
        ))}
      </div>
      <Btn onClick={build} variant="primary" size="md" disabled={!form.situation || !form.task || !form.action || !form.result}>
        Gerar resposta STAR →
      </Btn>
      {output && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Resposta gerada</span>
            <button onClick={copy} className="text-xs text-blue-600 hover:text-blue-800 underline">Copiar</button>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">{output}</p>
          <p className="text-blue-500 text-xs">💡 Edite à vontade — esta é a base. Revise o tom e adicione detalhes específicos.</p>
          {!saved ? (
            <div className="flex gap-2 pt-1">
              <input
                className="flex-1 px-3 py-1.5 border border-blue-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                placeholder='Nome para salvar (ex: "Liderança em crise")...'
                value={saveLabel}
                onChange={(e) => setSaveLabel(e.target.value)}
              />
              <button onClick={saveToLibrary} className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 whitespace-nowrap">
                Salvar →
              </button>
            </div>
          ) : (
            <p className="text-green-600 text-xs font-semibold">✓ Salvo na biblioteca!</p>
          )}
        </div>
      )}

      {library.length > 0 && (
        <div className="border border-slate-100 rounded-xl overflow-hidden">
          <button
            onClick={() => setShowLibrary(!showLibrary)}
            className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-semibold text-slate-700"
          >
            <span>📚 Biblioteca de respostas ({library.length})</span>
            <span className="text-slate-400">{showLibrary ? '▲' : '▼'}</span>
          </button>
          {showLibrary && (
            <div className="divide-y divide-slate-100">
              {library.map((entry) => (
                <div key={entry.id} className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-700">{entry.label}</span>
                    <div className="flex gap-3">
                      <button onClick={() => navigator.clipboard.writeText(entry.text)} className="text-xs text-blue-500 hover:text-blue-700">Copiar</button>
                      <button onClick={() => deleteFromLibrary(entry.id)} className="text-xs text-slate-300 hover:text-red-400">✕</button>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{entry.text}</p>
                  <p className="text-xs text-slate-300 mt-1">{entry.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 2: Extrator de Palavras-chave ATS ────────────────────────────
const STOP_WORDS = new Set([
  'de','a','o','e','do','da','em','que','para','com','os','as','um','uma',
  'no','na','por','se','ao','dos','das','mais','mas','ou','sua','seu','ser',
  'ter','como','este','esta','nos','nas','são','foi','tem','uma','nem','já',
  'ele','ela','isso','esse','esta','pelo','pela','todos','todas','sobre','após',
  'entre','quando','então','onde','também','pode','podem','deve','devem',
  'the','and','of','to','in','a','is','for','on','with','at','by','from','an',
  'be','are','or','as','this','have','it','that','you','we','will','all','our',
])

function extractKeywords(text) {
  const words = text.toLowerCase().replace(/[^a-záéíóúãõâêôàüç\s-]/gi, ' ').split(/\s+/)
    .filter((w) => w.length > 3 && !STOP_WORDS.has(w))
  const freq = {}
  words.forEach((w) => { freq[w] = (freq[w] || 0) + 1 })
  return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 25).map(([word, count]) => ({ word, count }))
}

function ATSKeywordChecker() {
  const [jobDesc, setJobDesc] = useState('')
  const [cvText, setCvText] = useState('')
  const [result, setResult] = useState(null)
  const analyze = () => {
    if (!jobDesc.trim()) return
    const keywords = extractKeywords(jobDesc)
    const cvLower = cvText.toLowerCase()
    const matched = keywords.filter((k) => cvLower.includes(k.word))
    const missing = keywords.filter((k) => !cvLower.includes(k.word))
    setResult({ keywords, matched, missing })
  }
  const ta = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">📋 Descrição da vaga (cole aqui)</label>
          <textarea className={ta} rows={8} placeholder="Cole o texto completo da oferta de emprego aqui..." value={jobDesc} onChange={(e) => setJobDesc(e.target.value)} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">📄 Texto do seu CV (opcional)</label>
          <textarea className={ta} rows={8} placeholder="Cole o texto do seu CV aqui para ver o que está faltando..." value={cvText} onChange={(e) => setCvText(e.target.value)} />
        </div>
      </div>
      <Btn onClick={analyze} variant="primary" size="md" disabled={!jobDesc.trim()}>Analisar palavras-chave →</Btn>
      {result && (
        <div className="space-y-4">
          {cvText && (
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Total identificadas', value: result.keywords.length, color: 'text-slate-700', bg: 'bg-slate-50 border-slate-200' },
                { label: 'Presentes no CV', value: result.matched.length, color: 'text-green-700', bg: 'bg-green-50 border-green-200' },
                { label: 'Ausentes no CV', value: result.missing.length, color: 'text-red-600', bg: 'bg-red-50 border-red-200' },
              ].map((s) => (
                <div key={s.label} className={`${s.bg} border rounded-xl p-3 text-center`}>
                  <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          )}
          {cvText && result.missing.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2">🔴 Adicione estas palavras ao CV</p>
              <div className="flex flex-wrap gap-2">
                {result.missing.slice(0, 15).map((k) => (
                  <span key={k.word} className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">{k.word} ({k.count}×)</span>
                ))}
              </div>
            </div>
          )}
          {cvText && result.matched.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-2">🟢 Já presentes no CV</p>
              <div className="flex flex-wrap gap-2">
                {result.matched.map((k) => (
                  <span key={k.word} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">{k.word}</span>
                ))}
              </div>
            </div>
          )}
          {!cvText && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">📊 Top 25 palavras-chave desta vaga</p>
              <div className="flex flex-wrap gap-2">
                {result.keywords.map((k) => (
                  <span key={k.word} className="bg-white border border-slate-200 text-slate-700 text-xs px-2 py-1 rounded-full">
                    {k.word} <span className="text-slate-400">({k.count}×)</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 3: Calculadora Salarial ──────────────────────────────────────
const SALARY_DATA = {
  'Tecnologia — Desenvolvedor': { junior: [3000, 6000], pleno: [7000, 14000], senior: [14000, 25000], gerencia: [25000, 50000] },
  'Tecnologia — Data/BI': { junior: [3000, 6000], pleno: [6000, 12000], senior: [12000, 22000], gerencia: [22000, 40000] },
  'Tecnologia — DevOps/Cloud': { junior: [4000, 7000], pleno: [7000, 14000], senior: [14000, 28000], gerencia: [25000, 50000] },
  'Marketing Digital': { junior: [2000, 4000], pleno: [4000, 8000], senior: [8000, 15000], gerencia: [15000, 30000] },
  'Finanças e Contabilidade': { junior: [3000, 5000], pleno: [5000, 10000], senior: [10000, 20000], gerencia: [20000, 40000] },
  'Recursos Humanos': { junior: [2000, 4000], pleno: [4000, 7000], senior: [7000, 15000], gerencia: [15000, 28000] },
  'Vendas B2B': { junior: [2000, 4000], pleno: [4500, 9000], senior: [9000, 18000], gerencia: [18000, 35000] },
  'Produto (Product Manager)': { junior: [4000, 7000], pleno: [7000, 14000], senior: [14000, 25000], gerencia: [25000, 50000] },
  'Design (UX/UI)': { junior: [2500, 5000], pleno: [5000, 10000], senior: [10000, 18000], gerencia: [18000, 35000] },
  'Jurídico': { junior: [3000, 6000], pleno: [6000, 12000], senior: [12000, 22000], gerencia: [22000, 45000] },
  'Operações e Logística': { junior: [2000, 4000], pleno: [4000, 8000], senior: [8000, 15000], gerencia: [15000, 30000] },
  'Comunicação e RP': { junior: [2000, 4000], pleno: [4000, 8000], senior: [8000, 14000], gerencia: [14000, 25000] },
}
const SENIORITY_LABELS = { junior: 'Júnior (0-2 anos)', pleno: 'Pleno (2-5 anos)', senior: 'Sênior (5-10 anos)', gerencia: 'Gerência/Diretoria (8+ anos)' }
const COMPANY_MULT = { startup: 0.85, pme: 1.0, multinacional: 1.3, bigtech: 1.7 }
const COMPANY_LABELS = { startup: 'Startup (early stage)', pme: 'PME Nacional', multinacional: 'Multinacional', bigtech: 'Big Tech / FAANG' }
const CITY_MULT = { sp: 1.0, rj: 1.12, bsb: 1.05, cwb: 0.87, bh: 0.87, poa: 0.85, fln: 0.88, for: 0.80, rec: 0.78, man: 0.80, other: 0.78 }
const CITY_LABELS = { sp: 'São Paulo / SP', rj: 'Rio de Janeiro / RJ', bsb: 'Brasília / DF', cwb: 'Curitiba / PR', bh: 'Belo Horizonte / MG', poa: 'Porto Alegre / RS', fln: 'Florianópolis / SC', for: 'Fortaleza / CE', rec: 'Recife / PE', man: 'Manaus / AM', other: 'Outras cidades' }

function SalaryCalculator() {
  const [area, setArea] = useState('')
  const [seniority, setSeniority] = useState('')
  const [company, setCompany] = useState('pme')
  const [city, setCity] = useState('sp')
  const [result, setResult] = useState(null)
  const calculate = () => {
    if (!area || !seniority) return
    const base = SALARY_DATA[area][seniority]
    const mult = COMPANY_MULT[company] * CITY_MULT[city]
    const low = Math.round(base[0] * mult / 100) * 100
    const high = Math.round(base[1] * mult / 100) * 100
    const anchor = Math.round(high * 1.15 / 100) * 100
    setResult({ low, high, anchor })
  }
  const fmt = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
  const sel = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Área profissional</label>
          <select className={sel} value={area} onChange={(e) => { setArea(e.target.value); setResult(null) }}>
            <option value="">Selecione a área...</option>
            {Object.keys(SALARY_DATA).map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Nível de senioridade</label>
          <select className={sel} value={seniority} onChange={(e) => { setSeniority(e.target.value); setResult(null) }}>
            <option value="">Selecione o nível...</option>
            {Object.entries(SENIORITY_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Tipo de empresa</label>
          <select className={sel} value={company} onChange={(e) => { setCompany(e.target.value); setResult(null) }}>
            {Object.entries(COMPANY_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cidade</label>
          <select className={sel} value={city} onChange={(e) => { setCity(e.target.value); setResult(null) }}>
            {Object.entries(CITY_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
      </div>
      <Btn onClick={calculate} variant="primary" size="md" disabled={!area || !seniority}>Calcular faixa salarial →</Btn>
      {result && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
            {area} · {SENIORITY_LABELS[seniority]} · {COMPANY_LABELS[company]} · {CITY_LABELS[city]}
          </p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: 'Piso de mercado', value: fmt(result.low), sub: 'Não aceite abaixo disso', color: 'text-slate-700', bg: 'bg-white' },
              { label: 'Mediana de mercado', value: fmt(result.high), sub: 'Seu alvo ideal', color: 'text-blue-700', bg: 'bg-blue-100' },
              { label: 'Número-âncora', value: fmt(result.anchor), sub: 'Peça o número-âncora', color: 'text-green-700', bg: 'bg-green-100' },
            ].map((s) => (
              <div key={s.label} className={`${s.bg} rounded-xl p-3 text-center border border-white`}>
                <div className={`text-lg font-black ${s.color}`}>{s.value}</div>
                <div className="text-slate-500 text-xs mt-0.5 font-semibold">{s.label}</div>
                <div className="text-slate-400 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/60 rounded-xl p-3 text-xs text-slate-500">
            <strong>💡 Estratégia:</strong> Peça o <strong>número-âncora</strong> na negociação — você ancora alto e tem espaço para ceder. Nunca você ancora baixo.
          </div>
          <p className="text-xs text-slate-400 mt-2">Referência para mercado brasileiro 2024-2025 (CLT). Valores ajustados por cidade.</p>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 4: Gerador de Headline LinkedIn ───────────────────────────────
function LinkedInHeadline() {
  const [role, setRole] = useState('')
  const [value, setValue] = useState('')
  const [keyword, setKeyword] = useState('')
  const [headlines, setHeadlines] = useState([])
  const generate = () => {
    if (!role || !value) return
    const r = role.trim(), v = value.trim(), k = keyword.trim()
    setHeadlines([
      `${r} | ${v}${k ? ` | ${k}` : ''}`,
      `${r} especializado em ${v}${k ? ` · ${k}` : ''}`,
      `Ajudo empresas a ${v.toLowerCase()}${k ? ` | ${k}` : ''} | ${r}`,
      `${r} → ${v}${k ? ` | ${k}` : ''}`,
      `${v} | ${r}${k ? ` · ${k}` : ''}`,
    ])
  }
  const copy = (text) => navigator.clipboard.writeText(text)
  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cargo / especialidade</label>
          <input className={inp} placeholder="Ex: Marketing Manager" value={role} onChange={(e) => setRole(e.target.value)} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Proposta de valor</label>
          <input className={inp} placeholder="Ex: Growth & Aquisição B2B" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Palavra-chave extra (opcional)</label>
          <input className={inp} placeholder="Ex: 8 anos em SaaS" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </div>
      </div>
      <Btn onClick={generate} variant="primary" size="md" disabled={!role || !value}>Gerar headlines →</Btn>
      {headlines.length > 0 && (
        <div className="space-y-2">
          {headlines.map((h, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-3 hover:border-blue-300 transition-colors">
              <span className="text-sm text-slate-700">{h}</span>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`text-xs ${h.length > 220 ? 'text-red-500' : h.length > 180 ? 'text-amber-500' : 'text-green-600'}`}>{h.length}/220</span>
                <button onClick={() => copy(h)} className="text-xs text-blue-600 hover:text-blue-800 underline">Copiar</button>
              </div>
            </div>
          ))}
          <p className="text-xs text-slate-400">Limite do LinkedIn: 220 caracteres. Verde = bom · Amarelo = atenção · Vermelho = longo demais</p>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 5: Simulador de Entrevista ────────────────────────────────────
const INTERVIEW_QUESTIONS = {
  comportamental: [
    { q: 'Me fale sobre uma situação em que você teve que liderar sem ter autoridade formal.', dica: 'Use STAR. Foco em como você influenciou sem poder hierárquico — empatia, dados, alinhamento de interesses.', ex: 'Ex: "Em projeto cross-funcional, precisei alinhar 3 times sem ser gestor. Fiz reuniões individuais para entender motivações..."' },
    { q: 'Conte sobre um erro que cometeu e o que aprendeu com ele.', dica: 'Escolha um erro real mas não catastrófico. A parte mais importante é o aprendizado e o que mudou depois.', ex: 'Ex: "Subestimei o prazo de uma entrega por falta de reunião de alinhamento. Aprendi a sempre validar premissas antes de comprometer datas."' },
    { q: 'Como você prioriza quando tem múltiplas demandas urgentes ao mesmo tempo?', dica: 'Mencione um método ou framework (MoSCoW, Eisenhower, ICE). Dê um exemplo real de como aplicou.', ex: 'Ex: "Uso critérios de impacto × urgência. Primeiro comunico o gestor sobre o conflito, depois priorizo por impacto no negócio."' },
    { q: 'Conte sobre uma vez que você discordou fortemente do seu gestor. Como resolveu?', dica: 'Mostre que você é assertivo mas diplomático. Dados e fatos, não emoção. Respeito à decisão final.', ex: 'Ex: "Discordei sobre a estratégia de precificação. Preparei análise comparativa com 3 cenários e apresentei ao gestor. Ele aceitou o argumento."' },
    { q: 'Qual é a realização profissional da qual você mais se orgulha?', dica: 'Use STAR. Seja específico com números. Conecte ao impacto no negócio, não só ao esforço pessoal.', ex: 'Ex: "Criei sistema de automação que reduziu X horas/semana de trabalho manual e economizou R$Y/ano para a empresa."' },
    { q: 'Como você lida com prazos impossíveis ou metas muito desafiadoras?', dica: 'Mostre que você negocia de forma proativa, comunica riscos cedo e busca soluções criativas antes de aceitar sem questionar.', ex: 'Ex: "Quando recebi prazo de 2 semanas para entrega de 6, fiz mapeamento do que era essencial vs. nice-to-have e negociei escopo."' },
    { q: 'Descreva uma situação em que você teve que adaptar seu estilo de comunicação.', dica: 'Foco na consciência situacional — entender o interlocutor (técnico vs. executivo, introvertido vs. extrovertido) e se adaptar.', ex: 'Ex: "Apresentar resultado técnico para diretoria exigia trocar KPIs técnicos por impacto financeiro e de negócio."' },
    { q: 'Quando foi a última vez que você falhou em atingir uma meta? O que aconteceu?', dica: 'Honestidade conta mais do que perfeição. Mostre o que você controlava, o que estava fora do seu controle e o que mudou.', ex: 'Ex: "Meta de aquisição do Q3 ficou 15% abaixo. Canal de paid estava com CPA acima do esperado por mudança de algoritmo. Pivotamos para SEO."' },
    { q: 'Conte sobre uma vez que você teve que aprender algo muito rápido para resolver um problema.', dica: 'Mostre que você é autossuficiente na aprendizagem. Cursos, documentação, mentores, prática. Velocidade de aprendizado é muito valorizada.', ex: 'Ex: "Precisei implementar solução em Kubernetes em 1 semana sem experiência. Fiz curso intensivo de 3 dias + mentoria com colega sênior."' },
    { q: 'Como você dá feedback difícil a um colega ou membro da equipe?', dica: 'Mostre que você usa uma estrutura (SBI — Situação, Comportamento, Impacto) e foque no desenvolvimento, não na crítica.', ex: 'Ex: "Uso a estrutura: observação específica de comportamento → impacto que causou → sugestão de melhoria. Sempre em privado."' },
  ],
  situacional: [
    { q: 'Imagine que você assumiu uma nova função e descobriu que o processo principal da área está desatualizado e gerando erros. O que você faria?', dica: 'Mostre que você observa antes de agir (primeiros 30 dias), mapeia stakeholders, levanta dados e propõe soluções com base em evidências.', ex: 'Ex: "Primeiro documentaria o processo atual e os erros. Depois entenderia por que ficou assim. Só então proporia melhorias com dados."' },
    { q: 'Seu gestor pediu que você entregue um projeto em 2 semanas, mas você sabe que o prazo realista é 4. O que faz?', dica: 'Não diga "faço" nem "não consigo". Mostre que você negocia: escopo, prazo, recursos. Propõe alternativas.', ex: 'Ex: "Apresentaria mapeamento do escopo com estimativa fundamentada. Perguntaria o que é crítico para entregar em 2 semanas e o que pode esperar."' },
    { q: 'Você percebe que um colega está atribuindo a si mesmo os créditos de um trabalho que foi colaborativo. O que faz?', dica: 'Mostra que você aborda diretamente e com empatia antes de escalar. Não é passivo nem agressivo.', ex: 'Ex: "Conversaria em privado com o colega explicando como me senti e pedindo que isso fosse corrigido. Se reincidisse, envolveria o gestor."' },
    { q: 'Você está liderando um projeto e percebe que ele vai atrasar por um problema fora do seu controle. Quem você avisa e como?', dica: 'Comunicação proativa é essencial. Antecipe, traga o problema com possíveis soluções, não só com más notícias.', ex: 'Ex: "Primeiro informaria o gestor com transparência sobre o risco e os 3 cenários de mitigação. Depois enviaria update para os stakeholders."' },
    { q: 'Você foi designado para um projeto com uma equipe que você não conhece e que claramente não está engajada. Como você abordaria os primeiros dias?', dica: 'Mostrar liderança situacional: entender antes de agir. Escuta, empatia, conexão humana primeiro; execução depois.', ex: 'Ex: "Iniciaria com reuniões individuais de 20 min para entender motivações e frustrações. Antes de propor qualquer mudança, construiria confiança."' },
    { q: 'Como você lidaria com um cliente (interno ou externo) que está sempre insatisfeito, independente do que é entregue?', dica: 'Mostrar que você busca entender a raiz do problema: expectativas mal alinhadas? Histórico de decepções? Estilo de comunicação?', ex: 'Ex: "Agendaria reunião de alinhamento para entender as expectativas não declaradas. Frequentemente a insatisfação tem raiz em promessas não cumpridas antes de mim."' },
    { q: 'Você tem duas demandas urgentes de gestores diferentes e elas conflitam. O que faz?', dica: 'Não escolha sozinho. Transparência com ambos, facilitação de alinhamento entre eles.', ex: 'Ex: "Comunicaria ambos sobre o conflito e pediria que chegassem a um acordo de prioridade. Meu papel é executar, não arbitrar prioridades entre gestores."' },
    { q: 'Imagine que você percebeu uma oportunidade de melhoria significativa fora do seu escopo. Como agiria?', dica: 'Mostrar proatividade calculada: valida antes de propor, tem dados, entende por que ninguém agiu antes.', ex: 'Ex: "Primeiro verificaria se alguém já está trabalhando nisso. Depois montaria um breve business case e levaria ao gestor apropriado."' },
  ],
  motivacao: [
    { q: 'Por que você está saindo da empresa atual?', dica: 'Nunca fale mal da empresa ou do gestor. Fale sobre o que você busca (crescimento, desafio, missão) e não sobre o que foge.', ex: 'Ex: "Aprendi muito no meu atual papel, mas busco um ambiente onde possa [específico]. Após pesquisar várias empresas, a [empresa desta entrevista] é onde vejo maior alinhamento."' },
    { q: 'Por que quer trabalhar aqui especificamente?', dica: 'Mostre pesquisa. Mencione algo específico: produto, iniciativa, crescimento, missão, pessoas, tecnologia. Generalidades são transparentes.', ex: 'Ex: "Sigo vocês há 18 meses. O lançamento de [produto X] me mostrou uma visão de produto que é rara. E o artigo do CTO sobre [tema] ressoou com o que defendo."' },
    { q: 'Onde você se vê daqui a 5 anos?', dica: 'Não precisa ser preciso. Mostre direção, ambição realista e que o cargo atual é um passo lógico na trajetória.', ex: 'Ex: "Em 5 anos, quero ter desenvolvido [competências específicas] e estar em posição de [responsabilidade]. Esse cargo é o próximo passo natural nessa direção."' },
    { q: 'O que te mantém motivado no trabalho?', dica: 'Seja autêntico e específico. Evite "gosto de trabalhar em equipe" (genérico). Fale sobre o que realmente te energiza.', ex: 'Ex: "Me energiza ver um problema complexo e construir uma solução que impacta pessoas reais. Quando consigo medir esse impacto, é muito motivador."' },
    { q: 'Qual é o tipo de ambiente de trabalho onde você performa melhor?', dica: 'Fale sobre preferências reais, mas mostre adaptabilidade. Conecte ao que você sabe sobre a cultura da empresa.', ex: 'Ex: "Prefiro ambientes com autonomia e responsabilidade claras, mas que valorizam colaboração. O que vi sobre como vocês trabalham parece se encaixar bem."' },
    { q: 'Como você lida com feedback negativo sobre o seu trabalho?', dica: 'Mostre que você é receptivo, não defensivo. Dê um exemplo real de como feedback mudou sua trajetória.', ex: 'Ex: "Considero feedback um presente. Houve um momento em que meu gestor disse que eu era difícil de seguir em apresentações. Levei a sério e investi em comunicação."' },
  ],
  tecnica: [
    { q: 'Como você se mantém atualizado sobre as tendências e novidades da sua área?', dica: 'Mencione fontes específicas (newsletters, podcasts, comunidades, livros). Mostre que a aprendizagem é um hábito, não esporádica.', ex: 'Ex: "Leio [newsletter/blog específico] semanalmente, ouço [podcast] no deslocamento e participo de [comunidade/grupo]. Compartilho aprendizados no LinkedIn mensalmente."' },
    { q: 'Qual é o projeto técnico do qual você mais se orgulha? Me explique em detalhes.', dica: 'Não só o que foi feito, mas por que aquele approach, quais alternativas você considerou, o que aprendeu.', ex: 'Ex: "Escolhi [tecnologia] em vez de [alternativa] por [razão técnica]. O maior desafio foi [obstáculo] — resolvido com [solução]. Resultado: [impacto mensurável]."' },
    { q: 'Se você tivesse que ensinar alguém a [competência central da sua área] em 10 minutos, como começaria?', dica: 'Revela profundidade de conhecimento e capacidade de simplificação. Professores de verdade conseguem explicar o complexo de forma simples.', ex: 'Mostre que você identifica o conceito central antes de detalhar. Começa pelo "por quê", depois o "como".' },
    { q: 'Qual foi a decisão técnica mais difícil que você tomou? O que pesou na decisão?', dica: 'Mostre processo de decisão: critérios, trade-offs, dados usados, stakeholders consultados. A qualidade do raciocínio importa mais do que o resultado.', ex: 'Ex: "Tínhamos que escolher entre [opção A] e [opção B]. Pesos: performance, custo de manutenção e curva de aprendizado da equipe. Escolhi [X] porque [razão]."' },
    { q: 'Como você aborda um problema que nunca resolveu antes?', dica: 'Mostre seu processo de pensamento: decomposição, pesquisa, prototipação, validação, iteração. Autonomia e metodologia importam.', ex: 'Ex: "Primeiro mapeo o que já sei sobre o problema. Depois identifico as premissas que preciso validar. Busco referências. Faço um protótipo mínimo e itero."' },
  ],
}

const CATEGORY_LABELS = {
  comportamental: '🧠 Comportamental',
  situacional: '🔮 Situacional',
  motivacao: '💡 Motivação & Fit',
  tecnica: '⚙️ Técnica & Processo',
}

function InterviewSimulator() {
  const [category, setCategory] = useState('')
  const [idx, setIdx] = useState(0)
  const [answer, setAnswer] = useState('')
  const [showTip, setShowTip] = useState(false)
  const [done, setDone] = useState([])

  const questions = category ? INTERVIEW_QUESTIONS[category] : []
  const current = questions[idx]

  const next = () => {
    if (answer.trim()) setDone((d) => [...d, { q: current.q, a: answer }])
    setAnswer('')
    setShowTip(false)
    setIdx((i) => Math.min(i + 1, questions.length - 1))
  }

  const reset = () => { setIdx(0); setAnswer(''); setShowTip(false); setDone([]) }

  if (!category) {
    return (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm">Escolha uma categoria para começar a praticar. As perguntas vêm de processos seletivos reais.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {Object.entries(CATEGORY_LABELS).map(([k, label]) => (
            <button key={k} onClick={() => setCategory(k)}
              className="text-left p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all group">
              <div className="text-xl mb-1">{label.split(' ')[0]}</div>
              <div className="font-bold text-slate-800 text-sm">{label.slice(3)}</div>
              <div className="text-slate-400 text-xs mt-1">{INTERVIEW_QUESTIONS[k].length} perguntas</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (idx >= questions.length || (idx === questions.length - 1 && done.length >= questions.length)) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-3">🏆</div>
        <h3 className="font-black text-slate-800 text-lg mb-2">Sessão concluída!</h3>
        <p className="text-slate-500 text-sm mb-6">Você praticou {done.length} perguntas de {CATEGORY_LABELS[category].slice(3)}.</p>
        <div className="flex gap-3 justify-center">
          <Btn onClick={reset} variant="secondary" size="md">↺ Repetir categoria</Btn>
          <Btn onClick={() => { setCategory(''); reset() }} variant="primary" size="md">Escolher outra →</Btn>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={() => { setCategory(''); reset() }} className="text-slate-400 hover:text-slate-600 text-sm">← Categorias</button>
          <span className="text-slate-300">|</span>
          <span className="text-sm text-slate-500">{CATEGORY_LABELS[category]}</span>
        </div>
        <span className="text-xs text-slate-400">{idx + 1} / {questions.length}</span>
      </div>

      <div className="w-full bg-slate-100 rounded-full h-1.5">
        <div className="bg-blue-500 h-1.5 rounded-full transition-all" style={{ width: `${((idx + 1) / questions.length) * 100}%` }} />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Pergunta {idx + 1}</span>
        <p className="text-slate-800 font-bold text-base mt-2 leading-relaxed">"{current.q}"</p>
      </div>

      <div>
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Sua resposta (escreva como se estivesse na entrevista)</label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={5}
          placeholder="Estruture sua resposta em formato STAR: Situação → Tarefa → Ação → Resultado..."
          className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      <div className="flex gap-3">
        <Btn onClick={() => setShowTip(!showTip)} variant="secondary" size="md">
          {showTip ? 'Ocultar dica' : '💡 Ver dica'}
        </Btn>
        <Btn onClick={next} variant="primary" size="md">
          {idx < questions.length - 1 ? 'Próxima →' : 'Finalizar sessão'}
        </Btn>
      </div>

      {showTip && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
          <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">💡 Dica de resposta</p>
          <p className="text-slate-700 text-sm">{current.dica}</p>
          <p className="text-slate-500 text-xs italic border-t border-amber-100 pt-2 mt-2">{current.ex}</p>
        </div>
      )}

      {done.length > 0 && (
        <details className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <summary className="text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer">
            Respostas desta sessão ({done.length})
          </summary>
          <div className="mt-3 space-y-3">
            {done.map((d, i) => (
              <div key={i} className="text-xs border-t border-slate-200 pt-2">
                <p className="font-semibold text-slate-600 mb-1">P: {d.q}</p>
                <p className="text-slate-500 italic">R: {d.a}</p>
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  )
}

// ─── Ferramenta 6: Rastreador de Candidaturas (Kanban) ───────────────────────
const TRACKER_KEY = 'nj_tracker'
const COLUMNS = [
  { id: 'wishlist', label: 'Para Candidatar', color: 'bg-slate-100 border-slate-200', dot: 'bg-slate-400' },
  { id: 'applied', label: 'Candidatura Enviada', color: 'bg-blue-50 border-blue-200', dot: 'bg-blue-500' },
  { id: 'screening', label: 'Triagem', color: 'bg-yellow-50 border-yellow-200', dot: 'bg-yellow-500' },
  { id: 'interview', label: 'Entrevista', color: 'bg-purple-50 border-purple-200', dot: 'bg-purple-500' },
  { id: 'offer', label: 'Proposta', color: 'bg-green-50 border-green-200', dot: 'bg-green-500' },
  { id: 'archived', label: 'Arquivado', color: 'bg-slate-50 border-slate-100', dot: 'bg-slate-300' },
]

function ApplicationTracker() {
  const [cards, setCards] = useState(() => LS.get(TRACKER_KEY, []))
  const [adding, setAdding] = useState(false)
  const [form, setForm] = useState({ company: '', role: '', notes: '', col: 'wishlist' })
  const [moving, setMoving] = useState(null)

  const save = (updated) => { setCards(updated); LS.set(TRACKER_KEY, updated) }

  const addCard = () => {
    if (!form.company.trim() || !form.role.trim()) return
    const card = { id: Date.now(), company: form.company.trim(), role: form.role.trim(), notes: form.notes.trim(), col: form.col, date: new Date().toLocaleDateString('pt-BR') }
    save([card, ...cards])
    setForm({ company: '', role: '', notes: '', col: 'wishlist' })
    setAdding(false)
  }

  const moveCard = (id, newCol) => {
    save(cards.map((c) => c.id === id ? { ...c, col: newCol } : c))
    setMoving(null)
  }

  const deleteCard = (id) => save(cards.filter((c) => c.id !== id))

  const inp = 'w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {cards.length === 0 ? 'Nenhuma candidatura ainda. Adicione a primeira!' : `${cards.length} candidatura${cards.length > 1 ? 's' : ''} no pipeline`}
        </p>
        <Btn onClick={() => setAdding(!adding)} variant={adding ? 'secondary' : 'primary'} size="sm">
          {adding ? '✕ Cancelar' : '+ Nova candidatura'}
        </Btn>
      </div>

      {adding && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 space-y-3">
          <h3 className="font-bold text-slate-800 text-sm">Nova candidatura</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <input className={inp} placeholder="Empresa *" value={form.company} onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))} />
            <input className={inp} placeholder="Cargo *" value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))} />
          </div>
          <input className={inp} placeholder="Notas (salário estimado, contato, fonte...)" value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} />
          <div className="flex gap-3 items-center">
            <select className={inp + ' flex-1'} value={form.col} onChange={(e) => setForm((f) => ({ ...f, col: e.target.value }))}>
              {COLUMNS.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
            <Btn onClick={addCard} variant="primary" size="sm" disabled={!form.company.trim() || !form.role.trim()}>
              Adicionar →
            </Btn>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-x-auto">
        {COLUMNS.map((col) => {
          const colCards = cards.filter((c) => c.col === col.id)
          return (
            <div key={col.id} className={`border rounded-xl p-3 min-h-[120px] ${col.color}`}>
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2 h-2 rounded-full ${col.dot}`} />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{col.label}</span>
                <span className="text-xs text-slate-400 ml-auto">{colCards.length}</span>
              </div>
              <div className="space-y-2">
                {colCards.map((card) => (
                  <div key={card.id} className="bg-white border border-white rounded-lg p-2.5 shadow-sm text-xs">
                    <div className="font-bold text-slate-800 truncate">{card.company}</div>
                    <div className="text-slate-500 truncate">{card.role}</div>
                    {card.notes && <div className="text-slate-400 truncate mt-0.5">{card.notes}</div>}
                    <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-50">
                      <span className="text-slate-300">{card.date}</span>
                      <div className="flex gap-1">
                        <button onClick={() => setMoving(moving === card.id ? null : card.id)}
                          className="text-blue-500 hover:text-blue-700 text-xs underline">mover</button>
                        <button onClick={() => deleteCard(card.id)}
                          className="text-slate-300 hover:text-red-400 text-xs ml-1">✕</button>
                      </div>
                    </div>
                    {moving === card.id && (
                      <div className="mt-2 space-y-1">
                        {COLUMNS.filter((c) => c.id !== col.id).map((c) => (
                          <button key={c.id} onClick={() => moveCard(card.id, c.id)}
                            className="w-full text-left text-xs text-blue-600 hover:text-blue-800 py-0.5 hover:underline">
                            → {c.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <p className="text-xs text-slate-400">Dados salvos localmente no seu navegador. Exporte via Templates → Rastreador de Candidaturas (CSV).</p>
    </div>
  )
}

// ─── Ferramenta 7: Gerador de Sumário Profissional ───────────────────────────
function SummaryGenerator() {
  const [form, setForm] = useState({ years: '', area: '', achievement: '', target: '', skill: '' })
  const [summaries, setSummaries] = useState([])
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const copy = (text) => navigator.clipboard.writeText(text)

  const generate = () => {
    const { years, area, achievement, target, skill } = form
    if (!years || !area || !achievement || !target) return
    const y = years.trim(), a = area.trim(), ach = achievement.trim(), t = target.trim(), s = skill.trim()
    setSummaries([
      {
        label: '📊 Foco em resultados',
        text: `Profissional de ${a} com ${y} anos de experiência. ${ach}. ${s ? `Especialista em ${s}. ` : ''}Busco oportunidade como ${t} para contribuir com resultados consistentes e mensuráveis.`,
      },
      {
        label: '🚀 Tom moderno (LinkedIn)',
        text: `${y} anos transformando desafios em resultados em ${a}. ${ach}${s ? ` — com especialidade em ${s}` : ''}. Pronto para o próximo desafio como ${t}.`,
      },
      {
        label: '🎯 Orientado ao cargo-alvo',
        text: `${a} com ${y} anos de experiência aplicados a contextos de alta complexidade. Histórico: ${ach.toLowerCase()}${s ? `. Competência diferenciada: ${s}` : ''}. Objetivo: atuar como ${t} onde possa criar impacto real e mensurável.`,
      },
    ])
  }

  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
  const isReady = form.years && form.area && form.achievement && form.target

  return (
    <div className="space-y-4">
      <p className="text-slate-500 text-sm">Preencha os campos abaixo e gere 3 versões do seu sumário profissional para CV e LinkedIn.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Anos de experiência</label>
          <input className={inp} placeholder="Ex: 8" value={form.years} onChange={set('years')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Área de atuação</label>
          <input className={inp} placeholder="Ex: Marketing Digital, Engenharia de Software" value={form.area} onChange={set('area')} />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Maior realização (com número) *</label>
          <input className={inp} placeholder="Ex: Aumentei a receita em 40% em 12 meses gerenciando equipe de 8 pessoas" value={form.achievement} onChange={set('achievement')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cargo-alvo</label>
          <input className={inp} placeholder="Ex: Head de Growth, Desenvolvedor Sênior" value={form.target} onChange={set('target')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Competência diferencial (opcional)</label>
          <input className={inp} placeholder="Ex: Python e análise preditiva, liderança de squads remotos" value={form.skill} onChange={set('skill')} />
        </div>
      </div>
      <Btn onClick={generate} variant="primary" size="md" disabled={!isReady}>
        Gerar 3 versões de sumário →
      </Btn>
      {summaries.length > 0 && (
        <div className="space-y-3">
          {summaries.map((s, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-600">{s.label}</span>
                <button onClick={() => copy(s.text)} className="text-xs text-blue-600 hover:text-blue-800 underline">Copiar</button>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{s.text}</p>
              <span className={`text-xs mt-1.5 block ${s.text.length > 500 ? 'text-red-500' : 'text-slate-400'}`}>
                {s.text.length} caracteres {s.text.length > 500 ? '(longo para CV — corte um pouco)' : ''}
              </span>
            </div>
          ))}
          <p className="text-xs text-slate-400">💡 Dica: teste qual versão recebe mais respostas nos primeiros dias após atualizar o LinkedIn.</p>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 8: Gerador de Email de Candidatura ───────────────────────────
function ApplicationEmailGenerator() {
  const [form, setForm] = useState({ name: '', role: '', company: '', source: '', years: '', achievement: '', specific: '' })
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const generate = () => {
    const { name, role, company, source, years, achievement, specific } = form
    if (!name || !role || !company || !achievement) return
    setOutput(
`Assunto: Candidatura — ${role} | ${name}

Olá,

Candidato-me à vaga de ${role}${source ? ` que encontrei no ${source}` : ''}.

${years ? `Em ${years} de experiência na área, ` : ''}${achievement.trim()}. Acredito que esta experiência se alinha diretamente com o perfil que buscam${specific ? `, especialmente ${specific.trim()}` : ''}.

Seguem em anexo o meu CV e carta de motivação. Fico inteiramente disponível para uma conversa quando for conveniente.

Com os melhores cumprimentos,
${name}`.trim()
    )
    setCopied(false)
  }

  const copy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
  const isReady = form.name && form.role && form.company && form.achievement

  return (
    <div className="space-y-4">
      <p className="text-slate-500 text-sm">Gera um email de candidatura profissional e personalizado em segundos.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">O seu nome *</label>
          <input className={inp} placeholder="Ex: João Silva" value={form.name} onChange={set('name')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cargo a que se candidata *</label>
          <input className={inp} placeholder="Ex: Gerente de Marketing" value={form.role} onChange={set('role')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Nome da empresa *</label>
          <input className={inp} placeholder="Ex: TechCorp" value={form.company} onChange={set('company')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Onde encontrou a vaga</label>
          <input className={inp} placeholder="Ex: LinkedIn, site da empresa" value={form.source} onChange={set('source')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Anos de experiência</label>
          <input className={inp} placeholder="Ex: 6 anos" value={form.years} onChange={set('years')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Algo específico da vaga/empresa</label>
          <input className={inp} placeholder="Ex: a cultura data-driven e o foco em crescimento" value={form.specific} onChange={set('specific')} />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">A sua maior conquista relevante (com número) *</label>
          <input className={inp} placeholder="Ex: liderei campanha que gerou R$800k em receita com ROI de 4x" value={form.achievement} onChange={set('achievement')} />
        </div>
      </div>
      <Btn onClick={generate} variant="primary" size="md" disabled={!isReady}>Gerar email →</Btn>
      {output && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 bg-white">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Email gerado</span>
            <button onClick={copy} className={`text-xs font-semibold underline ${copied ? 'text-green-600' : 'text-blue-600 hover:text-blue-800'}`}>
              {copied ? '✓ Copiado!' : 'Copiar'}
            </button>
          </div>
          <pre className="p-4 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans">{output}</pre>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 9: Checklist de Candidatura ──────────────────────────────────
const CHECKLIST_ITEMS = [
  { id: 'cv_pdf', category: 'CV', label: 'CV em PDF com texto seleccionável (não imagem/scan)' },
  { id: 'cv_ats', category: 'CV', label: 'Palavras-chave da vaga incluídas no CV' },
  { id: 'cv_results', category: 'CV', label: 'Pelo menos 3 resultados quantificados (com números)' },
  { id: 'cv_tailored', category: 'CV', label: 'CV adaptado para esta vaga específica' },
  { id: 'cv_filename', category: 'CV', label: 'Ficheiro nomeado profissionalmente (CV_NomeSobrenome_Cargo.pdf)' },
  { id: 'cover_impact', category: 'Carta', label: 'Abertura com impacto (não "Venho por este meio...")' },
  { id: 'cover_specific', category: 'Carta', label: 'Menção específica à empresa/vaga (não genérica)' },
  { id: 'cover_achievement', category: 'Carta', label: 'Pelo menos uma conquista com número' },
  { id: 'cover_cta', category: 'Carta', label: 'Chamada à acção clara no final' },
  { id: 'cover_length', category: 'Carta', label: 'Máximo 1 página (400-500 palavras)' },
  { id: 'email_subject', category: 'Email', label: 'Assunto específico e profissional' },
  { id: 'email_body', category: 'Email', label: 'Corpo do email não está vazio ou genérico' },
  { id: 'email_attachments', category: 'Email', label: 'Anexos confirmados antes de enviar' },
  { id: 'email_spellcheck', category: 'Email', label: 'Zero erros ortográficos (leu em voz alta ou usou corretor)' },
  { id: 'research_company', category: 'Pesquisa', label: 'Pesquisou a empresa (site, LinkedIn, notícias recentes)' },
  { id: 'research_role', category: 'Pesquisa', label: 'Leu a descrição completa da vaga (não só o título)' },
  { id: 'research_interviewer', category: 'Pesquisa', label: 'Sabe para quem está a enviar (nome do recrutador, se possível)' },
  { id: 'followup_reminder', category: 'Follow-up', label: 'Anotou a data para fazer follow-up (7-10 dias)' },
  { id: 'tracker_update', category: 'Follow-up', label: 'Candidatura adicionada ao rastreador de candidaturas' },
]

const CATEGORY_COLORS = {
  CV: 'bg-blue-100 text-blue-700',
  Carta: 'bg-violet-100 text-violet-700',
  Email: 'bg-orange-100 text-orange-700',
  Pesquisa: 'bg-emerald-100 text-emerald-700',
  'Follow-up': 'bg-rose-100 text-rose-700',
}

function ApplicationChecklist() {
  const [checked, setChecked] = useState(() => LS.get('nj_checklist', {}))
  const [company, setCompany] = useState('')
  const [filter, setFilter] = useState('all')

  const toggle = (id) => {
    const next = { ...checked, [id]: !checked[id] }
    setChecked(next)
    LS.set('nj_checklist', next)
  }

  const reset = () => {
    setChecked({})
    LS.set('nj_checklist', {})
  }

  const categories = [...new Set(CHECKLIST_ITEMS.map((i) => i.category))]
  const filtered = filter === 'all' ? CHECKLIST_ITEMS : CHECKLIST_ITEMS.filter((i) => i.category === filter)
  const total = CHECKLIST_ITEMS.length
  const done = CHECKLIST_ITEMS.filter((i) => checked[i.id]).length
  const pct = Math.round((done / total) * 100)

  return (
    <div className="space-y-4">
      <p className="text-slate-500 text-sm">Confirma estes {total} itens antes de enviar cada candidatura. Nunca esqueça nada importante.</p>

      <div className="flex items-center gap-3">
        <input
          className="flex-1 px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nome da empresa (para organizar)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <button onClick={reset} className="text-xs text-slate-400 hover:text-red-400 underline flex-shrink-0">
          Resetar tudo
        </button>
      </div>

      {/* Progresso */}
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-slate-700">
            {company ? `${company} — ` : ''}Progresso: {done}/{total}
          </span>
          <span className={`text-sm font-black ${pct === 100 ? 'text-green-600' : pct >= 70 ? 'text-amber-600' : 'text-slate-400'}`}>
            {pct === 100 ? '✅ Pronto para enviar!' : `${pct}%`}
          </span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${pct === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${filter === 'all' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${filter === cat ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Itens */}
      <div className="space-y-2">
        {filtered.map((item) => (
          <label
            key={item.id}
            className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
              checked[item.id]
                ? 'bg-green-50 border-green-200'
                : 'bg-white border-slate-100 hover:border-slate-200'
            }`}
          >
            <input
              type="checkbox"
              checked={!!checked[item.id]}
              onChange={() => toggle(item.id)}
              className="mt-0.5 w-4 h-4 rounded accent-green-500 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <span className={`text-sm ${checked[item.id] ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                {item.label}
              </span>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${CATEGORY_COLORS[item.category]}`}>
              {item.category}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

// ─── Ferramenta 10: Comparador de Ofertas de Emprego ─────────────────────────
const OFFER_BENEFITS = [
  { key: 'health', label: 'Plano de saúde (individual)', values: { none: 0, basic: 300, mid: 700, premium: 1500 } },
  { key: 'dental', label: 'Plano odontológico', values: { none: 0, yes: 150 } },
  { key: 'meal', label: 'Vale-alimentação/refeição (R$/mês)', type: 'number' },
  { key: 'transport', label: 'Vale-transporte (R$/mês)', type: 'number' },
  { key: 'training', label: 'Budget de formação (R$/ano)', type: 'number' },
  { key: 'remote', label: 'Home office', values: { none: 0, hybrid: 300, full: 700 } },
  { key: 'pension', label: 'Previdência privada (matching)', values: { none: 0, partial: 400, full: 800 } },
  { key: 'gym', label: 'Auxílio saúde/ginásio (R$/mês)', type: 'number' },
]

function OfferComparator() {
  const emptyOffer = () => ({
    company: '', role: '', salary: '', bonus: '', health: 'none', dental: 'none',
    meal: '', transport: '', training: '', remote: 'none', pension: 'none', gym: '',
    growth: 5, culture: 5, commute: 5, stability: 5,
  })
  const [a, setA] = useState(emptyOffer())
  const [b, setB] = useState(emptyOffer())
  const [result, setResult] = useState(null)

  const setField = (setter) => (k) => (e) => setter((o) => ({ ...o, [k]: e.target.value }))

  const calcAnnual = (offer) => {
    const base = parseFloat(offer.salary || 0) * 12
    const bonus = parseFloat(offer.bonus || 0)
    const meal = parseFloat(offer.meal || 0) * 12
    const transport = parseFloat(offer.transport || 0) * 12
    const training = parseFloat(offer.training || 0)
    const gym = parseFloat(offer.gym || 0) * 12
    const health = OFFER_BENEFITS.find(b => b.key === 'health').values[offer.health] * 12
    const dental = OFFER_BENEFITS.find(b => b.key === 'dental').values[offer.dental] * 12
    const remote = OFFER_BENEFITS.find(b => b.key === 'remote').values[offer.remote] * 12
    const pension = OFFER_BENEFITS.find(b => b.key === 'pension').values[offer.pension] * 12
    return base + bonus + meal + transport + training + gym + health + dental + remote + pension
  }

  const calcQuality = (offer) => {
    return ((parseFloat(offer.growth) + parseFloat(offer.culture) + parseFloat(offer.commute) + parseFloat(offer.stability)) / 4).toFixed(1)
  }

  const compare = () => {
    const totalA = calcAnnual(a), totalB = calcAnnual(b)
    const qualA = parseFloat(calcQuality(a)), qualB = parseFloat(calcQuality(b))
    const scoreA = totalA * 0.6 + qualA * 10000 * 0.4
    const scoreB = totalB * 0.6 + qualB * 10000 * 0.4
    setResult({ totalA, totalB, qualA, qualB, scoreA, scoreB })
  }

  const fmt = (n) => Math.round(n).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

  const inp = 'w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'

  const OfferForm = ({ offer, setter, label, color }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-4 space-y-3`}>
      <h3 className="font-black text-slate-800">{label}</h3>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-xs font-bold text-slate-500 block mb-1">Empresa</label>
          <input className={inp} placeholder="Ex: TechCorp" value={offer.company} onChange={setField(setter)('company')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 block mb-1">Cargo</label>
          <input className={inp} placeholder="Ex: Dev Sênior" value={offer.role} onChange={setField(setter)('role')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 block mb-1">Salário base (R$/mês)</label>
          <input className={inp} type="number" placeholder="8000" value={offer.salary} onChange={setField(setter)('salary')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 block mb-1">Bónus anual (R$)</label>
          <input className={inp} type="number" placeholder="12000" value={offer.bonus} onChange={setField(setter)('bonus')} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-xs font-bold text-slate-500 block mb-1">Plano de saúde</label>
          <select className={inp} value={offer.health} onChange={setField(setter)('health')}>
            <option value="none">Sem plano</option>
            <option value="basic">Básico (~R$300/mês)</option>
            <option value="mid">Intermédio (~R$700/mês)</option>
            <option value="premium">Premium (~R$1.500/mês)</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 block mb-1">Home office</label>
          <select className={inp} value={offer.remote} onChange={setField(setter)('remote')}>
            <option value="none">Presencial</option>
            <option value="hybrid">Híbrido (~R$300/mês economia)</option>
            <option value="full">100% remoto (~R$700/mês economia)</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 block mb-1">VA/VR (R$/mês)</label>
          <input className={inp} type="number" placeholder="800" value={offer.meal} onChange={setField(setter)('meal')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 block mb-1">Budget formação (R$/ano)</label>
          <input className={inp} type="number" placeholder="3000" value={offer.training} onChange={setField(setter)('training')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 block mb-1">Previdência (matching)</label>
          <select className={inp} value={offer.pension} onChange={setField(setter)('pension')}>
            <option value="none">Sem previdência</option>
            <option value="partial">Parcial (~R$400/mês)</option>
            <option value="full">Total (~R$800/mês)</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 block mb-1">Auxílio saúde/gym (R$/mês)</label>
          <input className={inp} type="number" placeholder="150" value={offer.gym} onChange={setField(setter)('gym')} />
        </div>
      </div>
      <div className="border-t border-slate-100 pt-3 space-y-2">
        <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Factores qualitativos (1-10)</p>
        {[
          { k: 'growth', label: 'Potencial de crescimento' },
          { k: 'culture', label: 'Fit cultural' },
          { k: 'commute', label: 'Qualidade de vida / deslocamento' },
          { k: 'stability', label: 'Estabilidade da empresa' },
        ].map(({ k, label }) => (
          <div key={k} className="flex items-center gap-3">
            <span className="text-xs text-slate-500 w-36 flex-shrink-0">{label}</span>
            <input type="range" min="1" max="10" value={offer[k]} onChange={setField(setter)(k)} className="flex-1 accent-blue-500" />
            <span className="text-xs font-bold text-slate-700 w-4">{offer[k]}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      <p className="text-slate-500 text-sm">Preenche os dados de cada oferta para calcular o valor total real e gerar uma recomendação.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <OfferForm offer={a} setter={setA} label="Oferta A" color="border-blue-300" />
        <OfferForm offer={b} setter={setB} label="Oferta B" color="border-violet-300" />
      </div>
      <button onClick={compare} className="w-full py-3 bg-slate-800 text-white font-bold rounded-xl text-sm hover:bg-slate-700 transition-colors">
        Comparar ofertas →
      </button>
      {result && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: a.company || 'Oferta A', total: result.totalA, quality: result.qualA, score: result.scoreA, color: 'border-blue-300 bg-blue-50' },
              { label: b.company || 'Oferta B', total: result.totalB, quality: result.qualB, score: result.scoreB, color: 'border-violet-300 bg-violet-50' },
            ].map((o, i) => (
              <div key={i} className={`border-2 ${o.color} rounded-2xl p-4 text-center`}>
                <div className="font-black text-slate-800 mb-3">{o.label}</div>
                <div className="text-2xl font-black text-slate-800">{fmt(o.total)}</div>
                <div className="text-xs text-slate-500 mb-2">Total Comp anual estimado</div>
                <div className="text-lg font-bold text-slate-700">{o.quality}/10</div>
                <div className="text-xs text-slate-500">Qualidade de vida</div>
              </div>
            ))}
          </div>
          <div className={`rounded-2xl p-5 border-2 ${result.scoreA >= result.scoreB ? 'border-blue-400 bg-blue-50' : 'border-violet-400 bg-violet-50'}`}>
            <div className="font-black text-slate-800 text-lg mb-1">
              {result.scoreA === result.scoreB ? 'Ofertas muito equivalentes!' : `Recomendação: ${result.scoreA > result.scoreB ? (a.company || 'Oferta A') : (b.company || 'Oferta B')}`}
            </div>
            {result.scoreA !== result.scoreB && (
              <p className="text-slate-600 text-sm">
                {result.scoreA > result.scoreB
                  ? `Com score combinado de financeiro + qualidade de vida superior. A diferença de Total Comp é ${fmt(Math.abs(result.totalA - result.totalB))}/ano.`
                  : `Com score combinado de financeiro + qualidade de vida superior. A diferença de Total Comp é ${fmt(Math.abs(result.totalA - result.totalB))}/ano.`}
              </p>
            )}
            <p className="text-xs text-slate-400 mt-2">O score pondera 60% compensação financeira e 40% factores qualitativos. Ajusta os sliders conforme as suas prioridades.</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 11: Gerador de Seção "Sobre" do LinkedIn ─────────────────────
function LinkedInAboutGenerator() {
  const [form, setForm] = useState({ years: '', area: '', role: '', achievement1: '', achievement2: '', skill: '', personality: '', target: '', contact: '' })
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const generate = () => {
    const { years, area, role, achievement1, achievement2, skill, personality, target, contact } = form
    if (!years || !area || !achievement1 || !target) return
    const lines = []
    lines.push(`${years} anos em ${area}. ${role ? `Actualmente ${role}. ` : ''}`)
    lines.push('')
    lines.push(`O que faço: ${achievement1.trim()}.`)
    if (achievement2.trim()) lines.push(`Também: ${achievement2.trim()}.`)
    lines.push('')
    if (skill.trim()) lines.push(`Especialidade: ${skill.trim()}.`)
    if (personality.trim()) lines.push(`${personality.trim()}.`)
    lines.push('')
    lines.push(`Procuro: ${target.trim()}.`)
    lines.push('')
    if (contact.trim()) lines.push(`📩 ${contact.trim()}`)
    setOutput(lines.join('\n'))
    setCopied(false)
  }

  const copy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
  const ta = inp + ' resize-none'
  const isReady = form.years && form.area && form.achievement1 && form.target

  return (
    <div className="space-y-4">
      <p className="text-slate-500 text-sm">Gera um texto profissional para a seção "Sobre" do LinkedIn — conciso, impactante e otimizado para pesquisa.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Anos de experiência *</label>
          <input className={inp} placeholder="Ex: 7" value={form.years} onChange={set('years')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Área de atuação *</label>
          <input className={inp} placeholder="Ex: Engenharia de Software, Marketing B2B" value={form.area} onChange={set('area')} />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cargo ou posição actual</label>
          <input className={inp} placeholder="Ex: Senior Product Manager na TechCorp" value={form.role} onChange={set('role')} />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Principal conquista / o que fazes bem *</label>
          <textarea className={ta} rows={2} placeholder="Ex: Aumentei a taxa de retenção de clientes em 35% redesenhando o processo de onboarding" value={form.achievement1} onChange={set('achievement1')} />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Segunda conquista (opcional)</label>
          <textarea className={ta} rows={2} placeholder="Ex: Construí e liderei equipe de 8 pessoas do zero em contexto de startup" value={form.achievement2} onChange={set('achievement2')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Especialidade técnica</label>
          <input className={inp} placeholder="Ex: Python, análise de dados e machine learning" value={form.skill} onChange={set('skill')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Traço de personalidade profissional</label>
          <input className={inp} placeholder="Ex: Apaixonado por resolver problemas complexos com dados" value={form.personality} onChange={set('personality')} />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">O que procura agora *</label>
          <input className={inp} placeholder="Ex: Oportunidades como Head of Product em empresas de growth stage" value={form.target} onChange={set('target')} />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Call to action / contato (opcional)</label>
          <input className={inp} placeholder="Ex: Fala comigo em joao@email.com ou envia mensagem aqui no LinkedIn" value={form.contact} onChange={set('contact')} />
        </div>
      </div>
      <button onClick={generate} disabled={!isReady} className={`w-full py-3 font-bold rounded-xl text-sm transition-colors ${isReady ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
        Gerar seção "Sobre" →
      </button>
      {output && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 bg-white">
            <div>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Texto gerado</span>
              <span className={`ml-3 text-xs ${output.length > 2600 ? 'text-red-500' : 'text-slate-400'}`}>{output.length}/2600 caracteres</span>
            </div>
            <button onClick={copy} className={`text-xs font-semibold underline ${copied ? 'text-green-600' : 'text-blue-600 hover:text-blue-800'}`}>
              {copied ? '✓ Copiado!' : 'Copiar'}
            </button>
          </div>
          <pre className="p-4 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans">{output}</pre>
          <div className="px-4 py-2 bg-amber-50 border-t border-amber-100">
            <p className="text-xs text-amber-700">💡 Limite do LinkedIn: 2.600 caracteres. Edita à vontade — este texto é o ponto de partida, não a versão final.</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 12: Gerador de Email de Follow-up pós-Entrevista ──────────────
const FOLLOWUP_TYPES = [
  { id: 'thankyou', label: 'Agradecimento pós-entrevista', desc: 'Enviado nas 24h após a entrevista' },
  { id: 'status', label: 'Follow-up de status', desc: 'Quando não obtiveste resposta após 7-10 dias' },
  { id: 'offer_delay', label: 'Follow-up com proposta em mão', desc: 'Tem outra oferta e precisas de decisão' },
  { id: 'rejection', label: 'Resposta a uma recusa', desc: 'Deixar a porta aberta para o futuro' },
]

function FollowUpEmailGenerator() {
  const [type, setType] = useState('')
  const [form, setForm] = useState({ name: '', interviewer: '', role: '', company: '', highlight: '', deadline: '', other_company: '' })
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const generate = () => {
    const { name, interviewer, role, company, highlight, deadline, other_company } = form
    if (!name || !role || !company) return
    const hi = interviewer ? `Olá ${interviewer},` : 'Olá,'
    let body = ''

    if (type === 'thankyou') {
      body = `${hi}

Obrigado pelo tempo que dedicou à nossa conversa sobre a posição de ${role}${company ? ` na ${company}` : ''}.

${highlight ? `Fiquei especialmente entusiasmado com ${highlight.trim()}. ` : ''}A conversa reforçou o meu interesse pela vaga e acredito que as minhas competências se alinham bem com o que procuram.

Fico à disposição caso necessitem de informações adicionais e aguardo com expectativa os próximos passos.

Com os melhores cumprimentos,
${name}`
    } else if (type === 'status') {
      body = `${hi}

Espero que esteja bem. Queria fazer um breve follow-up relativamente à vaga de ${role}${company ? ` na ${company}` : ''}, sobre a qual conversámos há alguns dias.

O meu interesse pela posição mantém-se elevado e gostaria de saber se há atualizações sobre o processo de seleção.

Fico ao dispor para qualquer questão adicional.

Com os melhores cumprimentos,
${name}`
    } else if (type === 'offer_delay') {
      body = `${hi}

Espero que esteja bem. Quero ser transparente: recebi uma proposta de outra empresa${other_company ? ` (${other_company})` : ''} com prazo de resposta até ${deadline || '[data]'}.

A minha preferência continua a ser a posição de ${role}${company ? ` na ${company}` : ''}, razão pela qual preferi comunicar directamente antes de tomar qualquer decisão.

Seria possível acelerar o processo de decisão? Agradeço a compreensão e fico ao dispor.

Com os melhores cumprimentos,
${name}`
    } else if (type === 'rejection') {
      body = `${hi}

Obrigado pelo feedback relativamente à candidatura à posição de ${role}${company ? ` na ${company}` : ''}. Embora a notícia não seja a que esperava, agradeço a transparência e o tempo dedicado ao processo.

${highlight ? `Aprendi bastante durante as entrevistas, especialmente ${highlight.trim()}. ` : ''}Gostaria de manter o contato para eventuais oportunidades futuras, caso seja do vosso interesse.

Desejo à equipe o melhor e espero que possamos cruzar-nos novamente.

Com os melhores cumprimentos,
${name}`
    }

    setOutput(body.trim())
    setCopied(false)
  }

  const copy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
  const isReady = form.name && form.role && form.company && type

  if (!type) {
    return (
      <div className="space-y-4">
        <p className="text-slate-500 text-sm">Escolha o tipo de email que precisas de enviar.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {FOLLOWUP_TYPES.map((t) => (
            <button key={t.id} onClick={() => setType(t.id)}
              className="text-left p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all">
              <div className="font-bold text-slate-800 text-sm mb-1">{t.label}</div>
              <div className="text-slate-400 text-xs">{t.desc}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button onClick={() => { setType(''); setOutput('') }} className="text-slate-400 hover:text-slate-600 text-sm">← Tipos</button>
        <span className="text-slate-300">|</span>
        <span className="text-sm text-slate-600 font-semibold">{FOLLOWUP_TYPES.find(t => t.id === type)?.label}</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">O seu nome *</label>
          <input className={inp} placeholder="Ex: Ana Santos" value={form.name} onChange={set('name')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Nome do entrevistador</label>
          <input className={inp} placeholder="Ex: Pedro" value={form.interviewer} onChange={set('interviewer')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cargo *</label>
          <input className={inp} placeholder="Ex: Marketing Manager" value={form.role} onChange={set('role')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Empresa *</label>
          <input className={inp} placeholder="Ex: Empresa X" value={form.company} onChange={set('company')} />
        </div>
        {type === 'thankyou' && (
          <div className="sm:col-span-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Algo específico que te entusiasmou na conversa</label>
            <input className={inp} placeholder="Ex: a cultura de autonomia da equipe e o projeto de expansão para o Brasil" value={form.highlight} onChange={set('highlight')} />
          </div>
        )}
        {type === 'rejection' && (
          <div className="sm:col-span-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">O que você aprendeu no processo (opcional)</label>
            <input className={inp} placeholder="Ex: a forma como a equipe aborda problemas de produto" value={form.highlight} onChange={set('highlight')} />
          </div>
        )}
        {type === 'offer_delay' && (
          <>
            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Empresa da outra proposta (opcional)</label>
              <input className={inp} placeholder="Ex: Empresa Y" value={form.other_company} onChange={set('other_company')} />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Prazo de resposta</label>
              <input className={inp} placeholder="Ex: sexta-feira, dia 15" value={form.deadline} onChange={set('deadline')} />
            </div>
          </>
        )}
      </div>
      <button onClick={generate} disabled={!isReady} className={`w-full py-3 font-bold rounded-xl text-sm transition-colors ${isReady ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
        Gerar email →
      </button>
      {output && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 bg-white">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Email gerado</span>
            <button onClick={copy} className={`text-xs font-semibold underline ${copied ? 'text-green-600' : 'text-blue-600 hover:text-blue-800'}`}>
              {copied ? '✓ Copiado!' : 'Copiar'}
            </button>
          </div>
          <pre className="p-4 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans">{output}</pre>
          <div className="px-4 py-2 bg-blue-50 border-t border-blue-100">
            <p className="text-xs text-blue-700">💡 Revê o email antes de enviar. Personaliza com detalhes específicos da conversa para maior impacto.</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 13: Analisador de CV ─────────────────────────────────────────
const ACTION_VERBS = [
  'liderou','desenvolveu','implementou','geriu','criou','reduziu','aumentou','melhorou',
  'entregou','coordenou','otimizou','construiu','lançou','negociou','definiu','estabeleceu',
  'alcançou','superou','transformou','reestruturou','coordenei','desenvolvi','implementei',
  'reduzi','aumentei','melhorei','construí','lancei','negociei','defini','estabeleci',
  'alcancei','superei','transformei','led','developed','implemented','managed','created',
  'reduced','increased','improved','delivered','coordinated','otimized','built','launched',
]

function analyzeCv(text) {
  const lower = text.toLowerCase()
  const words = text.trim().split(/\s+/).length
  const wordScore = words < 100 ? 0 : words < 250 ? 50 : words <= 800 ? 100 : words <= 1200 ? 70 : 40
  const sections = {
    contato: /email|e-mail|telefone|phone|linkedin/.test(lower),
    experiência: /experiência|experiencia|experience|trabalh|emprego|cargo/.test(lower),
    educação: /educação|educacao|education|universidade|faculdade|graduação|mestrado|bachelor|master|mba/.test(lower),
    competências: /competências|competencias|skills|ferramentas|tecnologias|conhecimentos/.test(lower),
    sumário: /resumo|sumário|sumario|summary|perfil|sobre mim|objetivo|objectivo/.test(lower),
  }
  const sectionCount = Object.values(sections).filter(Boolean).length
  const sectionScore = sectionCount * 20
  const numbers = (text.match(/\d+[%k€$]?|\d{1,3}(,\d{3})+/g) || []).length
  const quantScore = numbers === 0 ? 0 : numbers < 3 ? 40 : numbers < 7 ? 70 : 100
  const verbCount = ACTION_VERBS.filter((v) => lower.includes(v)).length
  const verbScore = verbCount === 0 ? 0 : verbCount < 3 ? 50 : verbCount < 6 ? 80 : 100
  const items = [
    { label: 'Comprimento e densidade', score: wordScore, icon: '📏', tip: words < 250 ? 'CV muito curto. Acrescente mais detalhes sobre as suas experiências.' : words > 1200 ? 'CV longo. Considere reduzir para 1-2 páginas.' : 'Comprimento ideal.' },
    { label: 'Seções essenciais', score: sectionScore, icon: '📋', tip: sectionCount < 4 ? `Seções em falta: ${Object.entries(sections).filter(([,v]) => !v).map(([k]) => k).join(', ')}.` : 'Todas as seções principais presentes.' },
    { label: 'Resultados quantificados', score: quantScore, icon: '📊', tip: numbers < 3 ? 'Acrescente números e percentagens: "aumentei vendas em 30%", "geri equipe de 8 pessoas".' : 'Boa presença de dados quantificados.' },
    { label: 'Verbos de acção', score: verbScore, icon: '⚡', tip: verbCount < 3 ? 'Usa verbos de impacto: liderou, desenvolveu, implementou, reduziu...' : 'Boa utilização de verbos de acção.' },
  ]
  const total = Math.round(items.reduce((s, i) => s + i.score, 0) / items.length)
  return { total, items, words, numbers, verbCount }
}

function CVAnalyzer() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const analyze = () => { if (text.trim().length >= 50) setResult(analyzeCv(text)) }
  const scoreColor = (s) => s >= 80 ? 'text-green-600' : s >= 50 ? 'text-amber-500' : 'text-red-500'
  const scoreBg = (s) => s >= 80 ? 'bg-green-500' : s >= 50 ? 'bg-amber-400' : 'bg-red-400'
  const scoreLabel = (s) => s >= 80 ? 'Excelente' : s >= 60 ? 'Bom' : s >= 40 ? 'A melhorar' : 'Crítico'
  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cola aqui o texto do seu CV</label>
        <textarea
          className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={10}
          placeholder="Cola o conteúdo do seu CV aqui (texto simples). No PDF: selecione tudo → copia → cola aqui..."
          value={text}
          onChange={(e) => { setText(e.target.value); setResult(null) }}
        />
        <p className="text-xs text-slate-400 mt-1">A análise é feita inteiramente no seu navegador. Não compartilhamos este texto.</p>
      </div>
      <button
        onClick={analyze}
        disabled={text.trim().length < 50}
        className={`px-6 py-3 font-bold rounded-xl text-sm transition-colors ${text.trim().length >= 50 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
      >
        Analisar CV →
      </button>
      {result && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5 text-center">
            <div className={`text-6xl font-black mb-1 ${scoreColor(result.total)}`}>{result.total}</div>
            <div className="text-slate-500 text-sm font-semibold mb-1">/ 100 pontos</div>
            <div className={`text-sm font-bold ${scoreColor(result.total)}`}>{scoreLabel(result.total)}</div>
            <p className="text-xs text-slate-400 mt-2">{result.words} palavras · {result.numbers} dados quantificados · {result.verbCount} verbos de acção</p>
          </div>
          <div className="space-y-3">
            {result.items.map((item) => (
              <div key={item.label} className="bg-white border border-slate-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span className="font-semibold text-slate-700 text-sm">{item.label}</span>
                  </div>
                  <span className={`text-sm font-black ${scoreColor(item.score)}`}>{item.score}/100</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                  <div className={`h-2 rounded-full transition-all duration-700 ${scoreBg(item.score)}`} style={{ width: `${item.score}%` }} />
                </div>
                <p className="text-xs text-slate-500">{item.tip}</p>
              </div>
            ))}
          </div>
          {result.total < 80 && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs font-bold text-amber-800 mb-1">💡 Próximo passo</p>
              <p className="text-xs text-amber-700">
                {result.total < 40
                  ? 'O seu CV precisa de atenção urgente. Use o Módulo 1 (CV que Passa pelos Filtros ATS) para uma reformulação completa.'
                  : result.total < 60
                  ? 'Foque em quantificar os seus resultados e adicionar verbos de acção. Cada bullet point deve responder "que resultado gerou?"'
                  : 'Você está no caminho certo! Refina as seções com pontuação mais baixa para chegar a 80+.'}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 14: Gerador de Plano 30-60-90 dias ───────────────────────────
const PLAN_PHASES = {
  30: {
    theme: 'Integração & Aprendizagem',
    color: { border: 'border-blue-200', bg: 'bg-blue-50', badge: 'bg-blue-100 text-blue-700' },
    goals: [
      'Conhecer todos os membros diretos da equipe e agendar 1:1s iniciais',
      'Compreender os processos, ferramentas e fluxos de trabalho da equipe',
      'Identificar os stakeholders-chave e mapear as dependências entre equipes',
      'Absorver a cultura, os valores e as prioridades estratégicas da empresa',
      'Ter a primeira sessão de feedback com o/a gestor/a direto/a',
    ],
  },
  60: {
    theme: 'Contribuição & Consolidação',
    color: { border: 'border-violet-200', bg: 'bg-violet-50', badge: 'bg-violet-100 text-violet-700' },
    goals: [
      'Concluir o primeiro projeto ou entregável com impacto real e mensurável',
      'Propor uma melhoria identificada durante o período de integração',
      'Funcionar de forma autónoma nas tarefas e responsabilidades do dia a dia',
      'Receber feedback formal dos primeiros 30 dias e ajustar abordagem',
      'Identificar uma área onde pode tornar-te referência na equipe',
    ],
  },
  90: {
    theme: 'Impacto & Visibilidade',
    color: { border: 'border-green-200', bg: 'bg-green-50', badge: 'bg-green-100 text-green-700' },
    goals: [
      'Ter entregues 2-3 resultados mensuráveis com impacto claro para o negócio',
      'Ser reconhecido/a pela equipe como uma contribuição clara e de valor',
      'Propor ou liderar uma iniciativa própria com visibilidade interna',
      'Ter um plano de desenvolvimento pessoal para os próximos 6 meses',
      'Agendar revisão formal de performance com a chefia direta',
    ],
  },
}

const ROLE_TIPS = {
  individual: 'Como contribuidor individual, foque nos entregáveis concretos e em construir credibilidade técnica. Nos primeiros 30 dias, escuta mais do que fala.',
  lead: 'Como líder de equipe, prioriza conhecer as pessoas antes de qualquer mudança de processo. Adia grandes decisões para depois dos 60 dias.',
  manager: 'Como gestor/a, o seu sucesso depende da equipe. Os primeiros 30 dias são para observar e construir confiança — não para reorganizar.',
  executive: 'Como executivo/a, equilibra velocidade de acção com escuta ativa. Decisões precipitadas nos primeiros 90 dias são difíceis de reverter.',
}

function Plan9090Generator() {
  const [form, setForm] = useState({ role: '', company: '', seniority: 'individual' })
  const [output, setOutput] = useState(null)
  const [copied, setCopied] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

  const getText = (o) => {
    if (!o) return ''
    let t = `PLANO 30-60-90 DIAS\n${o.role} · ${o.company}\n${'='.repeat(40)}\n\n`
    ;[30, 60, 90].forEach((days) => {
      const p = PLAN_PHASES[days]
      t += `PRIMEIROS ${days} DIAS — ${p.theme}\n${'-'.repeat(30)}\n`
      p.goals.forEach((g, i) => t += `${i + 1}. ${g}\n`)
      t += '\n'
    })
    t += `DICA: ${ROLE_TIPS[o.seniority]}\n`
    return t
  }

  const copy = () => {
    navigator.clipboard.writeText(getText(output))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cargo / função</label>
          <input className={inp} placeholder="Ex: Product Manager" value={form.role} onChange={set('role')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Empresa</label>
          <input className={inp} placeholder="Ex: Startup XYZ" value={form.company} onChange={set('company')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Tipo de função</label>
          <select className={inp} value={form.seniority} onChange={set('seniority')}>
            <option value="individual">Contribuidor Individual</option>
            <option value="lead">Tech / Team Lead</option>
            <option value="manager">Gestor/a de Equipe</option>
            <option value="executive">Executivo / Directoria</option>
          </select>
        </div>
      </div>
      <button
        onClick={() => setOutput({ role: form.role.trim() || 'Nova função', company: form.company.trim() || 'nova empresa', seniority: form.seniority })}
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors"
      >
        Gerar plano →
      </button>
      {output && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-800 text-sm">Plano 30-60-90 · {output.role} @ {output.company}</h3>
            <button onClick={copy} className={`text-sm font-semibold underline ${copied ? 'text-green-600' : 'text-blue-600 hover:text-blue-800'}`}>
              {copied ? '✓ Copiado!' : 'Copiar tudo'}
            </button>
          </div>
          {[30, 60, 90].map((days) => {
            const p = PLAN_PHASES[days]
            return (
              <div key={days} className={`border rounded-2xl p-5 ${p.color.border} ${p.color.bg}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-black px-2 py-0.5 rounded-full ${p.color.badge}`}>Dias 1–{days}</span>
                  <span className="font-bold text-slate-800 text-sm">{p.theme}</span>
                </div>
                <ul className="space-y-2">
                  {p.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-slate-400 font-bold w-4 flex-shrink-0">{i + 1}.</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs font-bold text-amber-800 mb-1">💡 Dica para o seu perfil</p>
            <p className="text-xs text-amber-700">{ROLE_TIPS[output.seniority]}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 15: Gerador de Elevator Pitch Pessoal ────────────────────────
function ElevatorPitch() {
  const [form, setForm] = useState({ role: '', area: '', experience: '2-4', achievement: '', goal: '' })
  const [pitches, setPitches] = useState(null)
  const [copied, setCopied] = useState(null)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

  const expLabels = { '0-1': 'cerca de 1 ano', '2-4': 'quase 3 anos', '5-9': '7 anos', '10+': 'mais de 10 anos' }

  const generate = () => {
    const r = form.role.trim() || 'profissional'
    const a = form.area.trim()
    const exp = expLabels[form.experience]
    const ach = form.achievement.trim()
    const goal = form.goal.trim() || 'novos desafios'

    const short = `Sou ${r} com ${exp} de experiência${a ? ` em ${a}` : ''}.${ach ? ` ${ach}.` : ''} Estou em busca de ${goal}.`

    const interview = `Tenho ${exp} de experiência como ${r}${a ? `, principalmente na área de ${a}` : ''}. ${ach ? `Um dos meus principais resultados foi: ${ach}. ` : ''}Ao longo da carreira, desenvolvi competências que me permitem gerar impacto real desde o primeiro dia. Hoje estou em busca de ${goal} onde possa continuar a crescer e contribuir de forma significativa.`

    const linkedin = `Olá! Sou ${r} com ${exp}${a ? ` em ${a}` : ''}. ${ach ? ach.replace(/^Eu\s/i, '') + '. ' : ''}Estaria aberto a conectar e explorar possibilidades relacionadas a ${goal}. Podemos trocar experiências?`

    setPitches({ short, interview, linkedin })
    setCopied(null)
  }

  const versions = pitches ? [
    { key: 'short', label: '⏱️ Pitch Rápido (30s)', sub: 'Para apresentações em eventos, networking e introductions', text: pitches.short },
    { key: 'interview', label: '🎤 "Fale sobre você" (60s)', sub: 'Para a primeira pergunta de qualquer entrevista', text: pitches.interview },
    { key: 'linkedin', label: '📩 Mensagem LinkedIn', sub: 'Para abordar recrutadores ou fazer networking no DM', text: pitches.linkedin },
  ] : []

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cargo / profissão *</label>
          <input className={inp} placeholder="Ex: Analista de Marketing Digital" value={form.role} onChange={set('role')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Área / setor (opcional)</label>
          <input className={inp} placeholder="Ex: e-commerce, saúde, fintech, varejo" value={form.area} onChange={set('area')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Anos de experiência</label>
          <select className={inp} value={form.experience} onChange={set('experience')}>
            <option value="0-1">Menos de 1 ano (júnior / estágio)</option>
            <option value="2-4">2–4 anos (pleno)</option>
            <option value="5-9">5–9 anos (sênior)</option>
            <option value="10+">10+ anos (especialista / líder)</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">O que você busca a seguir</label>
          <input className={inp} placeholder="Ex: liderança de equipe em startup B2B" value={form.goal} onChange={set('goal')} />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Sua maior conquista (com número, se possível)</label>
          <textarea className={inp} rows={2} placeholder="Ex: Aumentei a taxa de conversão do e-mail marketing de 2% para 6,5% em 4 meses, gerando R$140k em receita adicional." value={form.achievement} onChange={set('achievement')} />
        </div>
      </div>
      <button onClick={generate} disabled={!form.role} className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors disabled:opacity-50">
        Gerar 3 versões do pitch →
      </button>
      {pitches && (
        <div className="space-y-4">
          <p className="text-xs text-slate-500 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
            💡 Estas versões são uma base. Edite para soar como você — o pitch precisa ser natural, não decorado.
          </p>
          {versions.map(({ key, label, sub, text }) => (
            <div key={key} className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-bold text-slate-800 text-sm">{label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
                </div>
                <button onClick={() => { navigator.clipboard.writeText(text); setCopied(key); setTimeout(() => setCopied(null), 2000) }}
                  className={`text-xs font-semibold ml-3 whitespace-nowrap ${copied === key ? 'text-green-600' : 'text-blue-600 hover:text-blue-800 underline'}`}>
                  {copied === key ? '✓ Copiado!' : 'Copiar'}
                </button>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed bg-white border border-slate-100 rounded-xl p-3">{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 16: Gerador de Bullets de CV ──────────────────────────────────
const POWER_VERBS = {
  results:    ['Aumentei', 'Expandi', 'Reduzi', 'Gerei', 'Atingi', 'Otimizei', 'Impulsionei', 'Maximizei'],
  leadership: ['Liderei', 'Gerenciei', 'Coordenei', 'Desenvolvi', 'Mentoreei', 'Treinei', 'Dirigi', 'Mobilizei'],
  project:    ['Desenvolvi', 'Lancei', 'Construí', 'Entreguei', 'Implementei', 'Criei', 'Estabeleci', 'Arquitetei'],
  process:    ['Automatizei', 'Simplifiquei', 'Redesenhei', 'Padronizei', 'Estruturei', 'Modernizei', 'Eliminei', 'Acelerei'],
}

function CVBulletGenerator() {
  const [form, setForm] = useState({ what: '', context: '', result: '', type: 'results', company_type: '' })
  const [bullets, setBullets] = useState([])
  const [copied, setCopied] = useState(null)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

  const generate = () => {
    const verbs = POWER_VERBS[form.type] || POWER_VERBS.results
    const what = form.what.trim().toLowerCase().replace(/^(eu\s+)?(desenvolvi|criei|implementei|liderei|fiz|realizei|construí)\s+/i, '')
    const ctx = form.context.trim()
    const res = form.result.trim()
    const co = form.company_type.trim()

    const resLow = res ? res.toLowerCase() : ''
    const ctxFrag = ctx ? ` em contexto de ${ctx.toLowerCase()}` : ''
    const coFrag = co ? ` para ${co}` : ''

    const generated = [
      res ? `${verbs[0]} ${resLow} ao ${what}${coFrag}${ctxFrag}.` : `${verbs[0]} ${what}${coFrag}${ctxFrag}${res ? `, gerando ${resLow}` : ''}.`,
      `${verbs[1]} ${what}${coFrag}${ctx ? ` durante ${ctx.toLowerCase()}` : ''}${res ? `, resultando em ${resLow}` : ''}.`,
      `${verbs[2]} ${what}${coFrag}${res ? `, alcançando ${resLow}` : ''}${ctxFrag}.`,
      `${verbs[3]} ${what}${res ? ` — ${res}` : ''}${ctx ? ` (${ctx})` : ''}.`,
      `${verbs[4]} estratégia de ${what}${coFrag}${res ? `, com impacto de ${resLow}` : ''}${ctxFrag}.`,
    ]

    setBullets(generated)
    setCopied(null)
  }

  return (
    <div className="space-y-5">
      <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm text-blue-700">
        <strong>Fórmula:</strong> Verbo de impacto → O que fez → Contexto → Resultado quantificado
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Tipo de bullet</label>
          <select className={inp} value={form.type} onChange={set('type')}>
            <option value="results">Resultado / Impacto nos números</option>
            <option value="leadership">Liderança / Gestão de pessoas</option>
            <option value="project">Projeto / Entrega / Produto</option>
            <option value="process">Processo / Eficiência / Melhoria</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Empresa / setor (opcional)</label>
          <input className={inp} placeholder="Ex: startup SaaS, banco, varejo" value={form.company_type} onChange={set('company_type')} />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">O que você fez (descreva a ação) *</label>
          <textarea className={inp} rows={2} placeholder="Ex: sistema de automação de relatórios que antes eram feitos manualmente pela equipe de dados" value={form.what} onChange={set('what')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Contexto / desafio enfrentado</label>
          <input className={inp} placeholder="Ex: crescimento de 300% em 6 meses, equipe de 3 pessoas" value={form.context} onChange={set('context')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Resultado — com número! *</label>
          <input className={inp} placeholder="Ex: 12h/semana economizadas, 40% menos erros, R$180k" value={form.result} onChange={set('result')} />
        </div>
      </div>
      <button onClick={generate} disabled={!form.what} className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors disabled:opacity-50">
        Gerar 5 versões de bullet →
      </button>
      {bullets.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs text-slate-500">Escolha a versão que melhor soa para você e ajuste o tom. Use um bullet por realização.</p>
          {bullets.map((b, i) => (
            <div key={i} className={`flex items-start gap-3 p-3 border rounded-xl transition-colors ${copied === i ? 'border-green-300 bg-green-50' : 'border-slate-200 bg-white hover:border-blue-200'}`}>
              <span className="text-slate-300 font-bold text-sm w-5 flex-shrink-0 pt-0.5">{i + 1}.</span>
              <p className="flex-1 text-sm text-slate-700 leading-relaxed">• {b}</p>
              <button onClick={() => { navigator.clipboard.writeText(`• ${b}`); setCopied(i); setTimeout(() => setCopied(null), 2000) }}
                className={`text-xs font-semibold whitespace-nowrap ml-2 ${copied === i ? 'text-green-600' : 'text-blue-500 hover:text-blue-700 underline'}`}>
                {copied === i ? '✓' : 'Copiar'}
              </button>
            </div>
          ))}
          <p className="text-xs text-blue-600 font-medium bg-blue-50 px-3 py-2 rounded-lg">
            💡 A versão 1 (que inicia com o resultado) tende a ser a mais impactante. CVs que quantificam conquistas têm 40% mais chamadas para entrevistas.
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 17: Script de Negociação Salarial ─────────────────────────────
function NegotiationScript() {
  const [form, setForm] = useState({ offer: '', target: '', experience: '5', s1: '', s2: '', s3: '', situation: 'new_job', market: 'brazil' })
  const [script, setScript] = useState(null)
  const [copied, setCopied] = useState(null)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
  const cur = form.market === 'portugal' ? '€' : 'R$'
  const fmt = (n) => n ? `${cur} ${Number(n).toLocaleString('pt-BR')}` : ''
  const diff = (form.offer && form.target) ? Math.round(((+form.target - +form.offer) / +form.offer) * 100) : null
  const midpoint = (form.offer && form.target) ? Math.round((+form.offer + +form.target) / 2) : null

  const openers = {
    new_job: 'Fico muito feliz com a proposta e tenho interesse real na posição.',
    promotion: 'Agradeço a confiança e o reconhecimento do meu trabalho.',
    renewal: 'Tenho gostado muito de trabalhar aqui e quero continuar contribuindo.',
  }
  const closers = {
    new_job: 'estou muito motivado para fazer parte do time',
    promotion: 'quero continuar crescendo aqui',
    renewal: 'quero manter essa parceria de longo prazo',
  }

  const generate = () => {
    const strengths = [form.s1, form.s2, form.s3].filter(Boolean)
    const strengthText = strengths.length > 0
      ? `Ao longo da minha trajetória: ${strengths.join('; ')}.`
      : 'Ao longo da minha trajetória, desenvolvi competências que me permitem gerar resultados reais desde o primeiro dia.'
    setScript({ offer: fmt(form.offer), target: fmt(form.target), mid: fmt(midpoint), strengthText, experience: form.experience, opener: openers[form.situation], closer: closers[form.situation] })
    setCopied(null)
  }

  const steps = script ? [
    { key: 'a', label: '1. Abertura', color: 'border-blue-200 bg-blue-50', text: `"${script.opener} Antes de dar meu aceite definitivo, gostaria de conversar sobre a remuneração."` },
    { key: 'b', label: '2. Proposta de valor', color: 'border-indigo-200 bg-indigo-50', text: `"${script.strengthText} Por isso, vim preparado com uma proposta baseada em pesquisa de mercado."` },
    { key: 'c', label: '3. O número', color: 'border-violet-200 bg-violet-50', text: `"Considerando minha experiência de ${script.experience} anos na área e o mercado atual para este perfil, minha expectativa de remuneração é de ${script.target}."` },
    { key: 'd', label: '4. Se disserem "não temos essa margem"', color: 'border-amber-200 bg-amber-50', text: `"Entendo a restrição. Como ${script.closer}, quero que chegemos a um acordo que funcione para os dois lados. Há possibilidade de chegarmos a ${script.mid || 'um valor intermediário'}?"` },
    { key: 'e', label: '5. Alternativa se for o máximo', color: 'border-orange-200 bg-orange-50', text: `"Nesse caso, posso considerar ${script.offer} se incluirmos [bônus por performance / revisão em 6 meses / dias de home office / auxílio para formação]. Isso seria possível?"` },
    { key: 'f', label: '6. Fechamento', color: 'border-green-200 bg-green-50', text: `"Perfeito. Para confirmar: ${script.offer} fixo mais [benefícios acordados]. Posso receber isso por escrito para dar o aceite formal?"` },
  ] : []

  const allText = steps.map((s) => `${s.label}\n${s.text}`).join('\n\n')

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Situação</label>
          <select className={inp} value={form.situation} onChange={set('situation')}>
            <option value="new_job">Nova proposta de emprego</option>
            <option value="promotion">Promoção interna</option>
            <option value="renewal">Renovação / reajuste salarial</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Mercado</label>
          <select className={inp} value={form.market} onChange={set('market')}>
            <option value="brazil">Brasil (R$)</option>
            <option value="portugal">Portugal (€)</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Oferta recebida ({cur})</label>
          <input className={inp} type="number" placeholder="Ex: 8000" value={form.offer} onChange={set('offer')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Seu valor-alvo ({cur})</label>
          <input className={inp} type="number" placeholder="Ex: 10000" value={form.target} onChange={set('target')} />
        </div>
        {diff !== null && (
          <div className="sm:col-span-2">
            <div className={`rounded-xl px-4 py-3 text-sm font-medium ${diff > 30 ? 'bg-orange-50 border border-orange-200 text-orange-700' : diff > 10 ? 'bg-yellow-50 border border-yellow-200 text-yellow-700' : diff > 0 ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-slate-50 border border-slate-200 text-slate-600'}`}>
              {diff > 0 ? `Você pede ${diff}% acima da oferta. ${diff > 30 ? 'Gap alto — seus argumentos precisam ser sólidos.' : diff > 10 ? 'Gap razoável — totalmente negociável com bons argumentos.' : 'Gap baixo — muito provável de conseguir.'}` : diff === 0 ? 'Valores iguais — sem necessidade de negociar.' : 'Seu alvo está abaixo da oferta — revise os valores.'}
            </div>
          </div>
        )}
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Anos de experiência na área</label>
          <input className={inp} type="number" placeholder="Ex: 5" value={form.experience} onChange={set('experience')} />
        </div>
        {[['s1', 'Seu diferencial 1 *', 'Ex: Aumentei as vendas em 35% no último ano'], ['s2', 'Seu diferencial 2', 'Ex: Liderei equipe de 8 pessoas durante reestruturação'], ['s3', 'Seu diferencial 3', 'Ex: Certificação PMP + inglês fluente + mercado internacional']].map(([k, lbl, ph]) => (
          <div key={k}>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">{lbl}</label>
            <input className={inp} placeholder={ph} value={form[k]} onChange={set(k)} />
          </div>
        ))}
      </div>
      <button onClick={generate} disabled={!form.offer || !form.target || !form.s1} className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors disabled:opacity-50">
        Gerar script de negociação →
      </button>
      {script && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-800 text-sm">Script completo — 6 momentos da negociação</h3>
            <button onClick={() => { navigator.clipboard.writeText(allText); setCopied('all'); setTimeout(() => setCopied(null), 2000) }}
              className={`text-sm font-semibold underline ${copied === 'all' ? 'text-green-600' : 'text-blue-600 hover:text-blue-800'}`}>
              {copied === 'all' ? '✓ Copiado!' : 'Copiar tudo'}
            </button>
          </div>
          {steps.map(({ key, label, color, text }) => (
            <div key={key} className={`border rounded-2xl p-4 ${color}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider">{label}</span>
                <button onClick={() => { navigator.clipboard.writeText(text); setCopied(key); setTimeout(() => setCopied(null), 2000) }}
                  className={`text-xs font-semibold ${copied === key ? 'text-green-600' : 'text-blue-600 hover:text-blue-800 underline'}`}>
                  {copied === key ? '✓' : 'Copiar'}
                </button>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic">{text}</p>
            </div>
          ))}
          <p className="text-xs text-slate-400 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
            ⚠️ Adapte para o seu tom natural. Não leia o script — pratique em voz alta até soar espontâneo. Confiança na entrega vale tanto quanto o argumento.
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 22: Temporizador de Entrevista ───────────────────────────────
const INTERVIEW_QUESTIONS_BANK = [
  'Fale sobre você e sua trajetória profissional.',
  'Qual é o seu maior ponto forte e como ele agrega valor nesta vaga?',
  'Qual foi o maior desafio profissional que você enfrentou e como superou?',
  'Por que você quer trabalhar nesta empresa?',
  'Onde você se vê em 5 anos?',
  'Descreva uma situação em que precisou liderar sem ter autoridade formal.',
  'Conte sobre uma vez em que cometeu um erro grave. O que fez?',
  'Como você lida com prioridades conflitantes e prazos apertados?',
  'O que o diferencia dos outros candidatos para esta posição?',
  'Qual foi a sua maior conquista profissional e por que é significativa?',
  'Descreva um projeto em que você teve de colaborar com pessoas difíceis.',
  'Como você se mantém atualizado na sua área?',
  'Qual é a sua pretensão salarial e como chegou a este número?',
  'Você tem perguntas para nós?',
  'Fale sobre uma vez em que precisou aprender algo muito rapidamente.',
  'Descreva uma situação em que discordou do seu gestor. Como agiu?',
  'Qual é a sua maior fraqueza e o que está fazendo para melhorá-la?',
  'Conte sobre um projeto que não saiu como esperado. O que aprendeu?',
  'Como você define e mede o sucesso no seu trabalho?',
  'Descreva sua experiência trabalhando em equipes multidisciplinares.',
]

function InterviewTimer() {
  const [selectedQ, setSelectedQ] = useState(null)
  const [customQ, setCustomQ] = useState('')
  const [timeLimit, setTimeLimit] = useState(120)
  const [timeLeft, setTimeLeft] = useState(null)
  const [running, setRunning] = useState(false)
  const [finished, setFinished] = useState(false)
  const [mode, setMode] = useState('pick') // pick | practice | done
  const intervalRef = { current: null }

  useEffect(() => {
    if (!running || timeLeft === null) return
    if (timeLeft <= 0) { setRunning(false); setFinished(true); setMode('done'); return }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [running, timeLeft])

  const start = (q) => {
    setSelectedQ(q || customQ.trim())
    setTimeLeft(timeLimit)
    setRunning(true)
    setFinished(false)
    setMode('practice')
  }

  const stop = () => { setRunning(false); setMode('done') }
  const reset = () => { setMode('pick'); setSelectedQ(null); setTimeLeft(null); setRunning(false); setFinished(false) }

  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
  const pct  = timeLeft !== null ? (timeLeft / timeLimit) * 100 : 100
  const warn = timeLeft !== null && timeLeft <= 30

  const timeLimits = [
    { label: '30s', value: 30, hint: 'Resposta muito curta' },
    { label: '1 min', value: 60, hint: 'Resposta concisa' },
    { label: '2 min', value: 120, hint: 'STAR completo (ideal)' },
    { label: '3 min', value: 180, hint: 'Resposta detalhada' },
  ]

  if (mode === 'practice' || mode === 'done') {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Pergunta</div>
          <p className="font-semibold text-slate-800">{selectedQ}</p>
        </div>

        {mode === 'practice' && (
          <div className="text-center space-y-4">
            <div className={`text-7xl font-black tabular-nums transition-colors ${warn ? 'text-red-500' : 'text-slate-800'}`}>
              {fmt(timeLeft)}
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${warn ? 'bg-red-500' : 'bg-blue-500'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            {warn && <p className="text-red-500 text-sm font-semibold">Vá concluindo sua resposta!</p>}
            <div className="flex gap-3 justify-center">
              <button onClick={stop} className="px-6 py-2.5 bg-slate-200 text-slate-700 rounded-xl font-semibold text-sm hover:bg-slate-300">
                Parar
              </button>
              <button onClick={reset} className="px-6 py-2.5 bg-red-100 text-red-700 rounded-xl font-semibold text-sm hover:bg-red-200">
                Nova pergunta
              </button>
            </div>
            <p className="text-xs text-slate-400">Responda em voz alta como se fosse uma entrevista real. A prática em voz alta é 3x mais eficaz do que ler.</p>
          </div>
        )}

        {mode === 'done' && (
          <div className="text-center space-y-4">
            <div className="text-4xl">{finished ? '⏰' : '✅'}</div>
            <div className="font-black text-xl text-slate-800">{finished ? 'Tempo esgotado!' : 'Resposta concluída!'}</div>
            <p className="text-slate-500 text-sm">Como foi? Revise mentalmente: você foi claro, usou dados e chegou a uma conclusão forte?</p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-left space-y-1">
              <p className="text-xs font-bold text-blue-700 mb-2">Checklist de auto-avaliação:</p>
              {['Comecei com a situação/contexto?', 'Expliquei minha ação específica?', 'Mencionei resultados concretos?', 'A resposta teve início, meio e fim?', 'Fui dentro do tempo sem me apressar?'].map((c) => (
                <label key={c} className="flex items-center gap-2 text-xs text-blue-800 cursor-pointer">
                  <input type="checkbox" className="rounded" /> {c}
                </label>
              ))}
            </div>
            <div className="flex gap-3 justify-center">
              <button onClick={() => start(selectedQ)} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700">
                Repetir pergunta
              </button>
              <button onClick={reset} className="px-6 py-2.5 bg-slate-200 text-slate-700 rounded-xl font-semibold text-sm hover:bg-slate-300">
                Nova pergunta
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {timeLimits.map((t) => (
          <button
            key={t.value}
            onClick={() => setTimeLimit(t.value)}
            className={`p-3 rounded-xl border text-center transition-all ${timeLimit === t.value ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300'}`}
          >
            <div className="font-black text-lg">{t.label}</div>
            <div className={`text-xs ${timeLimit === t.value ? 'text-blue-100' : 'text-slate-400'}`}>{t.hint}</div>
          </button>
        ))}
      </div>

      <div>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Pergunta personalizada (opcional)</div>
        <div className="flex gap-2">
          <input
            value={customQ}
            onChange={(e) => setCustomQ(e.target.value)}
            placeholder="Digite uma pergunta específica da sua área..."
            className="flex-1 px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={() => customQ.trim() && start()} disabled={!customQ.trim()} className="px-4 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm disabled:opacity-50 hover:bg-blue-700">
            Iniciar
          </button>
        </div>
      </div>

      <div>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Banco de perguntas</div>
        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
          {INTERVIEW_QUESTIONS_BANK.map((q, i) => (
            <button
              key={i}
              onClick={() => start(q)}
              className="w-full text-left bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 hover:border-blue-400 hover:bg-blue-50 transition-all group flex items-center justify-between gap-3"
            >
              <span className="flex-1">{q}</span>
              <span className="text-blue-500 flex-shrink-0 text-xs font-bold opacity-0 group-hover:opacity-100">Praticar →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Ferramenta 23: Mapeador de Pontos Fortes e Fracos ───────────────────────
const STRENGTHS = [
  { id: 'analysis', icon: '📊', label: 'Análise de Dados', how: 'Em situações de decisão, coletar dados relevantes e apresentar insights que fundamentam a escolha. Ex: "Analisei métricas de funil e identifiquei que 60% do churn ocorria no onboarding, não na renovação."' },
  { id: 'leadership', icon: '🎯', label: 'Liderança', how: 'Demonstrar influência sem autoridade formal. Ex: "Sem ser o gestor oficial, alinhai 3 equipes diferentes para lançar o produto no prazo ao criar um ritual semanal de sincronização."' },
  { id: 'communication', icon: '🗣️', label: 'Comunicação', how: 'Traduzir complexidade. Ex: "Apresentei análise técnica para o board executivo em 5 minutos, sem jargão, focando nos 3 riscos e as ações recomendadas."' },
  { id: 'creativity', icon: '💡', label: 'Criatividade', how: 'Soluções não óbvias. Ex: "Com orçamento cortado 40%, propus parceria de co-marketing que gerou o mesmo alcance por 15% do custo original."' },
  { id: 'resilience', icon: '🔄', label: 'Resiliência', how: 'Recuperação após adversidade. Ex: "Após a demissão de 3 membros da equipe no mesmo mês, reestruturei os processos para manter entrega sem contratar."' },
  { id: 'organization', icon: '📋', label: 'Organização', how: 'Sistemas que funcionam. Ex: "Criei template de gestão de projetos que reduziu reuniões de status em 50% e aumentou previsibilidade de entrega."' },
  { id: 'learning', icon: '📚', label: 'Aprendizado Rápido', how: 'Evidência concreta. Ex: "Aprendi SQL em 3 semanas de bootcamp intensivo e em 2 meses já extraía relatórios que o analista levava 2 dias para fazer."' },
  { id: 'empathy', icon: '🤝', label: 'Inteligência Emocional', how: 'Situações com alta pressão interpessoal. Ex: "Mediei conflito entre líderes de área que estava travando o projeto há meses, chegando a acordo em 2 reuniões."' },
  { id: 'results', icon: '🏆', label: 'Foco em Resultados', how: 'Números que falam. Ex: "Aumentei conversão de freemium para pago em 22% em 4 meses testando 8 variações de onboarding com A/B."' },
  { id: 'innovation', icon: '🚀', label: 'Inovação', how: 'Processos ou produtos novos. Ex: "Propus e implementei piloto de automação de relatórios que economizou 6h/semana da equipe."' },
  { id: 'collaboration', icon: '👥', label: 'Colaboração', how: 'Projetos multidisciplinares. Ex: "Articulei área de tech, marketing e jurídico para lançar funcionalidade em conformidade com LGPD em 6 semanas."' },
  { id: 'strategic', icon: '🗺️', label: 'Visão Estratégica', how: 'Conectar ações ao todo. Ex: "Identifiquei que expandir para PMEs antes de grandes contas seria 5x mais eficiente — recomendei e economizamos 8 meses de ciclo de venda."' },
]

function StrengthsMapper() {
  const [selected, setSelected] = useState([])
  const [showHow, setShowHow] = useState(null)

  const toggle = (id) => setSelected((s) => s.includes(id) ? s.filter((x) => x !== id) : s.length < 5 ? [...s, id] : s)

  const myStrengths = STRENGTHS.filter((s) => selected.includes(s.id))

  return (
    <div className="space-y-5">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>Como usar:</strong> Selecione até 5 pontos fortes que realmente se aplicam a você. Para cada um, você verá como articulá-lo em entrevistas com exemplos concretos.
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Seus pontos fortes ({selected.length}/5)</div>
          {selected.length > 0 && <button onClick={() => setSelected([])} className="text-xs text-slate-400 hover:text-slate-600 underline">Limpar</button>}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {STRENGTHS.map((s) => {
            const sel = selected.includes(s.id)
            return (
              <button
                key={s.id}
                onClick={() => toggle(s.id)}
                className={`p-3 rounded-xl border text-left transition-all ${sel ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50'} ${!sel && selected.length >= 5 ? 'opacity-40 cursor-not-allowed' : ''}`}
                disabled={!sel && selected.length >= 5}
              >
                <div className="text-xl mb-1">{s.icon}</div>
                <div className="text-xs font-semibold leading-tight">{s.label}</div>
              </button>
            )
          })}
        </div>
      </div>

      {myStrengths.length > 0 && (
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Como articular em entrevistas</div>
          {myStrengths.map((s) => (
            <div key={s.id} className="bg-white border border-slate-200 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{s.icon}</span>
                  <span className="font-bold text-slate-800 text-sm">{s.label}</span>
                </div>
                <button onClick={() => setShowHow(showHow === s.id ? null : s.id)} className="text-xs text-blue-600 underline hover:text-blue-800">
                  {showHow === s.id ? 'Ocultar' : 'Ver como falar'}
                </button>
              </div>
              {showHow === s.id && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mt-2">
                  <p className="text-sm text-blue-800 leading-relaxed">{s.how}</p>
                  <button onClick={() => navigator.clipboard.writeText(s.how)} className="text-xs text-blue-600 underline mt-2 hover:text-blue-800">
                    Copiar exemplo
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 24: Gerador de Carta de Apresentação Rápida ─────────────────
function CoverLetterGenerator() {
  const [form, setForm] = useState({ name: '', role: '', company: '', exp: '', highlight1: '', highlight2: '', why: '' })
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

  const generate = () => {
    const { name, role, company, exp, highlight1, highlight2, why } = form
    if (!name || !role || !company || !exp || !highlight1) return
    setOutput(`${company},\n\nMeu nome é ${name} e estou a candidatar-me à posição de ${role}.\n\nCom ${exp} de experiência, acumulei conquistas que acredito serem diretamente relevantes: ${highlight1}.${highlight2 ? ` Adicionalmente, ${highlight2}.` : ''}\n\n${why ? `O que me atrai especialmente para a ${company} é ${why}. ` : ''}Acredito que posso contribuir de forma significativa desde o primeiro dia.\n\nAgradeço a oportunidade de participar no processo seletivo e fico à disposição para uma conversa.\n\nAtenciosamente,\n${name}`)
    setCopied(false)
  }

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000) }

  const fields = [
    { k: 'name', label: 'Seu nome completo', ph: 'Ex: Ana Carolina Silva' },
    { k: 'role', label: 'Cargo que está candidatando', ph: 'Ex: Analista de Marketing Sênior' },
    { k: 'company', label: 'Nome da empresa', ph: 'Ex: Nubank' },
    { k: 'exp', label: 'Sua experiência (resumida)', ph: 'Ex: 5 anos em marketing digital, especializada em growth e performance' },
    { k: 'highlight1', label: 'Conquista principal *', ph: 'Ex: aumentei o ROI de campanhas em 120% num período de 8 meses' },
    { k: 'highlight2', label: 'Conquista secundária (opcional)', ph: 'Ex: liderei migração de stack de analytics que reduziu tempo de relatório de 2 dias para 2 horas' },
    { k: 'why', label: 'Por que esta empresa? (opcional)', ph: 'Ex: o foco em experiência do cliente e a cultura de dados me inspiram' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {fields.map(({ k, label, ph }) => (
          <div key={k} className={k === 'exp' || k === 'highlight1' || k === 'highlight2' || k === 'why' ? 'sm:col-span-2' : ''}>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">{label}</label>
            {k === 'exp' || k === 'highlight1' || k === 'highlight2' || k === 'why' ? (
              <textarea className={inp} rows={2} placeholder={ph} value={form[k]} onChange={set(k)} />
            ) : (
              <input className={inp} placeholder={ph} value={form[k]} onChange={set(k)} />
            )}
          </div>
        ))}
      </div>
      <button
        onClick={generate}
        disabled={!form.name || !form.role || !form.company || !form.exp || !form.highlight1}
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        Gerar carta →
      </button>
      {output && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Carta gerada</span>
            <button onClick={copy} className={`text-xs font-semibold ${copied ? 'text-green-600' : 'text-blue-600 underline hover:text-blue-800'}`}>
              {copied ? '✓ Copiado!' : 'Copiar'}
            </button>
          </div>
          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">{output}</pre>
          <p className="text-blue-500 text-xs mt-3">💡 Revise e personalize antes de enviar. Esta é uma base — adicione detalhes específicos da vaga.</p>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 18: Gerador de Mensagem de Networking LinkedIn ────────────────
function LinkedInOutreachGenerator() {
  const [form, setForm] = useState({ recipientRole: '', company: '', myRole: '', purpose: '', commonGround: '' })
  const [results, setResults] = useState(null)
  const [copied, setCopied] = useState(null)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

  const generate = () => {
    const { recipientRole, company, myRole, purpose, commonGround } = form
    if (!recipientRole || !company || !myRole || !purpose) return
    const cg = commonGround.trim()
    setResults({
      connection: `Olá! Sou ${myRole} e tenho acompanhado o trabalho da ${company}. ${cg ? `${cg}. ` : ''}Adoraria conectar e trocar experiências sobre ${purpose}. Obrigado!`,
      dm: `Olá, tudo bem?\n\nSou ${myRole} e há algum tempo acompanho o trabalho que você e a equipe da ${company} estão fazendo — especialmente em ${purpose}.\n\n${cg ? `${cg}.\n\n` : ''}Gostaria muito de uma conversa rápida de 15-20 minutos para aprender com a sua perspectiva sobre [tema específico]. Sem agenda oculta — genuinamente interessado na sua visão.\n\nFaz sentido para você?`,
      followUp: `Olá [nome],\n\nPassaram alguns dias desde que conectamos e ainda não tive a oportunidade de me apresentar direito.\n\nSou ${myRole} com foco em ${purpose}. ${cg ? `${cg}.\n\n` : '\n\n'}Tenho muito interesse na trajetória de vocês na ${company} e adoraria uma conversa curta para trocar ideias. Você teria 15 minutos nas próximas semanas?\n\nObrigado pela atenção!`,
    })
    setCopied(null)
  }

  const copy = (key) => {
    navigator.clipboard.writeText(results[key])
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const messages = results ? [
    { key: 'connection', label: '🔗 Pedido de conexão', limit: 300, color: 'bg-blue-50 border-blue-200', badge: 'bg-blue-100 text-blue-700' },
    { key: 'dm', label: '💬 DM fria (após conectar)', limit: null, color: 'bg-violet-50 border-violet-200', badge: 'bg-violet-100 text-violet-700' },
    { key: 'followUp', label: '📨 Follow-up (sem resposta)', limit: null, color: 'bg-green-50 border-green-200', badge: 'bg-green-100 text-green-700' },
  ] : []

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { k: 'recipientRole', label: 'Cargo do destinatário', placeholder: 'Ex: Head de Marketing, CTO, Recrutadora' },
          { k: 'company', label: 'Empresa dele(a)', placeholder: 'Ex: Nubank, Magazine Luiza, Totvs' },
          { k: 'myRole', label: 'Seu cargo / área', placeholder: 'Ex: Analista de Dados com 4 anos em e-commerce' },
          { k: 'purpose', label: 'Objetivo do contato', placeholder: 'Ex: explorar oportunidades, aprender sobre a área, trocar experiências sobre growth' },
        ].map(({ k, label, placeholder }) => (
          <div key={k}>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">{label}</label>
            <input className={inp} placeholder={placeholder} value={form[k]} onChange={set(k)} />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Ponto em comum (opcional)</label>
          <input className={inp} placeholder="Ex: Vi sua palestra no RD Summit, li seu artigo sobre liderança, estamos no mesmo grupo de Alumni USP..." value={form.commonGround} onChange={set('commonGround')} />
        </div>
      </div>
      <Btn onClick={generate} variant="primary" size="md" disabled={!form.recipientRole || !form.company || !form.myRole || !form.purpose}>
        Gerar mensagens →
      </Btn>
      {results && (
        <div className="space-y-3">
          {messages.map(({ key, label, limit, color, badge }) => (
            <div key={key} className={`border rounded-2xl p-4 ${color}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-slate-700">{label}</span>
                  {limit && <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${badge}`}>{results[key].length}/{limit} chars</span>}
                </div>
                <button onClick={() => copy(key)} className={`text-xs font-semibold ${copied === key ? 'text-green-600' : 'text-blue-600 hover:text-blue-800 underline'}`}>
                  {copied === key ? '✓ Copiado' : 'Copiar'}
                </button>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{results[key]}</p>
              {limit && results[key].length > limit && (
                <p className="text-xs text-red-500 mt-2 font-semibold">⚠️ Excede o limite de {limit} caracteres do LinkedIn. Encurte.</p>
              )}
            </div>
          ))}
          <p className="text-xs text-slate-400 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
            💡 Personalize antes de enviar. Mencione algo específico que você leu ou viu da pessoa — isso aumenta a taxa de resposta em até 3x.
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 19: Analisador de Descrição de Vaga ──────────────────────────
const SENIORITY_SIGNALS = {
  junior: ['júnior', 'junior', 'trainee', 'estagiário', 'estágio', '0 a 2 anos', '1 ano', '2 anos', 'recém formado', 'iniciante'],
  pleno: ['pleno', '3 anos', '4 anos', '3 a 5 anos', '2 a 4 anos', 'experiência comprovada'],
  senior: ['sênior', 'senior', '5 anos', '6 anos', '7 anos', '5+ anos', 'experiência sólida', 'especialista', 'experiente'],
  lider: ['líder', 'liderança', 'gestão de time', 'gestor', 'coordenador', 'gerente', 'head', 'diretor', 'vp'],
}

const SKILL_CATEGORIES = {
  tecnica: { label: '⚙️ Técnicas', keywords: ['python', 'sql', 'excel', 'power bi', 'tableau', 'java', 'javascript', 'react', 'node', 'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'git', 'figma', 'sketch', 'photoshop', 'illustrator', 'autocad', 'sap', 'salesforce', 'hubspot', 'google analytics', 'meta ads', 'google ads', 'r ', 'matlab', 'html', 'css', 'typescript', 'php', 'c++', 'c#', '.net', 'swift', 'kotlin', 'flutter', 'mongodb', 'postgresql', 'mysql', 'redis', 'kafka', 'spark', 'hadoop', 'machine learning', 'inteligência artificial', 'ia', 'data science', 'tableau', 'looker', 'dbt', 'airflow', 'jira', 'confluence', 'notion', 'slack'] },
  soft: { label: '🧠 Comportamentais', keywords: ['comunicação', 'liderança', 'trabalho em equipe', 'proatividade', 'organização', 'resiliência', 'adaptabilidade', 'criatividade', 'inovação', 'análise crítica', 'pensamento analítico', 'negociação', 'empatia', 'colaboração', 'autonomia', 'ownership', 'accountability', 'foco em resultado', 'orientado a dados', 'data-driven', 'aprendizado rápido'] },
  idioma: { label: '🌍 Idiomas', keywords: ['inglês', 'inglês avançado', 'inglês fluente', 'inglês intermediário', 'espanhol', 'francês', 'alemão', 'mandarim', 'inglês técnico', 'english', 'bilíngue'] },
  educacao: { label: '🎓 Formação', keywords: ['graduação', 'ensino superior', 'pós-graduação', 'mba', 'mestrado', 'doutorado', 'certificação', 'certificado', 'bacharel', 'tecnólogo'] },
}

function JobDescriptionAnalyzer() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)

  const analyze = () => {
    if (!text.trim()) return
    const lower = text.toLowerCase()

    const seniority = Object.entries(SENIORITY_SIGNALS).find(([, sigs]) => sigs.some((s) => lower.includes(s)))?.[0] || 'não identificado'
    const seniorityLabel = { junior: '🟢 Júnior', pleno: '🟡 Pleno', senior: '🟠 Sênior', lider: '🔴 Liderança', 'não identificado': '⚪ Não identificado' }

    const found = {}
    for (const [cat, { keywords }] of Object.entries(SKILL_CATEGORIES)) {
      found[cat] = keywords.filter((k) => lower.includes(k))
    }

    const lines = text.split('\n').map((l) => l.trim()).filter(Boolean)
    const reqLines = []
    const niceLines = []
    let isRequired = true
    for (const line of lines) {
      const l = line.toLowerCase()
      if (l.includes('diferencial') || l.includes('desejável') || l.includes('plus') || l.includes('nice to have') || l.includes('será um diferencial')) {
        isRequired = false
      }
      if (l.includes('requisito') || l.includes('obrigatório') || l.includes('necessário') || l.includes('required') || l.includes('deve ter') || l.includes('precisa ter')) {
        isRequired = true
      }
      if (line.startsWith('•') || line.startsWith('-') || line.startsWith('*') || /^\d+\./.test(line)) {
        const clean = line.replace(/^[•\-\*\d\.]\s*/, '')
        if (clean.length > 10) {
          if (isRequired) reqLines.push(clean)
          else niceLines.push(clean)
        }
      }
    }

    const salaryMatch = text.match(/R\$\s*[\d.,]+/g)
    const remoteSignals = ['remoto', 'home office', 'híbrido', 'presencial', 'remote', 'hybrid']
    const workModel = remoteSignals.find((s) => lower.includes(s)) || 'não informado'

    const cultureSignals = []
    if (lower.includes('startup') || lower.includes('scale-up')) cultureSignals.push('Startup / escala rápida')
    if (lower.includes('diversidade') || lower.includes('inclusão') || lower.includes('dei')) cultureSignals.push('Foco em diversidade e inclusão')
    if (lower.includes('inovação') || lower.includes('disrupção')) cultureSignals.push('Cultura de inovação')
    if (lower.includes('agile') || lower.includes('scrum') || lower.includes('kanban')) cultureSignals.push('Metodologias ágeis')
    if (lower.includes('internacional') || lower.includes('global')) cultureSignals.push('Operação internacional / global')

    setResult({ seniority: seniorityLabel[seniority], found, reqLines: reqLines.slice(0, 8), niceLines: niceLines.slice(0, 6), salary: salaryMatch?.[0] || null, workModel, cultureSignals })
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cole a descrição completa da vaga</label>
        <textarea
          className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={8} placeholder="Cole aqui todo o texto da vaga — título, descrição, requisitos, benefícios..."
          value={text} onChange={(e) => setText(e.target.value)}
        />
      </div>
      <Btn onClick={analyze} variant="primary" size="md" disabled={text.trim().length < 50}>Analisar vaga →</Btn>
      {result && (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: 'Nível detectado', value: result.seniority, color: 'bg-slate-50 border-slate-200' },
              { label: 'Modelo de trabalho', value: result.workModel.charAt(0).toUpperCase() + result.workModel.slice(1), color: 'bg-blue-50 border-blue-200' },
              { label: 'Salário mencionado', value: result.salary || 'Não informado', color: 'bg-green-50 border-green-200' },
            ].map(({ label, value, color }) => (
              <div key={label} className={`border rounded-xl p-3 ${color}`}>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                <p className="text-sm font-bold text-slate-800">{value}</p>
              </div>
            ))}
          </div>
          {Object.entries(SKILL_CATEGORIES).map(([cat, { label }]) => result.found[cat].length > 0 && (
            <div key={cat} className="border border-slate-100 rounded-xl p-4 bg-white">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{label} detectadas</p>
              <div className="flex flex-wrap gap-2">
                {result.found[cat].map((k) => (
                  <span key={k} className="bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">{k}</span>
                ))}
              </div>
            </div>
          ))}
          {(result.reqLines.length > 0 || result.niceLines.length > 0) && (
            <div className="grid sm:grid-cols-2 gap-4">
              {result.reqLines.length > 0 && (
                <div className="border border-red-200 rounded-xl p-4 bg-red-50">
                  <p className="text-xs font-black text-red-700 uppercase tracking-wider mb-2">🔴 Requisitos detectados</p>
                  <ul className="space-y-1">{result.reqLines.map((l, i) => <li key={i} className="text-xs text-slate-700 flex gap-1.5"><span className="text-red-400 flex-shrink-0 mt-0.5">•</span>{l}</li>)}</ul>
                </div>
              )}
              {result.niceLines.length > 0 && (
                <div className="border border-amber-200 rounded-xl p-4 bg-amber-50">
                  <p className="text-xs font-black text-amber-700 uppercase tracking-wider mb-2">🟡 Diferenciais detectados</p>
                  <ul className="space-y-1">{result.niceLines.map((l, i) => <li key={i} className="text-xs text-slate-700 flex gap-1.5"><span className="text-amber-400 flex-shrink-0 mt-0.5">•</span>{l}</li>)}</ul>
                </div>
              )}
            </div>
          )}
          {result.cultureSignals.length > 0 && (
            <div className="border border-violet-200 rounded-xl p-4 bg-violet-50">
              <p className="text-xs font-black text-violet-700 uppercase tracking-wider mb-2">🎯 Sinais de cultura</p>
              <div className="flex flex-wrap gap-2">{result.cultureSignals.map((s) => <span key={s} className="bg-violet-100 border border-violet-300 text-violet-800 text-xs font-semibold px-2.5 py-1 rounded-full">{s}</span>)}</div>
            </div>
          )}
          <p className="text-xs text-slate-400 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
            💡 Use as palavras-chave detectadas no seu CV e carta — exatamente como aparecem na vaga. O ATS faz comparação literal.
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 20: Gerador de Email Pós-Entrevista ───────────────────────────
function ThankYouEmailGenerator() {
  const [form, setForm] = useState({ interviewer: '', role: '', company: '', highlight: '', nextStep: '', tone: 'professional' })
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(null)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

  const generate = () => {
    const { interviewer, role, company, highlight, nextStep, tone } = form
    if (!interviewer || !role || !company) return
    const hl = highlight.trim() ? `\n\nUm ponto da nossa conversa que ficou comigo foi ${highlight.trim().toLowerCase().replace(/^(a conversa sobre|o tema|quando falamos sobre)\s*/i, '')}. É um tema que me entusiasma e reforça meu interesse na posição.` : ''
    const ns = nextStep.trim() ? `\n\nComo combinamos, aguardo ${nextStep.trim().toLowerCase()}.` : ''

    setResult({
      professional: `Assunto: Obrigado pela entrevista — ${role} | ${company}\n\nOlá, ${interviewer},\n\nObrigado pelo tempo e pela conversa de hoje. Foi muito enriquecedor conhecer mais sobre a equipe e os desafios do cargo de ${role} na ${company}.${hl}\n\nSaio desta conversa ainda mais convicto de que posso contribuir de forma concreta para [inserir área/objetivo específico]. Fico à disposição caso precise de qualquer informação adicional.${ns}\n\nUm abraço,\n[Seu nome]`,
      warm: `Assunto: Foi ótimo conversar com você — ${role}\n\nOi, ${interviewer}!\n\nMuito obrigado pela entrevista de hoje — foi uma das conversas mais genuínas que tive em processos seletivos.\n\nFiquei especialmente animado com ${highlight.trim() || 'o que aprendi sobre a empresa e o time'}. Esse tipo de ambiente é exatamente onde me vejo fazendo o melhor trabalho.${ns}\n\nConto com você para os próximos passos. Qualquer dúvida, estou aqui!\n\nUm abraço,\n[Seu nome]`,
    })
    setCopied(null)
  }

  const copy = (key) => { navigator.clipboard.writeText(result[key]); setCopied(key); setTimeout(() => setCopied(null), 2000) }

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { k: 'interviewer', label: 'Nome do entrevistador', placeholder: 'Ex: Ana, Ricardo...' },
          { k: 'role', label: 'Cargo que você entrevistou', placeholder: 'Ex: Analista de Marketing Sênior' },
          { k: 'company', label: 'Empresa', placeholder: 'Ex: iFood, Vivo, XP Inc.' },
          { k: 'nextStep', label: 'Próximo passo mencionado', placeholder: 'Ex: o retorno até sexta-feira, o teste técnico, a segunda entrevista' },
        ].map(({ k, label, placeholder }) => (
          <div key={k}>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">{label}</label>
            <input className={inp} placeholder={placeholder} value={form[k]} onChange={set(k)} />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Destaque da conversa (opcional)</label>
          <input className={inp} placeholder="Ex: o projeto de expansão para o Nordeste, a cultura de autonomia da equipe, o desafio de escalar o produto" value={form.highlight} onChange={set('highlight')} />
        </div>
      </div>
      <Btn onClick={generate} variant="primary" size="md" disabled={!form.interviewer || !form.role || !form.company}>
        Gerar emails →
      </Btn>
      {result && (
        <div className="space-y-3">
          {[
            { key: 'professional', label: '👔 Tom profissional', color: 'bg-blue-50 border-blue-200' },
            { key: 'warm', label: '😊 Tom caloroso', color: 'bg-green-50 border-green-200' },
          ].map(({ key, label, color }) => (
            <div key={key} className={`border rounded-2xl p-4 ${color}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-slate-700">{label}</span>
                <button onClick={() => copy(key)} className={`text-xs font-semibold ${copied === key ? 'text-green-600' : 'text-blue-600 hover:text-blue-800 underline'}`}>
                  {copied === key ? '✓ Copiado' : 'Copiar'}
                </button>
              </div>
              <pre className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans">{result[key]}</pre>
            </div>
          ))}
          <p className="text-xs text-slate-400 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
            ⏰ Envie em até 24h após a entrevista. Mais rápido que isso pode parecer mecânico; mais tarde perde o impacto.
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Ferramenta 21: Simulador de Perguntas por Área ──────────────────────────
const ROLE_QUESTIONS = {
  marketing: {
    junior: [
      { q: 'O que você entende por funil de vendas e como o marketing se encaixa nele?', dica: 'Mostre conhecimento básico de topo/meio/fundo de funil e como cada etapa impacta a conversão.' },
      { q: 'Como você mediria o sucesso de uma campanha nas redes sociais?', dica: 'Mencione métricas: alcance, engajamento, CTR, conversão, CAC. Mostre que você diferencia vaidade de resultado.' },
      { q: 'Você já usou alguma ferramenta de marketing digital? Qual e como?', dica: 'Seja específico: Google Analytics, Meta Ads, RD Station, HubSpot, Mailchimp. Dê um exemplo de uso.' },
      { q: 'Como você definiria a persona de um produto?', dica: 'Pesquisa, entrevistas com clientes, dados demográficos + comportamentais + dores + objetivos.' },
      { q: 'Me explique o conceito de SEO com suas palavras.', dica: 'Otimização para motores de busca: palavras-chave, conteúdo, backlinks, UX. Diferença entre on-page e off-page.' },
      { q: 'Como você abordaria a criação de conteúdo para o Instagram de uma marca B2B?', dica: 'Foque em educação, autoridade e geração de leads — não apenas alcance. Formatos: carrossel, Reels curtos, stories educativos.' },
      { q: 'O que é taxa de conversão e como você a melhoraria?', dica: 'Ratio entre visitas e ações desejadas. Melhoria: testes A/B, UX, copy, CTA, velocidade da página.' },
      { q: 'Como você priorizaria 3 canais de aquisição com orçamento limitado?', dica: 'Mostre critério: custo por lead, volume, fit com o público. Mencione dados e validação rápida.' },
      { q: 'O que você lê ou acompanha para se manter atualizado em marketing?', dica: 'Seja específico: newsletters, podcasts, criadores de conteúdo. "Acompanho tudo" não convence.' },
      { q: 'Descreva uma campanha que você admira e por quê funcionou.', dica: 'Analise o insight criativo, o público, o canal e o resultado. Mostre pensamento estratégico, não só criativo.' },
    ],
    senior: [
      { q: 'Como você estruturaria a estratégia de go-to-market para um produto novo?', dica: 'Pesquisa de mercado, ICP, posicionamento, canais, pricing, mensagem, plano de lançamento com milestones.' },
      { q: 'Como você gerenciaria um orçamento de marketing com ROI sob pressão?', dica: 'Priorização por CAC/LTV, mix de canais, atribuição multi-touch, testes incrementais vs. escala.' },
      { q: 'Conta sobre uma estratégia de crescimento que você liderou e os resultados.', dica: 'Use dados. Contexto → estratégia → execução → resultado → aprendizado.' },
      { q: 'Como você alinha marketing e vendas (smarketing) na prática?', dica: 'SLAs entre times, definição de MQL vs SQL, reuniões de alinhamento, feedback loop de qualidade de lead.' },
      { q: 'Como você abordaria a construção de brand awareness em um mercado competitivo?', dica: 'Diferenciação, consistência de mensagem, canais orgânicos + paid, comunidade, PR e co-marketing.' },
      { q: 'O que você faz quando uma campanha de alto investimento não performa?', dica: 'Análise de dados, hipóteses, pivô rápido. Mostre que você não espera o final para reagir.' },
      { q: 'Como você estrutura um time de marketing e quais papéis são críticos?', dica: 'Depende do estágio da empresa. Mostre que você sabe priorizar: growth vs. branding vs. produto vs. conteúdo.' },
      { q: 'Como você usa dados para tomar decisões de criativo e copy?', dica: 'Testes A/B, heatmaps, análise de cohort, feedback qualitativo + quantitativo.' },
      { q: 'Qual foi o maior erro de estratégia de marketing que cometeu e o que aprendeu?', dica: 'Honestidade + retrospectiva estruturada + o que mudou na sua abordagem depois.' },
      { q: 'Como você apresentaria o impacto de marketing para um CEO cético?', dica: 'Traduza para negócio: receita influenciada, pipeline gerado, custo de aquisição, LTV. Sem métricas de vaidade.' },
    ],
  },
  tech: {
    junior: [
      { q: 'Explique a diferença entre uma API REST e uma API GraphQL.', dica: 'REST: endpoints fixos, múltiplas requisições. GraphQL: query flexível, uma requisição. Trade-offs de complexidade vs. eficiência.' },
      { q: 'O que é controle de versão e como você usa o Git no dia a dia?', dica: 'Commits, branches, merges, pull requests, conflitos. Mencione fluxo: feature branch, code review, merge.' },
      { q: 'Como você depura um bug que você nunca viu antes?', dica: 'Reproduzir → isolar → logs/console → hipóteses → testar. Mostre processo sistemático, não sorte.' },
      { q: 'Qual a diferença entre programação orientada a objetos e funcional?', dica: 'OOP: encapsulamento, herança, polimorfismo. Funcional: imutabilidade, funções puras, composição. Sem efeitos colaterais.' },
      { q: 'Como você garante a qualidade do código que escreve?', dica: 'Testes unitários, code review, linting, documentação, princípios SOLID/DRY.' },
      { q: 'O que é banco de dados relacional vs. não relacional? Quando usar cada um?', dica: 'SQL: estrutura definida, JOINs, consistência. NoSQL: flexibilidade, escala horizontal, dados não estruturados.' },
      { q: 'Você já teve que aprender uma tecnologia nova rapidamente. Como fez?', dica: 'Documentação oficial → tutorial hands-on → projeto pequeno → perguntar quando travado. Mostre método.' },
      { q: 'O que é CI/CD e por que é importante?', dica: 'Integração e entrega contínua. Reduz riscos de deploy, automatiza testes, acelera ciclo de feedback.' },
      { q: 'Como você explicaria complexidade de algoritmos (Big O) para alguém não técnico?', dica: 'Analogia: "imagina que você tem uma lista de 1 milhão de nomes..." Mostre que você entende a essência.' },
      { q: 'O que você faria se seu código em produção quebrasse?', dica: 'Mitigar primeiro (rollback, feature flag), depois investigar. Comunicação com a equipe. Post-mortem sem culpa.' },
    ],
    senior: [
      { q: 'Como você decide entre construir internamente vs. usar uma solução terceira?', dica: 'Custo total, controle, manutenção, vendor lock-in, time to market, core competency da empresa.' },
      { q: 'Descreva como você projetaria a arquitetura de um sistema de alta disponibilidade.', dica: 'Load balancing, redundância, cache, filas, monitoramento, disaster recovery, SLA definido.' },
      { q: 'Como você lida com débito técnico em um time que tem pressão por entrega?', dica: 'Priorização transparente, "tax" de débito em cada sprint, comunicação com produto sobre custo de longo prazo.' },
      { q: 'Qual foi a decisão de arquitetura mais difícil que você tomou? O que pesou?', dica: 'Trade-offs reais: performance vs. manutenibilidade, monolito vs. microsserviços, consistência vs. disponibilidade.' },
      { q: 'Como você garante a segurança de uma aplicação web?', dica: 'OWASP Top 10, autenticação robusta, autorização correta, sanitização de input, HTTPS, secrets management.' },
      { q: 'Como você escala um time de engenharia de 5 para 20 pessoas?', dica: 'Squads, autonomia, documentação, processos de onboarding, padrões de código, cultura de feedback.' },
      { q: 'Como você aborda um sistema legado que precisa ser modernizado?', dica: 'Strangler pattern, testes antes de refatorar, migração incremental, nunca "big bang rewrite".' },
      { q: 'O que é observabilidade e como você a implementaria?', dica: 'Logs, métricas, traces (os três pilares). Tools: Datadog, Grafana, OpenTelemetry. Alertas acionáveis.' },
      { q: 'Como você lida com desacordo técnico forte dentro do time?', dica: 'RFC/ADR, prototipagem, dados > opiniões, decisão consciente do trade-off, documentar a decisão e os motivos.' },
      { q: 'Como você define "done" em um time de engenharia?', dica: 'Código revisado, testes passando, documentado, deployado em staging, monitoramento configurado, produto validou.' },
    ],
  },
  vendas: {
    junior: [
      { q: 'O que você entende por ciclo de vendas?', dica: 'Prospecção → qualificação → descoberta → proposta → negociação → fechamento → pós-venda.' },
      { q: 'Como você lidaria com um cliente que diz "está caro"?', dica: 'Entender o que está por trás (comparação, orçamento, percepção de valor). Reposicionar valor antes de conceder desconto.' },
      { q: 'Me faça um pitch de venda deste produto [objeto aleatório].', dica: 'Pergunte para quem antes de vender. Identifique necessidade → conecte ao benefício → proponha próximo passo.' },
      { q: 'O que você faz quando não consegue contato com um prospect?', dica: 'Multi-canal (email + telefone + LinkedIn), diferentes horários, diferentes abordagens, saber quando parar.' },
      { q: 'Como você organiza sua pipeline e prioriza leads?', dica: 'CRM, estágio do funil, probabilidade de fechamento, ticket, urgência do cliente.' },
      { q: 'Quais métricas você acompanharia como SDR/vendedor?', dica: 'Número de contatos, taxa de conversão por etapa, reuniões agendadas, show rate, CAC, ciclo médio.' },
      { q: 'Como você pesquisa um prospect antes de fazer contato?', dica: 'Site, LinkedIn, notícias recentes, cargos-chave, desafios da indústria. Personalização > volume.' },
      { q: 'O que você faz quando perde uma venda?', dica: 'Análise de motivo real (perda de CRM é vaidade). Aprendizado. Manter relacionamento. Pipeline futuro.' },
      { q: 'Como você explicaria um produto técnico para um CEO sem background técnico?', dica: 'Foque em resultado de negócio, não em feature. "Você economiza X" em vez de "ele usa algoritmo Y".' },
      { q: 'O que te motiva em vendas?', dica: 'Seja genuíno. Competição, impacto, construção de relacionamento, resolução de problemas — escolha o que é real para você.' },
    ],
    senior: [
      { q: 'Como você estruturaria um playbook de vendas do zero?', dica: 'ICP, personas, jornada do comprador, scripts por etapa, objeções mapeadas, métricas de sucesso, onboarding de reps.' },
      { q: 'Como você recupera uma equipe de vendas que está abaixo da meta?', dica: 'Diagnóstico: pipeline, atividade, conversão, produto/mercado fit. Ação diferente por causa raiz.' },
      { q: 'O que você faz quando o produto que vende não está encantando o mercado?', dica: 'Feedback estruturado para produto, segmentação (talvez esteja no ICP errado), mensagem vs. produto vs. mercado.' },
      { q: 'Como você lida com um deal enterprise de 9 meses de ciclo?', dica: 'Múltiplos stakeholders, champion interno, comitê de compras, touchpoints regulares, evidências de valor em cada etapa.' },
      { q: 'Como você formaria e desenvolveria um time de vendas?', dica: 'Critérios de contratação (energia + estrutura + curiosidade), onboarding, ramp, coaching, metas escaladas.' },
      { q: 'Como você alinharia metas de vendas com finanças e produto?', dica: 'Forecast compartilhado, capacidade de entrega, roadmap de produto alinhado ao que foi prometido no sales cycle.' },
      { q: 'Qual foi o maior negócio que você fechou? Me conte o processo.', dica: 'Contexto → desafio → sua estratégia → stakeholders → objeções → fechamento → pós-venda.' },
      { q: 'Como você lida com pricing em mercados muito sensíveis a preço?', dica: 'Segmentação por valor, pacotes, âncora de preço, desconto estruturado (não ad hoc), demonstração de ROI.' },
      { q: 'O que distingue um vendedor bom de um excelente?', dica: 'Mostre que você entende além de técnica: consciência situacional, empatia, disciplina de processo, aprendizado contínuo.' },
      { q: 'Como você usaria dados para aumentar a taxa de conversão da equipe?', dica: 'Funil por etapa, análise de call recordings, correlação entre atividades e fechamento, A/B de abordagens.' },
    ],
  },
  rh: {
    junior: [
      { q: 'O que você entende por processo de recrutamento e seleção?', dica: 'Atração → triagem → entrevistas → avaliação → oferta → onboarding. Mostre que você pensa em experiência do candidato.' },
      { q: 'Como você abordaria a triagem de 200 CVs para uma vaga com muitas candidaturas?', dica: 'Critérios objetivos definidos antes, keyword screening, ATS, entrevistas em etapas. Equilíbrio entre velocidade e qualidade.' },
      { q: 'O que é candidate experience e por que importa?', dica: 'Impacta brand employer, qualidade de aceite de oferta e indicações. Candidatos rejeitados falam sobre a experiência.' },
      { q: 'Como você conduziria uma entrevista por competências?', dica: 'Perguntas situacionais/STAR, competências mapeadas previamente, mesmas perguntas para todos, avaliação estruturada.' },
      { q: 'O que você sabe sobre CLT e os principais direitos trabalhistas?', dica: 'FGTS, férias, 13º, aviso prévio, INSS, horas extras, licenças. Mostre que você não confunde os básicos.' },
    ],
    senior: [
      { q: 'Como você construiria uma estratégia de employer branding?', dica: 'EVP definido, canais (LinkedIn, Glassdoor, feiras), embaixadores internos, conteúdo autêntico, métricas de percepção.' },
      { q: 'Como você estruturaria um programa de desenvolvimento de liderança?', dica: 'Diagnóstico de gap, trilha personalizada, mentorias, projetos stretch, feedback 360, métricas de evolução.' },
      { q: 'Como você gerenciaria uma demissão em massa de forma ética e eficiente?', dica: 'Comunicação clara, respeito à dignidade, suporte de outplacement, cuidado com quem fica (survivor guilt).' },
      { q: 'Como você implementaria uma cultura de feedback contínuo?', dica: 'Ferramentas, rituais (check-ins), treinamento de gestores, segurança psicológica, desconexão de avaliação de desempenho.' },
      { q: 'O que você faria se descobrisse que a empresa tem um problema sério de retenção?', dica: 'Diagnóstico (stay/exit interviews, pesquisa de clima), causas raiz (liderança, remuneração, crescimento, cultura), plano de ação por área.' },
    ],
  },
  financeiro: {
    junior: [
      { q: 'Explique o que é DRE, Balanço Patrimonial e Fluxo de Caixa.', dica: 'DRE: resultado (receitas - despesas). BP: ativos e passivos. FC: entradas e saídas de caixa. Cada um responde uma pergunta diferente.' },
      { q: 'O que é capital de giro e por que é crítico para uma empresa?', dica: 'Dinheiro necessário para operar no dia a dia. Sem capital de giro a empresa não paga fornecedores ou salários mesmo sendo lucrativa.' },
      { q: 'Como você calcula o ROI de um investimento?', dica: '(Retorno - Investimento) / Investimento × 100. Mostre que você entende que ROI sozinho não basta — considere tempo e risco.' },
      { q: 'O que é EBITDA e para que serve?', dica: 'Lucro antes de juros, impostos, depreciação e amortização. Proxy de geração de caixa operacional. Usado para comparar empresas.' },
      { q: 'Qual a diferença entre regime de caixa e regime de competência?', dica: 'Caixa: reconhece quando recebe/paga. Competência: reconhece quando ocorre o fato gerador, independente do pagamento.' },
    ],
    senior: [
      { q: 'Como você estruturaria o orçamento anual (budget) de uma empresa?', dica: 'Top-down vs. bottom-up, premissas macroeconômicas, alinhamento estratégico, drivers por área, rolling forecast.' },
      { q: 'Como você avaliaria se uma empresa deve fazer uma aquisição?', dica: 'Due diligence, valuation (DCF, múltiplos), sinergias, riscos de integração, impacto no caixa e na cultura.' },
      { q: 'O que é gestão de risco financeiro e como você a implementaria?', dica: 'Hedge cambial, diversificação, limites de exposição, stress tests, políticas de crédito, liquidez mínima.' },
      { q: 'Como você apresentaria resultados financeiros para um conselho?', dica: 'Narrativa clara, KPIs-chave, variação vs. orçamento + período anterior, causas raiz das variações, perspectiva.' },
      { q: 'Como você melhoraria o capital de giro de uma empresa com fluxo negativo?', dica: 'Prazo médio de recebimento vs. pagamento, antecipação de recebíveis, renegociação com fornecedores, gestão de estoque.' },
    ],
  },
}

function RoleQuestionSimulator() {
  const [area, setArea] = useState('')
  const [level, setLevel] = useState('')
  const [generated, setGenerated] = useState([])
  const [openIdx, setOpenIdx] = useState(null)

  const AREAS = [
    { value: 'marketing', label: '📣 Marketing' },
    { value: 'tech', label: '💻 Tecnologia / Dev' },
    { value: 'vendas', label: '🤝 Vendas / Comercial' },
    { value: 'rh', label: '👥 RH / People' },
    { value: 'financeiro', label: '💹 Financeiro / Controladoria' },
  ]
  const LEVELS = [
    { value: 'junior', label: 'Júnior (0–3 anos)' },
    { value: 'senior', label: 'Sênior / Especialista (5+ anos)' },
  ]

  const generate = () => {
    if (!area || !level) return
    const pool = ROLE_QUESTIONS[area]?.[level] || []
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 8)
    setGenerated(shuffled)
    setOpenIdx(null)
  }

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">Área</label>
          <div className="flex flex-col gap-2">
            {AREAS.map(({ value, label }) => (
              <button key={value} onClick={() => setArea(value)}
                className={`text-left px-3 py-2 rounded-xl border text-sm font-medium transition-all ${area === value ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">Nível de senioridade</label>
          <div className="flex flex-col gap-2">
            {LEVELS.map(({ value, label }) => (
              <button key={value} onClick={() => setLevel(value)}
                className={`text-left px-3 py-2 rounded-xl border text-sm font-medium transition-all ${level === value ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Btn onClick={generate} variant="primary" size="md" disabled={!area || !level}>Gerar perguntas →</Btn>
      {generated.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">8 perguntas mais prováveis para este perfil</p>
          {generated.map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left px-4 py-3 flex items-start justify-between gap-3 hover:bg-slate-50 transition-colors">
                <span className="text-sm text-slate-800 font-medium leading-relaxed">{i + 1}. {item.q}</span>
                <span className="text-slate-400 flex-shrink-0 mt-0.5">{openIdx === i ? '▲' : '▼'}</span>
              </button>
              {openIdx === i && (
                <div className="px-4 pb-4 bg-blue-50 border-t border-blue-100">
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-3 mb-1">💡 Dica de resposta</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.dica}</p>
                </div>
              )}
            </div>
          ))}
          <button onClick={generate} className="text-xs text-blue-600 hover:text-blue-800 underline">Gerar novo conjunto de perguntas →</button>
        </div>
      )}
    </div>
  )
}

// ─── Lista de ferramentas ─────────────────────────────────────────────────────
const TOOLS = [
  { id: 'star', icon: '⭐', title: 'Construtor de Respostas STAR', desc: 'Estrutura respostas perfeitas para perguntas comportamentais.', badge: 'Entrevistas', component: StarBuilder },
  { id: 'ats', icon: '🔍', title: 'Extrator de Palavras-chave ATS', desc: 'Identifica as palavras-chave mais importantes de qualquer vaga.', badge: 'CV', component: ATSKeywordChecker },
  { id: 'salary', icon: '💰', title: 'Calculadora Salarial Brasil', desc: 'Descubra a faixa de mercado e o número-âncora ideal para negociar.', badge: 'Negociação', component: SalaryCalculator },
  { id: 'headline', icon: '💼', title: 'Gerador de Headline LinkedIn', desc: 'Crie 5 versões do seu título profissional para testar.', badge: 'LinkedIn', component: LinkedInHeadline },
  { id: 'interview', icon: '🎤', title: 'Simulador de Entrevista', desc: 'Pratique perguntas reais de processos seletivos com dicas e exemplos.', badge: 'Entrevistas', component: InterviewSimulator, isNew: true },
  { id: 'tracker', icon: '📌', title: 'Rastreador de Candidaturas', desc: 'Kanban visual para acompanhar todas as suas candidaturas em tempo real.', badge: 'Organização', component: ApplicationTracker, isNew: true },
  { id: 'summary', icon: '✍️', title: 'Gerador de Sumário Profissional', desc: 'Gere 3 versões do seu sumário para CV e LinkedIn em segundos.', badge: 'CV', component: SummaryGenerator },
  { id: 'email', icon: '📧', title: 'Gerador de Email de Candidatura', desc: 'Cria um email de candidatura profissional e personalizado em segundos.', badge: 'CV', component: ApplicationEmailGenerator, isNew: true },
  { id: 'checklist', icon: '✅', title: 'Checklist de Candidatura', desc: '19 itens para confirmar antes de enviar cada candidatura. Nunca esqueça nada.', badge: 'Organização', component: ApplicationChecklist, isNew: true },
  { id: 'offercompare', icon: '⚖️', title: 'Comparador de Ofertas de Emprego', desc: 'Compara duas ofertas lado a lado: salário, benefícios e qualidade de vida. Descobre qual vale mais.', badge: 'Negociação', component: OfferComparator, isNew: true },
  { id: 'about', icon: '🔵', title: 'Gerador de "Sobre" do LinkedIn', desc: 'Cria o texto completo da seção Sobre do LinkedIn — otimizado para pesquisa e impacto.', badge: 'LinkedIn', component: LinkedInAboutGenerator, isNew: true },
  { id: 'followup', icon: '📨', title: 'Gerador de Email de Follow-up', desc: 'Emails profissionais para após entrevista, follow-up de status, proposta em mão e resposta a recusa.', badge: 'Entrevistas', component: FollowUpEmailGenerator, isNew: true },
  { id: 'cvscore', icon: '🔬', title: 'Analisador de CV com Score', desc: 'Cola o seu CV e recebe uma nota de 0-100 com diagnóstico detalhado e sugestões de melhoria.', badge: 'CV', component: CVAnalyzer, isNew: true },
  { id: 'plan9090', icon: '🗓️', title: 'Plano 30-60-90 Dias', desc: 'Gera um plano estruturado para os primeiros 90 dias no novo emprego — integração, contribuição e impacto.', badge: 'Carreira', component: Plan9090Generator, isNew: true },
  { id: 'pitch', icon: '🎯', title: 'Gerador de Elevator Pitch', desc: 'Gera 3 versões do seu pitch pessoal: rápido (30s), entrevista (60s) e mensagem LinkedIn — prontos para usar.', badge: 'Entrevistas', component: ElevatorPitch, isNew: true },
  { id: 'bullets', icon: '✏️', title: 'Gerador de Bullets de CV', desc: 'Transforma suas experiências brutas em 5 bullets poderosos com verbos de impacto e resultados quantificados.', badge: 'CV', component: CVBulletGenerator, isNew: true },
  { id: 'negotiation', icon: '🤝', title: 'Script de Negociação Salarial', desc: 'Gera um script completo com 6 momentos da negociação: abertura, proposta de valor, o número, respostas a pushbacks e fechamento.', badge: 'Negociação', component: NegotiationScript, isNew: true },
  { id: 'linkedin-outreach', icon: '🔗', title: 'Gerador de Mensagem de Networking', desc: 'Cria 3 versões de mensagem LinkedIn (conexão, DM fria, follow-up) personalizadas para cada contato.', badge: 'LinkedIn', component: LinkedInOutreachGenerator, isNew: true },
  { id: 'job-analyzer', icon: '🧐', title: 'Analisador de Descrição de Vaga', desc: 'Cole a descrição da vaga e extraia: requisitos, diferenciais, palavras-chave, nível e sinais de cultura.', badge: 'CV', component: JobDescriptionAnalyzer, isNew: true },
  { id: 'thankyou-email', icon: '🙏', title: 'Email de Agradecimento Pós-Entrevista', desc: 'Gera 2 versões de email (profissional e caloroso) para enviar em até 24h após qualquer entrevista.', badge: 'Entrevistas', component: ThankYouEmailGenerator, isNew: true },
  { id: 'role-questions', icon: '🎯', title: 'Simulador de Perguntas por Área', desc: 'Gera as 8 perguntas mais prováveis para sua área e nível — Marketing, Tech, Vendas, RH ou Financeiro.', badge: 'Entrevistas', component: RoleQuestionSimulator, isNew: true },
  { id: 'interview-timer', icon: '⏱️', title: 'Temporizador de Entrevista', desc: 'Pratique respostas cronometradas (30s a 3 min). Banco de 20 perguntas reais + checklist de auto-avaliação.', badge: 'Entrevistas', component: InterviewTimer, isNew: true },
  { id: 'strengths-mapper', icon: '💪', title: 'Mapeador de Pontos Fortes', desc: 'Selecione seus top 5 pontos fortes e receba exemplos prontos de como articulá-los em entrevistas com impacto.', badge: 'Entrevistas', component: StrengthsMapper, isNew: true },
  { id: 'cover-letter', icon: '✉️', title: 'Gerador de Carta de Apresentação', desc: 'Gera uma carta de apresentação personalizada e profissional em segundos com base nas suas conquistas.', badge: 'CV', component: CoverLetterGenerator, isNew: true },
]

// ─── Página principal ─────────────────────────────────────────────────────────
export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState(null)
  const tool = TOOLS.find((t) => t.id === activeTool)

  if (tool) {
    const Tool = tool.component
    return (
      <div className="p-6 animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setActiveTool(null)} className="text-slate-400 hover:text-slate-600 flex items-center gap-1 text-sm">
            ← Ferramentas
          </button>
          <span className="text-slate-300">|</span>
          <span className="text-sm text-slate-500">{tool.icon} {tool.title}</span>
        </div>
        <div className="max-w-3xl">
          <h1 className="text-2xl font-black text-slate-800 mb-1">{tool.icon} {tool.title}</h1>
          <p className="text-slate-500 text-sm mb-6">{tool.desc}</p>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <Tool />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-2xl font-black text-slate-800 mb-2">Ferramentas</h1>
      <p className="text-slate-500 text-sm mb-6">24 ferramentas interativas para acelerar a sua busca de emprego.</p>
      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
        {TOOLS.map((t) => (
          <button key={t.id} onClick={() => setActiveTool(t.id)}
            className="text-left bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group relative">
            {t.isNew && (
              <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">Novo</span>
            )}
            <div className="flex items-start gap-4">
              <div className="text-3xl">{t.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-slate-800 text-sm leading-tight pr-8">{t.title}</h3>
                </div>
                <Badge className="bg-blue-50 text-blue-600 text-xs mb-2">{t.badge}</Badge>
                <p className="text-slate-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            </div>
            <div className="mt-4 text-blue-600 text-xs font-semibold group-hover:underline">Abrir ferramenta →</div>
          </button>
        ))}
      </div>
    </div>
  )
}
