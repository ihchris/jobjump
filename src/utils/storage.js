const memory = new Map()
export function storageAvailable() {
  try { const key = '__jobjump_storage_check'; localStorage.setItem(key, '1'); localStorage.removeItem(key); return true } catch { return false }
}
export const LS = {
  get: (key, fallback = null) => {
    if (memory.has(key)) return memory.get(key)
    try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback } catch { return fallback }
  },
  set: (key, value) => {
    memory.set(key, value)
    try { localStorage.setItem(key, JSON.stringify(value)); return true } catch { return false }
  },
  del: key => { memory.delete(key); try { localStorage.removeItem(key) } catch {} },
}
