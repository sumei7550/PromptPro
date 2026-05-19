import { Locale } from '@/shared/types'
import { saveSettings } from '@/shared/storage'

interface Props {
  locale: Locale
  onLocaleChange: (l: Locale) => void
  onBack: () => void
}

export function SettingsPanel({ locale, onLocaleChange, onBack }: Props) {
  const handleLocaleChange = (newLocale: Locale) => {
    onLocaleChange(newLocale)
    saveSettings({ locale: newLocale })
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <header className="flex items-center gap-3 px-4 py-3 bg-white border-b">
        <button onClick={onBack} className="p-1 rounded hover:bg-gray-100" aria-label="Back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
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
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            {locale === 'zh' ? '关于' : 'About'}
          </h3>
          <p className="text-xs text-gray-500">
            PromptPro v1.0.0
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {locale === 'zh'
              ? '一键优化 AI 提示词，内置专业模板库'
              : 'One-click AI prompt optimizer with template library'}
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
      </div>
    </div>
  )
}
