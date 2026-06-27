function downloadBlob(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 5000)
}

export function downloadAsDoc(filename, htmlBody) {
  const content = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:w="urn:schemas-microsoft-com:office:word"
    xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="UTF-8">
<style>
  @page { margin: 2.2cm 2cm; }
  body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #1a2e4a; line-height: 1.5; }
  h1 { font-size: 22pt; color: #1e3a5f; margin: 0 0 2pt 0; }
  h2 { font-size: 11pt; color: #1e3a5f; text-transform: uppercase; letter-spacing: 1px;
       border-bottom: 1.5pt solid #3b82f6; padding-bottom: 2pt; margin: 14pt 0 6pt 0; }
  h3 { font-size: 11pt; color: #1a2e4a; margin: 8pt 0 1pt 0; }
  p { margin: 2pt 0 6pt 0; font-size: 10.5pt; }
  ul { margin: 2pt 0 8pt 14pt; padding: 0; }
  li { font-size: 10.5pt; margin: 2pt 0; }
  table { border-collapse: collapse; width: 100%; font-size: 10pt; }
  td, th { padding: 5pt 8pt; border: 0.75pt solid #cbd5e1; vertical-align: top; }
  th { background: #f1f5f9; font-weight: bold; text-align: left; color: #475569; }
  .subtitle { font-size: 11pt; color: #475569; margin: 0 0 3pt 0; }
  .contact { font-size: 10pt; color: #3b82f6; margin: 0 0 14pt 0; }
  .company { font-weight: bold; }
  .date { color: #64748b; font-size: 10pt; font-style: italic; float: right; }
  .placeholder { color: #94a3b8; font-style: italic; }
  .note { background: #eff6ff; border-left: 3pt solid #3b82f6; padding: 6pt 10pt; margin: 10pt 0; font-size: 10pt; color: #1d4ed8; }
  hr { border: none; border-top: 0.5pt solid #e2e8f0; margin: 8pt 0; }
</style>
</head>
<body>${htmlBody}</body>
</html>`
  downloadBlob('﻿' + content, filename, 'application/msword')
}

export function openAsPrintPdf(title, htmlBody) {
  const date = new Date().toLocaleDateString('pt-BR')
  const content = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${title}</title>
<style>
  * { box-sizing: border-box; }
  @page { margin: 1.8cm; size: A4; }
  body { font-family: 'Segoe UI', Calibri, Arial, sans-serif; font-size: 10.5pt; color: #1a2e4a; line-height: 1.6; max-width: 760px; margin: 0 auto; padding: 24px; }
  .nj-header { background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%); color: white; padding: 20px 24px; border-radius: 8px; margin-bottom: 24px; display: flex; align-items: center; gap: 14px; }
  .nj-logo { width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 14px; flex-shrink: 0; }
  .nj-header h1 { margin: 0; font-size: 17pt; font-weight: 800; }
  .nj-header p { margin: 3px 0 0; font-size: 9.5pt; opacity: 0.8; }
  h2 { font-size: 13pt; color: #1e3a5f; border-bottom: 2px solid #3b82f6; padding-bottom: 4px; margin: 22px 0 10px; }
  h3 { font-size: 11pt; color: #334155; margin: 14px 0 4px; }
  p { margin: 4px 0 10px; }
  ul, ol { padding-left: 18px; margin: 4px 0 12px; }
  li { margin: 4px 0; }
  table { border-collapse: collapse; width: 100%; margin: 8px 0 16px; page-break-inside: avoid; }
  td, th { padding: 6px 10px; border: 1px solid #e2e8f0; font-size: 10pt; vertical-align: top; }
  th { background: #f1f5f9; font-weight: 700; color: #475569; }
  .tip { background: #eff6ff; border-left: 4px solid #3b82f6; padding: 8px 12px; margin: 10px 0; border-radius: 0 6px 6px 0; font-size: 10pt; color: #1d4ed8; }
  .script-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 14px; margin: 8px 0; font-size: 10.5pt; }
  .script-label { font-weight: 700; font-size: 9pt; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
  .badge { display: inline-block; background: #dbeafe; color: #1d4ed8; padding: 1px 8px; border-radius: 20px; font-size: 9pt; font-weight: 600; }
  .check { color: #10b981; font-weight: bold; margin-right: 4px; }
  .check-row { padding: 4px 0; border-bottom: 1px solid #f1f5f9; }
  .star-box { border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px; margin: 6px 0; }
  .star-label { font-weight: 700; color: #3b82f6; display: inline-block; width: 80px; }
  .star-line { border-bottom: 1px solid #f1f5f9; padding: 5px 0; font-size: 10pt; }
  .footer { margin-top: 30px; padding-top: 10px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 8.5pt; color: #94a3b8; }
  .print-btn { position: fixed; top: 16px; right: 16px; background: #2563eb; color: white; border: none; padding: 8px 18px; border-radius: 8px; font-size: 11pt; font-weight: 600; cursor: pointer; box-shadow: 0 2px 8px rgba(37,99,235,0.3); z-index: 999; }
  @media print { .print-btn { display: none; } body { padding: 0; } }
</style>
</head>
<body>
<button class="print-btn" onclick="window.print()">⬇ Salvar como PDF</button>
${htmlBody}
<div class="footer">JobJump — Plataforma de busca de emprego &bull; Gerado em ${date} &bull; Para salvar: clique em "Salvar como PDF" ou use Arquivo → Imprimir → Salvar como PDF</div>
<script>window.onload = function() { setTimeout(function() { window.print(); }, 700); };</script>
</body>
</html>`
  const blob = new Blob([content], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const win = window.open(url, '_blank')
  if (!win) {
    const a = document.createElement('a')
    a.href = url
    a.download = title.replace(/\s+/g, '_') + '.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  setTimeout(() => URL.revokeObjectURL(url), 120000)
}

export function downloadAsCsv(filename, headers, rows) {
  const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`
  const lines = [headers.map(esc).join(','), ...rows.map((r) => r.map(esc).join(','))]
  downloadBlob('﻿' + lines.join('\r\n'), filename, 'text/csv;charset=utf-8')
}
