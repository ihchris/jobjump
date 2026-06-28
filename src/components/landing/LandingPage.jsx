import { useState, useEffect } from 'react'
import { Btn, Badge, Stars } from '../ui'
import { TESTIMONIALS, FAQ } from '../../data/content'

// ── Nav ───────────────────────────────────────────────────────────────────────
const LandingNav = ({ onLogin, onStart }) => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="JobJump"
            className={`h-9 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
          />
        </div>
        <div className={`hidden sm:flex items-center gap-6 text-sm font-medium transition-colors ${scrolled ? 'text-slate-600' : 'text-blue-100'}`}>
          <a href="#como-funciona" className="hover:text-blue-500 transition-colors">Como funciona</a>
          <a href="#modulos" className="hover:text-blue-500 transition-colors">Módulos</a>
          <a href="#precos" className="hover:text-blue-500 transition-colors">Preços</a>
          <a href="#faq" className="hover:text-blue-500 transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onLogin} className={`text-sm font-semibold px-4 py-2 rounded-xl transition-colors ${
            scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-blue-100 hover:text-white'
          }`}>Entrar</button>
          <Btn onClick={onStart} variant={scrolled ? 'primary' : 'white'} size="sm">Criar conta grátis</Btn>
        </div>
      </div>
    </nav>
  )
}

// ── Mock App Preview ──────────────────────────────────────────────────────────
const AppPreview = () => (
  <div className="relative w-full max-w-md mx-auto">
    {/* Glow */}
    <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-3xl" />
    {/* Window */}
    <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
      {/* Titlebar */}
      <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 bg-white/10 rounded-md text-blue-200 text-xs px-3 py-1 text-center">jobjump.co · Dashboard</div>
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[['68%', 'Progresso'], ['5🔥', 'Dias seguidos'], ['4/5', 'Conquistas']].map(([v, l]) => (
            <div key={l} className="bg-white/10 rounded-xl p-2.5 text-center">
              <div className="text-white font-black text-base">{v}</div>
              <div className="text-blue-200 text-xs">{l}</div>
            </div>
          ))}
        </div>
        {/* Module cards */}
        {[
          { icon: '📄', title: 'CV que Passa pelo ATS', prog: 100, done: true },
          { icon: '✉️', title: 'Carta de Motivação', prog: 80, done: false },
          { icon: '💼', title: 'Perfil LinkedIn', prog: 40, done: false },
        ].map((m) => (
          <div key={m.title} className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
            <span className="text-xl">{m.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs font-semibold truncate">{m.title}</div>
              <div className="w-full bg-white/10 rounded-full h-1.5 mt-1.5">
                <div className="bg-blue-300 h-1.5 rounded-full transition-all" style={{ width: `${m.prog}%` }} />
              </div>
            </div>
            {m.done && <span className="text-green-400 text-sm flex-shrink-0">✓</span>}
          </div>
        ))}
        {/* ATS tool preview */}
        <div className="bg-white/10 rounded-xl p-3">
          <div className="text-blue-200 text-xs mb-2">🔍 Análise ATS — última vaga</div>
          <div className="flex gap-2">
            <div className="bg-green-400/20 text-green-300 text-xs px-2 py-1 rounded-full">python ✓</div>
            <div className="bg-green-400/20 text-green-300 text-xs px-2 py-1 rounded-full">sql ✓</div>
            <div className="bg-red-400/20 text-red-300 text-xs px-2 py-1 rounded-full">docker ✗</div>
          </div>
        </div>
      </div>
    </div>
    {/* Floating badges */}
    <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce">
      +3 entrevistas 🎉
    </div>
    <div className="absolute -bottom-3 -left-4 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
      💰 Negociou +R$3.200
    </div>
  </div>
)

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero = ({ onStart }) => (
  <section className="relative min-h-screen bg-gradient-to-br from-[#0f2340] via-[#1e3a5f] to-[#1d4ed8] overflow-hidden flex items-center pt-16">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
      backgroundSize: '40px 40px'
    }} />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            +2.400 profissionais já conseguiram emprego
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] mb-5">
            Pare de enviar CVs<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              que ninguém lê.
            </span>
          </h1>
          <p className="text-blue-100/90 text-lg leading-relaxed mb-8 max-w-lg">
            40 módulos + 21 ferramentas interativas para fazer seu CV passar pelos filtros ATS,
            arrasar nas entrevistas e negociar o salário que você merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Btn onClick={onStart} variant="white" size="lg" className="text-base">
              Começar Gratuitamente →
            </Btn>
            <button
              onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 text-blue-100 hover:text-white border border-blue-400/40 hover:border-blue-300/60 rounded-xl font-semibold text-base transition-all hover:bg-white/5"
            >
              Ver planos
            </button>
          </div>
          <p className="text-blue-300/80 text-sm">Sem cartão de crédito · Acesso imediato · 11 módulos grátis para sempre</p>
          {/* Trust row */}
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            {[['2.400+', 'Formados'], ['89%', 'Mais respostas'], ['3 sem', '1ª entrevista']].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-black text-white">{n}</div>
                <div className="text-blue-300 text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: App preview */}
        <div className="hidden lg:block">
          <AppPreview />
        </div>
      </div>
    </div>

    {/* Bottom curve */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60 L0 30 Q720 -10 1440 30 L1440 60 Z" fill="white" />
      </svg>
    </div>
  </section>
)

// ── Como funciona ──────────────────────────────────────────────────────────────
const HowItWorks = ({ onStart }) => (
  <section id="como-funciona" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <Badge className="bg-blue-50 text-blue-600 border border-blue-100 mb-4">🗺️ Como funciona</Badge>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">Da vaga ao emprego em 4 passos</h2>
        <p className="text-slate-500 max-w-xl mx-auto">Um processo estruturado que já funcionou para mais de 2.400 profissionais.</p>
      </div>

      <div className="relative">
        {/* Connector line */}
        <div className="hidden lg:block absolute top-12 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', icon: '📄', color: 'bg-blue-50 border-blue-200 text-blue-600', dot: 'bg-blue-600', title: 'Otimize seu CV', desc: 'Aprenda a passar pelos filtros ATS e chegar à mão dos recrutadores com o CV certo.' },
            { step: '02', icon: '🔍', color: 'bg-violet-50 border-violet-200 text-violet-600', dot: 'bg-violet-600', title: 'Encontre as vagas', desc: 'Use nossas ferramentas e estratégias para identificar as melhores oportunidades.' },
            { step: '03', icon: '🎤', color: 'bg-emerald-50 border-emerald-200 text-emerald-600', dot: 'bg-emerald-600', title: 'Arrase nas entrevistas', desc: 'Pratique com o simulador de entrevistas e aprenda o método STAR na prática.' },
            { step: '04', icon: '💰', color: 'bg-amber-50 border-amber-200 text-amber-600', dot: 'bg-amber-600', title: 'Negocie com confiança', desc: 'Saiba exatamente quanto pedir e como responder para maximizar seu salário.' },
          ].map((s) => (
            <div key={s.step} className="relative text-center">
              <div className={`relative w-14 h-14 mx-auto rounded-2xl border-2 ${s.color} flex items-center justify-center text-2xl mb-4 shadow-sm`}>
                {s.icon}
                <div className={`absolute -top-2 -right-2 w-6 h-6 ${s.dot} rounded-full flex items-center justify-center text-white text-xs font-black`}>{s.step}</div>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Btn onClick={onStart} variant="primary" size="lg">Começar agora →</Btn>
      </div>
    </div>
  </section>
)

// ── Problems ──────────────────────────────────────────────────────────────────
const Problems = ({ onStart }) => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <Badge className="bg-red-50 text-red-600 border border-red-100 mb-4">Você se identifica?</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4 leading-tight">
            Por que você envia CVs<br />
            <span className="text-red-500">e não recebe resposta?</span>
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Não é falta de qualificação. São erros técnicos que 95% dos candidatos cometem sem saber — e que o JobJump resolve com técnicas comprovadas.
          </p>
          <Btn onClick={onStart} variant="primary" size="md">Resolver meus problemas →</Btn>
        </div>

        {/* Right: problem cards */}
        <div className="space-y-3">
          {[
            { icon: '🤖', title: 'CV rejeitado por robôs (ATS)', desc: '75% dos CVs nunca chegam a um humano. Os sistemas automáticos eliminam antes.' },
            { icon: '😰', title: 'Entrevistas que não convertem', desc: 'Você chega à entrevista mas as respostas saem confusas. O método STAR resolve isso.' },
            { icon: '🔍', title: 'Invisível no LinkedIn', desc: 'Recrutadores não encontram você. Seu perfil não aparece nas pesquisas certas.' },
            { icon: '💸', title: 'Aceita qualquer salário', desc: 'Com medo de perder a vaga, você aceita menos do que merece. Aprenda a negociar.' },
            { icon: '🕸️', title: 'Rede de contatos zero', desc: '70-85% das vagas são preenchidas por indicação. Sem rede, você briga por 15%.' },
          ].map((p, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md hover:border-red-100 transition-all group">
              <div className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm mb-0.5">{p.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
              <div className="ml-auto flex-shrink-0 w-1 self-stretch rounded-full bg-red-100 group-hover:bg-red-400 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

// ── Módulos ───────────────────────────────────────────────────────────────────
const ModulesSection = ({ onStart }) => {
  const modules = [
    { id: 1,  icon: '📄', title: 'CV que Passa pelo ATS',           free: true,  lessons: 6 },
    { id: 2,  icon: '✉️', title: 'Carta de Motivação',               free: true,  lessons: 5 },
    { id: 3,  icon: '💼', title: 'LinkedIn que Atrai Recrutadores',  free: true,  lessons: 5 },
    { id: 11, icon: '🤖', title: 'IA na Busca de Emprego',           free: true,  lessons: 5 },
    { id: 14, icon: '🧠', title: 'Psicologia da Busca de Emprego',   free: true,  lessons: 5 },
    { id: 19, icon: '🚑', title: 'Recolocação Após Demissão',        free: true,  lessons: 5 },
    { id: 20, icon: '💡', title: 'Soft Skills que Decidem',          free: true,  lessons: 5 },
    { id: 30, icon: '📅', title: 'Plano de Carreira de 5 Anos',      free: true,  lessons: 5 },
    { id: 4,  icon: '🎤', title: 'Entrevistas com Sucesso',          free: false, lessons: 5 },
    { id: 5,  icon: '🤝', title: 'Networking Estratégico',           free: false, lessons: 5 },
    { id: 6,  icon: '💰', title: 'Negociação Salarial',              free: false, lessons: 5 },
    { id: 7,  icon: '🔄', title: 'Transição de Carreira',            free: false, lessons: 5 },
    { id: 8,  icon: '🌟', title: 'Marca Pessoal Digital',            free: false, lessons: 5 },
    { id: 10, icon: '🌍', title: 'Vagas Internacionais',             free: false, lessons: 5 },
    { id: 12, icon: '⚡', title: 'Freelance e Independência',        free: false, lessons: 5 },
    { id: 33, icon: '🌿', title: 'Saúde Mental e Burnout',           free: false, lessons: 5 },
  ]

  return (
    <section id="modulos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge className="bg-blue-50 text-blue-600 border border-blue-100 mb-4">📚 Conteúdo completo</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">40 módulos. Centenas de lições. Do zero ao emprego.</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Cada módulo foi criado por especialistas com experiência real em recrutamento e desenvolvimento de carreira.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-10">
          {modules.map((m) => (
            <div key={m.id}
              className={`relative p-4 rounded-2xl border transition-all ${
                m.free
                  ? 'bg-blue-50 border-blue-200 hover:shadow-md'
                  : 'bg-slate-50 border-slate-100 hover:bg-white hover:shadow-sm'
              }`}
            >
              {m.free && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">GRÁTIS</span>
              )}
              {!m.free && (
                <span className="absolute top-2 right-2 text-slate-300 text-xs">🔒</span>
              )}
              <div className="text-2xl mb-2">{m.icon}</div>
              <div className="font-bold text-slate-800 text-sm leading-tight mb-1">{m.title}</div>
              <div className="text-slate-400 text-xs">{m.lessons} lições</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-black text-slate-800 text-lg">Desbloqueie todos os 40 módulos por R$29,90/mês</div>
            <div className="text-slate-500 text-sm mt-1">Os 11 primeiros são sempre gratuitos. Cancele quando quiser.</div>
          </div>
          <Btn onClick={onStart} variant="primary" size="md" className="flex-shrink-0">Começar Pro →</Btn>
        </div>
      </div>
    </section>
  )
}

// ── Features ──────────────────────────────────────────────────────────────────
const FeaturesSection = () => (
  <section className="py-20 bg-[#0f2340]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <Badge className="bg-white/10 text-blue-200 border border-white/20 mb-4">⚡ Ferramentas Pro</Badge>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ferramentas que trabalham por você</h2>
        <p className="text-blue-200 max-w-xl mx-auto">21 ferramentas interativas que complementam os módulos e geram resultados imediatos.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: '🔍', title: 'Extrator ATS', desc: 'Cole a vaga e o CV — veja instantaneamente quais palavras-chave estão faltando.', color: 'from-blue-600/20 to-blue-700/20 border-blue-500/30' },
          { icon: '⭐', title: 'Construtor STAR', desc: 'Estruture respostas perfeitas para entrevistas comportamentais em minutos.', color: 'from-violet-600/20 to-violet-700/20 border-violet-500/30' },
          { icon: '🎯', title: 'Elevator Pitch', desc: 'Gera 3 versões do seu pitch pessoal — para networking, entrevistas e LinkedIn.', color: 'from-amber-600/20 to-amber-700/20 border-amber-500/30', isNew: true },
          { icon: '✏️', title: 'Bullets de CV', desc: 'Transforma experiências brutas em bullets poderosos com verbos de impacto e números.', color: 'from-rose-600/20 to-rose-700/20 border-rose-500/30', isNew: true },
          { icon: '🤝', title: 'Script de Negociação', desc: 'Script completo com 6 momentos da negociação — abertura, o número, pushbacks e fechamento.', color: 'from-emerald-600/20 to-emerald-700/20 border-emerald-500/30', isNew: true },
          { icon: '📌', title: 'Rastreador Kanban', desc: 'Acompanhe todas as suas candidaturas num pipeline visual interativo.', color: 'from-cyan-600/20 to-cyan-700/20 border-cyan-500/30' },
        ].map((f) => (
          <div key={f.title} className={`relative bg-gradient-to-br ${f.color} border rounded-2xl p-5 backdrop-blur-sm`}>
            {f.isNew && (
              <span className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">Novo</span>
            )}
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="font-bold text-white mb-1.5">{f.title}</h3>
            <p className="text-blue-200/80 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ── Pricing ───────────────────────────────────────────────────────────────────
const Pricing = ({ onChoosePlan }) => (
  <section id="precos" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <Badge className="bg-slate-100 text-slate-600 border border-slate-200 mb-4">💳 Planos</Badge>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">Simples e transparente</h2>
        <p className="text-slate-500">Comece grátis. Faça upgrade quando quiser. Cancele a qualquer momento.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Free */}
        <div className="rounded-2xl border-2 border-slate-200 p-8 flex flex-col">
          <div className="mb-6">
            <div className="font-black text-slate-500 text-xs uppercase tracking-widest mb-3">Gratuito</div>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-5xl font-black text-slate-800">R$0</span>
              <span className="text-slate-400 mb-2">/mês</span>
            </div>
            <p className="text-slate-500 text-sm">Para sempre. Sem cartão de crédito.</p>
          </div>
          <ul className="space-y-3 mb-8 flex-1">
            {[
              '11 módulos gratuitos (CV, LinkedIn, IA, Psicologia, Recolocação…)',
              '4 templates básicos para download',
              'Coach IA (5 perguntas/dia)',
              'Ferramentas ATS e STAR',
              'Diagnóstico de carreira personalizado',
              'Sistema de XP, níveis e conquistas',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>{f}
              </li>
            ))}
            {['29 módulos Pro', 'Simulador de entrevistas avançado', 'Script de Negociação Salarial'].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                <span className="flex-shrink-0 mt-0.5">✗</span>{f}
              </li>
            ))}
          </ul>
          <Btn onClick={() => onChoosePlan('free')} variant="secondary" size="md" className="w-full">
            Criar conta grátis
          </Btn>
        </div>

        {/* Pro */}
        <div className="rounded-2xl border-2 border-blue-600 p-8 relative bg-gradient-to-b from-blue-600 to-blue-700 flex flex-col shadow-xl shadow-blue-600/20">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-amber-400 text-amber-900 text-xs font-black px-4 py-1.5 rounded-full shadow-sm">✦ MAIS POPULAR</span>
          </div>
          <div className="mb-6">
            <div className="font-black text-blue-200 text-xs uppercase tracking-widest mb-3">Pro Mensal</div>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-5xl font-black text-white">R$29</span>
              <span className="text-blue-200 mb-2">,90/mês</span>
            </div>
            <p className="text-blue-200 text-sm">Cancele a qualquer momento. Sem fidelidade.</p>
          </div>
          <ul className="space-y-3 mb-8 flex-1">
            {[
              '40 módulos completos (11 grátis + 29 Pro)',
              '21 ferramentas interativas',
              '12 templates com download real',
              'Coach IA ilimitado 24/7',
              'Quiz por módulo com XP e conquistas',
              'Networking CRM + Rastreador de Candidaturas',
              'Plano Semanal com metas e relatórios',
              'Simulador de entrevistas (40+ perguntas)',
              'Scripts de Negociação + Elevator Pitch',
              'Comunidade + suporte por email',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-blue-50">
                <span className="text-blue-200 font-bold mt-0.5 flex-shrink-0">✓</span>{f}
              </li>
            ))}
          </ul>
          <Btn onClick={() => onChoosePlan('pro')} variant="white" size="md" className="w-full font-black">
            Começar Pro agora →
          </Btn>
          <p className="text-center text-blue-200 text-xs mt-3">7 dias de teste — se não gostar, devolvemos</p>
        </div>

        {/* Pro Anual */}
        <div className="rounded-2xl border-2 border-emerald-500 p-8 relative bg-gradient-to-b from-emerald-600 to-emerald-700 flex flex-col shadow-xl shadow-emerald-600/20">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-emerald-300 text-emerald-900 text-xs font-black px-4 py-1.5 rounded-full shadow-sm">✦ ECONOMIZE 33%</span>
          </div>
          <div className="mb-6">
            <div className="font-black text-emerald-200 text-xs uppercase tracking-widest mb-3">Pro Anual</div>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-black text-white">R$19</span>
              <span className="text-emerald-200 mb-2">,90/mês</span>
            </div>
            <p className="text-emerald-200 text-sm">Cobrado como R$238,80/ano · <span className="line-through opacity-60">R$358,80</span></p>
          </div>
          <ul className="space-y-3 mb-8 flex-1">
            {[
              'Tudo do plano Pro Mensal',
              '40 módulos completos',
              '21 ferramentas interativas',
              '12 templates com download real',
              'Coach IA ilimitado 24/7',
              'Quiz + XP + conquistas em todos os módulos',
              'Networking CRM + Plano Semanal',
              'Comunidade + suporte prioritário',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-emerald-50">
                <span className="text-emerald-200 font-bold mt-0.5 flex-shrink-0">✓</span>{f}
              </li>
            ))}
          </ul>
          <Btn onClick={() => onChoosePlan('annual')} variant="white" size="md" className="w-full font-black">
            Começar Anual agora →
          </Btn>
          <p className="text-center text-emerald-200 text-xs mt-3">7 dias de teste — se não gostar, devolvemos</p>
        </div>
      </div>

      {/* Guarantee */}
      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 text-sm px-5 py-3 rounded-full">
          <span className="text-xl">🛡️</span>
          <span><strong>Garantia de 7 dias:</strong> não gostou? Devolvemos 100% sem perguntas.</span>
        </div>
      </div>
    </div>
  </section>
)

// ── Testimonials ──────────────────────────────────────────────────────────────
const TestimonialsSection = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <Badge className="bg-white border border-slate-200 text-slate-600 mb-4">⭐ Depoimentos</Badge>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">Histórias reais de quem conseguiu</h2>
        <p className="text-slate-500">Profissionais que transformaram sua busca de emprego com o JobJump.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow">
            <Stars n={t.stars} />
            <p className="text-slate-600 text-sm leading-relaxed my-4 flex-1">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
              <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>{t.avatar}</div>
              <div>
                <div className="font-bold text-slate-800 text-sm">{t.name}</div>
                <div className="text-slate-500 text-xs">{t.role}</div>
                <div className="text-slate-400 text-xs">{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQSection = () => {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge className="bg-slate-100 text-slate-600 border border-slate-200 mb-4">❓ Dúvidas</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">Perguntas frequentes</h2>
        </div>
        <div className="space-y-2">
          {FAQ.map((f, i) => (
            <div key={i} className={`border rounded-2xl overflow-hidden transition-all ${open === i ? 'border-blue-200 shadow-sm' : 'border-slate-200'}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${open === i ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
              >
                <span className="font-semibold text-slate-700 pr-4">{f.q}</span>
                <span className={`text-blue-500 text-xl transition-transform duration-200 flex-shrink-0 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Footer CTA ────────────────────────────────────────────────────────────────
const LandingFooter = ({ onStart, onTerms }) => (
  <footer className="bg-gradient-to-br from-[#0f2340] to-[#1e3a5f] text-white">
    {/* CTA Block */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-sm px-4 py-2 rounded-full mb-6">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Comece hoje — é gratuito
      </div>
      <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
        Pronto para conseguir<br />
        <span className="text-blue-300">o emprego que você merece?</span>
      </h2>
      <p className="text-blue-200 text-lg mb-8 max-w-lg mx-auto">
        Junte-se a mais de 2.400 profissionais que transformaram sua busca de emprego.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Btn onClick={onStart} variant="white" size="lg" className="text-base">
          Criar conta grátis →
        </Btn>
        <button
          onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-3 text-blue-100 hover:text-white border border-white/20 hover:border-white/40 rounded-xl font-semibold text-base transition-all"
        >
          Ver plano Pro
        </button>
      </div>
      <p className="text-blue-400 text-sm mt-4">Sem cartão de crédito · Acesso imediato · 11 módulos grátis para sempre</p>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-blue-300 text-sm">
        <div className="flex items-center">
          <img src="/logo.png" alt="JobJump" className="h-7 w-auto brightness-0 invert" />
        </div>
        <span className="text-blue-400">© 2025 JobJump. Todos os direitos reservados.</span>
        <div className="flex gap-5">
          <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={onTerms}>Termos</span>
          <span className="hover:text-white cursor-pointer transition-colors">Contato</span>
        </div>
      </div>
    </div>
  </footer>
)

// ── Root ──────────────────────────────────────────────────────────────────────
export default function LandingPage({ onStart, onLogin, onTerms }) {
  return (
    <div>
      <LandingNav onLogin={onLogin} onStart={onStart} />
      <Hero onStart={onStart} />
      <HowItWorks onStart={onStart} />
      <Problems onStart={onStart} />
      <ModulesSection onStart={onStart} />
      <FeaturesSection />
      <Pricing onChoosePlan={onStart} />
      <TestimonialsSection />
      <FAQSection />
      <LandingFooter onStart={onStart} onTerms={onTerms} />
    </div>
  )
}
