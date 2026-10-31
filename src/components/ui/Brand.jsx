/** Shared brand lockup: transparent symbol and readable text at every size. */
export default function Brand({ light = false, className = '' }) {
  return (
    <span role="img" aria-label="JobJump" className={`inline-flex shrink-0 items-center justify-center gap-1.5 align-middle ${className}`}>
      <img src="/brand-icon.webp" alt="" width="40" height="40" className="h-full max-h-12 w-auto aspect-square object-contain" />
      <span aria-hidden="true" className={`font-black tracking-[-0.06em] text-[20px] sm:text-[24px] leading-none ${light ? 'text-white' : 'text-brand-navy dark:text-slate-100'}`}>JobJump</span>
    </span>
  )
}
