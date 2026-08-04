import { useMemo, useState } from 'react'
import { Locale, PromptTemplate } from '@/shared/types'

interface Props {
  template: PromptTemplate
  locale: Locale
  mode: 'insert' | 'copy'
  onCancel: () => void
  onSubmit: (text: string) => void
}

const LABELS: Record<string, { zh: string; en: string }> = {
  topic: { zh: '主题', en: 'Topic' },
  text: { zh: '文本内容', en: 'Text' },
  content: { zh: '内容概要', en: 'Content summary' },
  audience: { zh: '目标受众', en: 'Target audience' },
  target_language: { zh: '目标语言', en: 'Target language' },
  platform: { zh: '发布平台', en: 'Platform' },
  style: { zh: '风格偏好', en: 'Style' },
  product: { zh: '产品/服务', en: 'Product/service' },
  background: { zh: '背景信息', en: 'Background' },
  constraints: { zh: '约束条件', en: 'Constraints' },
}

export function getTemplateVariables(template: PromptTemplate): string[] {
  const declared = template.variables || []
  const inferred = [...template.prompt.zh.matchAll(/\{([a-zA-Z][a-zA-Z0-9_]*)\}/g)].map(match => match[1])
  return Array.from(new Set([...declared, ...inferred]))
}

function labelFor(variable: string, locale: Locale): string {
  return LABELS[variable]?.[locale] || variable.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
}

function fillPrompt(prompt: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.split(`{${key}}`).join(value.trim()),
    prompt,
  )
}

export function PromptVariableForm({ template, locale, mode, onCancel, onSubmit }: Props) {
  const variables = useMemo(() => getTemplateVariables(template), [template])
  const [values, setValues] = useState<Record<string, string>>({})
  const [error, setError] = useState('')
  const previewText = fillPrompt(template.prompt[locale], values)

  const handleSubmit = () => {
    const missing = variables.filter(variable => !values[variable]?.trim())
    if (missing.length > 0) {
      setError(locale === 'zh' ? '请填写所有必填信息' : 'Please fill in all required fields')
      return
    }
    onSubmit(previewText)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-[520px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="whitespace-nowrap text-base font-semibold text-gray-900">
              {locale === 'zh' ? '填写任务信息' : 'Fill in task details'}
            </h2>
            <p className="mt-1 truncate whitespace-nowrap text-xs text-gray-500" title={template.title[locale]}>{template.title[locale]}</p>
          </div>
          <button onClick={onCancel} className="rounded p-1 text-gray-400 hover:bg-gray-100" aria-label="Close">×</button>
        </div>

        <div className="mt-4 space-y-3">
          {variables.map(variable => (
            <label key={variable} className="block">
              <span className="mb-1 block text-xs font-medium text-gray-700">
                {labelFor(variable, locale)} <span className="text-red-400">*</span>
              </span>
              <textarea
                value={values[variable] || ''}
                onChange={event => {
                  setValues(current => ({ ...current, [variable]: event.target.value }))
                  setError('')
                }}
                rows={variable === 'text' || variable === 'content' || variable === 'background' ? 4 : 2}
                placeholder={locale === 'zh' ? `请输入${labelFor(variable, locale)}` : `Enter ${labelFor(variable, locale).toLowerCase()}`}
                className="w-full resize-y rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </label>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-indigo-100 bg-indigo-50 p-3">
          <div className="mb-1 text-[11px] font-semibold text-indigo-700">
            {locale === 'zh' ? '生成预览' : 'Generation preview'}
          </div>
          <p className="max-h-24 overflow-y-auto whitespace-pre-wrap text-xs leading-5 text-gray-600">
            {previewText}
          </p>
          <p className="mt-2 text-[11px] leading-4 text-indigo-500">
            {locale === 'zh'
              ? '模板会按原文插入；如需简洁、专业或其他风格，可插入后再点击悬浮按钮优化。'
              : 'The template will be inserted as written. For a different style, insert it first and then use the floating optimize button.'}
          </p>
        </div>

        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onCancel} className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">
            {locale === 'zh' ? '取消' : 'Cancel'}
          </button>
          <button onClick={handleSubmit} className="rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-700">
            {mode === 'insert' ? (locale === 'zh' ? '生成并插入' : 'Generate & insert') : (locale === 'zh' ? '生成并复制' : 'Generate & copy')}
          </button>
        </div>
      </div>
    </div>
  )
}
