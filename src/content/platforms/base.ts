export interface FloatingButtonPlacement {
  position: 'top-right-inside' | 'top-right-outside'
  offsetX?: number
  offsetY?: number
}

export abstract class PlatformAdapter {
  abstract readonly name: string
  abstract readonly urlPattern: RegExp

  abstract getInputElement(): HTMLElement | null
  abstract getInputContent(): string
  abstract setInputContent(text: string): Promise<void>
  abstract triggerSend(): void
  abstract getFloatingButtonAnchor(): HTMLElement | null

  getFloatingButtonPlacement(): FloatingButtonPlacement {
    return { position: 'top-right-inside', offsetX: 8, offsetY: 8 }
  }

  matches(url: string): boolean {
    return this.urlPattern.test(url)
  }

  protected queryWithFallback(selectors: string[]): HTMLElement | null {
    for (const selector of selectors) {
      const el = document.querySelector<HTMLElement>(selector)
      if (el) return el
    }
    return null
  }

  protected async simulateInput(el: HTMLElement, text: string): Promise<void> {
    el.focus()
    document.execCommand('selectAll', false)
    document.execCommand('delete', false)
    document.execCommand('insertText', false, text)

    if (el.textContent?.trim() !== text.trim()) {
      el.innerHTML = ''
      const p = document.createElement('p')
      p.textContent = text
      el.appendChild(p)
      el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: text }))
    }
  }

  protected setTextareaValue(el: HTMLTextAreaElement, text: string): void {
    const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')?.set
    setter?.call(el, text)
    el.dispatchEvent(new Event('input', { bubbles: true }))
    el.dispatchEvent(new Event('change', { bubbles: true }))
  }
}
