import { PlatformAdapter } from './base'

export class DeepSeekAdapter extends PlatformAdapter {
  readonly name = 'deepseek'
  readonly urlPattern = /chat\.deepseek\.com/

  private readonly inputSelectors = [
    'textarea#chat-input',
    'textarea[placeholder]',
    'textarea',
  ]

  private readonly sendSelectors = [
    'button[aria-label="Send"]',
    'div[role="button"][aria-label]',
    'button:has(svg)',
  ]

  getInputElement(): HTMLElement | null {
    return this.queryWithFallback(this.inputSelectors)
  }

  getInputContent(): string {
    const el = this.getInputElement() as HTMLTextAreaElement | null
    if (!el) return ''
    return el.value || el.textContent || ''
  }

  async setInputContent(text: string): Promise<void> {
    const el = this.getInputElement() as HTMLTextAreaElement | null
    if (!el) return
    this.setTextareaValue(el, text)
  }

  triggerSend(): void {
    const btn = this.queryWithFallback(this.sendSelectors) as HTMLButtonElement | null
    if (btn) {
      btn.click()
    } else {
      const el = this.getInputElement()
      el?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }))
    }
  }

  getFloatingButtonAnchor(): HTMLElement | null {
    const input = this.getInputElement()
    return input?.parentElement || null
  }
}
