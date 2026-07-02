import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">⚠️</div>
          <h1 className="text-xl font-black text-slate-800 mb-2">Algo correu mal</h1>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Ocorreu um erro inesperado. Recarregue a página — o teu progresso está guardado.
          </p>
          {import.meta.env.DEV && (
            <pre className="text-left text-xs bg-red-50 border border-red-200 rounded-xl p-4 mb-6 overflow-auto max-h-40 text-red-700">
              {this.state.error.message}
            </pre>
          )}
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Recarregar página
          </button>
        </div>
      </div>
    )
  }
}
