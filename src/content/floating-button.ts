import { PlatformAdapter } from './platforms/base'

const BUTTON_STYLES = `
  :host {
    all: initial;
    position: absolute;
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
  @keyframes pp-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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
`

const ICON_OPTIMIZE = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>`
const ICON_LOADING = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`
const ICON_CHECK = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`

export type ButtonState = 'idle' | 'loading' | 'success' | 'error'

export class FloatingButton {
  private host: HTMLDivElement
  private shadow: ShadowRoot
  private button: HTMLButtonElement
  private onClickCallback: (() => void) | null = null
  private observer: MutationObserver | null = null

  constructor(private platform: PlatformAdapter) {
    this.host = document.createElement('div')
    this.host.id = 'promptpro-floating-btn'
    this.shadow = this.host.attachShadow({ mode: 'closed' })

    const style = document.createElement('style')
    style.textContent = BUTTON_STYLES

    const container = document.createElement('div')
    container.className = 'pp-container'

    this.button = document.createElement('button')
    this.button.className = 'pp-btn'
    this.button.innerHTML = ICON_OPTIMIZE
    this.button.addEventListener('click', () => this.onClickCallback?.())

    const tooltip = document.createElement('div')
    tooltip.className = 'pp-tooltip'
    tooltip.textContent = 'PromptPro 优化'

    container.appendChild(this.button)
    container.appendChild(tooltip)
    this.shadow.appendChild(style)
    this.shadow.appendChild(container)
  }

  mount(): void {
    this.tryMount()
    this.observer = new MutationObserver(() => this.tryMount())
    this.observer.observe(document.body, { childList: true, subtree: true })
  }

  private tryMount(): void {
    if (document.getElementById('promptpro-floating-btn')) return

    const anchor = this.platform.getFloatingButtonAnchor()
    if (!anchor) return

    const anchorStyle = getComputedStyle(anchor)
    if (anchorStyle.position === 'static') {
      anchor.style.position = 'relative'
    }

    this.host.style.position = 'absolute'
    this.host.style.top = '8px'
    this.host.style.right = '8px'
    this.host.style.zIndex = '2147483647'

    anchor.appendChild(this.host)
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
    this.host.remove()
  }
}
