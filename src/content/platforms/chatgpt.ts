import { classifyMissingInput } from '../input-foundation'
import {
  PlatformAdapter,
  FloatingButtonPlacement,
  InputDetectionResult,
} from './base'

interface InputSelectorDefinition {
  id: string
  selector: string
}

export class ChatGPTAdapter extends PlatformAdapter {
  readonly name = 'chatgpt'
  readonly urlPattern = /chatgpt\.com/

  private readonly inputSelectors: InputSelectorDefinition[] = [
    { id: 'prompt-textarea-id', selector: '#prompt-textarea' },
    { id: 'composer-role-textbox', selector: 'main form div[contenteditable="true"][role="textbox"]' },
    { id: 'composer-prosemirror', selector: 'main form .ProseMirror[contenteditable="true"]' },
  ]

  private readonly sendSelectors = [
    'button[data-testid="send-button"]',
    'button[aria-label="Send prompt"]',
    'form button[type="submit"]',
  ]

  private lastSelectorId: string | null = null

  getInputElement(): HTMLElement | null {
    return this.findInput()?.element ?? null
  }

  getInputContent(): string {
    return this.readInput()?.text ?? ''
  }

  async setInputContent(text: string): Promise<void> {
    const el = this.getInputElement()
    if (!el) throw new Error('ChatGPT input is not ready')

    if (el instanceof HTMLTextAreaElement) {
      this.setTextareaValue(el, text)
      return
    }

    el.focus()
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(el)
    selection?.removeAllRanges()
    selection?.addRange(range)

    const inserted = document.execCommand('insertText', false, text)
    if (inserted && this.readInputElement(el) === text) return

    const fragment = document.createDocumentFragment()
    const lines = text.split('\n')
    lines.forEach((line, index) => {
      if (index > 0) fragment.appendChild(document.createElement('br'))
      fragment.appendChild(document.createTextNode(line))
    })
    el.replaceChildren(fragment)
    el.dispatchEvent(new InputEvent('input', {
      bubbles: true,
      composed: true,
      inputType: 'insertText',
      data: text,
    }))
    el.dispatchEvent(new Event('change', { bubbles: true }))
  }

  detectInput(): InputDetectionResult {
    const match = this.findInput()
    if (match) {
      this.logSelectorMatch(match.selector.id)
      return {
        status: 'ready',
        handle: this.createInputHandle(match.element, match.selector.id),
        reason: `matched ${match.selector.id}`,
      }
    }

    const pageReady = document.readyState !== 'loading' && Boolean(document.body)
    const hasComposerEvidence = Boolean(document.querySelector(
      'main form, main [contenteditable="true"][role="textbox"], button[data-testid="send-button"]',
    ))
    const status = classifyMissingInput(pageReady, hasComposerEvidence)
    return {
      status,
      handle: null,
      reason: status === 'selector-mismatch'
        ? 'ChatGPT composer evidence exists, but no supported input selector matched'
        : 'ChatGPT composer is not mounted yet',
    }
  }

  couldContainInput(node: Node): boolean {
    if (!(node instanceof Element)) return false
    return this.inputSelectors.some(({ selector }) => node.matches(selector) || Boolean(node.querySelector(selector)))
  }

  triggerSend(): void {
    const btn = this.queryWithFallback(this.sendSelectors) as HTMLButtonElement | null
    if (btn && !btn.disabled) {
      btn.click()
    }
  }

  getFloatingButtonAnchor(): HTMLElement | null {
    const input = this.getInputHandle()?.element
    return input?.closest('form') as HTMLElement || input?.parentElement || null
  }

  getFloatingButtonPlacement(): FloatingButtonPlacement {
    return { position: 'top-right-outside', offsetX: 8, offsetY: 6 }
  }

  private findInput(): { element: HTMLElement; selector: InputSelectorDefinition } | null {
    for (const selector of this.inputSelectors) {
      const candidates = document.querySelectorAll<HTMLElement>(selector.selector)
      for (const element of candidates) {
        if (this.isInteractiveInput(element)) return { element, selector }
      }
    }
    return null
  }

  private isInteractiveInput(element: HTMLElement): boolean {
    if (!element.isConnected || element.getAttribute('aria-disabled') === 'true') return false
    if (element instanceof HTMLTextAreaElement) return !element.disabled && !element.readOnly
    return element.getAttribute('contenteditable') === 'true' || element.isContentEditable
  }

  private logSelectorMatch(selectorId: string): void {
    if (selectorId === this.lastSelectorId) return
    this.lastSelectorId = selectorId
    try {
      if (window.localStorage.getItem('promptpro:debug') === '1') {
        console.debug(`[PromptPro] ChatGPT input selector: ${selectorId}`)
      }
    } catch {
      // Debug logging must never affect input detection.
    }
  }
}
