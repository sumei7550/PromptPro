import { PlatformAdapter } from './platforms/base'
import { getSettings } from '../shared/storage'
import { Locale } from '../shared/types'

const BUTTON_STYLES = `
  :host {
    all: initial;
    position: fixed;
    z-index: 2147483647;
  }
  .pp-container {
    position: relative;
  }
  .pp-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
    transition: all 0.2s ease;
    font-size: 16px;
  }
  .pp-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.6);
  }
  .pp-btn:active {
    transform: scale(0.95);
  }
  .pp-btn.loading {
    pointer-events: none;
    animation: pp-spin 1s linear infinite;
  }
  .pp-btn.success {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }
  .pp-btn.error {
    background: linear-gradient(135deg, #f5576c 0%, #ff6b6b 100%);
  }
  .pp-btn.pulse {
    animation: pp-pulse 2s ease-in-out infinite;
  }
  @keyframes pp-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pp-pulse {
    0%, 100% { box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4); }
    50% { box-shadow: 0 0 0 8px rgba(102, 126, 234, 0.15), 0 2px 8px rgba(102, 126, 234, 0.4); }
  }
  .pp-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: #1a1a2e;
    color: white;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
  }
  .pp-btn:hover + .pp-tooltip {
    opacity: 1;
  }
  .pp-guide {
    position: absolute;
    bottom: calc(100% + 12px);
    right: -8px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 10px 14px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    width: 180px;
    animation: pp-guide-in 0.3s ease;
  }
  .pp-guide::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 20px;
    border: 6px solid transparent;
    border-top-color: white;
  }
  .pp-guide-text {
    font-size: 12px;
    color: #374151;
    line-height: 1.5;
    margin: 0 0 8px;
  }
  .pp-guide-dismiss {
    display: block;
    width: 100%;
    padding: 4px 0;
    border: none;
    border-radius: 6px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 12px;
    cursor: pointer;
  }
  .pp-guide-dismiss:hover {
    opacity: 0.9;
  }
  @keyframes pp-guide-in {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

const ICON_OPTIMIZE = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7L12 12L4 17"/><line x1="13" y1="12" x2="20" y2="12" stroke-width="2" opacity="0.7"/><path d="M18 3l.6 1.4L20 5l-1.4.6L18 7l-.6-1.4L16 5l1.4-.6Z" fill="#FDE68A" stroke="#F59E0B" stroke-width="1"/></svg>`
const ICON_LOADING = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`
const ICON_CHECK = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`

const STORAGE_KEY = 'promptpro_guide_shown'

export type ButtonState = 'idle' | 'loading' | 'success' | 'error'

export class FloatingButton {
  private host: HTMLDivElement
  private shadow: ShadowRoot
  private button: HTMLButtonElement
  private container: HTMLDivElement
  private tooltip: HTMLDivElement
  private onClickCallback: (() => void) | null = null
  private observer: MutationObserver | null = null
  private locale: Locale = 'en'

  constructor(private platform: PlatformAdapter) {
    this.host = document.createElement('div')
    this.host.id = 'promptpro-floating-btn'
    this.shadow = this.host.attachShadow({ mode: 'closed' })

    const style = document.createElement('style')
    style.textContent = BUTTON_STYLES

    this.container = document.createElement('div')
    this.container.className = 'pp-container'

    this.button = document.createElement('button')
    this.button.className = 'pp-btn'
    this.button.innerHTML = ICON_OPTIMIZE
    this.button.addEventListener('click', () => {
      this.dismissGuide()
      this.onClickCallback?.()
    })

    this.tooltip = document.createElement('div')
    this.tooltip.className = 'pp-tooltip'
    this.tooltip.textContent = 'PromptPro Optimize'

    this.container.appendChild(this.button)
    this.container.appendChild(this.tooltip)
    this.shadow.appendChild(style)
    this.shadow.appendChild(this.container)

    this.initLocale()
  }

  private async initLocale(): Promise<void> {
    try {
      const settings = await getSettings()
      this.locale = settings.locale
      this.tooltip.textContent = this.locale === 'zh' ? 'PromptPro 优化' : 'PromptPro Optimize'
    } catch {
      // keep default
    }
  }

  mount(): void {
    this.tryMount()
    this.observer = new MutationObserver(() => this.tryMount())
    this.observer.observe(document.body, { childList: true, subtree: true })
    window.addEventListener('scroll', this.updatePosition, true)
    window.addEventListener('resize', this.updatePosition)
  }

  private tryMount(): void {
    const anchor = this.platform.getFloatingButtonAnchor()
    if (!anchor) {
      this.host.style.display = 'none'
      return
    }

    if (this.host.parentElement !== document.body) {
      document.body.appendChild(this.host)
      this.host.style.position = 'fixed'
      this.host.style.zIndex = '2147483647'
      this.showGuideIfNeeded()
    }

    this.host.style.display = ''
    this.updatePosition()
  }

  private updatePosition = (): void => {
    if (this.host.parentElement !== document.body) return
    const anchor = this.platform.getFloatingButtonAnchor()
    if (!anchor) return

    const rect = anchor.getBoundingClientRect()
    const placement = this.platform.getFloatingButtonPlacement()
    const buttonSize = 36
    const offsetX = placement.offsetX ?? 8
    const offsetY = placement.offsetY ?? (placement.position === 'top-right-outside' ? 6 : 8)

    const left = rect.right - buttonSize - offsetX
    const top = placement.position === 'top-right-outside'
      ? rect.top - buttonSize - offsetY
      : rect.top + offsetY

    this.host.style.left = `${left}px`
    this.host.style.top = `${top}px`
  }

  private async showGuideIfNeeded(): Promise<void> {
    const result = await chrome.storage.local.get(STORAGE_KEY)
    if (result[STORAGE_KEY]) return

    this.button.classList.add('pulse')

    const guide = document.createElement('div')
    guide.className = 'pp-guide'

    const text = document.createElement('p')
    text.className = 'pp-guide-text'
    text.textContent = this.locale === 'zh'
      ? '输入提示词后，点击此按钮一键优化，让 AI 更好地理解你的意图'
      : 'After entering your prompt, click this button to optimize it and help AI better understand your intent'

    const dismiss = document.createElement('button')
    dismiss.className = 'pp-guide-dismiss'
    dismiss.textContent = this.locale === 'zh' ? '知道了' : 'Got it'
    dismiss.addEventListener('click', () => this.dismissGuide())

    guide.appendChild(text)
    guide.appendChild(dismiss)
    this.container.appendChild(guide)
  }

  private dismissGuide(): void {
    const guide = this.container.querySelector('.pp-guide')
    if (guide) guide.remove()
    this.button.classList.remove('pulse')
    chrome.storage.local.set({ [STORAGE_KEY]: true })
  }

  onClick(callback: () => void): void {
    this.onClickCallback = callback
  }

  setState(state: ButtonState): void {
    this.button.className = 'pp-btn'
    switch (state) {
      case 'loading':
        this.button.classList.add('loading')
        this.button.innerHTML = ICON_LOADING
        break
      case 'success':
        this.button.classList.add('success')
        this.button.innerHTML = ICON_CHECK
        setTimeout(() => this.setState('idle'), 2000)
        break
      case 'error':
        this.button.classList.add('error')
        this.button.innerHTML = '!'
        setTimeout(() => this.setState('idle'), 2000)
        break
      default:
        this.button.innerHTML = ICON_OPTIMIZE
    }
  }

  destroy(): void {
    this.observer?.disconnect()
    window.removeEventListener('scroll', this.updatePosition, true)
    window.removeEventListener('resize', this.updatePosition)
    this.host.remove()
  }
}
