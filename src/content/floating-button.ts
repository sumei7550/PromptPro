import type { PlatformAdapter } from './platforms/base'
import { t } from '../shared/i18n'
import { hasPromptInput } from './improve-flow'

const BUTTON_STYLES = `
  :host {
    all: initial;
    position: fixed;
    z-index: 2147483645;
    color-scheme: light dark;
  }
  .pp-container { position: relative; display: inline-flex; align-items: center; line-height: 0; }
  .pp-btn {
    width: 36px;
    min-width: 36px;
    height: 36px;
    border: 1px solid #d9dee8;
    border-right: 1px solid #d1d5db;
    border-radius: 10px 0 0 10px;
    background: #f3f4f6;
    color: #94a3b8;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 0;
    box-sizing: border-box;
    box-shadow: 0 3px 12px rgba(15, 23, 42, .12);
    font: 600 13px/1 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    white-space: nowrap;
    transition: width .16s ease, border-color .16s ease, box-shadow .16s ease, background .16s ease, color .16s ease;
  }
  .pp-label { display: none; }
  .pp-drag-handle {
    width: 30px; height: 36px; box-sizing: border-box; border: 1px solid #d9dee8; border-left: 0;
    border-radius: 0 10px 10px 0; background: #f3f4f6; color: #111827;
    display: inline-flex; align-items: center; justify-content: center;
    cursor: grab; touch-action: none; user-select: none;
  }
  .pp-drag-handle:active { cursor: grabbing; }
  .pp-drag-handle:hover, .pp-drag-handle:focus-visible { background: #d1d5db; outline: none; }
  .pp-drag-icon { width: 20px; height: 20px; display: inline-flex; }
  .pp-drag-icon svg { width: 20px; height: 20px; display: block; }
  .pp-tooltip { position: absolute; left: 100%; top: calc(100% - 5px); padding: 5px 8px; border: 1px solid #1f2937; border-radius: 0; background: #fff; color: #1f2937; font: 400 14px/1.2 Arial, sans-serif; white-space: nowrap; opacity: 0; pointer-events: none; transform: translateY(-2px); transition: opacity .14s ease, transform .14s ease; z-index: 2; }
  .pp-menu { position: absolute; right: calc(100% + 8px); bottom: 0; display: flex; gap: 8px; min-width: 0; padding: 0; border: 0; border-radius: 0; background: transparent; box-shadow: none; opacity: 0; pointer-events: none; transform: translateX(8px); transition: opacity .3s ease, transform .3s ease; }
  .pp-menu::after { content: ''; position: absolute; right: -8px; top: 0; width: 8px; height: 36px; }
  .pp-btn:hover ~ .pp-menu, .pp-menu:hover, .pp-menu:focus-within { opacity: 1; pointer-events: auto; transform: translateX(0); }
  .pp-drag-handle:hover ~ .pp-tooltip, .pp-drag-handle:focus-visible ~ .pp-tooltip { opacity: 1; transform: translateY(0); }
  .pp-improve-tooltip { position: absolute; left: 50%; bottom: calc(100% + 8px); padding: 5px 9px; border-radius: 8px; background: #172033; color: #fff; font: 600 14px/1.2 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; white-space: nowrap; opacity: 0; pointer-events: none; transform: translate(-50%, 3px); transition: opacity .14s ease, transform .14s ease; }
  .pp-improve-tooltip::after { content: ''; position: absolute; left: 50%; top: 100%; border: 7px solid transparent; border-top-color: #172033; transform: translateX(-50%); }
  .pp-btn:hover ~ .pp-improve-tooltip, .pp-btn:focus-visible ~ .pp-improve-tooltip { opacity: 1; transform: translate(-50%, 0); }
  .pp-menu-item { position: relative; width: 36px; height: 36px; border: 1px solid #d1d5db; border-radius: 9px; padding: 0; background: #f3f4f6; color: #111827; display: inline-flex; align-items: center; justify-content: center; text-align: center; font: 600 12px/1.2 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; cursor: pointer; }
  .pp-menu-item svg { width: 20px; height: 20px; }
  .pp-menu-item:hover:not(:disabled), .pp-menu-item:focus-visible { background: #172033; border-color: #172033; color: #fff; outline: none; }
  .pp-menu-item::after { content: attr(aria-label); position: absolute; left: 50%; bottom: calc(100% + 8px); padding: 7px 12px; border-radius: 10px; background: #172033; color: #fff; font: 600 14px/1.2 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; white-space: nowrap; opacity: 0; pointer-events: none; transform: translate(-50%, 3px); transition: opacity .14s ease, transform .14s ease; }
  .pp-menu-item:hover::after, .pp-menu-item:focus-visible::after { opacity: 1; transform: translate(-50%, 0); }
  .pp-menu-item::before { content: ''; position: absolute; left: 50%; bottom: calc(100% + 1px); border: 7px solid transparent; border-top-color: #172033; opacity: 0; transform: translateX(-50%); }
  .pp-menu-item:hover::before, .pp-menu-item:focus-visible::before { opacity: 1; }
  .pp-menu-item:disabled { color: #94a3b8; cursor: not-allowed; }
  .pp-menu-hint { display: none; }
  .pp-btn:hover:not(:disabled) {
    border-color: #cbd5e1;
    background: #f3f4f6;
    box-shadow: 0 5px 16px rgba(15, 23, 42, .16);
  }
  .pp-btn:hover:not(:disabled) { background: #172033; color: #fff; border-color: #172033; }
  .pp-btn:hover:not(:disabled) .pp-icon { color: #fff; }
  .pp-btn:active:not(:disabled) { background: #f1efff; }
  .pp-btn:focus-visible { outline: 3px solid rgba(99, 102, 241, .3); outline-offset: 2px; }
  .pp-btn:disabled { cursor: not-allowed; color: #94a3b8; border-color: #e2e8f0; box-shadow: none; background: #f8fafc; }
  .pp-btn.loading { cursor: wait; color: #94a3b8; background: #f8fafc; }
  .pp-btn.success { color: #047857; border-color: rgba(5, 150, 105, .3); background: #f0fdf4; }
  .pp-btn.error { color: #b45309; border-color: rgba(217, 119, 6, .32); background: #fffbeb; }
  .pp-icon { width: 22px; height: 22px; display: inline-flex; flex: 0 0 auto; color: #f59e0b; }
  .pp-icon svg { width: 22px; height: 22px; }
  .pp-btn.loading .pp-icon { animation: pp-spin .9s linear infinite; }
  @keyframes pp-spin { to { transform: rotate(360deg); } }
  @media (prefers-reduced-motion: reduce) {
    .pp-btn, .pp-icon { transition: none !important; animation-duration: 1.8s !important; }
  }
  @media (prefers-color-scheme: dark) {
    .pp-btn { background: #202123; color: #c7d2fe; border-color: rgba(165, 180, 252, .35); box-shadow: 0 3px 14px rgba(0, 0, 0, .3); }
    .pp-btn:hover:not(:disabled), .pp-btn.loading { background: #292a2d; }
    .pp-btn:disabled { background: #202123; color: #71717a; border-color: #3f3f46; }
    .pp-btn.success { color: #6ee7b7; background: #16251f; }
    .pp-btn.error { color: #fbbf24; background: #2b2418; }
    .pp-drag-handle, .pp-menu { background: #202123; border-color: #3f3f46; color: #a1a1aa; }
    .pp-menu-item { color: #e4e4e7; }
    .pp-menu-item:hover:not(:disabled), .pp-menu-item:focus-visible { background: #292a2d; }
    .pp-menu-hint { color: #a1a1aa; }
  }
`

const ICON_IMPROVE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>'
const ICON_LOADING = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.2-8.6"/></svg>'
const ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>'
const ICON_RETRY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8.1 8.1 0 1 0 2 5.3"/><path d="M20 4v7h-7"/></svg>'
const ICON_GRIP = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M76,92A16,16,0,1,1,60,76,16,16,0,0,1,76,92Zm52-16a16,16,0,1,0,16,16A16,16,0,0,0,128,76Zm68,32a16,16,0,1,0-16-16A16,16,0,0,0,196,108ZM60,148a16,16,0,1,0,16,16A16,16,0,0,0,60,148Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,128,148Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,196,148Z"/></svg>'
const ICON_LIBRARY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="m20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>'
const ICON_GRID = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>'

export type ButtonState = 'idle' | 'ready' | 'loading' | 'success' | 'error'

export class FloatingButton {
  private host: HTMLDivElement
  private shadow: ShadowRoot
  private button: HTMLButtonElement
  private icon: HTMLSpanElement
  private label: HTMLSpanElement
  private dragHandle: HTMLDivElement
  private menuImprove: HTMLButtonElement
  private menuHint: HTMLDivElement
  private improveTooltip: HTMLDivElement
  private customPosition: { left: number; top: number } | null = null
  private dragState: { startX: number; startY: number; left: number; top: number; moved: boolean } | null = null
  private onClickCallback: (() => void) | null = null
  private observer: MutationObserver | null = null
  private positionFrame: number | null = null
  private resetTimer: number | null = null
  private mounted = false
  private state: ButtonState = 'idle'
  private panelOpen = false

  constructor(private platform: PlatformAdapter) {
    this.host = document.createElement('div')
    this.host.id = 'promptpro-floating-btn'
    this.shadow = this.host.attachShadow({ mode: 'closed' })

    const style = document.createElement('style')
    style.textContent = BUTTON_STYLES
    const container = document.createElement('div')
    container.className = 'pp-container'

    this.button = document.createElement('button')
    this.button.type = 'button'
    this.button.className = 'pp-btn'
    this.icon = document.createElement('span')
    this.icon.className = 'pp-icon'
    this.label = document.createElement('span')
    this.label.className = 'pp-label'
    this.button.append(this.icon, this.label)
    this.button.addEventListener('click', event => {
      event.preventDefault()
      event.stopPropagation()
      if (!this.button.disabled) this.onClickCallback?.()
    })
    this.dragHandle = document.createElement('div')
    this.dragHandle.className = 'pp-drag-handle'
    this.dragHandle.setAttribute('role', 'button')
    this.dragHandle.setAttribute('tabindex', '0')
    this.dragHandle.setAttribute('aria-label', 'Drag to move PromptPro')
    const dragIcon = document.createElement('span')
    dragIcon.className = 'pp-drag-icon'
    dragIcon.innerHTML = ICON_GRIP
    this.dragHandle.appendChild(dragIcon)

    const menu = document.createElement('div')
    menu.className = 'pp-menu'
    const menuLibrary = document.createElement('button')
    menuLibrary.type = 'button'
    menuLibrary.className = 'pp-menu-item'
    menuLibrary.setAttribute('aria-label', 'Prompt Library')
    menuLibrary.innerHTML = ICON_LIBRARY
    const menuGrid = document.createElement('button')
    menuGrid.type = 'button'
    menuGrid.className = 'pp-menu-item'
    menuGrid.setAttribute('aria-label', 'Refine')
    menuGrid.innerHTML = ICON_GRID
    this.menuImprove = document.createElement('button')
    this.menuImprove.type = 'button'
    this.menuImprove.className = 'pp-menu-item'
    this.menuImprove.textContent = t('improve.entry')
    this.menuImprove.addEventListener('click', () => {
      if (!this.menuImprove.disabled) this.onClickCallback?.()
    })
    this.menuHint = document.createElement('div')
    this.menuHint.className = 'pp-menu-hint'
    this.menuImprove.style.display = 'none'
    menu.append(menuLibrary, menuGrid, this.menuImprove, this.menuHint)
    const tooltip = document.createElement('div')
    tooltip.className = 'pp-tooltip'
    tooltip.textContent = t('improve.resetHint')
    this.improveTooltip = document.createElement('div')
    this.improveTooltip.className = 'pp-improve-tooltip'

    container.append(this.button, this.dragHandle, menu, tooltip, this.improveTooltip)
    this.shadow.append(style, container)
    this.dragHandle.addEventListener('pointerdown', this.startDrag)
    this.dragHandle.addEventListener('dblclick', this.resetPosition)
    this.dragHandle.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') this.resetPosition()
    })
    this.render()
  }

  // v2 invalidates coordinates saved by the previous form/offset anchoring;
  // the first mount after this alignment fix must use the composer surface.
  private positionKey(): string { return `promptpro-floating-position:v5:${this.platform.name}` }

  private loadPosition(): void {
    try {
      const raw = window.localStorage.getItem(this.positionKey())
      if (!raw) return
      const parsed = JSON.parse(raw) as { left?: unknown; top?: unknown }
      if (typeof parsed.left === 'number' && typeof parsed.top === 'number') {
        this.customPosition = { left: parsed.left, top: parsed.top }
      }
    } catch { /* unavailable or malformed storage */ }
  }

  private persistPosition(): void {
    if (!this.customPosition) return
    try { window.localStorage.setItem(this.positionKey(), JSON.stringify(this.customPosition)) } catch { /* storage may be blocked */ }
  }

  private resetPosition = (): void => {
    this.customPosition = null
    try { window.localStorage.removeItem(this.positionKey()) } catch { /* ignore unavailable storage */ }
    this.updatePosition()
  }

  private startDrag = (event: PointerEvent): void => {
    if (event.button !== 0) return
    const rect = this.host.getBoundingClientRect()
    this.dragState = { startX: event.clientX, startY: event.clientY, left: rect.left, top: rect.top, moved: false }
    this.dragHandle.setPointerCapture(event.pointerId)
    this.dragHandle.addEventListener('pointermove', this.moveDrag)
    this.dragHandle.addEventListener('pointerup', this.endDrag, { once: true })
    event.preventDefault()
  }

  private moveDrag = (event: PointerEvent): void => {
    if (!this.dragState) return
    const dx = event.clientX - this.dragState.startX
    const dy = event.clientY - this.dragState.startY
    if (Math.abs(dx) + Math.abs(dy) > 3) this.dragState.moved = true
    const width = this.host.getBoundingClientRect().width
    const height = this.host.getBoundingClientRect().height
    this.customPosition = { left: Math.max(8, Math.min(this.dragState.left + dx, window.innerWidth - width - 8)), top: Math.max(8, Math.min(this.dragState.top + dy, window.innerHeight - height - 8)) }
    this.host.style.left = `${this.customPosition.left}px`
    this.host.style.top = `${this.customPosition.top}px`
  }

  private endDrag = (): void => {
    if (this.dragState?.moved) this.persistPosition()
    this.dragHandle.removeEventListener('pointermove', this.moveDrag)
    this.dragState = null
  }

  mount(options: { observeDom?: boolean } = {}): void {
    if (this.mounted) return
    this.mounted = true
    this.loadPosition()
    this.tryMount()
    if (options.observeDom !== false) {
      this.observer = new MutationObserver(() => this.scheduleRefresh())
      this.observer.observe(document.body, { childList: true, subtree: true })
    }
    document.addEventListener('input', this.handleInput, true)
    window.addEventListener('scroll', this.updatePosition, true)
    window.addEventListener('resize', this.updatePosition)
  }

  refresh(): void {
    this.tryMount()
  }

  private tryMount(): void {
    const anchor = this.platform.getFloatingButtonAnchor()
    if (!anchor) {
      this.host.style.display = 'none'
      return
    }

    const existingHost = document.getElementById(this.host.id)
    if (existingHost && existingHost !== this.host) existingHost.remove()
    if (this.host.parentElement !== document.body) document.body.appendChild(this.host)

    this.host.style.display = ''
    this.updateAvailability()
    this.updatePosition()
  }

  private handleInput = (): void => {
    this.scheduleRefresh()
  }

  private scheduleRefresh(): void {
    if (this.positionFrame !== null) return
    this.positionFrame = requestAnimationFrame(() => {
      this.positionFrame = null
      this.tryMount()
    })
  }

  private updateAvailability(): void {
    if (this.state === 'loading') return
    const hasInput = hasPromptInput(this.platform.readInput()?.text)
    if (!hasInput) this.state = 'idle'
    else if (this.state === 'idle') this.state = 'ready'
    this.render()
  }

  private updatePosition = (): void => {
    if (this.host.parentElement !== document.body) return
    const anchor = this.platform.getFloatingButtonAnchor()
    if (!anchor) return

    if (this.customPosition) {
      const width = this.host.getBoundingClientRect().width
      const height = this.host.getBoundingClientRect().height
      this.customPosition.left = Math.max(8, Math.min(this.customPosition.left, window.innerWidth - width - 8))
      this.customPosition.top = Math.max(8, Math.min(this.customPosition.top, window.innerHeight - height - 8))
      this.host.style.left = `${this.customPosition.left}px`
      this.host.style.top = `${this.customPosition.top}px`
      return
    }

    const rect = anchor.getBoundingClientRect()
    const placement = this.platform.getFloatingButtonPlacement()
    const width = Math.max(this.host.getBoundingClientRect().width, 92)
    const height = Math.max(this.host.getBoundingClientRect().height, 34)
    const offsetX = placement.offsetX ?? 8
    const offsetY = placement.offsetY ?? 8
    const unclampedLeft = rect.right - width - offsetX
    const unclampedTop = placement.position === 'top-right-outside'
      ? rect.top - height - offsetY
      : rect.top + offsetY

    this.host.style.left = `${Math.max(8, Math.min(unclampedLeft, window.innerWidth - width - 8))}px`
    this.host.style.top = `${Math.max(8, Math.min(unclampedTop, window.innerHeight - height - 8))}px`
  }

  onClick(callback: () => void): void {
    this.onClickCallback = callback
  }

  setState(state: ButtonState): void {
    this.state = state
    if (this.resetTimer !== null) window.clearTimeout(this.resetTimer)
    this.resetTimer = null
    if (state === 'idle') this.updateAvailability()
    else this.render()
    this.updatePosition()
    if (state === 'success') {
      this.resetTimer = window.setTimeout(() => {
        this.state = 'idle'
        this.updateAvailability()
      }, 1600)
    }
  }

  focus(): void {
    this.button.focus()
  }

  private render(): void {
    this.button.className = `pp-btn ${this.state}`
    this.button.disabled = this.state === 'loading'
    this.menuImprove.disabled = this.state === 'loading' || this.state === 'idle'
    this.menuImprove.textContent = t('improve.entry')
    this.menuHint.textContent = t('improve.moveHint')
    this.improveTooltip.textContent = t('improve.improveHint')
    this.button.setAttribute('aria-busy', String(this.state === 'loading'))
    this.button.setAttribute('aria-expanded', String(this.panelOpen))
    this.button.setAttribute('aria-controls', 'promptpro-tool-panel')

    if (this.state === 'loading') {
      this.icon.innerHTML = ICON_LOADING
      this.label.textContent = t('improve.improving')
    } else if (this.state === 'success') {
      this.icon.innerHTML = ICON_CHECK
      this.label.textContent = t('btn.done')
    } else if (this.state === 'error') {
      this.icon.innerHTML = ICON_RETRY
      this.label.textContent = t('improve.retryEntry')
    } else {
      this.icon.innerHTML = ICON_IMPROVE
      this.label.textContent = t('improve.entry')
    }

    const accessibleLabel = this.state === 'idle'
      ? t('panel.open')
      : this.state === 'loading'
        ? t('improve.improving')
        : this.state === 'error'
          ? t('improve.retryEntry')
          : t('improve.entryLabel')
    this.button.setAttribute('aria-label', accessibleLabel)
    this.button.title = accessibleLabel
  }

  setPanelOpen(open: boolean): void {
    this.panelOpen = open
    this.render()
  }

  destroy(): void {
    this.observer?.disconnect()
    if (this.positionFrame !== null) cancelAnimationFrame(this.positionFrame)
    if (this.resetTimer !== null) window.clearTimeout(this.resetTimer)
    document.removeEventListener('input', this.handleInput, true)
    window.removeEventListener('scroll', this.updatePosition, true)
    window.removeEventListener('resize', this.updatePosition)
    this.host.remove()
    this.mounted = false
  }
}
