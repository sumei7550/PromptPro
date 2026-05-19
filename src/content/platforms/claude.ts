import { PlatformAdapter } from './base'

export class ClaudeAdapter extends PlatformAdapter {
  readonly name = 'claude'
  readonly urlPattern = /claude\.ai/

  private readonly inputSelectors = [
    'div.ProseMirror[contenteditable="true"]',
    'fieldset div[contenteditable="true"]',
    'div[contenteditable="true"][translate="no"]',
  ]

  private readonly sendSelectors = [
    'button[aria-label="Send message"]',
    'button[aria-label="Send Message"]',
    'fieldset button:last-of-type',
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
    return input?.closest('fieldset') as HTMLElement || input?.parentElement || null
  }
}
