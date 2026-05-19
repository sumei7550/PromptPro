import { Locale } from '@/shared/types'

interface Props {
  value: string
  onChange: (v: string) => void
  locale: Locale
}

export function SearchBar({ value, onChange, locale }: Props) {
  const placeholder = locale === 'zh' ? '搜索模板...' : 'Search templates...'

  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
      />
    </div>
  )
}
