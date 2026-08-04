import { PlatformAdapter } from './platforms/base'
import { ChatGPTAdapter } from './platforms/chatgpt'
import { ClaudeAdapter } from './platforms/claude'
import { GeminiAdapter } from './platforms/gemini'
import { DeepSeekAdapter } from './platforms/deepseek'
import { DouBaoAdapter } from './platforms/doubao'
import { GenericAdapter } from './platforms/generic'

const adapters: PlatformAdapter[] = [
  new ChatGPTAdapter(),
  new ClaudeAdapter(),
  new GeminiAdapter(),
  new DeepSeekAdapter(),
  new DouBaoAdapter(),
  new GenericAdapter('perplexity', /perplexity\.ai/),
  new GenericAdapter('copilot', /(?:copilot\.microsoft\.com|copilot\.com)/),
  new GenericAdapter('grok', /(?:grok\.com|x\.com\/i\/grok)/),
  new GenericAdapter('google-ai-studio', /aistudio\.google\.com/),
  new GenericAdapter('cursor', /cursor\.com/),
  new GenericAdapter('v0', /v0\.dev/),
  new GenericAdapter('lovable', /lovable\.dev/),
]

export function detectPlatform(): PlatformAdapter | null {
  const url = window.location.href
  return adapters.find(a => a.matches(url)) || null
}
