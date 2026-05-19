import { META_PROMPT } from '@/shared/constants'

export function localOptimize(text: string): string {
  const trimmed = text.trim()
  if (!trimmed) return trimmed

  const parts: string[] = []

  const hasRole = /^(你是|作为|扮演|act as|you are|imagine)/i.test(trimmed)
  if (!hasRole) {
    parts.push('你是一位专业的助手，擅长以下任务。')
  }

  parts.push('')
  parts.push('## 任务')
  parts.push(trimmed)

  const hasFormat = /(格式|format|输出|output|markdown|json|列表|表格)/i.test(trimmed)
  if (!hasFormat) {
    parts.push('')
    parts.push('## 输出要求')
    parts.push('- 结构清晰，分点阐述')
    parts.push('- 语言简洁专业')
    parts.push('- 如有必要，使用示例说明')
  }

  return parts.join('\n')
}

export function buildOptimizePrompt(userInput: string): string {
  return META_PROMPT.replace('{user_input}', userInput)
}
