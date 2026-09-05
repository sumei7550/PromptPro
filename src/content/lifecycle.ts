import { InputDetectionResult } from './platforms/base'
import { ChatGPTAdapter } from './platforms/chatgpt'
import { isSameInputIdentity } from './input-foundation'

export interface InputLifecycleState extends InputDetectionResult {
  changedAt: number
}

type LifecycleListener = (state: InputLifecycleState) => void

const REFRESH_DELAY_MS = 120
const ROUTE_CHECK_INTERVAL_MS = 500

export class ChatGPTInputLifecycle {
  private observer: MutationObserver | null = null
  private routeTimer: number | null = null
  private refreshTimer: number | null = null
  private listeners = new Set<LifecycleListener>()
  private lastRouteKey = ''
  private state: InputLifecycleState

  constructor(private adapter: ChatGPTAdapter) {
    this.state = { ...adapter.detectInput(), changedAt: Date.now() }
    this.lastRouteKey = this.getRouteKey()
  }

  start(): void {
    if (this.observer || !document.body) return

    this.refreshNow()
    this.observer = new MutationObserver(records => {
      const currentElement = this.state.handle?.element
      const currentDisconnected = Boolean(currentElement && !currentElement.isConnected)
      const relevantMutation = records.some(record => {
        if (record.type === 'attributes') return this.adapter.couldContainInput(record.target)
        if (currentElement && Array.from(record.removedNodes).some(node => node === currentElement || node.contains?.(currentElement))) {
          return true
        }
        return Array.from(record.addedNodes).some(node => this.adapter.couldContainInput(node))
      })

      if (currentDisconnected || relevantMutation) this.scheduleRefresh()
    })
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['id', 'class', 'contenteditable', 'role', 'aria-disabled'],
    })

    this.routeTimer = window.setInterval(() => {
      const routeKey = this.getRouteKey()
      if (routeKey === this.lastRouteKey) return
      this.lastRouteKey = routeKey
      this.scheduleRefresh(0)
    }, ROUTE_CHECK_INTERVAL_MS)
  }

  onStateChange(listener: LifecycleListener): () => void {
    this.listeners.add(listener)
    listener(this.state)
    return () => this.listeners.delete(listener)
  }

  getState(): InputLifecycleState {
    return this.state
  }

  refresh(): void {
    this.scheduleRefresh(0)
  }

  destroy(): void {
    this.observer?.disconnect()
    this.observer = null
    if (this.routeTimer !== null) window.clearInterval(this.routeTimer)
    if (this.refreshTimer !== null) window.clearTimeout(this.refreshTimer)
    this.routeTimer = null
    this.refreshTimer = null
    this.listeners.clear()
  }

  private scheduleRefresh(delay = REFRESH_DELAY_MS): void {
    if (this.refreshTimer !== null) window.clearTimeout(this.refreshTimer)
    this.refreshTimer = window.setTimeout(() => {
      this.refreshTimer = null
      this.refreshNow()
    }, delay)
  }

  private refreshNow(): void {
    const next = this.adapter.detectInput()
    const previous = this.state
    const identityChanged = previous.handle && next.handle
      ? !isSameInputIdentity(previous.handle.identity, next.handle.identity)
      : previous.handle !== next.handle
    const stateChanged = previous.status !== next.status
      || previous.reason !== next.reason
      || identityChanged

    if (!stateChanged) return
    this.state = { ...next, changedAt: Date.now() }
    this.listeners.forEach(listener => listener(this.state))
  }

  private getRouteKey(): string {
    return `${window.location.pathname}${window.location.search}`
  }
}
