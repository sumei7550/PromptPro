import { PlatformAdapter } from './base'

export class DouBaoAdapter extends PlatformAdapter {
  readonly name = 'doubao'
  readonly urlPattern = /www\.doubao\.com/

  private readonly inputSelectors = [
    'textarea[data-testid="chat-input"]',
    'textarea',
    'div[contenteditable="true"]',
  ]

  private readonly sendSelectors = [
    'button[data-testid="send-button"]',
    'button[aria-label="发送"]',
    'button:has(svg[data-icon="send"])',
  ]

  getInputElement(): HTMLElement | null {
    return this.queryWithFallback(this.inputSelectors)
  }

  getInputContent(): string {
    const el = this.getInputElement()
    if (!el) return ''
    if (el instanceof HTMLTextAreaElement) return el.value
    return el.innerText || el.textContent || ''
  }

  async setInputContent(text: string): Promise<void> {
    const el = this.getInputElement()
    if (!el) return
    if (el instanceof HTMLTextAreaElement) {
      this.setTextareaValue(el, text)
    } else {
      await this.simulateInput(el, text)
    }
  }

  triggerSend(): void {
    const btn = this.queryWithFallback(this.sendSelectors) as HTMLButtonElement | null
    if (btn) {
      btn.click()
    }
  }

  getFloatingButtonAnchor(): HTMLElement | null {
    const input = this.getInputElement()
    return input?.closest('form') as HTMLElement || input?.parentElement || null
  }
}
