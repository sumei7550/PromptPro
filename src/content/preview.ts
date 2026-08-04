import { Locale, OptimizeStyle } from '@/shared/types'

export type PreviewDecision = 'apply' | 'cancel'
export interface PreviewResult {
  decision: PreviewDecision
  text: string
  style: OptimizeStyle
}

const copy = {
  zh: {
    title: '确认优化结果',
    mode: '本地规则优化 · 不上传 Prompt',
    original: '原始 Prompt',
    optimized: '优化后 Prompt',
    cancel: '保留原文',
    apply: '使用优化结果',
    note: '请检查优化结果是否保留了你的原始意图。',
  },
  en: {
    title: 'Review optimization',
    mode: 'Local rule optimization · Prompt stays in your browser',
    original: 'Original prompt',
    optimized: 'Optimized prompt',
    cancel: 'Keep original',
    apply: 'Use optimized',
    note: 'Check that the optimized version preserves your original intent.',
  },
} as const

export function previewOptimization(
  originalText: string,
  optimizedText: string,
  locale: Locale,
  initialStyle: OptimizeStyle,
  regenerate: (style: OptimizeStyle) => Promise<string>,
): Promise<PreviewResult> {
  const text = copy[locale]

  return new Promise(resolve => {
    let currentText = optimizedText
    let currentStyle = initialStyle
    let regenerating = false
    const overlay = document.createElement('div')
    overlay.id = 'promptpro-preview-overlay'
    overlay.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:2147483646', 'display:flex',
      'align-items:center', 'justify-content:center', 'padding:20px',
      'background:rgba(15,23,42,.48)',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
    ].join(';')

    const panel = document.createElement('section')
    panel.setAttribute('role', 'dialog')
    panel.setAttribute('aria-modal', 'true')
    panel.style.cssText = [
      'width:min(760px,100%)', 'max-height:90vh', 'overflow:auto', 'background:#fff',
      'border-radius:16px', 'box-shadow:0 20px 60px rgba(15,23,42,.28)', 'padding:20px',
      'color:#111827',
    ].join(';')

    const title = document.createElement('h2')
    title.textContent = text.title
    title.style.cssText = 'margin:0;font-size:18px;font-weight:700;'

    const mode = document.createElement('div')
    mode.textContent = text.mode
    mode.style.cssText = 'display:inline-block;margin-top:8px;padding:4px 8px;border-radius:999px;background:#eef2ff;color:#4f46e5;font-size:12px;'

    const note = document.createElement('p')
    note.textContent = text.note
    note.style.cssText = 'margin:12px 0 16px;color:#6b7280;font-size:13px;'

    const columns = document.createElement('div')
    columns.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;'

    const styleRow = document.createElement('div')
    styleRow.style.cssText = 'display:flex;align-items:center;gap:8px;margin:14px 0 12px;'
    const styleLabel = document.createElement('label')
    styleLabel.textContent = locale === 'zh' ? '优化风格' : 'Optimization style'
    styleLabel.style.cssText = 'font-size:13px;font-weight:600;color:#374151;'
    const styleSelect = document.createElement('select')
    styleSelect.style.cssText = 'border:1px solid #d1d5db;border-radius:8px;background:#fff;color:#374151;padding:7px 10px;font-size:13px;cursor:pointer;'
    const styleNames: Record<OptimizeStyle, { zh: string; en: string }> = {
      concise: { zh: '简洁', en: 'Concise' },
      professional: { zh: '专业', en: 'Professional' },
      structured: { zh: '结构化', en: 'Structured' },
      'deep-analysis': { zh: '深度分析', en: 'Deep analysis' },
      'content-creation': { zh: '内容创作', en: 'Content creation' },
      code: { zh: '适合代码', en: 'Code' },
    }
    ;(Object.keys(styleNames) as OptimizeStyle[]).forEach(style => {
      const option = document.createElement('option')
      option.value = style
      option.textContent = styleNames[style][locale === 'zh' ? 'zh' : 'en']
      option.selected = style === currentStyle
      styleSelect.appendChild(option)
    })
    const regenerateButton = document.createElement('button')
    regenerateButton.type = 'button'
    regenerateButton.textContent = locale === 'zh' ? '重新生成' : 'Regenerate'
    regenerateButton.style.cssText = 'border:1px solid #c7d2fe;background:#eef2ff;color:#4f46e5;padding:7px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;'
    styleRow.append(styleLabel, styleSelect, regenerateButton)

    const createColumn = (label: string, value: string, accent: string): HTMLElement => {
      const wrapper = document.createElement('div')
      wrapper.style.cssText = `border:1px solid ${accent};border-radius:10px;overflow:hidden;min-width:0;`
      const heading = document.createElement('div')
      heading.textContent = label
      heading.style.cssText = `padding:8px 10px;background:${accent}22;color:#374151;font-size:12px;font-weight:700;`
      const content = document.createElement('pre')
      content.textContent = value
      content.style.cssText = 'margin:0;padding:12px;white-space:pre-wrap;word-break:break-word;font:13px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace;max-height:280px;overflow:auto;'
      wrapper.append(heading, content)
      return wrapper
    }

    const originalColumn = createColumn(text.original, originalText, '#e5e7eb')
    const optimizedColumn = createColumn(text.optimized, currentText, '#c7d2fe')
    columns.append(originalColumn, optimizedColumn)

    regenerateButton.addEventListener('click', async () => {
      if (regenerating) return
      const nextStyle = styleSelect.value as OptimizeStyle
      regenerating = true
      regenerateButton.disabled = true
      styleSelect.disabled = true
      regenerateButton.textContent = locale === 'zh' ? '生成中…' : 'Generating…'
      try {
        currentText = await regenerate(nextStyle)
        currentStyle = nextStyle
        const content = optimizedColumn.querySelector('pre')
        if (content) content.textContent = currentText
      } finally {
        regenerating = false
        regenerateButton.disabled = false
        styleSelect.disabled = false
        regenerateButton.textContent = locale === 'zh' ? '重新生成' : 'Regenerate'
      }
    })

    const actions = document.createElement('div')
    actions.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;margin-top:18px;'
    const finish = (decision: PreviewDecision) => {
      overlay.remove()
      resolve({ decision, text: currentText, style: currentStyle })
    }

    const cancel = document.createElement('button')
    cancel.type = 'button'
    cancel.textContent = text.cancel
    cancel.style.cssText = 'border:1px solid #d1d5db;background:#fff;color:#374151;padding:9px 14px;border-radius:8px;font-size:13px;cursor:pointer;'
    cancel.addEventListener('click', () => finish('cancel'))

    const apply = document.createElement('button')
    apply.type = 'button'
    apply.textContent = text.apply
    apply.style.cssText = 'border:0;background:#667eea;color:#fff;padding:9px 14px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;'
    apply.addEventListener('click', () => finish('apply'))

    actions.append(cancel, apply)
    panel.append(title, mode, note, styleRow, columns, actions)
    overlay.appendChild(panel)
    document.body.appendChild(overlay)
    apply.focus()
  })
}
