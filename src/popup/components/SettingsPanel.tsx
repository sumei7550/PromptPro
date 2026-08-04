import { Locale, OptimizeStyle } from '@/shared/types'
import { getSettings, saveSettings } from '@/shared/storage'
import { useEffect, useState } from 'react'

interface Props {
  locale: Locale
  onLocaleChange: (l: Locale) => void
  onBack: () => void
}

export function SettingsPanel({ locale, onLocaleChange, onBack }: Props) {
  const [style, setStyle] = useState<OptimizeStyle>('structured')
  useEffect(() => { getSettings().then(settings => setStyle(settings.optimizeStyle)) }, [])
  const handleLocaleChange = (newLocale: Locale) => {
    onLocaleChange(newLocale)
    saveSettings({ locale: newLocale, localeSetByUser: true })
  }

  const styles: OptimizeStyle[] = ['concise', 'professional', 'structured', 'deep-analysis', 'content-creation', 'code']

  const handleKoFiSupport = () => {
    const confirmed = window.confirm(
      locale === 'zh'
        ? '感谢您的支持！❤️\n点击"确定"前往 Ko-fi 请我喝杯咖啡'
        : 'Thanks for your support! ❤️\nClick "OK" to buy me a coffee on Ko-fi'
    )
    if (confirmed) {
      window.open('https://ko-fi.com/sumei7550', '_blank')
    }
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <header className="flex items-center gap-3 px-4 py-3 bg-white border-b">
        <button onClick={onBack} className="p-1 rounded hover:bg-gray-100" aria-label="Back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-base font-semibold text-gray-800">
          {locale === 'zh' ? '设置' : 'Settings'}
        </h1>
      </header>

      <div className="flex-1 p-4 space-y-4">
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            {locale === 'zh' ? '语言 / Language' : 'Language / 语言'}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => handleLocaleChange('zh')}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                locale === 'zh'
                  ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                  : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              中文
            </button>
            <button
              onClick={() => handleLocaleChange('en')}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                locale === 'en'
                  ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                  : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              English
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-2">{locale === 'zh' ? '优化风格' : 'Optimization style'}</h3>
          <select value={style} onChange={event => { const next = event.target.value as OptimizeStyle; setStyle(next); saveSettings({ optimizeStyle: next }) }} className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700">
            {styles.map(value => <option key={value} value={value}>{locale === 'zh' ? ({ concise: '简洁', professional: '专业', structured: '结构化', 'deep-analysis': '深度分析', 'content-creation': '内容创作', code: '适合代码' }[value]) : ({ concise: 'Concise', professional: 'Professional', structured: 'Structured', 'deep-analysis': 'Deep analysis', 'content-creation': 'Content creation', code: 'Code' }[value])}</option>)}
          </select>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            {locale === 'zh' ? '关于' : 'About'}
          </h3>
          <p className="text-xs text-gray-500">
            PromptPro v1.1.0
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {locale === 'zh'
              ? '完全本地运行的提示词增强；内置专业模板库'
              : 'Fully local prompt enhancement with a professional template library.'}
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            {locale === 'zh' ? '使用统计' : 'Usage'}
          </h3>
          <p className="text-xs text-gray-500">
            {locale === 'zh'
              ? '每日免费优化次数：10 次'
              : 'Daily free optimizations: 10'}
          </p>
        </div>

        {/* Ko-fi 支持按钮 */}
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <button
            onClick={handleKoFiSupport}
            className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-80 flex items-center justify-center gap-2"
            style={{ backgroundColor: '#29abe0' }}
          >
            <span>☕</span>
            {locale === 'zh' ? '请我喝杯咖啡' : 'Buy me a coffee'}
          </button>
          <p className="text-xs text-gray-400 text-center mt-2">
            {locale === 'zh'
              ? '支持项目持续发展 ❤️'
              : 'Support the project ❤️'}
          </p>
        </div>

        {/* 隐私政策 - 底部链接 */}
        <div className="mt-4 pt-3 border-t border-gray-100 -mb-4">
          <a
            href={locale === 'zh' ? chrome.runtime.getURL('privacy_zh.html') : chrome.runtime.getURL('privacy_en.html')}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            {locale === 'zh' ? '隐私政策' : 'Privacy Policy'}
          </a>
        </div>
      </div>
    </div>
  )
}
