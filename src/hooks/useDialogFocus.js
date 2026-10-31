import { useEffect, useRef } from 'react'

export function useDialogFocus(ref, open, onClose) {
  const closeRef = useRef(onClose)
  closeRef.current = onClose
  useEffect(() => {
    if (!open || !ref.current) return
    const previous = document.activeElement
    const dialog = ref.current
    const focusable = () => [...dialog.querySelectorAll('button, a[href], input, select, textarea, summary, [tabindex="0"]')].filter(el => !el.disabled && el.getClientRects().length)
    const frame = requestAnimationFrame(() => (focusable()[0] || dialog).focus())
    const keydown = event => {
      if (event.key === 'Escape') { event.preventDefault(); closeRef.current?.(); return }
      if (event.key !== 'Tab') return
      const items = focusable(), first = items[0], last = items[items.length - 1]
      if (!first) { event.preventDefault(); dialog.focus(); return }
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', keydown)
    return () => { cancelAnimationFrame(frame); document.removeEventListener('keydown', keydown); if (previous?.isConnected) previous.focus() }
  }, [open, ref])
}
