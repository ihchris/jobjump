import { marked } from 'marked'
import DOMPurify from 'dompurify'

marked.setOptions({ breaks: true })

export const renderMarkdown = (text) => {
  try {
    return { __html: DOMPurify.sanitize(marked.parse(text)) }
  } catch {
    return { __html: `<pre>${DOMPurify.sanitize(text)}</pre>` }
  }
}
