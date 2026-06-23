import { mkdir, rm, readFile, writeFile, copyFile, readdir } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { join, dirname } from 'node:path'

const base = '/landingpage-Koralabscr/'
const pages = ['index.html', 'clearbiz/index.html', 'enki-agent/index.html', 'miganadocr/index.html']
const dist = 'dist'

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true })
  for (const entry of await readdir(src, { withFileTypes: true })) {
    const from = join(src, entry.name)
    const to = join(dest, entry.name)
    if (entry.isDirectory()) await copyDir(from, to)
    else await copyFile(from, to)
  }
}

await rm(dist, { recursive: true, force: true })
await mkdir(join(dist, 'assets'), { recursive: true })

const css = await readFile('src/index.css', 'utf8')
const hash = createHash('sha256').update(css).digest('hex').slice(0, 8)
const cssFile = `assets/index-${hash}.css`
await writeFile(join(dist, cssFile), css)
await copyDir('assets', join(dist, 'assets'))

for (const page of pages) {
  let html = await readFile(page, 'utf8')
  html = html.replace(/<link rel="stylesheet" href="\/src\/index\.css"\s*\/>/, `<link rel="stylesheet" href="${base}${cssFile}" />`)
  const target = join(dist, page)
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, html)
}

console.log(`Built ${pages.length} pages with ${base}${cssFile}`)
