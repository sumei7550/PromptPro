import { PlatformAdapter } from './platforms/base'
import { ChatGPTAdapter } from './platforms/chatgpt'
import { ClaudeAdapter } from './platforms/claude'
import { GeminiAdapter } from './platforms/gemini'
import { DeepSeekAdapter } from './platforms/deepseek'
import { DouBaoAdapter } from './platforms/doubao'

const adapters: PlatformAdapter[] = [
  new ChatGPTAdapter(),
  new ClaudeAdapter(),
  new GeminiAdapter(),
  new DeepSeekAdapter(),
  new DouBaoAdapter(),
]

export function detectPlatform(): PlatformAdapter | null {
  const url = window.location.href
  return adapters.find(a => a.matches(url)) || null
}
