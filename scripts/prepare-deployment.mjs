import { readFile, writeFile } from 'node:fs/promises'

const configuredUrl = process.env.SITE_URL
const robots = ['User-agent: *', 'Allow: /']
let html = await readFile('dist/index.html', 'utf8')
if (configuredUrl) {
  const url = new URL(configuredUrl)
  if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL must be an HTTPS origin, without credentials, path, query or fragment.')
  }
  const origin = url.origin
  const canonical = `${origin}/`
  html = html.replace('<!-- deployment:canonical -->', `<link rel="canonical" href="${canonical}" />\n    <meta property="og:url" content="${canonical}" />`)
  html = html.replaceAll('content="/logo.png"', `content="${origin}/logo.png"`)
  const escapeXml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapeXml(canonical)}</loc></url></urlset>\n`)
  robots.push(`Sitemap: ${origin}/sitemap.xml`)
  console.log('Canonical URL, social image URLs and sitemap prepared for the configured domain.')
} else {
  html = html.replace('<!-- deployment:canonical -->', '')
  console.log('SITE_URL is unset: domain-specific canonical URL and sitemap are deferred until a real domain is chosen.')
}
await writeFile('dist/index.html', html)
await writeFile('dist/robots.txt', `${robots.join('\n')}\n`)
