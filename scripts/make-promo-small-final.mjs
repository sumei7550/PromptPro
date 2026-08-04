import sharp from 'sharp'
import path from 'node:path'

const root = process.cwd()
const source = 'C:/Users/xfrong/AppData/Local/Temp/codex-clipboard-0faa977a-8d73-478f-a7ce-7975fc5e10e2.png'
const logo = path.join(root, 'src', 'assets', 'icons', 'icon.svg')
const output = path.join(root, 'store-assets', 'promo-small-440x280-final.png')

const esc = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="440" height="280">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#667eea"/>
      <stop offset="1" stop-color="#764ba2"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="150%" height="160%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#24134d" flood-opacity=".28"/>
    </filter>
  </defs>
  <rect width="440" height="280" fill="url(#g)"/>
  <circle cx="410" cy="20" r="90" fill="#ffffff" opacity=".08"/>
  <text x="68" y="47" font-family="Arial, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ffffff">PromptPro</text>
  <text x="24" y="104" font-family="Arial, Segoe UI, sans-serif" font-size="26" font-weight="800" fill="#ffffff">Better Prompts.</text>
  <text x="24" y="134" font-family="Arial, Segoe UI, sans-serif" font-size="26" font-weight="800" fill="#ffffff">Better AI Work.</text>
  <text x="24" y="168" font-family="Arial, Segoe UI, sans-serif" font-size="12" fill="#eef0ff">Local-first enhancement</text>
  <text x="24" y="188" font-family="Arial, Segoe UI, sans-serif" font-size="13" fill="#eef0ff">66 bilingual templates</text>
  <rect x="24" y="216" width="93" height="26" rx="13" fill="#ffffff" opacity=".96"/>
  <text x="70" y="233" text-anchor="middle" font-family="Arial, Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#5b54bc">No account</text>
  <rect x="124" y="216" width="83" height="26" rx="13" fill="#ffffff" opacity=".96"/>
  <text x="165" y="233" text-anchor="middle" font-family="Arial, Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#5b54bc">No uploads</text>
  <rect x="214" y="216" width="94" height="26" rx="13" fill="#ffffff" opacity=".96"/>
  <text x="261" y="233" text-anchor="middle" font-family="Arial, Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#5b54bc">Works locally</text>
  <rect x="258" y="48" width="156" height="148" rx="12" fill="#ffffff" opacity=".98" filter="url(#shadow)"/>
</svg>`)

const crop = await sharp(source)
  .extract({ left: 430, top: 230, width: 800, height: 575 })
  .resize({ width: 146, height: 134, fit: 'cover' })
  .png()
  .toBuffer()

const logoBuffer = await sharp(logo)
  .resize({ width: 34, height: 34 })
  .png()
  .toBuffer()

await sharp({ create: { width: 440, height: 280, channels: 4, background: '#667eea' } })
  .composite([
    { input: background, top: 0, left: 0 },
    { input: logoBuffer, top: 24, left: 24 },
    { input: crop, top: 55, left: 263 },
  ])
  .png()
  .toFile(output)

console.log(`Created ${output}`)
