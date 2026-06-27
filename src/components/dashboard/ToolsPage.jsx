import { useState, useEffect } from 'react'
import { Btn, Badge } from '../ui'
import { LS } from '../../utils/storage'

// ─── Ferramenta 1: Construtor de Respostas STAR ───────────────────────────────
function StarBuilder() {
  const [form, setForm] = useState({ situation: '', task: '', action: '', result: '' })
  const [output, setOutput] = useState('')
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const build = () => {
    if (!form.situation || !form.task || !form.action || !form.result) return
    setOutput(
      `${form.situation.trim()} Nesse contexto, minha responsabilidade era ${form.task.trim().toLowerCase().replace(/^eu\s+era\s+/i, '')}. ` +
      `Para resolver a situação, ${form.action.trim().toLowerCase().replace(/^eu\s+/i, '')}. ` +
      `Como resultado, ${form.result.trim().toLowerCase().replace(/^(o resultado foi|o resultado:|resultado:)\s*/i, '')}.`
    )
  }
  const copy = () => navigator.clipboard.writeText(output)
  const inp = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { k: 'situation', label: '📍 Situação', placeholder: 'Qual era o contexto? Ex: "Estava numa empresa de e-commerce onde as vendas tinham caído 20% num trimestre..."', rows: 3 },
          { k: 'task', label: '🎯 Tarefa', placeholder: 'Qual era seu papel ou responsabilidade? Ex: "Eu era responsável por analisar as causas e propor soluções..."', rows: 3 },
          { k: 'action', label: '⚡ Ação', placeholder: 'O que fizeste concretamente? Ex: "Conduzi análise de dados, identifiquei que o problema estava no checkout mobile e redesenhei o fluxo..."', rows: 3 },
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
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Resposta gerada</span>
            <button onClick={copy} className="text-xs text-blue-600 hover:text-blue-800 underline">Copiar</button>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">{output}</p>
          <p className="text-blue-500 text-xs mt-3">💡 Edite à vontade — esta é a base. Revise o tom e adicione detalhes específicos.</p>
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

function SalaryCalculator() {
  const [area, setArea] = useState('')
  const [seniority, setSeniority] = useState('')
  const [company, setCompany] = useState('pme')
  const [result, setResult] = useState(null)
  const calculate = () => {
    if (!area || !seniority) return
    const base = SALARY_DATA[area][seniority]
    const mult = COMPANY_MULT[company]
    const low = Math.round(base[0] * mult / 100) * 100
    const high = Math.round(base[1] * mult / 100) * 100
    const anchor = Math.round(high * 1.15 / 100) * 100
    setResult({ low, high, anchor })
  }
  const fmt = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
  const sel = 'w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-3 gap-4">
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
      </div>
      <Btn onClick={calculate} variant="primary" size="md" disabled={!area || !seniority}>Calcular faixa salarial →</Btn>
      {result && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">{area} · {SENIORITY_LABELS[seniority]} · {COMPANY_LABELS[company]}</p>
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
          <p className="text-xs text-slate-400 mt-2">Referência para São Paulo/SP, 2024-2025 (CLT). Ajuste +10-20% para RJ; -15-25% para outras cidades.</p>
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
    { q: 'Como você dá feedback difícil a um colega ou membro da equipe?', dica: 'Mostre que você usa uma estrutura (SBI — Situação, Comportamento, Impacto) e foca no desenvolvimento, não na crítica.', ex: 'Ex: "Uso a estrutura: observação específica de comportamento → impacto que causou → sugestão de melhoria. Sempre em privado."' },
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
      <p className="text-slate-500 text-sm">Confirma estes {total} itens antes de enviar cada candidatura. Nunca esqueças nada importante.</p>

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
            <p className="text-xs text-slate-400 mt-2">O score pondera 60% compensação financeira e 40% factores qualitativos. Ajusta os sliders conforme as tuas prioridades.</p>
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
      <p className="text-slate-500 text-sm">Gera um texto profissional para a secção "Sobre" do LinkedIn — conciso, impactante e optimizado para pesquisa.</p>
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
          <textarea className={ta} rows={2} placeholder="Ex: Construí e liderei equipa de 8 pessoas do zero em contexto de startup" value={form.achievement2} onChange={set('achievement2')} />
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
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Call to action / contacto (opcional)</label>
          <input className={inp} placeholder="Ex: Fala comigo em joao@email.com ou envia mensagem aqui no LinkedIn" value={form.contact} onChange={set('contact')} />
        </div>
      </div>
      <button onClick={generate} disabled={!isReady} className={`w-full py-3 font-bold rounded-xl text-sm transition-colors ${isReady ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
        Gerar secção "Sobre" →
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
  { id: 'offer_delay', label: 'Follow-up com proposta em mão', desc: 'Tens outra oferta e precisas de decisão' },
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

O meu interesse pela posição mantém-se elevado e gostaria de saber se há actualizações sobre o processo de seleção.

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

${highlight ? `Aprendi bastante durante as entrevistas, especialmente ${highlight.trim()}. ` : ''}Gostaria de manter o contacto para eventuais oportunidades futuras, caso seja do vosso interesse.

Desejo à equipa o melhor e espero que possamos cruzar-nos novamente.

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
        <p className="text-slate-500 text-sm">Escolhe o tipo de email que precisas de enviar.</p>
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
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">O teu nome *</label>
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
            <input className={inp} placeholder="Ex: a cultura de autonomia da equipa e o projecto de expansão para o Brasil" value={form.highlight} onChange={set('highlight')} />
          </div>
        )}
        {type === 'rejection' && (
          <div className="sm:col-span-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">O que aprendeste no processo (opcional)</label>
            <input className={inp} placeholder="Ex: a forma como a equipa aborda problemas de produto" value={form.highlight} onChange={set('highlight')} />
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
  { id: 'checklist', icon: '✅', title: 'Checklist de Candidatura', desc: '19 itens para confirmar antes de enviar cada candidatura. Nunca esqueças nada.', badge: 'Organização', component: ApplicationChecklist, isNew: true },
  { id: 'offercompare', icon: '⚖️', title: 'Comparador de Ofertas de Emprego', desc: 'Compara duas ofertas lado a lado: salário, benefícios e qualidade de vida. Descobre qual vale mais.', badge: 'Negociação', component: OfferComparator, isNew: true },
  { id: 'about', icon: '🔵', title: 'Gerador de "Sobre" do LinkedIn', desc: 'Cria o texto completo da secção Sobre do LinkedIn — optimizado para pesquisa e impacto.', badge: 'LinkedIn', component: LinkedInAboutGenerator, isNew: true },
  { id: 'followup', icon: '📨', title: 'Gerador de Email de Follow-up', desc: 'Emails profissionais para após entrevista, follow-up de status, proposta em mão e resposta a recusa.', badge: 'Entrevistas', component: FollowUpEmailGenerator, isNew: true },
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
      <p className="text-slate-500 text-sm mb-6">12 ferramentas interativas para acelerar sua busca de emprego.</p>
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
