import { useState } from 'react'
import { PromptTemplate, Locale } from '@/shared/types'

interface Props {
  templates: PromptTemplate[]
  locale: Locale
}

export function TemplateLibrary({ templates, locale }: Props) {
  if (templates.length === 0) {
    return (
      <div className="flex items-center justify-center h-32 text-gray-400 text-sm">
        {locale === 'zh' ? '没有找到模板' : 'No templates found'}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {templates.map(t => (
        <TemplateCard key={t.id} template={t} locale={locale} />
      ))}
    </div>
  )
}

function TemplateCard({ template, locale }: { template: PromptTemplate; locale: Locale }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'inserted' | 'fallback'>('idle')

  const handleCopy = async () => {
    await navigator.clipboard.writeText(template.prompt[locale])
    setStatus('copied')
    setTimeout(() => setStatus('idle'), 1500)
  }

  const handleInsert = async () => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
      const supportedUrls = ['chatgpt.com', 'claude.ai', 'gemini.google.com', 'chat.deepseek.com', 'www.doubao.com']
      const isSupported = tab?.url && supportedUrls.some(u => tab.url!.includes(u))

      if (!isSupported) {
        await navigator.clipboard.writeText(template.prompt[locale])
        setStatus('fallback')
        setTimeout(() => setStatus('idle'), 2000)
        return
      }

      chrome.runtime.sendMessage({
        type: 'INSERT_TEMPLATE',
        payload: { text: template.prompt[locale] },
      })
      setStatus('inserted')
      setTimeout(() => setStatus('idle'), 1500)
    } catch {
      await navigator.clipboard.writeText(template.prompt[locale])
      setStatus('fallback')
      setTimeout(() => setStatus('idle'), 2000)
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-3 hover:border-indigo-200 hover:shadow-sm transition-all">
      <h3 className="text-sm font-medium text-gray-800 mb-1">
        {template.title[locale]}
      </h3>
      <p className="text-xs text-gray-500 mb-2 line-clamp-2">
        {template.description[locale]}
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={handleInsert}
          className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
            status === 'inserted'
              ? 'bg-green-50 text-green-600'
              : status === 'fallback'
              ? 'bg-yellow-50 text-yellow-600'
              : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
          }`}
        >
          {status === 'inserted'
            ? (locale === 'zh' ? '已插入' : 'Inserted')
            : status === 'fallback'
            ? (locale === 'zh' ? '已复制(请打开AI页面)' : 'Copied (open AI page)')
            : (locale === 'zh' ? '插入' : 'Insert')}
        </button>
        <button
          onClick={handleCopy}
          className="px-3 py-1 text-xs rounded-md bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
        >
          {status === 'copied' ? (locale === 'zh' ? '已复制' : 'Copied') : (locale === 'zh' ? '复制' : 'Copy')}
        </button>
        <div className="flex-1" />
        <div className="flex gap-1">
          {template.tags.slice(0, 2).map(tag => (
            <span key={tag[locale]} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-400">
              {tag[locale]}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
