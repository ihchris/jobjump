import { useState } from 'react'
import { Btn, Badge } from '../ui'
import { TEMPLATES } from '../../data/templates'
import { TEMPLATE_GENERATORS } from '../../utils/templateGenerators'
import { hasContentAccess } from '../../utils/plans'
import BookmarkButton from './BookmarkButton'
import { bookmarkTemplate } from '../../utils/bookmarks'

const FORMAT_COLORS = {
  DOCX: 'bg-blue-50 text-blue-600',
  PDF: 'bg-red-50 text-red-600',
  CSV: 'bg-green-50 text-green-700',
}

const FORMAT_LABELS = {
  DOCX: '📝 Word',
  PDF: '📄 PDF',
  CSV: '📊 Planilha',
}

export default function TemplatesPage({ user }) {
  const [downloading, setDownloading] = useState(null)
  const [toast, setToast] = useState('')

  const showToast = (msg, isError = false) => {
    setToast({ msg, isError })
    setTimeout(() => setToast(''), 5000)
  }

  const handleDownload = async (t) => {
    if (t.isPro && !hasContentAccess(user.plan)) {
      showToast('🔒 Template exclusivo do Plano Pro. Faça upgrade em Configurações para desbloquear.', true)
      return
    }

    const generator = TEMPLATE_GENERATORS[t.id]
    if (!generator) {
      showToast('❌ Template não disponível no momento.', true)
      return
    }

    setDownloading(t.id)
    try {
      await new Promise((res) => setTimeout(res, 100))
      generator()
      if (t.format === 'PDF') {
        showToast(`✅ ${t.title} — documento preparado em nova aba ou arquivo HTML, se o navegador bloqueou a janela. Use o menu Imprimir para salvar como PDF.`)
      } else {
        showToast(`✅ ${t.title} baixado com sucesso! Confira sua pasta de downloads.`)
      }
    } catch (e) {
      showToast('❌ Erro ao gerar o arquivo. Tente novamente.', true)
    } finally {
      setDownloading(null)
    }
  }

  const categories = [...new Set(TEMPLATES.map((t) => t.type))]

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-2xl font-black text-slate-800 mb-1">Templates</h1>
      <p className="text-slate-500 text-sm mb-6">
        Modelos prontos para baixar e usar — CVs, cartas, scripts e planilhas profissionais.
      </p>

      {toast && (
        <div className={`mb-5 p-4 rounded-xl border text-sm font-medium animate-fade-in flex items-start gap-2 ${
          toast.isError
            ? 'bg-red-50 border-red-200 text-red-800'
            : 'bg-green-50 border-green-200 text-green-800'
        }`}>
          <span className="flex-1">{toast.msg}</span>
          <button onClick={() => setToast('')} className="text-current opacity-60 hover:opacity-100 ml-2 flex-shrink-0">✕</button>
        </div>
      )}

      {categories.map((cat) => (
        <div key={cat} className="mb-8">
          <h2 className="text-lg font-black text-slate-700 mb-3 flex items-center gap-2">
            {{
              CV: '📄 Currículos',
              Carta: '✉️ Cartas',
              Email: '📧 Emails',
              Guia: '📋 Guias',
              Script: '💬 Scripts',
              Plano: '🗺️ Planos',
              Planilha: '📊 Planilhas',
            }[cat] || cat}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEMPLATES.filter((t) => t.type === cat).map((t) => {
              const locked = t.isPro && !hasContentAccess(user.plan)
              const isLoading = downloading === t.id

              return (
                <div
                  key={t.id}
                  className={`relative bg-white rounded-2xl border p-5 shadow-sm transition-all duration-200 ${
                    locked ? 'border-slate-100 opacity-80' : 'border-slate-100 hover:shadow-md hover:border-blue-100'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{t.icon}</span>
                    <div className="flex gap-1.5 flex-wrap justify-end items-start">
                      <Badge className={`text-xs ${FORMAT_COLORS[t.format] || 'bg-slate-100 text-slate-500'}`}>
                        {FORMAT_LABELS[t.format] || t.format}
                      </Badge>
                      {t.isPro && (
                        <Badge className={
                          hasContentAccess(user.plan)
                            ? 'bg-amber-100 text-amber-700 text-xs'
                            : 'bg-slate-100 text-slate-400 text-xs'
                        }>
                          {user.plan === 'demo' ? 'Demo' : hasContentAccess(user.plan) ? '⭐ Pro' : '🔒 Pro'}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{t.title}</h3>
                  <p className="text-slate-500 text-xs mb-4 leading-relaxed">{t.desc}</p>
                  <div className="absolute top-3 left-3">
                    <BookmarkButton
                      type="template"
                      refId={`tpl_${t.id}`}
                      title={t.title}
                      subtitle={t.desc}
                      meta={{ templateId: t.id, format: t.format, isPro: t.isPro }}
                      size="sm"
                    />
                  </div>

                  <Btn
                    onClick={() => handleDownload(t)}
                    variant={locked ? 'secondary' : 'primary'}
                    size="sm"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? '⏳ Gerando...'
                      : locked
                        ? '🔒 Desbloquear com Pro'
                        : t.format === 'PDF'
                          ? '🖨 Abrir para salvar PDF'
                          : '⬇ Download'}
                  </Btn>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      <div className="mt-2 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-700">
        <strong>ℹ️ Sobre os formatos:</strong>
        <ul className="mt-1.5 space-y-1 list-disc list-inside">
          <li><strong>Word (.doc)</strong> — abre no Word, LibreOffice ou Google Docs. Edite e salve como .docx.</li>
          <li><strong>PDF</strong> — abre nova aba. Clique em "Salvar como PDF" no menu de impressão do navegador.</li>
          <li><strong>Planilha (.csv)</strong> — abre no Excel, LibreOffice Calc ou Google Sheets.</li>
        </ul>
      </div>
    </div>
  )
}
