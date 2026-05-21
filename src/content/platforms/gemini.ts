import { PlatformAdapter, FloatingButtonPlacement } from './base'

export class GeminiAdapter extends PlatformAdapter {
  readonly name = 'gemini'
  readonly urlPattern = /gemini\.google\.com/

  private readonly inputSelectors = [
    'rich-textarea div[contenteditable="true"]',
    '.ql-editor[contenteditable="true"]',
    'div[contenteditable="true"][aria-label]',
  ]

  private readonly sendSelectors = [
    'button.send-button',
    'button[aria-label="Send message"]',
    'button[mattooltip="Send"]',
  ]

  getInputElement(): HTMLElement | null {
    const richTextarea = document.querySelector('rich-textarea')
    if (richTextarea?.shadowRoot) {
      const el = richTextarea.shadowRoot.querySelector<HTMLElement>('div[contenteditable="true"]')
      if (el) return el
    }
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
    const richTextarea = document.querySelector('rich-textarea')
    return richTextarea?.parentElement as HTMLElement || null
  }

  getFloatingButtonPlacement(): FloatingButtonPlacement {
    return { position: 'top-right-outside', offsetX: 8, offsetY: 6 }
  }
}
