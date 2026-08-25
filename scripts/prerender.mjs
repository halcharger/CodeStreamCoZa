import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

/*
 * Renders each route to static HTML and writes it into the built index.html, so the
 * file Azure serves contains the real page rather than an empty shell. Crawlers, link
 * unfurlers and no-JS visitors get content; the browser hydrates the same markup.
 *
 * Runs after `vite build` and the SSR build. See package.json → prerender.
 */

const root = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const ROUTES = [{ url: '/', file: 'dist/index.html' }]

const { render } = await import(pathToFileURL(path.join(root, '.prerender/entry-server.js')).href)
const template = await readFile(path.join(root, 'dist/index.html'), 'utf8')

if (!template.includes('<div id="root"')) {
  throw new Error('prerender: could not find the root element in dist/index.html')
}

for (const route of ROUTES) {
  const html = await render(route.url)

  if (!html.trim()) {
    throw new Error(`prerender: ${route.url} rendered empty`)
  }

  const out = template.replace(
    /(<div id="root"[^>]*>)(<\/div>)/,
    (_match, open, close) => `${open}${html}${close}`,
  )

  if (out === template) {
    throw new Error('prerender: root element was not replaced — check the markup in index.html')
  }

  await writeFile(path.join(root, route.file), out, 'utf8')
  console.log(`prerendered ${route.url} → ${route.file} (${(out.length / 1024).toFixed(1)} kB)`)
}

// The SSR bundle is a build artefact, not something to deploy.
await rm(path.join(root, '.prerender'), { recursive: true, force: true })
