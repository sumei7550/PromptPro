import { PlatformAdapter } from './base'

/** Generic adapter for platforms that expose a normal textarea/contenteditable input. */
export class GenericAdapter extends PlatformAdapter {
  readonly name: string
  readonly urlPattern: RegExp

  constructor(name: string, pattern: RegExp) {
    super()
    this.name = name
    this.urlPattern = pattern
  }

  getInputElement(): HTMLElement | null {
    return this.queryWithFallback([
      'textarea[placeholder]',
      'textarea',
      'div[contenteditable="true"]',
      '[role="textbox"]',
    ])
  }

  getInputContent(): string {
    const el = this.getInputElement()
    if (!el) return ''
    return el instanceof HTMLTextAreaElement ? el.value : (el.innerText || el.textContent || '')
  }

  async setInputContent(text: string): Promise<void> {
    const el = this.getInputElement()
    if (!el) return
    if (el instanceof HTMLTextAreaElement) this.setTextareaValue(el, text)
    else await this.simulateInput(el, text)
  }

  triggerSend(): void {
    const button = this.queryWithFallback(['button[type="submit"]', 'button[aria-label*="Send"]', 'button[aria-label*="send"]']) as HTMLButtonElement | null
    if (button && !button.disabled) button.click()
  }

  getFloatingButtonAnchor(): HTMLElement | null {
    const input = this.getInputElement()
    return input?.closest('form') as HTMLElement || input?.parentElement || null
  }

  getFloatingButtonPlacement() {
    return { position: 'top-right-outside' as const, offsetX: 8, offsetY: 6 }
  }
}
