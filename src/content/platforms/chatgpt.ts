import { PlatformAdapter } from './base'

export class ChatGPTAdapter extends PlatformAdapter {
  readonly name = 'chatgpt'
  readonly urlPattern = /chatgpt\.com/

  private readonly inputSelectors = [
    '#prompt-textarea',
    'div[contenteditable="true"][data-placeholder]',
    '.ProseMirror[contenteditable="true"]',
  ]

  private readonly sendSelectors = [
    'button[data-testid="send-button"]',
    'button[aria-label="Send prompt"]',
    'form button[type="submit"]',
  ]

  getInputElement(): HTMLElement | null {
    return this.queryWithFallback(this.inputSelectors)
  }

  getInputContent(): string {
    const el = this.getInputElement()
    if (!el) return ''
    return el.innerText || el.textContent || ''
  }

  async setInputContent(text: string): Promise<void> {
    const el = this.getInputElement()
    if (!el) return
    await this.simulateInput(el, text)
  }

  triggerSend(): void {
    const btn = this.queryWithFallback(this.sendSelectors) as HTMLButtonElement | null
    if (btn && !btn.disabled) {
      btn.click()
    }
  }

  getFloatingButtonAnchor(): HTMLElement | null {
    const input = this.getInputElement()
    return input?.closest('form') as HTMLElement || input?.parentElement || null
  }
}
