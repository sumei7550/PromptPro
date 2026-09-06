import type { Locale } from '@/shared/types'
import { translate } from '@/shared/i18n'
import { formatFreeImproveResetDate } from '../shared/storage.ts'
import logoSvg from '@/assets/icons/icon.svg'
import welcomeGif from '@/assets/onboarding/welcome.gif'

const PANEL_STYLES = `
  :host { all: initial; position: fixed; inset: 0; z-index: 2147483646; color-scheme: light; }
  * { box-sizing: border-box; }
  .backdrop {
    position: fixed; inset: 0; display: grid; place-items: center; padding: 16px;
    background: rgba(15, 23, 42, .18); font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .panel {
    width: 748.667px; height: 398.667px; max-width: calc(100vw - 32px); max-height: calc(100vh - 32px); min-height: 360px;
    position: relative; display: flex; flex-direction: column; overflow: hidden; background: #fff; color: #344054;
    border: 1px solid #dfe3ea; border-radius: 14px; box-shadow: 0 24px 70px rgba(15, 23, 42, .22);
    transform: translateY(0); animation: pp-panel-in .16s ease-out;
  }
  .backdrop.maximized { padding: 0; }
  .panel.maximized {
    position: fixed !important;
    inset: 60px !important;
    width: auto !important; height: auto !important; max-width: none; max-height: none; min-height: 0;
    border: 1px solid #dfe3ea; border-radius: 14px; box-shadow: 0 24px 70px rgba(15, 23, 42, .22); animation: none;
  }
  .toolbar {
    min-height: 53px; padding: 8px; display: flex; align-items: center; justify-content: space-between;
    gap: 8px; border-bottom: 1px solid #e5e7eb;
  }
  .drag-handle {
    position: absolute; z-index: 2; top: 3px; left: 50%; width: 50px; height: 19px; padding: 0;
    display: grid; place-items: center; border: 0; border-radius: 7px; background: transparent; color: #98a2b3;
    cursor: grab; touch-action: none; user-select: none;
  }
  .drag-handle:hover, .drag-handle:focus-visible { color: #475467; background: #f2f4f7; }
  .drag-handle:active { cursor: grabbing; }
  .drag-handle[aria-disabled="true"] { opacity: .35; cursor: default; background: transparent; }
  .drag-handle svg { width: 26px; height: 14px; }
  .modes { display: flex; align-items: center; gap: 4px; max-height: 36px; }
  .utilities { display: flex; align-items: center; gap: 4px; }
  .usage-badge { position: relative; display: inline-flex; align-items: baseline; gap: 4px; margin-right: 4px; color: #667085; white-space: nowrap; cursor: help; }
  .usage-badge::after { content: attr(data-tooltip); position: absolute; z-index: 30; top: calc(100% + 10px); left: 50%; padding: 14px 18px; border-radius: 8px; background: #343434; color: #fff; box-shadow: 0 8px 18px rgba(0, 0, 0, .16); font: 400 16px/1.2 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; white-space: nowrap; opacity: 0; visibility: hidden; pointer-events: none; transform: translate(-50%, -3px); transition: opacity .12s ease, transform .12s ease; }
  .usage-badge::before { content: ''; position: absolute; z-index: 31; top: calc(100% + 2px); left: 50%; border: 8px solid transparent; border-bottom-color: #343434; opacity: 0; visibility: hidden; pointer-events: none; transform: translate(-50%, -3px); transition: opacity .12s ease, transform .12s ease; }
  .usage-badge:hover::after, .usage-badge:focus-visible::after, .usage-badge:hover::before, .usage-badge:focus-visible::before { opacity: 1; visibility: visible; transform: translate(-50%, 0); }
  .usage-number { color: #1f2937; font-size: 18px; line-height: 1; font-weight: 700; }
  .usage-label { font-size: 12px; font-weight: 600; }
  .usage-badge.exhausted .usage-number, .usage-badge.exhausted .usage-label { color: #b42318; }
  button { font: inherit; }
  .mode {
    height: 36px; padding: 8px 16px; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
    overflow: hidden; border: 1px solid #e5e7eb; border-radius: 8px; background: transparent; color: #6b7280;
    font-size: 16px; line-height: 1; font-weight: 400; white-space: nowrap; text-overflow: ellipsis; cursor: pointer;
  }
  .mode.active { background: #f3f4f6; color: #1f2937; font-weight: 600; }
  .mode:not(.active):hover:not(:disabled), .mode:not(.active):focus-visible { background: #f8fafc; color: #344054; }
  .mode:disabled { cursor: not-allowed; opacity: .58; }
  .mode-icon { font-size: 16px; line-height: 1; }
  .icon-button {
    position: relative; width: 24px; height: 24px; padding: 4px; display: inline-grid; place-items: center; border: 0; border-radius: 6px;
    background: transparent; color: #667085; cursor: pointer;
  }
  .icon-button:hover, .icon-button:focus-visible { background: #e2e8f0; color: #1e293b; }
  .icon-button svg { width: 16px; height: 16px; }
  .icon-button::after, .drag-handle::after {
    content: attr(data-tooltip); position: absolute; z-index: 30; top: calc(100% + 8px); right: 0;
    padding: 6px 9px; border: 1px solid #344054; border-radius: 3px; background: #fff; color: #111827;
    font: 14px/1.2 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; white-space: nowrap;
    opacity: 0; visibility: hidden; pointer-events: none; transform: translateY(-2px); transition: opacity .12s ease, transform .12s ease;
  }
  .drag-handle::after { left: 50%; right: auto; transform: translate(-50%, -2px); }
  .icon-button:hover::after, .icon-button:focus-visible::after, .drag-handle:hover::after, .drag-handle:focus-visible::after { opacity: 1; visibility: visible; transform: translateY(0); }
  .drag-handle:hover::after, .drag-handle:focus-visible::after { transform: translate(-50%, 0); }
  .drag-handle[aria-disabled="true"]::after { display: none; }
  .content { flex: 1; min-height: 0; display: grid; place-items: center; padding: 32px; text-align: center; overflow: auto; }
  .content.loading { display: block; padding: 24px 24px; text-align: left; }
  .loading-state { width: 100%; display: block; text-align: left; }
  .loading-title { display: none; }
  .loading-statuses { display: grid; gap: 12px; margin: 0; padding: 0; list-style: none; }
  .loading-status { display: flex; align-items: center; gap: 8px; color: #4b5563; font-size: 16px; line-height: 23px; }
  .loading-indicator { width: 9px; height: 9px; flex: 0 0 auto; border-radius: 50%; background: #d1d5db; }
  .loading-icon { width: 20px; flex: 0 0 auto; text-align: center; font-size: 16px; line-height: 23px; }
  .loading-status.active { color: #273142; font-weight: 600; }
  .loading-status.active .loading-indicator { background: #10b981; box-shadow: 0 0 0 3px rgba(16, 185, 129, .12); animation: pp-status-pulse 1.4s ease-in-out infinite; }
  .loading-status.complete { color: #273142; }
  .loading-status.complete .loading-indicator { background: #10b981; }
  .loading-status.pending { color: #98a2b3; }
  .loading-status[hidden] { display: none; }
  .loading-state[hidden] { display: none; }
  .empty { width: min(320px, 100%); display: flex; flex-direction: column; align-items: center; color: #6b7280; }
  .empty[hidden] { display: none; }
  .quota-state { width: min(390px, 100%); display: flex; flex-direction: column; align-items: center; text-align: center; }
  .quota-state[hidden] { display: none; }
  .quota-icon { width: 54px; height: 54px; display: grid; place-items: center; margin-bottom: 14px; border-radius: 16px; background: #fff4cc; color: #b7791f; font-size: 28px; }
  .quota-state p { margin-bottom: 20px; }
  .quota-upgrade { min-height: 42px; padding: 0 20px; border: 0; border-radius: 9px; background: #1f2937; color: #fff; font-weight: 700; cursor: pointer; }
  .quota-upgrade:hover, .quota-upgrade:focus-visible { background: #111827; }
  .quota-later { margin-top: 10px; border: 0; background: transparent; color: #667085; cursor: pointer; }
  .quota-later:hover, .quota-later:focus-visible { color: #1f2937; }
  .sparkles { width: 56px; height: 56px; margin-bottom: 16px; opacity: .58; }
  h2 { margin: 0 0 8px; color: #374151; font-size: 18px; line-height: 1.4; font-weight: 600; letter-spacing: 0; }
  p { max-width: 320px; margin: 0 0 32px; color: #4b5563; font-size: 14px; line-height: 1.625; }
  .primary {
    min-height: 44px; padding: 0 22px; border: 1px solid #dfe3ea; border-radius: 10px;
    background: #fff; color: #344054; font-size: 15px; font-weight: 700; cursor: pointer;
    box-shadow: 0 2px 5px rgba(15, 23, 42, .08);
  }
  .primary:hover:not(:disabled), .primary:focus-visible { border-color: #a5b4fc; box-shadow: 0 4px 12px rgba(79, 70, 229, .12); }
  .primary:disabled { color: #98a2b3; background: #f8fafc; cursor: not-allowed; box-shadow: none; }
  .primary[hidden] { display: none; }
  .help { position: relative; min-width: 264.667px; min-height: 48.667px; padding: 12px 16px; overflow: hidden; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; color: #374151; font-size: 16px; line-height: 20px; font-weight: 600; cursor: pointer; box-shadow: 0 1px 2px rgba(15, 23, 42, .05); }
  .help-border {
    position: absolute; pointer-events: none; inset: -1px; padding: 1px; overflow: hidden; border-radius: inherit;
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
  }
  .help-glow {
    position: absolute; width: 40px; height: 40px;
    offset-path: rect(0 auto auto 0 round 40px); offset-distance: 0%; offset-rotate: 0deg;
    background: linear-gradient(to left, #fbbf24, #a855f7, transparent);
    animation: pp-help-orbit 3.2s linear infinite;
  }
  .help-label { position: relative; z-index: 1; }
  .primary:not([hidden]) + .help { margin-top: 16px; }
  .help:hover, .help:focus-visible { border-color: #d1d5db; background: #f9fafb; box-shadow: 0 4px 8px rgba(15, 23, 42, .08); }
  .tutorial-backdrop {
    position: fixed; z-index: 20; inset: 0; display: grid; place-items: center; padding: 24px;
    background: rgba(15, 23, 42, .5);
  }
  .tutorial-backdrop[hidden] { display: none; }
  .tutorial {
    width: min(45vw, calc(100vw - 48px)); max-height: calc(100vh - 48px); overflow: auto;
    display: flex; flex-direction: column; gap: 16px; background: #fff; color: #273142; border-radius: 12px;
    box-shadow: 0 28px 80px rgba(15, 23, 42, .34);
  }
  .tutorial-header { padding: 16px; flex: 0 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; border-bottom: 1px solid #e5e7eb; }
  .tutorial-title { margin: 0; display: flex; align-items: center; justify-content: center; gap: 8px; color: #1f2937; font-size: 24px; line-height: 32px; font-weight: 600; text-align: center; }
  .tutorial-logo { width: 32px; height: 32px; display: block; border-radius: 8px; }
  .tutorial-body { min-height: 400px; flex: 1 0 auto; }
  .tutorial-copy { width: 100%; padding-left: 64px; margin-bottom: 8px; }
  .tutorial-copy-card { padding: 12px; border-radius: 6px; }
  .tutorial-question { margin: 0 0 6px; color: #273142; font-size: 14px; line-height: 20px; font-weight: 600; }
  .steps { margin: 0; padding: 0; display: grid; gap: 6px; list-style: none; }
  .step { display: flex; align-items: center; gap: 8px; color: #374151; font-size: 14px; line-height: 20px; }
  .step strong { color: #273142; font-weight: 600; }
  .step-number { width: 20px; height: 20px; flex: 0 0 auto; display: grid; place-items: center; border: 1px solid #d1d5db; border-radius: 50%; color: #6b7280; font-size: 12px; font-weight: 600; }
  .demo {
    width: 75%; aspect-ratio: 1.8; height: auto; margin: 0 auto; padding: 0; display: grid; place-items: center; overflow: hidden;
    border: 1px solid #dfe3ea; border-radius: 12px; background: linear-gradient(135deg, #dbeafe, #fef3c7 48%, #d1fae5);
  }
  .demo-gif { width: 100%; height: 100%; display: block; object-fit: cover; }
  .demo-window { position: relative; width: 100%; height: 100%; min-height: 160px; overflow: hidden; border-radius: 10px; background: #fff; box-shadow: 0 0 10px rgba(0, 0, 0, .1); }
  .demo-header { height: 28px; display: flex; align-items: center; gap: 5px; padding: 0 10px; border-bottom: 1px solid #eef0f3; }
  .demo-dot { width: 6px; height: 6px; border-radius: 50%; background: #d0d5dd; }
  .demo-content { height: calc(100% - 28px); display: grid; place-items: center; padding: 16px; }
  .demo-composer { position: relative; width: min(310px, 94%); height: 60px; padding: 15px 88px 15px 14px; border: 2px solid #c7d2fe; border-radius: 12px; background: #fff; color: #667085; font-size: 12px; }
  .demo-copy { width: 150px; animation: pp-demo-copy 6s steps(28, end) infinite; white-space: nowrap; overflow: hidden; display: inline-block; max-width: 100%; vertical-align: bottom; }
  .demo-improve { position: absolute; right: 8px; bottom: 9px; padding: 9px 11px; border-radius: 8px; background: #4f46e5; color: #fff; font-size: 11px; font-weight: 700; animation: pp-demo-button 6s ease-in-out infinite; }
  .demo-cursor { position: absolute; z-index: 2; width: 16px; height: 22px; color: #111827; animation: pp-demo-cursor 6s ease-in-out infinite; }
  .demo-result { position: absolute; left: 50%; top: 34px; width: min(310px, 94%); padding: 10px 13px; border: 1px solid #a5b4fc; border-radius: 9px; background: #eef2ff; color: #3730a3; font-size: 11px; opacity: 0; transform: translate(-50%, 8px); animation: pp-demo-result 6s ease-in-out infinite; }
  .tutorial-footer { padding: 8px; flex: 0 0 auto; display: flex; justify-content: flex-end; border-top: 1px solid #e5e7eb; }
  .tutorial-close { position: relative; min-height: 38px; padding: 8px 16px; overflow: hidden; display: inline-flex; align-items: center; gap: 8px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; color: #000; font-size: 14px; line-height: 20px; font-weight: 500; cursor: pointer; }
  .tutorial-close-label, .tutorial-close-arrow { position: relative; z-index: 1; }
  .tutorial-close-arrow { width: 16px; height: 16px; flex: 0 0 auto; }
  .tutorial-close:hover, .tutorial-close:focus-visible { border-color: #a5b4fc; background: #f8fafc; }
  button:focus-visible { outline: 3px solid rgba(99, 102, 241, .28); outline-offset: 2px; }
  @keyframes pp-panel-in { from { opacity: 0; transform: translateY(8px) scale(.99); } }
  @keyframes pp-demo-copy { 0%, 8% { width: 0; } 42%, 100% { width: 150px; } }
  @keyframes pp-demo-cursor { 0%, 45% { left: 24%; top: 116px; } 60%, 72% { left: 70%; top: 130px; } 86%, 100% { left: 70%; top: 130px; } }
  @keyframes pp-demo-button { 0%, 58%, 72%, 100% { transform: scale(1); } 65% { transform: scale(.92); } }
  @keyframes pp-demo-result { 0%, 70% { opacity: 0; transform: translate(-50%, 8px); } 82%, 96% { opacity: 1; transform: translate(-50%, 0); } 100% { opacity: 0; } }
  @keyframes pp-help-orbit { to { offset-distance: 100%; } }
  @keyframes pp-status-pulse { 50% { opacity: .45; transform: scale(.75); } }
  @media (max-width: 640px) {
    .backdrop { padding: 8px; place-items: end center; }
    .panel { width: 100%; height: min(620px, calc(100vh - 16px)); min-height: 0; border-radius: 16px; }
    .toolbar { min-height: 68px; padding: 8px; gap: 6px; }
    .mode { min-height: 48px; padding: 0 14px; font-size: 16px; gap: 7px; }
    .mode-icon { font-size: 18px; }
    .utilities { gap: 0; }
    .icon-button { width: 40px; height: 40px; }
    .content { padding: 34px 20px 46px; }
    .sparkles { width: 64px; height: 64px; }
    h2 { font-size: 25px; }
    p { font-size: 17px; }
    .primary { width: 100%; }
    .tutorial-backdrop { padding: 8px; }
    .tutorial { width: 100%; max-height: calc(100vh - 16px); border-radius: 14px; }
    .tutorial-header { padding: 19px 16px; }
    .tutorial-title { justify-content: flex-start; font-size: 23px; }
    .tutorial-copy { padding-left: 0; }
    .tutorial-copy-card { padding: 18px; }
    .step { align-items: flex-start; font-size: 16px; }
    .demo { width: calc(100% - 36px); min-height: 235px; aspect-ratio: auto; }
    .demo-window { height: 185px; }
    .demo-composer { padding-right: 92px; }
    .demo-copy { width: 132px; }
    .demo-improve { padding: 9px; font-size: 11px; }
    .tutorial-footer { padding: 12px 14px; }
    .tutorial-close { width: 100%; }
  }
  @media (max-width: 640px), (max-height: 520px) {
    .panel.maximized { inset: 8px !important; }
  }
  @media (prefers-reduced-motion: reduce) { .panel, .help-glow, .demo-copy, .demo-improve, .demo-cursor, .demo-result, .loading-status.active .loading-indicator { animation: none; } .demo-result { opacity: 1; transform: translate(-50%, 0); } }
`

const ICON_FULLSCREEN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>'
const ICON_MINIMIZE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3v5H3"/><path d="M16 3v5h5"/><path d="M8 21v-5H3"/><path d="M16 21v-5h5"/></svg>'
const ICON_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>'
const ICON_GRIP = '<svg viewBox="0 0 30 14" fill="currentColor" aria-hidden="true"><circle cx="9" cy="4" r="1.7"/><circle cx="15" cy="4" r="1.7"/><circle cx="21" cy="4" r="1.7"/><circle cx="9" cy="10" r="1.7"/><circle cx="15" cy="10" r="1.7"/><circle cx="21" cy="10" r="1.7"/></svg>'
const ICON_ARROW_RIGHT = '<svg class="tutorial-close-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'
const ICON_SPARKLES = '<svg viewBox="0 0 80 80" aria-hidden="true"><defs><linearGradient id="pp-sparkle" x1="8" y1="8" x2="70" y2="72" gradientUnits="userSpaceOnUse"><stop stop-color="#fde68a"/><stop offset="1" stop-color="#f9a8d4"/></linearGradient></defs><path fill="url(#pp-sparkle)" d="M46 8c1 0 1.8.7 2.1 1.6l3.1 11.2c.9 3.2 3.4 5.7 6.6 6.6L69 30.5a2.2 2.2 0 0 1 0 4.2l-11.2 3.1a9.6 9.6 0 0 0-6.6 6.6l-3.1 11.2a2.2 2.2 0 0 1-4.2 0l-3.1-11.2a9.6 9.6 0 0 0-6.6-6.6L23 34.7a2.2 2.2 0 0 1 0-4.2l11.2-3.1a9.6 9.6 0 0 0 6.6-6.6l3.1-11.2C44.2 8.7 45 8 46 8Z"/><path fill="url(#pp-sparkle)" d="M17 23c.8 0 1.5.5 1.7 1.3l1.2 4.2a6 6 0 0 0 4.1 4.1l4.2 1.2a1.8 1.8 0 0 1 0 3.4L24 38.4a6 6 0 0 0-4.1 4.1l-1.2 4.2a1.8 1.8 0 0 1-3.4 0l-1.2-4.2a6 6 0 0 0-4.1-4.1l-4.2-1.2a1.8 1.8 0 0 1 0-3.4l4.2-1.2a6 6 0 0 0 4.1-4.1l1.2-4.2c.2-.8.9-1.3 1.7-1.3Z"/><path fill="url(#pp-sparkle)" d="M27 3c.6 0 1.1.4 1.3 1l.8 2.8a4.2 4.2 0 0 0 2.9 2.9l2.8.8a1.3 1.3 0 0 1 0 2.5l-2.8.8a4.2 4.2 0 0 0-2.9 2.9l-.8 2.8a1.3 1.3 0 0 1-2.5 0l-.8-2.8a4.2 4.2 0 0 0-2.9-2.9l-2.8-.8a1.3 1.3 0 0 1 0-2.5l2.8-.8A4.2 4.2 0 0 0 25 6.8l.8-2.8c.2-.6.6-1 1.2-1Z"/></svg>'

const getPromptProLogoUrl = (): string => {
  return logoSvg || chrome.runtime.getURL('src/assets/icons/icon128.png')
}

const getExtensionAssetUrl = (assetUrl: string): string => {
  return assetUrl.startsWith('/') ? chrome.runtime.getURL(assetUrl.slice(1)) : assetUrl
}

const appendRichText = (element: HTMLElement, value: string): void => {
  value.split(/(\*\*.*?\*\*)/).forEach(part => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const strong = document.createElement('strong')
      strong.textContent = part.slice(2, -2)
      element.appendChild(strong)
      return
    }
    element.appendChild(document.createTextNode(part))
  })
}

interface PromptPanelOptions {
  locale: Locale
  getPrompt: () => string
  onImprove: () => void
  onClose?: () => void
  remaining?: number
  resetAt?: number
  shadowMode?: ShadowRootMode
}

export interface PromptPanelMount {
  host: HTMLDivElement
  shadow: ShadowRoot
}

export class PromptPanel {
  private host: HTMLDivElement | null = null
  private shadow: ShadowRoot | null = null
  private cleanup: (() => void) | null = null
  private setLoadingState: (() => void) | null = null
  private setQuotaState: (() => void) | null = null
  private setRemaining: ((remaining: number) => void) | null = null
  private setResetAt: ((resetAt: number) => void) | null = null
  private loadingStepTimer: number | null = null
  private loadingStepIndex = 0

  open(options: PromptPanelOptions): void {
    this.close()

    const tx = (key: string): string => translate(options.locale, key)
    const host = document.createElement('div')
    host.id = 'promptpro-tool-panel'
    const shadow = host.attachShadow({ mode: options.shadowMode ?? 'closed' })
    this.shadow = shadow
    const style = document.createElement('style')
    style.textContent = PANEL_STYLES

    const backdrop = document.createElement('div')
    backdrop.className = 'backdrop'
    const panel = document.createElement('section')
    panel.className = 'panel'
    panel.setAttribute('role', 'dialog')
    panel.setAttribute('aria-modal', 'true')
    panel.setAttribute('aria-labelledby', 'promptpro-panel-title')

    const dragHandle = document.createElement('button')
    dragHandle.type = 'button'
    dragHandle.className = 'drag-handle'
    dragHandle.setAttribute('aria-label', tx('panel.dragToMove'))
    dragHandle.title = tx('panel.dragToMove')
    dragHandle.dataset.tooltip = tx('panel.dragToMove')
    dragHandle.innerHTML = ICON_GRIP

    const toolbar = document.createElement('header')
    toolbar.className = 'toolbar'
    const modes = document.createElement('div')
    modes.className = 'modes'
    const improveMode = document.createElement('button')
    improveMode.type = 'button'
    improveMode.className = 'mode active'
    improveMode.setAttribute('aria-pressed', 'true')
    improveMode.innerHTML = `<span class="mode-icon" aria-hidden="true">✨</span><span>${tx('panel.improve')}</span>`
    modes.appendChild(improveMode)

    const utilities = document.createElement('div')
    utilities.className = 'utilities'
    const usageBadge = document.createElement('span')
    usageBadge.className = 'usage-badge'
    const usageNumber = document.createElement('strong')
    usageNumber.className = 'usage-number'
    const usageLabel = document.createElement('span')
    usageLabel.className = 'usage-label'
    usageLabel.textContent = tx('improve.remainingLabel')
    usageBadge.append(usageNumber, usageLabel)
    let currentResetAt = options.resetAt
    const updateResetTooltip = (resetAt: number): void => {
      currentResetAt = resetAt
      const resetDate = formatFreeImproveResetDate(options.locale, resetAt)
      usageBadge.dataset.tooltip = resetDate
      usageBadge.setAttribute('tabindex', '0')
      usageBadge.setAttribute('aria-label', `${usageNumber.textContent ?? ''} ${usageLabel.textContent ?? ''}. ${resetDate}`)
    }
    const fullscreen = document.createElement('button')
    fullscreen.type = 'button'
    fullscreen.className = 'icon-button'
    fullscreen.setAttribute('aria-label', tx('panel.maximize'))
    fullscreen.title = tx('panel.maximize')
    fullscreen.dataset.tooltip = tx('panel.maximize')
    fullscreen.innerHTML = ICON_FULLSCREEN
    const close = document.createElement('button')
    close.type = 'button'
    close.className = 'icon-button'
    close.setAttribute('aria-label', tx('panel.close'))
    close.title = tx('panel.closeTooltip')
    close.dataset.tooltip = tx('panel.closeTooltip')
    close.innerHTML = ICON_CLOSE
    utilities.append(usageBadge, fullscreen, close)
    toolbar.append(modes, utilities)

    const content = document.createElement('main')
    content.className = 'content'
    const loadingState = document.createElement('div')
    loadingState.className = 'loading-state'
    loadingState.hidden = true
    loadingState.setAttribute('role', 'status')
    loadingState.setAttribute('aria-live', 'polite')
    const loadingTitle = document.createElement('h2')
    loadingTitle.className = 'loading-title'
    loadingTitle.textContent = tx('panel.optimizingTitle')
    const loadingStatuses = document.createElement('ol')
    loadingStatuses.className = 'loading-statuses'
    const loadingStatusKeys = [
      'panel.optimizingStep1',
      'panel.optimizingStep2',
      'panel.optimizingStep3',
      'panel.optimizingStep4',
      'panel.optimizingStep5',
      'panel.optimizingStep6',
      'panel.optimizingSlow',
    ] as const
    const loadingStatusIcons = ['✨', '⚡', '🧠', '🧪', '🚀', '🧹', '🤔']
    const loadingStatusElements: HTMLElement[] = []
    loadingStatusKeys.forEach((key, index) => {
      const status = document.createElement('li')
      status.className = `loading-status ${index === 0 ? 'active' : 'pending'}`
      if (index !== 0) status.hidden = true
      const indicator = document.createElement('span')
      indicator.className = 'loading-indicator'
      indicator.setAttribute('aria-hidden', 'true')
      const icon = document.createElement('span')
      icon.className = 'loading-icon'
      icon.setAttribute('aria-hidden', 'true')
      icon.textContent = loadingStatusIcons[index]
      const label = document.createElement('span')
      label.textContent = tx(key)
      status.append(indicator, icon, label)
      loadingStatuses.appendChild(status)
      loadingStatusElements.push(status)
    })
    loadingState.append(loadingTitle, loadingStatuses)
    const empty = document.createElement('div')
    empty.className = 'empty'
    const sparkles = document.createElement('div')
    sparkles.className = 'sparkles'
    sparkles.innerHTML = ICON_SPARKLES
    const title = document.createElement('h2')
    title.id = 'promptpro-panel-title'
    const description = document.createElement('p')
    const primary = document.createElement('button')
    primary.type = 'button'
    primary.className = 'primary'
    const help = document.createElement('button')
    help.type = 'button'
    help.className = 'help'
    const helpBorder = document.createElement('span')
    helpBorder.className = 'help-border'
    helpBorder.setAttribute('aria-hidden', 'true')
    const helpGlow = document.createElement('span')
    helpGlow.className = 'help-glow'
    helpBorder.appendChild(helpGlow)
    const helpLabel = document.createElement('span')
    helpLabel.className = 'help-label'
    helpLabel.textContent = tx('panel.help')
    help.append(helpBorder, helpLabel)
    empty.append(sparkles, title, description, primary, help)
    content.append(loadingState, empty)
    const quotaState = document.createElement('div')
    quotaState.className = 'quota-state'
    quotaState.hidden = true
    const quotaIcon = document.createElement('div')
    quotaIcon.className = 'quota-icon'
    quotaIcon.textContent = '♛'
    quotaIcon.setAttribute('aria-hidden', 'true')
    const quotaTitle = document.createElement('h2')
    const quotaDescription = document.createElement('p')
    const quotaUpgrade = document.createElement('button')
    quotaUpgrade.type = 'button'
    quotaUpgrade.className = 'quota-upgrade'
    const quotaLater = document.createElement('button')
    quotaLater.type = 'button'
    quotaLater.className = 'quota-later'
    quotaState.append(quotaIcon, quotaTitle, quotaDescription, quotaUpgrade, quotaLater)
    content.appendChild(quotaState)

    const tutorialBackdrop = document.createElement('div')
    tutorialBackdrop.className = 'tutorial-backdrop'
    tutorialBackdrop.hidden = true
    const tutorial = document.createElement('section')
    tutorial.className = 'tutorial'
    tutorial.setAttribute('role', 'dialog')
    tutorial.setAttribute('aria-modal', 'true')
    tutorial.setAttribute('aria-labelledby', 'promptpro-tutorial-title')
    const tutorialHeader = document.createElement('header')
    tutorialHeader.className = 'tutorial-header'
    const tutorialTitle = document.createElement('h2')
    tutorialTitle.id = 'promptpro-tutorial-title'
    tutorialTitle.className = 'tutorial-title'
    const tutorialLogo = document.createElement('img')
    tutorialLogo.className = 'tutorial-logo'
    tutorialLogo.src = getPromptProLogoUrl()
    tutorialLogo.alt = ''
    const tutorialTitleText = document.createElement('span')
    tutorialTitleText.textContent = tx('tutorial.welcome')
    tutorialTitle.append(tutorialLogo, tutorialTitleText)
    tutorialHeader.appendChild(tutorialTitle)

    const tutorialBody = document.createElement('div')
    tutorialBody.className = 'tutorial-body'
    const tutorialQuestion = document.createElement('h3')
    tutorialQuestion.className = 'tutorial-question'
    tutorialQuestion.textContent = tx('tutorial.question')
    const tutorialCopy = document.createElement('div')
    tutorialCopy.className = 'tutorial-copy'
    const tutorialCopyCard = document.createElement('div')
    tutorialCopyCard.className = 'tutorial-copy-card'
    const steps = document.createElement('ol')
    steps.className = 'steps'
    const stepKeys = ['tutorial.step1', 'tutorial.step2', 'tutorial.step3'] as const
    stepKeys.forEach((key, index) => {
      const step = document.createElement('li')
      step.className = 'step'
      const stepNumber = document.createElement('span')
      stepNumber.className = 'step-number'
      stepNumber.textContent = String(index + 1)
      const stepText = document.createElement('span')
      appendRichText(stepText, tx(key))
      step.append(stepNumber, stepText)
      steps.appendChild(step)
    })
    const demo = document.createElement('div')
    demo.className = 'demo'
    demo.setAttribute('role', 'img')
    demo.setAttribute('aria-label', tx('tutorial.demoLabel'))
    const demoGif = document.createElement('img')
    demoGif.className = 'demo-gif'
    demoGif.src = getExtensionAssetUrl(welcomeGif)
    demoGif.alt = tx('tutorial.demoLabel')
    demo.appendChild(demoGif)
    tutorialCopyCard.append(tutorialQuestion, steps)
    tutorialCopy.appendChild(tutorialCopyCard)
    tutorialBody.append(tutorialCopy, demo)

    const tutorialFooter = document.createElement('footer')
    tutorialFooter.className = 'tutorial-footer'
    const tutorialClose = document.createElement('button')
    tutorialClose.type = 'button'
    tutorialClose.className = 'tutorial-close'
    const tutorialCloseBorder = document.createElement('span')
    tutorialCloseBorder.className = 'help-border'
    tutorialCloseBorder.setAttribute('aria-hidden', 'true')
    const tutorialCloseGlow = document.createElement('span')
    tutorialCloseGlow.className = 'help-glow'
    tutorialCloseBorder.appendChild(tutorialCloseGlow)
    const tutorialCloseLabel = document.createElement('span')
    tutorialCloseLabel.className = 'tutorial-close-label'
    tutorialCloseLabel.textContent = tx('tutorial.close')
    tutorialClose.append(tutorialCloseBorder, tutorialCloseLabel)
    tutorialClose.insertAdjacentHTML('beforeend', ICON_ARROW_RIGHT)
    tutorialFooter.appendChild(tutorialClose)
    tutorial.append(tutorialHeader, tutorialBody, tutorialFooter)
    tutorialBackdrop.appendChild(tutorial)

    panel.append(dragHandle, toolbar, content)
    backdrop.appendChild(panel)
    backdrop.appendChild(tutorialBackdrop)
    shadow.append(style, backdrop)
    document.body.appendChild(host)
    this.host = host

    let maximized = false
    let restorePosition: { left: number; top: number } | null = null
    let dragState: { pointerId: number; startX: number; startY: number; left: number; top: number } | null = null

    const clampPosition = (left: number, top: number): { left: number; top: number } => {
      const rect = panel.getBoundingClientRect()
      return {
        left: Math.max(8, Math.min(left, window.innerWidth - rect.width - 8)),
        top: Math.max(8, Math.min(top, window.innerHeight - rect.height - 8)),
      }
    }
    const applyPosition = (left: number, top: number): void => {
      const next = clampPosition(left, top)
      panel.style.position = 'fixed'
      panel.style.left = `${next.left}px`
      panel.style.top = `${next.top}px`
    }
    const updateWindowControls = (): void => {
      fullscreen.innerHTML = maximized ? ICON_MINIMIZE : ICON_FULLSCREEN
      const label = maximized ? tx('panel.minimize') : tx('panel.maximize')
      fullscreen.setAttribute('aria-label', label)
      fullscreen.title = label
      fullscreen.dataset.tooltip = label
      fullscreen.setAttribute('aria-pressed', String(maximized))
      dragHandle.setAttribute('aria-disabled', String(maximized))
    }
    const endDrag = (): void => {
      if (!dragState) return
      if (dragHandle.hasPointerCapture(dragState.pointerId)) dragHandle.releasePointerCapture(dragState.pointerId)
      dragState = null
      window.removeEventListener('pointermove', moveDrag)
      window.removeEventListener('pointerup', endDrag)
      window.removeEventListener('pointercancel', endDrag)
    }
    const moveDrag = (event: PointerEvent): void => {
      if (!dragState || maximized || event.pointerId !== dragState.pointerId) return
      applyPosition(
        dragState.left + event.clientX - dragState.startX,
        dragState.top + event.clientY - dragState.startY,
      )
    }
    const startDrag = (event: PointerEvent): void => {
      if (maximized || event.button !== 0) return
      const rect = panel.getBoundingClientRect()
      dragState = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        left: rect.left,
        top: rect.top,
      }
      panel.style.width = `${rect.width}px`
      panel.style.height = `${rect.height}px`
      applyPosition(rect.left, rect.top)
      dragHandle.setPointerCapture(event.pointerId)
      window.addEventListener('pointermove', moveDrag)
      window.addEventListener('pointerup', endDrag)
      window.addEventListener('pointercancel', endDrag)
      event.preventDefault()
    }
    const handleResize = (): void => {
      if (maximized || panel.style.position !== 'fixed') return
      const rect = panel.getBoundingClientRect()
      applyPosition(rect.left, rect.top)
    }

    const refresh = (): void => {
      if (loadingState.hidden === false || quotaState.hidden === false) return
      const hasPrompt = options.getPrompt().trim().length > 0
      title.textContent = hasPrompt ? tx('panel.readyTitle') : tx('panel.emptyTitle')
      description.textContent = hasPrompt ? tx('panel.readyDescription') : tx('panel.emptyDescription')
      primary.textContent = hasPrompt ? tx('panel.improvePrompt') : tx('panel.waitingForPrompt')
      primary.hidden = !hasPrompt
      primary.disabled = !hasPrompt
    }
    const handleInput = (): void => refresh()
    const dismiss = (): void => {
      document.removeEventListener('input', handleInput, true)
      this.close()
      options.onClose?.()
    }
    this.setLoadingState = (): void => {
      if (this.loadingStepTimer !== null) window.clearTimeout(this.loadingStepTimer)
      this.loadingStepIndex = 0
      loadingStatusElements.forEach((status, index) => {
        status.hidden = index !== 0
        status.className = `loading-status ${index === 0 ? 'active' : 'pending'}`
      })
      loadingState.hidden = false
      empty.hidden = true
      content.classList.add('loading')
      primary.disabled = true
      improveMode.disabled = true
      help.disabled = true
      close.focus()
      const revealNextLoadingStatus = (): void => {
        const currentStatus = loadingStatusElements[this.loadingStepIndex]
        const nextStatus = loadingStatusElements[this.loadingStepIndex + 1]
        if (!currentStatus || !nextStatus) {
          this.loadingStepTimer = null
          return
        }
        currentStatus.className = 'loading-status complete'
        nextStatus.hidden = false
        nextStatus.className = 'loading-status active'
        this.loadingStepIndex += 1
        this.loadingStepTimer = window.setTimeout(() => {
          revealNextLoadingStatus()
        }, 1000)
      }
      this.loadingStepTimer = window.setTimeout(revealNextLoadingStatus, 1000)
    }
    this.setQuotaState = (): void => {
      if (this.loadingStepTimer !== null) window.clearTimeout(this.loadingStepTimer)
      loadingState.hidden = true
      empty.hidden = true
      quotaState.hidden = false
      content.classList.remove('loading')
      quotaTitle.textContent = tx('improve.quota.title')
      quotaDescription.textContent = tx('improve.quota.description').replace('{resetDate}', currentResetAt ? formatFreeImproveResetDate(options.locale, currentResetAt).replace(/^Resets: |^重置时间：/, '') : '')
      quotaUpgrade.textContent = tx('improve.quota.upgrade')
      quotaLater.textContent = tx('improve.quota.later')
      improveMode.disabled = true
      help.disabled = true
      quotaUpgrade.focus()
    }
    const closeTutorial = (): void => {
      tutorialBackdrop.hidden = true
      help.setAttribute('aria-expanded', 'false')
      help.focus()
    }
    const handleKeydown = (event: Event): void => {
      const keyboardEvent = event as KeyboardEvent
      if (keyboardEvent.key === 'Escape') {
        keyboardEvent.preventDefault()
        if (tutorialBackdrop.hidden) dismiss()
        else closeTutorial()
        return
      }
      if (keyboardEvent.key !== 'Tab') return
      const focusable = tutorialBackdrop.hidden
        ? [dragHandle, improveMode, fullscreen, close, primary, help].filter(element => !element.disabled && element.getAttribute('aria-disabled') !== 'true')
        : [tutorialClose]
      const currentIndex = focusable.indexOf(shadow.activeElement as HTMLButtonElement)
      const nextIndex = keyboardEvent.shiftKey
        ? (currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1)
        : (currentIndex >= focusable.length - 1 ? 0 : currentIndex + 1)
      keyboardEvent.preventDefault()
      focusable[nextIndex]?.focus()
    }

    improveMode.addEventListener('click', () => primary.focus())
    primary.addEventListener('click', () => {
      if (primary.disabled) return
      this.setLoadingState?.()
      options.onImprove()
    })
    quotaUpgrade.addEventListener('click', () => {
      chrome.runtime.sendMessage({ type: 'OPEN_PRICING' })
    })
    quotaLater.addEventListener('click', dismiss)
    help.setAttribute('aria-haspopup', 'dialog')
    help.setAttribute('aria-expanded', 'false')
    help.addEventListener('click', () => {
      tutorialBackdrop.hidden = false
      help.setAttribute('aria-expanded', 'true')
      tutorialClose.focus()
    })
    tutorialClose.addEventListener('click', closeTutorial)
    fullscreen.addEventListener('click', () => {
      if (!maximized) {
        const rect = panel.getBoundingClientRect()
        restorePosition = { left: rect.left, top: rect.top }
        endDrag()
        maximized = true
        panel.classList.add('maximized')
        backdrop.classList.add('maximized')
        panel.style.removeProperty('position')
        panel.style.removeProperty('left')
        panel.style.removeProperty('top')
        panel.style.removeProperty('width')
        panel.style.removeProperty('height')
      } else {
        maximized = false
        panel.classList.remove('maximized')
        backdrop.classList.remove('maximized')
        if (restorePosition) applyPosition(restorePosition.left, restorePosition.top)
      }
      updateWindowControls()
    })
    dragHandle.addEventListener('pointerdown', startDrag)
    close.addEventListener('click', dismiss)
    backdrop.addEventListener('click', event => { if (event.target === backdrop) dismiss() })
    shadow.addEventListener('keydown', handleKeydown)
    document.addEventListener('input', handleInput, true)
    window.addEventListener('resize', handleResize)
    this.cleanup = () => {
      document.removeEventListener('input', handleInput, true)
      window.removeEventListener('resize', handleResize)
      endDrag()
      if (this.loadingStepTimer !== null) window.clearTimeout(this.loadingStepTimer)
      this.loadingStepTimer = null
      this.loadingStepIndex = 0
      this.setLoadingState = null
      this.setQuotaState = null
      this.setRemaining = null
      this.setResetAt = null
    }
    updateWindowControls()
    refresh()
    this.setRemaining = (remaining: number): void => {
      usageNumber.textContent = String(remaining)
      usageBadge.classList.toggle('exhausted', remaining === 0)
    }
    this.setResetAt = updateResetTooltip
    if (options.remaining !== undefined) this.setRemaining(options.remaining)
    if (options.resetAt !== undefined) this.setResetAt(options.resetAt)
    const initialFocus = primary.disabled ? close : primary
    initialFocus.focus()
  }

  close(): void {
    this.cleanup?.()
    this.cleanup = null
    this.host?.remove()
    this.host = null
    this.shadow = null
    if (this.loadingStepTimer !== null) window.clearTimeout(this.loadingStepTimer)
    this.loadingStepTimer = null
    this.loadingStepIndex = 0
    this.setLoadingState = null
    this.setQuotaState = null
    this.setRemaining = null
    this.setResetAt = null
  }

  /** Transfers the current dialog host to the result view without creating a second overlay. */
  handoff(): PromptPanelMount | null {
    if (!this.host || !this.shadow) return null
    this.cleanup?.()
    this.cleanup = null
    const mount = { host: this.host, shadow: this.shadow }
    // Keep the references until close() so an error during the handoff can
    // still remove the shared host. The result view owns the active content.
    this.setLoadingState = null
    this.setQuotaState = null
    this.setRemaining = null
    this.setResetAt = null
    return mount
  }

  setLoading(): void {
    this.setLoadingState?.()
  }

  showQuotaExhausted(resetAt?: number): void {
    this.setQuotaState?.()
    this.setRemaining?.(0)
    if (resetAt !== undefined) this.setResetAt?.(resetAt)
  }

  updateRemaining(remaining: number): void {
    this.setRemaining?.(remaining)
  }
}
