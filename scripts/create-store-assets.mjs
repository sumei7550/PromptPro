import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const outDir = path.resolve('store-assets')
fs.mkdirSync(outDir, { recursive: true })

const esc = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const wrap = (width, height, content, bg = '#f5f7ff') => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#667eea"/><stop offset="1" stop-color="#764ba2"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#273469" flood-opacity=".16"/></filter></defs>
<rect width="${width}" height="${height}" fill="${bg}"/>${content}</svg>`
const text = (x, y, value, size, fill = '#18213d', weight = 500, anchor = 'start') => `<text x="${x}" y="${y}" font-family="Arial, 'Microsoft YaHei', sans-serif" font-size="${size}px" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(value)}</text>`
const pill = (x, y, w, label, color = '#eef0ff') => `<rect x="${x}" y="${y}" width="${w}" height="34" rx="17" fill="${color}"/>${text(x + w / 2, y + 23, label, 15, '#5966c8', 700, 'middle')}`
const logo = (x, y, scale = 1) => `<rect x="${x}" y="${y}" width="54" height="54" rx="16" fill="url(#g)"/><path d="M${x+17} ${y+18}h20v7H24v5h11v7H24v7h13v7H17z" fill="white"/><circle cx="${x+39}" cy="${y+15}" r="5" fill="#ffd166"/>`

function screenshotOne() {
  return wrap(1280, 800, `${logo(72, 58)}${text(145, 88, 'PromptPro', 34, '#18213d', 800)}${text(145, 116, 'Prompt optimizer + template library', 18, '#64708f', 500)}
  <rect x="72" y="186" width="1136" height="514" rx="28" fill="white" filter="url(#shadow)"/>
  ${text(122, 250, 'Make every AI prompt clearer.', 42, '#18213d', 800)}${text(122, 290, 'Optimize locally, then review before you send.', 22, '#64708f', 500)}
  ${pill(122, 332, 172, 'Local-first')}${pill(310, 332, 168, '66 templates')}${pill(494, 332, 196, 'Bilingual UI')}
  <rect x="122" y="406" width="1036" height="118" rx="18" fill="#f7f8fc" stroke="#e3e7f5"/>
  ${text(150, 445, 'Write a product launch announcement for a new AI tool.', 21, '#303a5a', 600)}${text(150, 480, 'PromptPro can add audience, tone, format and constraints for you.', 17, '#7b84a0', 500)}
  <rect x="930" y="449" width="184" height="50" rx="14" fill="url(#g)"/>${text(1022, 481, 'Optimize prompt', 17, 'white', 700, 'middle')}
  ${text(122, 596, 'Works where you already chat', 19, '#667eea', 700)}${text(122, 634, 'ChatGPT  ·  Claude  ·  Gemini  ·  DeepSeek  ·  Doubao  ·  Perplexity', 18, '#64708f', 500)}`)
}

function screenshotTwo() {
  return wrap(1280, 800, `${text(72, 88, 'Find a strong starting point in seconds.', 38, '#18213d', 800)}${text(72, 124, 'A bilingual prompt template library for writing, coding, marketing and research.', 19, '#64708f', 500)}
  <rect x="72" y="172" width="1136" height="556" rx="26" fill="white" filter="url(#shadow)"/>
  <rect x="104" y="206" width="1072" height="58" rx="14" fill="#f7f8fc" stroke="#e3e7f5"/>${text(136, 243, 'Search templates: code review, SEO, summary…', 17, '#9aa2b7', 500)}
  ${pill(104, 292, 100, 'All')}${pill(216, 292, 116, 'Writing', '#f3efff')}${pill(344, 292, 116, 'Coding')}${pill(472, 292, 126, 'Marketing')}${pill(610, 292, 120, 'Research')}
  ${['SEO Article Writing|Generate SEO-friendly long-form content', 'Code Review|Professional code review with actionable fixes', 'Data Analysis Report|Transform data into insightful analysis', 'Viral Headline Formulas|Generate high-CTR headline options'].map((item, i) => { const [a,b] = item.split('|'); const y = 368 + i * 78; return `<rect x="104" y="${y}" width="1072" height="58" rx="12" fill="${i === 0 ? '#f0f1ff' : '#fbfbfe'}" stroke="#e7e9f4"/>${text(130, y+25, a, 17, '#273153', 700)}${text(130, y+47, b, 14, '#78829e', 500)}${text(1116, y+35, 'Insert', 15, '#667eea', 700, 'end')}` }).join('')}`)
}

function screenshotThree() {
  return wrap(1280, 800, `<rect width="1280" height="800" fill="url(#g)" opacity=".96"/>${text(72, 94, 'Your prompts stay on your device.', 40, 'white', 800)}${text(72, 132, 'PromptPro is local-first, account-free and built for focused AI work.', 20, '#e9ebff', 500)}
  <rect x="72" y="196" width="520" height="460" rx="26" fill="white" opacity=".98" filter="url(#shadow)"/>${logo(112, 238)}${text(185, 274, 'PromptPro', 30, '#18213d', 800)}${text(112, 346, 'Privacy by design', 25, '#18213d', 800)}${text(112, 388, 'No account required', 18, '#64708f', 500)}${text(112, 430, 'No prompt uploads', 18, '#64708f', 500)}${text(112, 472, 'No analytics or tracking', 18, '#64708f', 500)}<circle cx="132" cy="382" r="5" fill="#667eea"/><circle cx="132" cy="424" r="5" fill="#667eea"/><circle cx="132" cy="466" r="5" fill="#667eea"/>
  <rect x="666" y="196" width="542" height="460" rx="26" fill="#1a2141" opacity=".9"/>${text(720, 264, 'A better prompt has', 24, '#cfd5ff', 600)}${text(720, 314, 'intent + context + format', 30, 'white', 800)}${text(720, 376, 'PromptPro helps you get there', 22, '#ffd166', 700)}${text(720, 438, '✓ Optimize before sending', 18, '#e9ebff', 500)}${text(720, 480, '✓ Reuse proven templates', 18, '#e9ebff', 500)}${text(720, 522, '✓ Review and undo safely', 18, '#e9ebff', 500)}`)
}

function promo() {
  return wrap(1400, 560, `<rect width="1400" height="560" fill="url(#g)"/>${logo(80, 72)}${text(155, 112, 'PromptPro', 42, 'white', 800)}${text(80, 195, 'Better prompts.', 56, 'white', 800)}${text(80, 260, 'Better AI work.', 56, 'white', 800)}${text(80, 330, 'Local-first prompt enhancement + 66 bilingual templates', 24, '#edf0ff', 500)}${pill(80, 388, 176, 'No account', '#ffffff')}${pill(272, 388, 190, 'No uploads', '#ffffff')}${pill(478, 388, 176, 'Works locally', '#ffffff')}
  <rect x="840" y="64" width="470" height="430" rx="24" fill="white" opacity=".98" filter="url(#shadow)"/><rect x="880" y="110" width="390" height="54" rx="14" fill="#f5f6fb"/>${text(910, 145, 'Write a clearer prompt…', 17, '#7b84a0', 500)}<rect x="880" y="194" width="390" height="140" rx="18" fill="#f5f6fb"/>${text(910, 234, 'Add context, audience, tone,', 17, '#303a5a', 600)}${text(910, 265, 'format and constraints', 17, '#303a5a', 600)}<rect x="880" y="370" width="190" height="54" rx="14" fill="url(#g)"/>${text(975, 405, 'Optimize', 17, 'white', 700, 'middle')}${text(880, 466, 'ChatGPT · Claude · Gemini · more', 16, '#667eea', 700)}`)
}

await sharp(Buffer.from(screenshotOne())).png().toFile(path.join(outDir, 'screenshot-01-optimize.png'))
await sharp(Buffer.from(screenshotTwo())).png().toFile(path.join(outDir, 'screenshot-02-library.png'))
await sharp(Buffer.from(screenshotThree())).png().toFile(path.join(outDir, 'screenshot-03-privacy.png'))
await sharp(Buffer.from(promo())).png().toFile(path.join(outDir, 'promo-marquee-1400x560.png'))
await sharp(Buffer.from(promo())).resize(440, 280, { fit: 'cover' }).png().toFile(path.join(outDir, 'promo-small-440x280.png'))
console.log('Created store assets in', outDir)
