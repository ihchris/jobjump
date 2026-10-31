import { useState, useEffect } from 'react'
import Brand from '../ui/Brand'
import { Btn } from '../ui'
import { PUBLIC_MODULES } from '../../data/publicCatalog'
import { TOOLS } from '../../data/toolCatalog'
import { FAQ } from '../../data/content'

const steps = [
  ['01', 'Entenda seu momento', 'Responda a seis perguntas sobre sua experiência e seus objetivos.'],
  ['02', 'Escolha a primeira tarefa', 'Receba três prioridades explicadas e escolha uma tarefa para aplicar.'],
  ['03', 'Pratique no seu ritmo', 'Prepare seu material, confira os critérios e retome a próxima tarefa.'],
]

export default function LandingPage({ onStart, onPreview, onTerms, onPrivacy }) {
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30)
    update(); window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  const lessons = PUBLIC_MODULES.reduce((sum, m) => sum + m.lessons.length, 0)
  return <div>
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors bg-white/95 dark:bg-brand-deep/95 backdrop-blur ${scrolled ? 'border-b border-slate-200' : ''}`}>
      <nav aria-label="Navegação principal" className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a href="#inicio" aria-label="JobJump — início"><Brand className="h-9" /></a>
        <div className={`hidden md:flex gap-6 text-sm text-slate-600 dark:text-slate-300`}>
          <a href="#como-funciona">Como funciona</a><a href="#modulos">Conteúdo</a><a href="#disponibilidade">Disponibilidade</a><a href="#faq">Dúvidas</a>
        </div>
        <Btn onClick={onStart} size="sm">Explorar demo</Btn>
      </nav>
    </header>
    <main id="conteudo" tabIndex={-1}>
      <section id="inicio" className="bg-brand-surface dark:bg-brand-deep text-brand-ink dark:text-white pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          <div>
            <span className="inline-block border border-slate-200 dark:border-white/20 bg-white dark:bg-white/5 rounded-full px-4 py-2 text-sm text-slate-600 dark:text-slate-300 mb-6">Para quem busca emprego ou quer mudar de carreira</span>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-5">Seu próximo passo<br /><span className="text-slate-500 dark:text-slate-300">na carreira começa aqui.</span></h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">Organize a busca de emprego com um diagnóstico, aulas e ferramentas práticas. Escolha uma tarefa, experimente e avance no seu ritmo.</p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <Btn onClick={onStart} size="lg" className="whitespace-nowrap">Fazer diagnóstico →</Btn>
              <button onClick={onPreview} className="rounded-full border border-slate-300 dark:border-white/30 px-5 py-3 text-sm whitespace-nowrap font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10">Experimentar sem cadastro</button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-4">Demonstração local · Sem email ou cartão · Nenhuma cobrança</p>
            <dl className="grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-white/20 mt-8 pt-6">
              {[[PUBLIC_MODULES.length, 'Módulos na demo'], [lessons, 'Aulas disponíveis'], [TOOLS.length, 'Ferramentas locais']].map(([count, label]) => <div key={label}><dt className="text-sm text-slate-600 dark:text-slate-300">{label}</dt><dd className="text-2xl font-bold mt-1">{count}</dd></div>)}
            </dl>
          </div>
          <aside className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/20 rounded-3xl p-6 sm:p-8" aria-label="Exemplo de roteiro">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300 mb-5">Uma etapa de cada vez · Exemplo de roteiro</p>
            <h2 className="text-2xl font-bold mb-6">Da dúvida à primeira ação.</h2>
            {['Defina o que você precisa melhorar', 'Comece pela aula recomendada', 'Aplique uma mudança no currículo'].map((text, i) => <div key={text} className="flex gap-4 items-start py-4 border-t border-slate-200 dark:border-white/15"><span className="rounded-full bg-brand-navy text-white dark:bg-brand-paper dark:text-brand-ink font-bold h-8 w-8 flex items-center justify-center shrink-0">{i + 1}</span><p className="text-slate-600 dark:text-slate-300 pt-1">{text}</p></div>)}
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-5">O roteiro real depende das suas respostas. Não há garantia de contratação.</p>
          </aside>
        </div>
      </section>

      <section id="como-funciona" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-20">
        <p className="text-slate-600 dark:text-slate-300 text-sm font-bold uppercase">Como funciona</p>
        <h2 className="text-3xl font-black text-slate-800 mt-2 mb-8">Um caminho para começar.</h2>
        <div className="grid md:grid-cols-3 gap-5">{steps.map(([number, title, text]) => <article key={number} className="bg-white border border-slate-200 rounded-2xl p-6"><span className="text-slate-600 dark:text-slate-300 font-bold">{number}</span><h3 className="font-bold text-lg text-slate-800 mt-4 mb-2">{title}</h3><p className="text-slate-600 leading-relaxed">{text}</p></article>)}</div>
      </section>

      <section id="modulos" className="bg-white border-y border-slate-200 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-black text-slate-800">Conteúdo que você pode abrir agora.</h2>
          <p className="text-slate-600 mt-3 max-w-2xl">Uma seleção de {PUBLIC_MODULES.length} módulos para experimentar a preparação de currículo, entrevistas e organização da carreira. Sem bloqueios de pagamento nesta demonstração.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">{PUBLIC_MODULES.map(m => <article key={m.id} className="rounded-2xl border border-slate-200 p-5"><span aria-hidden="true" className="text-2xl">{m.icon}</span><h3 className="text-slate-800 font-bold mt-3">{m.title}</h3><p className="text-slate-500 text-sm mt-2">{m.lessons.length} aulas · {m.duration}</p></article>)}</div>
          <div className="mt-8"><Btn onClick={onPreview}>Abrir diagnóstico e aulas →</Btn></div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-black text-slate-800">Aprenda e coloque em prática.</h2>
        <p className="text-slate-600 mt-3 mb-8">Ferramentas baseadas em modelos e regras locais. Você revisa o resultado antes de usá-lo.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{TOOLS.filter(t => ['star', 'ats', 'tracker', 'checklist', 'interview-timer', 'cover-letter'].includes(t.id)).map(t => <article key={t.id} className="bg-white border border-slate-200 rounded-2xl p-5"><h3 className="font-bold text-slate-800">{t.icon} {t.title}</h3><p className="text-slate-600 text-sm leading-relaxed mt-2">{t.desc}</p></article>)}</div>
      </section>

      <section id="disponibilidade" className="bg-brand-navy text-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-8">
          <div><p className="text-slate-300 font-bold text-sm uppercase">Disponível nesta versão</p><h2 className="text-3xl font-black mt-3 mb-4">Experimente antes de decidir.</h2><p className="text-brand-muted leading-relaxed">A demonstração é gratuita. Não há contas, assinaturas ou cobranças. Seu progresso fica apenas neste navegador e não é sincronizado entre dispositivos.</p><div className="mt-6"><Btn onClick={onPreview} variant="white" size="lg">Explorar demonstração →</Btn></div></div>
          <div className="border border-white/20 rounded-2xl p-6"><h3 className="font-bold text-xl mb-3">Planos comerciais ainda não estão disponíveis.</h3><p className="text-brand-muted leading-relaxed">Preços, formas de pagamento e condições serão definidos antes da abertura das vendas. Esta página não oferece pré-venda nem reserva de assinatura.</p><p className="text-brand-muted leading-relaxed mt-4">O JobJump oferece apoio educacional. Resultados dependem do seu contexto e da aplicação dos conteúdos.</p></div>
        </div>
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 py-16 scroll-mt-20">
        <h2 className="text-3xl font-black text-slate-800 mb-8">Dúvidas antes de experimentar?</h2>
        <div className="space-y-3">{FAQ.map((item, i) => <div key={item.q} className="border border-slate-200 rounded-xl bg-white"><h3><button id={`faq-question-${i}`} aria-expanded={openFaq === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-slate-800"><span>{item.q}</span><span aria-hidden="true">{openFaq === i ? '−' : '+'}</span></button></h3><div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} hidden={openFaq !== i} className="px-5 pb-5 text-slate-600 leading-relaxed">{item.a}</div></div>)}</div>
      </section>
    </main>
    <footer className="bg-brand-deep text-brand-muted px-4 sm:px-6 py-8"><div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-5 items-center justify-between"><Brand light className="h-8" /><p className="text-sm">© {new Date().getFullYear()} JobJump · Demonstração pública</p><nav aria-label="Informações legais" className="flex gap-5 text-sm"><button onClick={onPrivacy} className="underline underline-offset-4 hover:text-white">Privacidade</button><button onClick={onTerms} className="underline underline-offset-4 hover:text-white">Termos de uso</button></nav></div></footer>
  </div>
}
