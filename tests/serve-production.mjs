import http from 'node:http'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
const root = path.resolve('dist')
const config = JSON.parse(await readFile('vercel.json', 'utf8'))
const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.xml': 'application/xml', '.txt': 'text/plain', '.json': 'application/json' }
const server = http.createServer(async (req, res) => {
  for (const rule of config.headers) {
    if (rule.source === '/(.*)' || (rule.source === '/' && req.url === '/') || (rule.source === '/assets/(.*)' && req.url.startsWith('/assets/'))) {
      for (const header of rule.headers) res.setHeader(header.key, header.value)
    }
  }
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return }
  try {
    const url = new URL(req.url, 'http://127.0.0.1')
    const relative = decodeURIComponent(url.pathname) === '/' ? 'index.html' : decodeURIComponent(url.pathname).slice(1)
    const file = path.resolve(root, relative)
    if (!file.startsWith(`${root}${path.sep}`)) { res.writeHead(403); res.end(); return }
    const body = await readFile(file)
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream')
    res.writeHead(200); res.end(req.method === 'HEAD' ? undefined : body)
  } catch { res.writeHead(404); res.end('Not found') }
})
server.listen(0, '127.0.0.1', () => console.log(JSON.stringify({ port: server.address().port })))
