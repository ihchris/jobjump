import Brand from '../ui/Brand'
export default function LegalPage({ title, onBack, children }) {
  return <main id="conteudo" tabIndex={-1} className="min-h-screen px-4 py-8 bg-slate-50"><div className="max-w-3xl mx-auto"><button onClick={onBack} className="text-blue-600 underline min-h-11 mb-4">← Voltar</button><div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8"><Brand className="h-9" /><h1 className="text-3xl font-black text-slate-800 mt-6 mb-3">{title}</h1><p className="text-slate-500 text-sm mb-8">Versão da demonstração · Atualizado em 31 de outubro de 2026</p><div className="space-y-6 text-slate-600 leading-relaxed">{children}</div></div></div></main>
}
