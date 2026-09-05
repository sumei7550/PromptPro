import {
  InputDetectionStatus,
  InputIdentity,
  InputSnapshot,
  normalizeInputText,
  validateInputSnapshot,
} from '../input-foundation'

export interface FloatingButtonPlacement {
  position: 'top-right-inside' | 'top-right-outside'
  offsetX?: number
  offsetY?: number
}

export interface InputHandle {
  element: HTMLElement
  identity: InputIdentity
  selector: string
  isValid: () => boolean
}

export interface InputDetectionResult {
  status: InputDetectionStatus
  handle: InputHandle | null
  reason: string
}

export type InputReplaceFailureReason =
  | 'input-not-ready'
  | 'selector-mismatch'
  | 'stale-input'
  | 'changed-input'
  | 'write-rejected'
  | 'verification-failed'

export type InputReplaceResult =
  | { success: true; snapshot: InputSnapshot }
  | { success: false; reason: InputReplaceFailureReason; detail?: string }

export abstract class PlatformAdapter {
  abstract readonly name: string
  abstract readonly urlPattern: RegExp

  abstract getInputElement(): HTMLElement | null
  abstract getInputContent(): string
  abstract setInputContent(text: string): Promise<void>
  abstract triggerSend(): void
  abstract getFloatingButtonAnchor(): HTMLElement | null

  private readonly mountIds = new WeakMap<HTMLElement, number>()
  private nextMountId = 1
  private snapshotSequence = 0

  isReady(): boolean {
    return this.detectInput().status === 'ready'
  }

  detectInput(): InputDetectionResult {
    const element = this.getInputElement()
    if (!element) {
      return { status: 'not-ready', handle: null, reason: 'input element is not mounted' }
    }

    return {
      status: 'ready',
      handle: this.createInputHandle(element, 'legacy-adapter'),
      reason: 'input element found',
    }
  }

  getInputHandle(): InputHandle | null {
    return this.detectInput().handle
  }

  readInput(handle = this.getInputHandle()): InputSnapshot | null {
    if (!handle || !handle.isValid()) return null

    return {
      identity: handle.identity,
      text: this.readInputElement(handle.element),
      capturedAt: Date.now(),
      sequence: ++this.snapshotSequence,
    }
  }

  async replaceInput(text: string, expectedSnapshot?: InputSnapshot): Promise<InputReplaceResult> {
    const detection = this.detectInput()
    if (detection.status !== 'ready' || !detection.handle) {
      return {
        success: false,
        reason: detection.status === 'selector-mismatch' ? 'selector-mismatch' : 'input-not-ready',
        detail: detection.reason,
      }
    }

    const current = this.readInput(detection.handle)
    if (!current) {
      return { success: false, reason: 'input-not-ready', detail: 'input handle is no longer valid' }
    }

    if (expectedSnapshot) {
      const validation = validateInputSnapshot(expectedSnapshot, current.identity, current.text)
      if (!validation.valid) {
        return {
          success: false,
          reason: validation.reason === 'input-replaced' ? 'stale-input' : 'changed-input',
        }
      }
    }

    try {
      await this.setInputContent(text)
    } catch (error) {
      return {
        success: false,
        reason: 'write-rejected',
        detail: error instanceof Error ? error.message : String(error),
      }
    }

    await this.waitForHostUpdate()
    const verified = this.readInput()
    const expectedText = normalizeInputText(text)
    if (!verified || verified.text !== expectedText) {
      return {
        success: false,
        reason: 'verification-failed',
        detail: verified ? `expected ${expectedText.length} characters, read ${verified.text.length}` : 'input disappeared after write',
      }
    }

    return { success: true, snapshot: verified }
  }

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

  protected createInputHandle(element: HTMLElement, selector: string): InputHandle {
    let mountId = this.mountIds.get(element)
    if (!mountId) {
      mountId = this.nextMountId++
      this.mountIds.set(element, mountId)
    }

    const identity: InputIdentity = {
      platform: this.name,
      routeKey: this.getInputRouteKey(),
      mountId,
    }

    return {
      element,
      identity,
      selector,
      isValid: () => element.isConnected
        && this.getInputRouteKey() === identity.routeKey
        && this.getInputElement() === element,
    }
  }

  protected getInputRouteKey(): string {
    return `${window.location.pathname}${window.location.search}`
  }

  protected readInputElement(element: HTMLElement): string {
    const raw = element instanceof HTMLTextAreaElement || element instanceof HTMLInputElement
      ? element.value
      : (typeof element.innerText === 'string' ? element.innerText : (element.textContent ?? ''))
    return normalizeInputText(raw)
  }

  private async waitForHostUpdate(): Promise<void> {
    await Promise.resolve()
    if (typeof requestAnimationFrame !== 'function') return
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
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
