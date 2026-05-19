import { CATEGORIES } from '@/shared/constants'
import { Locale } from '@/shared/types'

interface Props {
  current: string
  onChange: (id: string) => void
  locale: Locale
}

export function CategoryNav({ current, onChange, locale }: Props) {
  return (
    <div className="flex gap-1 px-4 py-1 overflow-x-auto scrollbar-hide">
      {CATEGORIES.map(cat => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${
            current === cat.id
              ? 'bg-indigo-100 text-indigo-700 font-medium'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span>{cat.icon}</span>
          <span>{cat.label[locale]}</span>
        </button>
      ))}
    </div>
  )
}
