import sharp from 'sharp'
import path from 'node:path'

const root = process.cwd()
const outDir = path.join(root, 'store-assets')

const sources = [
  'C:/Users/xfrong/AppData/Local/Temp/codex-clipboard-2a147028-9d45-4c4e-8abc-e57fb6a74cb2.png',
  'C:/Users/xfrong/AppData/Local/Temp/codex-clipboard-0faa977a-8d73-478f-a7ce-7975fc5e10e2.png',
  'C:/Users/xfrong/AppData/Local/Temp/codex-clipboard-a9cff493-72f1-4d78-a29c-25930559f499.png',
  'C:/Users/xfrong/AppData/Local/Temp/codex-clipboard-b346caba-9ace-4d31-8eec-408f1c112f98.png',
  'C:/Users/xfrong/AppData/Local/Temp/codex-clipboard-acca7f18-0011-41fd-8061-5a44ef8f19e7.png',
]

const cards = [
  {
    title: 'Prompt Templates, Right Where You Work',
    subtitle: 'Browse, search, and insert prompts without leaving your AI workspace.',
    file: 'cws-screenshot-01-library.png',
  },
  {
    title: 'Optimize Before You Send',
    subtitle: 'Turn a rough idea into a clearer, more structured prompt.',
    file: 'cws-screenshot-02-optimize.png',
  },
  {
    title: 'Find the Right Prompt in Seconds',
    subtitle: 'Search across 66 bilingual templates by task or keyword.',
    file: 'cws-screenshot-03-search.png',
  },
  {
    title: 'Fill In the Details',
    subtitle: 'Personalize a template before inserting it into your AI chat.',
    file: 'cws-screenshot-04-variables.png',
  },
  {
    title: 'Save and Reuse Your Best Prompts',
    subtitle: 'Keep personal templates organized and ready for your next AI task.',
    file: 'cws-screenshot-05-assets.png',
  },
]

function esc(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
}

function frameSvg(title, subtitle) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f8f9ff"/>
        <stop offset="1" stop-color="#eef0ff"/>
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#273469" flood-opacity=".18"/>
      </filter>
    </defs>
    <rect width="1280" height="800" fill="url(#bg)"/>
    <rect x="64" y="38" width="8" height="72" rx="4" fill="#667eea"/>
    <text x="94" y="72" font-family="Arial, Segoe UI, sans-serif" font-size="27" font-weight="700" fill="#18213d">${esc(title)}</text>
    <text x="94" y="105" font-family="Arial, Segoe UI, sans-serif" font-size="17" fill="#64708f">${esc(subtitle)}</text>
    <rect x="64" y="145" width="1152" height="604" rx="20" fill="#ffffff" filter="url(#shadow)"/>
  </svg>`)
}

async function makeCard(index, card) {
  const image = sharp(sources[index]).resize({ width: 1120, height: 588, fit: 'contain', background: '#ffffff' })
  const composed = await sharp({
    create: { width: 1280, height: 800, channels: 4, background: '#f4f6ff' },
  })
    .composite([
      { input: frameSvg(card.title, card.subtitle), top: 0, left: 0 },
      { input: await image.png().toBuffer(), top: 153, left: 80 },
    ])
    .png()
    .toBuffer()

  await sharp(composed).png().toFile(path.join(outDir, card.file))
}

await Promise.all(cards.map((card, index) => makeCard(index, card)))
console.log(`Created ${cards.length} Chrome Web Store screenshots in ${outDir}`)
