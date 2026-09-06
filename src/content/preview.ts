import type { OptimizationResult } from '@/services/optimization-engine'
import type { Locale, OptimizeStyle } from '@/shared/types'
import { translate } from '../shared/i18n/index.ts'
import { formatFreeImproveResetDate } from '../shared/storage.ts'
import type { InputReplaceResult } from './platforms/base'
import type { InputSnapshot } from './input-foundation'
import type { PromptPanelMount } from './prompt-panel'
import {
  classifyOptimizationError,
  classifyReplaceFailure,
  EMPTY_IMPROVE_FLOW,
  isFallbackResult,
  reduceImproveFlow,
  shouldDismissImprovePanel,
  type ImproveErrorKind,
  type ImproveFlowState,
} from './improve-flow.ts'

export type PreviewResult =
  | { decision: 'apply'; text: string; style: OptimizeStyle; replacementSnapshot: InputSnapshot }
  | { decision: 'cancel'; text: string; style: OptimizeStyle }

export function getOptimizationMode(
  result: Pick<OptimizationResult, 'engineId' | 'metadata'>,
): 'ai' | 'localFallback' | 'local' {
  if (result.engineId !== 'local-rule-v1') return 'ai'
  return isFallbackResult(result) ? 'localFallback' : 'local'
}

export function getVersionDescription(
  detectedType: string,
  locale: Locale,
  style: OptimizeStyle = 'structured',
): string {
  const descriptions: Record<string, { zh: string; en: string }> = {
    general: { zh: '一个目标更清晰、要求更完整的通用任务。', en: 'A general task with clearer goals and requirements.' },
    writing: { zh: '一个目标、结构和输出要求更清晰的写作任务。', en: 'A writing task with clearer goals, structure, and output expectations.' },
    content: { zh: '一个目标、结构和输出要求更清晰的内容创作任务。', en: 'A content task with clearer goals, structure, and output expectations.' },
    coding: { zh: '一个上下文、约束和预期结果更清晰的编程任务。', en: 'A coding task with clearer context, constraints, and expected output.' },
    research: { zh: '一个围绕范围、依据和交付结果整理的研究任务。', en: 'A research request organized around scope, evidence, and deliverables.' },
    marketing: { zh: '一个受众、信息和目标结果更清晰的营销任务。', en: 'A marketing task with a clearer audience, message, and desired outcome.' },
    seo: { zh: '一个围绕搜索意图、内容结构和目标关键词整理的 SEO 任务。', en: 'An SEO task organized around search intent, content structure, and target keywords.' },
    image: { zh: '一个主体、风格和画面要求更清晰的图像创作任务。', en: 'An image task with clearer subject, style, and visual requirements.' },
  }
  const taskDescription = descriptions[detectedType.trim().toLowerCase()]?.[locale === 'zh' ? 'zh' : 'en']
    ?? (locale === 'zh' ? '一个目标和输出要求更清晰的任务。' : 'A task with clearer goals and output requirements.')
  const styleDescriptions: Record<OptimizeStyle, { zh: string; en: string }> = {
    concise: { zh: '采用更简洁、重点更集中的表达。', en: 'It uses a concise style focused on the essentials.' },
    professional: { zh: '采用更专业、正式的表达。', en: 'It uses a professional and polished style.' },
    structured: { zh: '采用清晰分层、便于执行的表达。', en: 'It uses a clear, structured style that is easy to follow.' },
    'deep-analysis': { zh: '采用更深入、强调分析过程的表达。', en: 'It uses a deeper style that emphasizes analysis.' },
    'content-creation': { zh: '采用更适合内容创作的表达。', en: 'It uses a style tailored to content creation.' },
    code: { zh: '采用更适合编程任务的精确表达。', en: 'It uses a precise style tailored to coding tasks.' },
  }
  return `${styleDescriptions[style][locale === 'zh' ? 'zh' : 'en']} ${taskDescription}`
}

const RESULT_STYLES = `
  :host { all: initial; position: fixed; inset: 0; z-index: 2147483646; color-scheme: light; }
  * { box-sizing: border-box; }
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 2147483646;
    display: grid;
    place-items: center;
    padding: 16px;
    background: rgba(15, 23, 42, .18);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .panel {
    width: 748.667px;
    height: 398.667px;
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 32px);
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #dfe3ea;
    border-radius: 14px;
    background: #fff;
    color: #0f172a;
    box-shadow: 0 24px 70px rgba(15, 23, 42, .28);
  }
  .backdrop.maximized { padding: 0; }
  .panel.maximized {
    position: fixed !important;
    inset: 60px !important;
    width: auto !important;
    height: auto !important;
    max-width: none;
    max-height: none;
    min-height: 0;
    border: 1px solid #dfe3ea;
    border-radius: 14px;
    box-shadow: 0 24px 70px rgba(15, 23, 42, .22);
  }
  .header { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 58px; padding: 10px 14px; border-bottom: 1px solid #e5e7eb; }
  .heading-group { display: flex; align-items: center; gap: 6px; }
  .title, .mode { margin: 0; height: 36px; padding: 8px 14px; border: 1px solid #e5e7eb; border-radius: 9px; font-size: 15px; line-height: 1; }
  .title { background: #f3f4f6; color: #1f2937; font-weight: 650; }
  .mode { background: transparent; color: #7b8494; font-weight: 450; }
  .description { display: none; }
  .drag-handle { position: absolute; top: 4px; left: 50%; z-index: 2; width: 42px; height: 14px; padding: 0; transform: translateX(-50%); border: 0; border-radius: 6px; background: transparent; color: #b4bbc6; cursor: grab; touch-action: none; }
  .drag-handle:hover, .drag-handle:focus-visible { background: #f1f3f5; color: #8993a2; }
  .drag-handle:active { cursor: grabbing; }
  .drag-handle svg { width: 28px; height: 10px; }
  .result-toolbar { min-height: 58px; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 28px 4px; background: #fff; }
  .result-toolbar-left, .result-toolbar-right { display: flex; align-items: center; gap: 6px; min-width: 0; }
  .result-toolbar-left { position: relative; }
  .version-picker { position: relative; }
  .version-trigger { display: inline-flex; align-items: center; gap: 8px; min-height: 42px; min-width: 0; padding: 0 10px; border: 1px solid #d8dee8; border-radius: 10px; background: #fff; color: #344054; font: 500 15px/1 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; cursor: pointer; }
  .version-trigger:hover, .version-trigger[aria-expanded="true"] { border-color: #b9c7d9; background: #f9fbfd; }
  .version-trigger svg { width: 16px; height: 16px; margin-left: auto; color: #71809a; transition: transform .12s ease; }
  .version-trigger[aria-expanded="true"] svg { transform: rotate(180deg); }
  .version-menu { position: absolute; z-index: 6; left: 0; top: calc(100% + 8px); width: min(260px, calc(100vw - 32px)); max-height: min(290px, calc(100vh - 120px)); overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain; scrollbar-color: #c8ced8 transparent; scrollbar-width: thin; border: 1px solid #dfe5ec; border-radius: 10px; background: #fff; box-shadow: 0 14px 30px rgba(30, 44, 67, .16); }
  .version-menu::-webkit-scrollbar { width: 6px; }
  .version-menu::-webkit-scrollbar-track { background: transparent; }
  .version-menu::-webkit-scrollbar-thumb { border: 1px solid transparent; border-radius: 999px; background: #c8ced8; background-clip: padding-box; }
  .version-menu::-webkit-scrollbar-thumb:hover { background: #aeb7c4; background-clip: padding-box; }
  .version-menu::-webkit-scrollbar-button { display: none; width: 0; height: 0; }
  .version-menu[hidden] { display: none; }
  .version-menu-title { position: sticky; top: 0; z-index: 1; padding: 16px 15px 12px; border-bottom: 1px solid #edf0f4; background: #fff; color: #667085; font-size: 16px; font-weight: 700; }
  .version-option { display: block; width: 100%; padding: 13px 15px 14px; border: 0; border-top: 1px solid #edf0f4; background: #fff; color: #26344d; text-align: left; cursor: pointer; }
  .version-option:hover { background: #f7f9fc; }
  .version-option.current { background: #f5f7fa; }
  .version-name { display: flex; align-items: center; gap: 9px; font-size: 16px; }
  .version-current-dot { width: 10px; height: 10px; flex: 0 0 auto; border-radius: 50%; background: #55cba3; }
  .version-current-badge { padding: 3px 7px; border: 1px solid #8fdfc2; border-radius: 6px; color: #168967; font-size: 12px; line-height: 1; }
  .version-summary { display: -webkit-box; margin-top: 6px; overflow: hidden; color: #71809a; font-size: 13px; line-height: 1.4; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
  .result-info { width: 22px; height: 22px; padding: 1px; border: 0; border-radius: 50%; background: transparent; color: #667085; cursor: help; }
  .result-info:hover, .result-info:focus-visible { color: #344054; background: #eef2f6; }
  .result-info svg { display: block; width: 20px; height: 20px; }
  .result-info::after { content: attr(data-tooltip); position: absolute; z-index: 4; top: 34px; left: 34px; width: min(390px, calc(100vw - 64px)); padding: 12px 14px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; color: #344054; box-shadow: 0 12px 28px rgba(16, 24, 40, .16); font: 14px/1.55 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; text-align: left; white-space: pre-line; opacity: 0; visibility: hidden; pointer-events: none; transform: translateY(-3px); transition: opacity .12s ease, transform .12s ease; }
  .result-info:hover::after, .result-info:focus-visible::after { opacity: 1; visibility: visible; transform: translateY(0); }
  .copy-result { width: 36px; height: 36px; display: inline-grid; place-items: center; border: 1px solid #d8dee8; border-radius: 8px; background: #fff; color: #667085; cursor: pointer; }
  .copy-result svg { width: 18px; height: 18px; }
  .copy-result:hover { background: #f8fafc; color: #1f2937; }
  .close {
    flex: 0 0 auto;
    width: 32px;
    height: 32px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #64748b;
    cursor: pointer;
    font-size: 22px;
    line-height: 1;
  }
  .close:hover { background: #f1f5f9; color: #0f172a; }
  .header-actions { display: flex; align-items: center; gap: 8px; }
  .usage-badge { position: relative; display: inline-flex; align-items: center; gap: 5px; min-height: 30px; padding: 0 4px; color: #667085; white-space: nowrap; cursor: help; }
  .usage-badge::after { content: attr(data-tooltip); position: absolute; z-index: 5; top: calc(100% + 10px); left: 50%; padding: 14px 18px; border-radius: 8px; background: #343434; color: #fff; box-shadow: 0 8px 18px rgba(0, 0, 0, .16); font: 400 16px/1.2 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; white-space: nowrap; opacity: 0; visibility: hidden; pointer-events: none; transform: translate(-50%, -3px); transition: opacity .12s ease, transform .12s ease; }
  .usage-badge::before { content: ''; position: absolute; z-index: 6; top: calc(100% + 2px); left: 50%; border: 8px solid transparent; border-bottom-color: #343434; opacity: 0; visibility: hidden; pointer-events: none; transform: translate(-50%, -3px); transition: opacity .12s ease, transform .12s ease; }
  .usage-badge:hover::after, .usage-badge:focus-visible::after, .usage-badge:hover::before, .usage-badge:focus-visible::before { opacity: 1; visibility: visible; transform: translate(-50%, 0); }
  .usage-number { color: #1f2937; font-size: 22px; line-height: 1; font-weight: 700; }
  .usage-label { color: #667085; font-size: 14px; line-height: 1; font-weight: 600; }
  .usage-badge.exhausted .usage-number, .usage-badge.exhausted .usage-label { color: #b42318; }
  .maximize { width: 32px; height: 32px; padding: 7px; border: 0; border-radius: 7px; background: transparent; color: #667085; cursor: pointer; }
  .maximize:hover, .maximize:focus-visible { background: #f1f5f9; color: #1f2937; }
  .maximize svg { width: 18px; height: 18px; }
  .close:focus-visible, button:focus-visible, select:focus-visible, summary:focus-visible { outline: 3px solid rgba(99, 102, 241, .3); outline-offset: 2px; }
  .body { min-height: 0; max-height: none; flex: 1 1 auto; overflow-y: auto; overflow-x: hidden; scrollbar-gutter: stable; padding: 4px 28px 18px; }
  .notice, .error {
    margin: 0 0 12px;
    padding: 9px 11px;
    border-radius: 9px;
    font-size: 12.5px;
    line-height: 1.45;
  }
  .notice { border: 1px solid #fed7aa; background: #fff7ed; color: #9a3412; }
  .quota-upgrade-state { min-height: 280px; display: grid; place-items: center; padding: 30px 18px; text-align: center; }
  .quota-upgrade-state[hidden] { display: none; }
  .quota-upgrade-inner { width: min(390px, 100%); display: flex; flex-direction: column; align-items: center; }
  .quota-icon { width: 56px; height: 56px; display: grid; place-items: center; margin-bottom: 16px; border-radius: 16px; background: #fff4cc; color: #b7791f; font-size: 29px; }
  .quota-upgrade-inner h3 { margin: 0 0 8px; color: #1f2937; font-size: 20px; line-height: 1.35; }
  .quota-upgrade-inner p { max-width: 330px; margin: 0 0 22px; color: #667085; font-size: 14px; line-height: 1.55; }
  .quota-upgrade-button { min-height: 42px; padding: 0 20px; border: 0; border-radius: 9px; background: #1f2937; color: #fff; font: 600 13px/1 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; cursor: pointer; }
  .quota-upgrade-button:hover, .quota-upgrade-button:focus-visible { background: #111827; }
  .quota-later-button { margin-top: 12px; border: 0; background: transparent; color: #667085; font: 600 13px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; cursor: pointer; }
  .quota-later-button:hover, .quota-later-button:focus-visible { color: #1f2937; }
  .error { border: 1px solid #fecaca; background: #fff7f7; color: #b42318; }
  .section-label { margin: 0 0 7px; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
  .prompt-document { display: grid; gap: 2px; max-width: none; margin: 0; padding: 0 0 8px; }
  .prompt-section { margin: 0; padding: 12px 16px; border: 0; border-left: 3px solid transparent; border-radius: 0 8px 8px 0; background: transparent; color: #172554; }
  .prompt-section:hover { border-left-color: #a5b4fc; background: #f8f9ff; }
  .prompt-section p { margin: 0; white-space: pre-wrap; overflow-wrap: anywhere; font: 15px/1.65 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  .prompt-document.original-view .prompt-section { color: #667085; }
  .prompt-document.original-view .prompt-section:hover { background: #f8fafc; }
  details { margin-top: 14px; color: #667085; font-size: 12px; }
  summary { width: max-content; padding: 5px 8px; cursor: pointer; border-radius: 6px; list-style: none; font-weight: 600; }
  summary::-webkit-details-marker { display: none; }
  summary::before { content: '›'; display: inline-block; margin-right: 6px; color: #98a2b3; font-size: 16px; line-height: 10px; transform: translateY(1px); transition: transform .12s ease; }
  details[open] summary::before { transform: rotate(90deg) translateX(1px); }
  summary:hover { background: #f8fafc; color: #344054; }
  .style-control { display: inline-flex; align-items: center; gap: 10px; flex: 0 0 auto; min-width: 0; }
  .style-control label { color: #667085; font-size: 13px; font-weight: 650; letter-spacing: .01em; }
  .style-select-shell { position: relative; min-width: 176px; }
  .style-select-shell::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    width: 7px;
    height: 7px;
    border-right: 1.5px solid #64748b;
    border-bottom: 1.5px solid #64748b;
    pointer-events: none;
    transform: translateY(-65%) rotate(45deg);
    transition: transform .14s ease, border-color .14s ease;
  }
  .style-select-shell:focus-within::after { border-color: #4f46e5; transform: translateY(-25%) rotate(225deg); }
  .style-select-shell:has(select:disabled)::after { border-color: #b8c0cc; }
  select {
    display: block;
    width: 100%;
    min-width: 0;
    min-height: 38px;
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid #d8dee8;
    border-radius: 10px;
    background: linear-gradient(180deg, #fff 0%, #fafbfc 100%);
    color: #27364d;
    padding: 0 35px 0 12px;
    font: 500 14px/1.2 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    cursor: pointer;
    outline: none;
    transition: border-color .14s ease, box-shadow .14s ease, background .14s ease;
  }
  select:hover { border-color: #aebbd0; background: #fff; }
  select:focus-visible { border-color: #818cf8; box-shadow: 0 0 0 3px rgba(99, 102, 241, .16); }
  select:disabled { color: #98a2b3; background: #f8fafc; cursor: wait; }
  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 9px;
    padding: 14px 28px 16px;
    border-top: 1px solid #eef2f7;
    background: #fff;
  }
  .action-group { display: flex; align-items: center; gap: 9px; margin-left: auto; }
  .actions button { min-height: 42px; border-radius: 9px; padding: 0 16px; font: 600 13px/1 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; cursor: pointer; }
  .actions button:disabled { cursor: wait; opacity: .62; }
  .tertiary { margin-right: auto; border: 0; background: transparent; color: #667085; }
  .tertiary:hover { background: #f1f5f9; color: #334155; }
  .secondary { border: 1px solid #cbd5e1; background: #fff; color: #334155; }
  .secondary:hover { border-color: #94a3b8; background: #f8fafc; }
  .primary { min-width: 0; border: 1px solid #10b981; background: #10b981; color: #fff; box-shadow: 0 5px 14px rgba(16, 185, 129, .18); }
  .primary:hover { border-color: #059669; background: #059669; box-shadow: 0 6px 16px rgba(16, 185, 129, .24); }
  @media (max-width: 560px), (max-height: 620px) {
    .backdrop { align-items: end; padding: 10px; }
    .panel { height: auto; max-height: calc(100vh - 20px); min-height: 360px; border-radius: 14px; }
    .panel.maximized { inset: 8px !important; }
    .header { padding: 15px 15px 10px; }
    .usage-badge { gap: 4px; }
    .usage-number { font-size: 20px; }
    .usage-label { font-size: 12px; }
    .result-toolbar { padding: 8px 15px; }
    .body { min-height: 180px; max-height: none; padding: 4px 15px 16px; }
    .actions { padding: 12px 15px 15px; flex-wrap: wrap; }
    .style-control { order: 0; width: 100%; justify-content: space-between; }
    .style-select-shell { flex: 1 1 auto; min-width: 0; max-width: 240px; }
    .action-group { width: 100%; margin-left: 0; justify-content: flex-end; }
    .action-group .primary { width: auto; }
    .tertiary { margin-right: auto; }
    .prompt-section p { font-size: 14px; }
  }
  @media (prefers-reduced-motion: reduce) { * { scroll-behavior: auto !important; } }
`

export function previewOptimization(
  originalText: string,
  initialResult: OptimizationResult,
  locale: Locale,
  remainingUsage: number,
  resetAt: number,
  initialStyle: OptimizeStyle,
  regenerate: (style: OptimizeStyle) => Promise<OptimizationResult>,
  onAiSuccess: (result: OptimizationResult) => Promise<void>,
  replace: (text: string) => Promise<InputReplaceResult>,
  mount?: PromptPanelMount | null,
): Promise<PreviewResult> {
  const tx = (key: string) => translate(locale, key)

  return new Promise(resolve => {
    let currentStyle = initialStyle
    let appliedStyle = initialStyle
    let styleDirty = false
    let state: ImproveFlowState = reduceImproveFlow(
      { ...EMPTY_IMPROVE_FLOW },
      { type: 'IMPROVE_SUCCESS', result: initialResult },
    )
    let settled = false
    let maximized = false
    let restorePosition: { left: number; top: number } | null = null
    let dragState: { pointerId: number; startX: number; startY: number; left: number; top: number } | null = null
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.getElementById('promptpro-preview-overlay')?.remove()

    const host = mount?.host ?? document.createElement('div')
    host.id = 'promptpro-preview-overlay'
    const shadow = mount?.shadow ?? host.attachShadow({ mode: 'closed' })
    shadow.replaceChildren()
    const style = document.createElement('style')
    style.textContent = RESULT_STYLES
    const backdrop = document.createElement('div')
    backdrop.className = 'backdrop'
    const panel = document.createElement('section')
    panel.className = 'panel'
    panel.setAttribute('role', 'dialog')
    panel.setAttribute('aria-modal', 'true')
    panel.setAttribute('aria-labelledby', 'pp-result-title')
    panel.setAttribute('aria-describedby', 'pp-result-description')

    const header = document.createElement('header')
    header.className = 'header'
    const dragHandle = document.createElement('button')
    dragHandle.type = 'button'
    dragHandle.className = 'drag-handle'
    dragHandle.setAttribute('aria-label', tx('improve.dragToMove'))
    dragHandle.title = tx('improve.dragToMove')
    dragHandle.innerHTML = '<svg viewBox="0 0 30 10" fill="currentColor" aria-hidden="true"><circle cx="9" cy="3" r="1.5"/><circle cx="15" cy="3" r="1.5"/><circle cx="21" cy="3" r="1.5"/><circle cx="9" cy="8" r="1.5"/><circle cx="15" cy="8" r="1.5"/><circle cx="21" cy="8" r="1.5"/></svg>'
    const headingGroup = document.createElement('div')
    headingGroup.className = 'heading-group'
    const title = document.createElement('h2')
    title.id = 'pp-result-title'
    title.className = 'title'
    title.textContent = '✨ Improve'
    const description = document.createElement('p')
    description.id = 'pp-result-description'
    description.className = 'description'
    description.textContent = tx('improve.dialogDescription')
    headingGroup.append(title, description)
    const close = document.createElement('button')
    close.type = 'button'
    close.className = 'close'
    close.setAttribute('aria-label', tx('improve.closeLabel'))
    close.textContent = '×'
    const headerActions = document.createElement('div')
    headerActions.className = 'header-actions'
    const usageBadge = document.createElement('span')
    usageBadge.className = 'usage-badge'
    const usageNumber = document.createElement('strong')
    usageNumber.className = 'usage-number'
    usageNumber.textContent = String(remainingUsage)
    const usageLabel = document.createElement('span')
    usageLabel.className = 'usage-label'
    usageLabel.textContent = tx('improve.remainingLabel')
    usageBadge.append(usageNumber, usageLabel)
    usageBadge.classList.toggle('exhausted', remainingUsage === 0)
    const resetDate = formatFreeImproveResetDate(locale, resetAt)
    usageBadge.dataset.tooltip = resetDate
    usageBadge.setAttribute('tabindex', '0')
    usageBadge.setAttribute('aria-label', `${remainingUsage} ${tx('improve.remainingLabel')}. ${resetDate}`)
    const maximize = document.createElement('button')
    maximize.type = 'button'
    maximize.className = 'maximize'
    maximize.setAttribute('aria-label', tx('improve.maximize'))
    maximize.title = tx('improve.maximize')
    const fullScreenIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3"/></svg>'
    const minimizeIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 3v5H3M16 3v5h5M8 21v-5H3M16 21v-5h5"/></svg>'
    maximize.innerHTML = fullScreenIcon
    headerActions.append(usageBadge, maximize, close)
    header.append(dragHandle, headingGroup, headerActions)

    const resultToolbar = document.createElement('div')
    resultToolbar.className = 'result-toolbar'
    const resultToolbarLeft = document.createElement('div')
    resultToolbarLeft.className = 'result-toolbar-left'
    const versionPicker = document.createElement('div')
    versionPicker.className = 'version-picker'
    const versionTrigger = document.createElement('button')
    versionTrigger.type = 'button'
    versionTrigger.className = 'version-trigger'
    versionTrigger.setAttribute('aria-haspopup', 'listbox')
    versionTrigger.setAttribute('aria-expanded', 'false')
    versionTrigger.setAttribute('aria-label', tx('improve.versionLabel'))
    versionTrigger.innerHTML = '<span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>'
    const versionMenu = document.createElement('div')
    versionMenu.className = 'version-menu'
    versionMenu.setAttribute('role', 'listbox')
    versionMenu.hidden = true
    const versionMenuTitle = document.createElement('div')
    versionMenuTitle.className = 'version-menu-title'
    versionMenuTitle.textContent = tx('improve.versionMenuTitle')
    versionMenu.appendChild(versionMenuTitle)
    versionPicker.append(versionTrigger, versionMenu)
    const resultInfo = document.createElement('button')
    resultInfo.type = 'button'
    resultInfo.className = 'result-info'
    resultInfo.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 10.5v5"/><path d="M12 7.5h.01" stroke-linecap="round"/></svg>'
    resultInfo.setAttribute('aria-label', tx('improve.resultInfo'))
    resultInfo.dataset.tooltip = tx('improve.resultInfoText')
    resultToolbarLeft.append(versionPicker, resultInfo)
    const resultToolbarRight = document.createElement('div')
    resultToolbarRight.className = 'result-toolbar-right'
    const copyResult = document.createElement('button')
    copyResult.type = 'button'
    copyResult.className = 'copy-result'
    copyResult.setAttribute('aria-label', tx('improve.copyResult'))
    copyResult.title = tx('improve.copyResult')
    const copyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>'
    copyResult.innerHTML = copyIcon
    resultToolbarRight.append(copyResult)
    resultToolbar.append(resultToolbarLeft, resultToolbarRight)

    const body = document.createElement('div')
    body.className = 'body'
    const notice = document.createElement('div')
    notice.className = 'notice'
    notice.setAttribute('role', 'status')
    const error = document.createElement('div')
    error.className = 'error'
    error.setAttribute('role', 'alert')

    const promptDocument = document.createElement('div')
    promptDocument.className = 'prompt-document'
    const quotaUpgradeState = document.createElement('div')
    quotaUpgradeState.className = 'quota-upgrade-state'
    quotaUpgradeState.hidden = true
    const quotaUpgradeInner = document.createElement('div')
    quotaUpgradeInner.className = 'quota-upgrade-inner'
    const quotaIcon = document.createElement('div')
    quotaIcon.className = 'quota-icon'
    quotaIcon.textContent = '♛'
    quotaIcon.setAttribute('aria-hidden', 'true')
    const quotaTitle = document.createElement('h3')
    const quotaDescription = document.createElement('p')
    const quotaUpgradeButton = document.createElement('button')
    quotaUpgradeButton.type = 'button'
    quotaUpgradeButton.className = 'quota-upgrade-button'
    const quotaLaterButton = document.createElement('button')
    quotaLaterButton.type = 'button'
    quotaLaterButton.className = 'quota-later-button'
    quotaUpgradeInner.append(quotaIcon, quotaTitle, quotaDescription, quotaUpgradeButton, quotaLaterButton)
    quotaUpgradeState.appendChild(quotaUpgradeInner)
    body.appendChild(quotaUpgradeState)
    let selectedVersion = 'version-1'
    const versions: Array<{ id: string; label: string; description: string; text: string; original: boolean }> = [
      { id: 'version-1', label: `${tx('improve.version')} 1`, description: getVersionDescription(initialResult.detectedType, locale, initialStyle), text: initialResult.improvedText, original: false },
      { id: 'original', label: tx('improve.original'), description: originalText, text: originalText, original: true },
    ]

    const closeVersionMenu = (): void => {
      versionMenu.hidden = true
      versionTrigger.setAttribute('aria-expanded', 'false')
    }
    const renderVersionOptions = (): void => {
      versionMenu.replaceChildren(versionMenuTitle, ...versions.map(version => {
        const option = document.createElement('button')
        option.type = 'button'
        option.className = `version-option ${version.id === selectedVersion ? 'current' : ''}`
        option.setAttribute('role', 'option')
        option.setAttribute('aria-selected', String(version.id === selectedVersion))
        const name = document.createElement('span')
        name.className = 'version-name'
        if (version.id === selectedVersion) {
          const dot = document.createElement('span')
          dot.className = 'version-current-dot'
          dot.setAttribute('aria-hidden', 'true')
          name.appendChild(dot)
        }
        const label = document.createElement('span')
        label.textContent = version.label
        name.appendChild(label)
        if (version.id === selectedVersion) {
          const badge = document.createElement('span')
          badge.className = 'version-current-badge'
          badge.textContent = tx('improve.currentVersion')
          name.appendChild(badge)
        }
        const summary = document.createElement('span')
        summary.className = 'version-summary'
        summary.textContent = version.description.trim().replace(/\s+/g, ' ').slice(0, 150)
        option.append(name, summary)
        option.addEventListener('click', () => {
          selectedVersion = version.id
          renderVersionOptions()
          renderVersion()
          closeVersionMenu()
        })
        return option
      }))
      const selected = versions.find(version => version.id === selectedVersion) ?? versions[0]
      versionTrigger.querySelector('span')!.textContent = selected.label
    }
    const renderVersion = (): void => {
      const version = versions.find(item => item.id === selectedVersion) ?? versions[0]
      promptDocument.classList.toggle('original-view', version.original)
      promptDocument.replaceChildren(...version.text.split(/\n{2,}/).filter(Boolean).map(paragraph => {
        const section = document.createElement('section')
        section.className = 'prompt-section'
        const content = document.createElement('p')
        content.textContent = paragraph
        section.appendChild(content)
        return section
      }))
    }
    renderVersionOptions()
    renderVersion()

    const styleControl = document.createElement('div')
    styleControl.className = 'style-control'
    const styleLabel = document.createElement('label')
    styleLabel.htmlFor = 'pp-style-select'
    styleLabel.textContent = tx('improve.style')
    const styleSelect = document.createElement('select')
    styleSelect.id = 'pp-style-select'
    const styleKeys: OptimizeStyle[] = ['concise', 'professional', 'structured', 'deep-analysis', 'content-creation', 'code']
    styleKeys.forEach(styleKey => {
      const option = document.createElement('option')
      option.value = styleKey
      option.textContent = tx(`style.${styleKey}`)
      option.selected = styleKey === currentStyle
      styleSelect.appendChild(option)
    })
    const styleSelectShell = document.createElement('div')
    styleSelectShell.className = 'style-select-shell'
    styleSelectShell.appendChild(styleSelect)
    styleControl.append(styleLabel, styleSelectShell)

    const actions = document.createElement('footer')
    actions.className = 'actions'
    const keepOriginal = document.createElement('button')
    keepOriginal.type = 'button'
    keepOriginal.className = 'tertiary'
    keepOriginal.textContent = tx('improve.keepOriginal')
    const retry = document.createElement('button')
    retry.type = 'button'
    retry.className = 'secondary'
    const useImproved = document.createElement('button')
    useImproved.type = 'button'
    useImproved.className = 'primary'
    const actionGroup = document.createElement('div')
    actionGroup.className = 'action-group'
    actionGroup.append(keepOriginal, retry, useImproved)
    actions.append(styleControl, actionGroup)

    const errorMessage = (kind: ImproveErrorKind): string => {
      const keys: Record<ImproveErrorKind, string> = {
        network: 'improve.error.network',
        timeout: 'improve.error.timeout',
        service: 'improve.error.service',
        'malformed-response': 'improve.error.malformed',
        'input-changed': 'improve.error.inputChanged',
        'input-unavailable': 'improve.error.inputUnavailable',
        'replace-failed': 'improve.error.replaceFailed',
        'quota-exhausted': 'improve.error.quotaExhausted',
        unknown: 'improve.error.unknown',
      }
      return tx(keys[kind])
    }

      const render = (): void => {
      const result = state.result
      if (!result) return
      const quotaExhausted = state.phase === 'quota-exhausted'
      resultToolbar.hidden = quotaExhausted
      notice.hidden = quotaExhausted || !isFallbackResult(result)
      error.hidden = quotaExhausted || !state.error
      promptDocument.hidden = quotaExhausted
      quotaUpgradeState.hidden = !quotaExhausted
      actions.hidden = quotaExhausted
      if (quotaExhausted) {
        quotaTitle.textContent = tx('improve.quota.title')
        quotaDescription.textContent = tx('improve.quota.description').replace('{resetDate}', resetDate.replace(/^Resets: |^重置时间：/, ''))
        quotaUpgradeButton.textContent = tx('improve.quota.upgrade')
        quotaLaterButton.textContent = tx('improve.quota.later')
        quotaUpgradeButton.focus()
      }
      const currentVersion = versions.find(version => version.id === selectedVersion)
      if (currentVersion && !currentVersion.original) currentVersion.text = result.improvedText
      renderVersionOptions()
      renderVersion()
      const fallback = isFallbackResult(result)
      notice.hidden = quotaExhausted || !fallback
      notice.textContent = fallback ? tx('improve.fallback') : ''
      error.hidden = quotaExhausted || !state.error
      if (state.error) {
        const suffix = state.busyAction === null && state.result && !['input-changed', 'input-unavailable', 'replace-failed'].includes(state.error)
          ? ` ${tx('improve.error.retryPreserved')}`
          : ''
        error.textContent = `${errorMessage(state.error)}${suffix}`
      }
      const busy = state.busyAction !== null
      panel.setAttribute('aria-busy', String(busy))
      retry.disabled = busy
      useImproved.disabled = busy
      styleSelect.disabled = busy
      close.disabled = busy
      maximize.disabled = busy
      dragHandle.disabled = busy || maximized
      keepOriginal.disabled = busy
      const selectedStyleLabel = styleSelect.options[styleSelect.selectedIndex]?.textContent ?? currentStyle
      retry.textContent = state.busyAction === 'retry'
        ? tx('improve.retrying')
        : styleDirty ? `${tx('improve.retryWith')} ${selectedStyleLabel}` : tx('improve.retry')
      useImproved.textContent = state.busyAction === 'replace' ? tx('improve.using') : tx('improve.apply')
    }

    const enterQuotaExhausted = (): void => {
      state = reduceImproveFlow(state, { type: 'QUOTA_EXHAUSTED' })
      render()
    }

    const finish = (result: PreviewResult): void => {
      if (settled) return
      settled = true
      document.removeEventListener('keydown', onKeyDown, true)
      document.removeEventListener('click', handleVersionOutsideClick, true)
      shadow.removeEventListener('click', handleVersionShadowClick, true)
      window.removeEventListener('resize', endDrag)
      endDrag()
      host.remove()
      if (result.decision === 'cancel') previouslyFocused?.focus()
      resolve(result)
    }

    const cancel = (): void => {
      if (state.busyAction) return
      const currentText = versions.find(version => version.id === selectedVersion)?.text ?? initialResult.improvedText
      state = reduceImproveFlow(state, { type: 'CANCEL' })
      finish({ decision: 'cancel', text: currentText, style: currentStyle })
    }

    const onKeyDown = (event: KeyboardEvent): void => {
      if (!shouldDismissImprovePanel(event.key, state.busyAction)) return
      event.preventDefault()
      event.stopPropagation()
      cancel()
    }

    close.addEventListener('click', cancel)
    keepOriginal.addEventListener('click', cancel)
    maximize.addEventListener('click', () => {
      if (maximized) {
        maximized = false
        panel.classList.remove('maximized')
        backdrop.classList.remove('maximized')
        maximize.innerHTML = fullScreenIcon
        maximize.setAttribute('aria-label', tx('improve.maximize'))
        maximize.title = tx('improve.maximize')
        if (restorePosition) {
          panel.style.position = 'fixed'
          panel.style.left = `${restorePosition.left}px`
          panel.style.top = `${restorePosition.top}px`
        }
      } else {
        const rect = panel.getBoundingClientRect()
        restorePosition = { left: rect.left, top: rect.top }
        maximized = true
        panel.classList.add('maximized')
        backdrop.classList.add('maximized')
        panel.style.removeProperty('left')
        panel.style.removeProperty('top')
        maximize.innerHTML = minimizeIcon
        maximize.setAttribute('aria-label', tx('improve.minimize'))
        maximize.title = tx('improve.minimize')
      }
      maximize.setAttribute('aria-pressed', String(maximized))
      dragHandle.disabled = maximized
    })
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
      const rect = panel.getBoundingClientRect()
      const left = Math.max(8, Math.min(dragState.left + event.clientX - dragState.startX, window.innerWidth - rect.width - 8))
      const top = Math.max(8, Math.min(dragState.top + event.clientY - dragState.startY, window.innerHeight - rect.height - 8))
      panel.style.position = 'fixed'
      panel.style.left = `${left}px`
      panel.style.top = `${top}px`
    }
    const startDrag = (event: PointerEvent): void => {
      if (maximized || event.button !== 0) return
      const rect = panel.getBoundingClientRect()
      dragState = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, left: rect.left, top: rect.top }
      panel.style.position = 'fixed'
      panel.style.left = `${rect.left}px`
      panel.style.top = `${rect.top}px`
      dragHandle.setPointerCapture(event.pointerId)
      window.addEventListener('pointermove', moveDrag)
      window.addEventListener('pointerup', endDrag)
      window.addEventListener('pointercancel', endDrag)
      event.preventDefault()
    }
    dragHandle.addEventListener('pointerdown', startDrag)
    copyResult.addEventListener('click', () => {
      const textToCopy = versions.find(version => version.id === selectedVersion)?.text ?? initialResult.improvedText
      const copyPromise = navigator.clipboard?.writeText(textToCopy)
      if (!copyPromise) return
      void copyPromise.then(() => {
        copyResult.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>'
        window.setTimeout(() => { copyResult.innerHTML = copyIcon }, 1200)
      }).catch(() => undefined)
    })
    quotaUpgradeButton.addEventListener('click', () => {
      chrome.runtime.sendMessage({ type: 'OPEN_PRICING' })
    })
    quotaLaterButton.addEventListener('click', cancel)
    versionTrigger.addEventListener('click', () => {
      const expanded = versionTrigger.getAttribute('aria-expanded') === 'true'
      if (expanded) closeVersionMenu()
      else {
        versionMenu.hidden = false
        versionTrigger.setAttribute('aria-expanded', 'true')
      }
    })
    const handleVersionOutsideClick = (event: MouseEvent): void => {
      if (!event.composedPath().includes(host)) closeVersionMenu()
    }
    const handleVersionShadowClick = (event: Event): void => {
      const target = event.target
      if (target instanceof Node && !versionPicker.contains(target)) closeVersionMenu()
    }
    document.addEventListener('click', handleVersionOutsideClick, true)
    shadow.addEventListener('click', handleVersionShadowClick, true)
    retry.addEventListener('click', async () => {
      if (state.busyAction || !state.result) return
      currentStyle = styleSelect.value as OptimizeStyle
      state = reduceImproveFlow(state, { type: 'RETRY_START' })
      render()
      try {
        const nextResult = await regenerate(currentStyle)
        if (settled) return
        await onAiSuccess(nextResult)
        const nextVersionNumber = versions.filter(version => !version.original).length + 1
        versions.unshift({
          id: `version-${nextVersionNumber}`,
          label: `${tx('improve.version')} ${nextVersionNumber}`,
          description: getVersionDescription(nextResult.detectedType, locale, currentStyle),
          text: nextResult.improvedText,
          original: false,
        })
        selectedVersion = `version-${nextVersionNumber}`
        state = reduceImproveFlow(state, { type: 'RETRY_SUCCESS', result: nextResult })
        appliedStyle = currentStyle
        styleDirty = false
      } catch (retryError) {
        if (settled) return
        const errorKind = classifyOptimizationError(retryError)
        if (errorKind === 'quota-exhausted') enterQuotaExhausted()
        else state = reduceImproveFlow(state, { type: 'RETRY_FAILURE', error: errorKind })
      }
      if (state.phase !== 'quota-exhausted') render()
    })
    styleSelect.addEventListener('change', () => {
      styleDirty = styleSelect.value !== appliedStyle
      render()
    })
    useImproved.addEventListener('click', async () => {
      if (state.busyAction || !state.result) return
      const resultToUse = state.result
      const selectedText = versions.find(version => version.id === selectedVersion)?.text ?? resultToUse.improvedText
      state = reduceImproveFlow(state, { type: 'REPLACE_START' })
      render()
      let replacement: InputReplaceResult
      try {
        replacement = await replace(selectedText)
      } catch {
        replacement = { success: false, reason: 'write-rejected' }
      }
      if (settled) return
      if (!replacement.success) {
        state = reduceImproveFlow(state, {
          type: 'REPLACE_FAILURE',
          error: classifyReplaceFailure(replacement.reason),
        })
        render()
        return
      }
      state = reduceImproveFlow(state, { type: 'REPLACE_SUCCESS' })
      finish({
        decision: 'apply',
        text: selectedText,
        style: currentStyle,
        replacementSnapshot: replacement.snapshot,
      })
    })

    body.append(notice, error, promptDocument)
    panel.append(header, resultToolbar, body, actions)
    backdrop.appendChild(panel)
    shadow.append(style, backdrop)
    document.body.appendChild(host)
    document.addEventListener('keydown', onKeyDown, true)
    window.addEventListener('resize', endDrag)
    render()
    useImproved.focus()
  })
}
