import { Locale } from '@/shared/types'

interface Props {
  locale: Locale
  onDismiss: () => void
}

const platforms = [
  { name: 'ChatGPT', color: '#10a37f' },
  { name: 'Claude', color: '#d97706' },
  { name: 'DeepSeek', color: '#4f6ef7' },
  { name: 'Gemini', color: '#4285f4' },
  { name: '豆包', color: '#3b82f6' },
]

export function OnboardingBanner({ locale, onDismiss }: Props) {
  const text = locale === 'zh'
    ? '前往以下 AI 对话页面，即可使用一键提示词优化功能'
    : 'Visit any supported AI chat page to use the prompt optimization feature'

  return (
    <div className="mx-4 mt-2 p-3 bg-indigo-50 border border-indigo-100 rounded-lg relative">
      <button
        onClick={onDismiss}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 w-5 h-5 flex items-center justify-center"
        aria-label="Close"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M2 2l8 8M10 2l-8 8" />
        </svg>
      </button>
      <p className="text-xs text-gray-700 pr-4 mb-2">{text}</p>
      <div className="flex flex-wrap gap-1.5">
        {platforms.map(p => (
          <span
            key={p.name}
            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: p.color }}
          >
            {p.name}
          </span>
        ))}
      </div>
    </div>
  )
}
