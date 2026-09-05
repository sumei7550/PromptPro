import { readdir, readFile } from 'node:fs/promises'
import { extname, join, relative, resolve } from 'node:path'

const outputDirectory = resolve(process.cwd(), 'dist-new')
const textExtensions = new Set(['.js', '.json', '.html', '.css', '.map', '.txt'])
const forbiddenPatterns = [
  { label: 'DeepSeek provider endpoint', pattern: /api\.deepseek\.com/i },
  { label: 'OpenAI provider endpoint', pattern: /api\.openai\.com/i },
  { label: 'DeepSeek server-only API key variable', pattern: /DEEPSEEK_API_KEY/ },
  { label: 'legacy server-only API key variable', pattern: /(?:OPENAI_|\bAI_)API_KEY/ },
  { label: 'provider authorization header', pattern: /Authorization["']?\s*:/i },
  { label: 'provider-style secret', pattern: /\bsk-(?:proj-)?[A-Za-z0-9_-]{16,}/ },
]

const configuredSecrets = [
  ['DEEPSEEK_API_KEY', process.env.DEEPSEEK_API_KEY],
  ['AI_API_KEY', process.env.AI_API_KEY],
  ['OPENAI_API_KEY', process.env.OPENAI_API_KEY],
]

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  return (await Promise.all(entries.map(entry => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? listFiles(path) : [path]
  }))).flat()
}

const findings = []
for (const path of await listFiles(outputDirectory)) {
  if (!textExtensions.has(extname(path))) continue
  const content = await readFile(path, 'utf8')
  for (const { label, pattern } of forbiddenPatterns) {
    if (pattern.test(content)) findings.push(`${relative(outputDirectory, path)}: ${label}`)
  }
  for (const [name, configuredSecret] of configuredSecrets) {
    if (configuredSecret && configuredSecret.length >= 8 && content.includes(configuredSecret)) {
      findings.push(`${relative(outputDirectory, path)}: configured ${name} value`)
    }
  }
}

if (findings.length > 0) {
  console.error('Extension bundle secret scan: FAIL')
  for (const finding of findings) console.error(`- ${finding}`)
  process.exitCode = 1
} else {
  console.log('Extension bundle secret scan: PASS')
  console.log('- No DeepSeek or OpenAI provider endpoint')
  console.log('- No server-only environment variable')
  console.log('- No provider authorization header')
  console.log('- No provider-style or configured API key')
}
