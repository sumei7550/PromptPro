import { useState } from 'react'
import { PromptTemplate, Locale } from '@/shared/types'
import { CATEGORIES } from '@/shared/constants'

interface Props {
  templates: PromptTemplate[]
  locale: Locale
  isSearching?: boolean
  isGlobalSearch?: boolean
  query?: string
  onCategoryClick?: (id: string) => void
}

const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map(c => [c.id, c]))

export function TemplateLibrary({ templates, locale, isSearching, isGlobalSearch, query, onCategoryClick }: Props) {
  if (templates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-32 text-gray-400 text-sm gap-1">
        {isSearching ? (
          <>
            <span>{locale === 'zh' ? `未找到与 "${query}" 相关的模板` : `No templates match "${query}"`}</span>
            <span className="text-xs">{locale === 'zh' ? '试试其他关键词，或浏览分类' : 'Try different keywords or browse by category'}</span>
          </>
        ) : (
          <span>{locale === 'zh' ? '该分类下暂无模板' : 'No templates in this category'}</span>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {isSearching && (
        <div className="text-xs text-gray-500 px-1">
          {isGlobalSearch
            ? (locale === 'zh'
                ? `全局搜索 · 找到 ${templates.length} 条结果`
                : `Global search · ${templates.length} result${templates.length === 1 ? '' : 's'}`)
            : (locale === 'zh'
                ? `当前分类内 · 找到 ${templates.length} 条结果`
                : `In current category · ${templates.length} result${templates.length === 1 ? '' : 's'}`)}
        </div>
      )}
      {templates.map(t => (
        <TemplateCard
          key={t.id}
          template={t}
          locale={locale}
          showCategoryBadge={!!isGlobalSearch}
          onCategoryClick={onCategoryClick}
        />
      ))}
    </div>
  )
}

interface CardProps {
  template: PromptTemplate
  locale: Locale
  showCategoryBadge?: boolean
  onCategoryClick?: (id: string) => void
}

function TemplateCard({ template, locale, showCategoryBadge, onCategoryClick }: CardProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'inserted' | 'fallback'>('idle')
  const cat = CATEGORY_MAP[template.category]

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
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="text-sm font-medium text-gray-800 flex-1">
          {template.title[locale]}
        </h3>
        {showCategoryBadge && cat && (
          <button
            onClick={() => onCategoryClick?.(template.category)}
            className="shrink-0 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
            title={locale === 'zh' ? '查看该分类全部模板' : 'View all templates in this category'}
          >
            <span>{cat.icon}</span>
            <span>{cat.label[locale]}</span>
          </button>
        )}
      </div>
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
