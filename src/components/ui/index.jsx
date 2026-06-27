export const Spinner = ({ size = 'w-5 h-5', color = 'border-blue-600' }) => (
  <div className={`${size} border-2 border-gray-200 ${color} border-t-transparent rounded-full animate-spin`} />
)

export const Stars = ({ n = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: n }).map((_, i) => (
      <span key={i} className="text-amber-400 text-sm">★</span>
    ))}
  </div>
)

export const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
)

export const ProgressBar = ({ pct, color = 'bg-blue-600' }) => (
  <div className="w-full bg-gray-100 rounded-full h-2">
    <div
      className={`${color} h-2 rounded-full transition-all duration-500`}
      style={{ width: `${pct}%` }}
    />
  </div>
)

const VARIANTS = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500 shadow-sm',
  secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 active:bg-slate-100 focus:ring-slate-300 shadow-sm',
  white: 'bg-white text-blue-700 font-black hover:bg-blue-50 active:bg-blue-100 focus:ring-blue-300 shadow-sm',
  navy: 'bg-[#1e3a5f] text-white hover:bg-[#152d4a] active:bg-[#0f2035] focus:ring-[#1e3a5f] shadow-sm',
  ghost: 'text-slate-600 hover:bg-slate-100 active:bg-slate-200 focus:ring-slate-300',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm',
  success: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 shadow-sm',
}

const SIZES = { sm: 'px-3 py-1.5 text-sm', md: 'px-5 py-2.5 text-sm', lg: 'px-6 py-3 text-base' }

export const Btn = ({ children, onClick, variant = 'primary', size = 'md', disabled = false, className = '' }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-150
      focus:outline-none focus:ring-2 focus:ring-offset-2
      ${VARIANTS[variant]} ${SIZES[size]}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}`}
  >
    {children}
  </button>
)

export const Modal = ({ open, onClose, children, title }) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
        </div>
        {children}
      </div>
    </div>
  )
}
