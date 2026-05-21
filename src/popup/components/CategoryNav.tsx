import { useEffect, useRef } from 'react'
import { CATEGORIES } from '@/shared/constants'
import { Locale } from '@/shared/types'

interface Props {
  current: string
  onChange: (id: string) => void
  locale: Locale
  disabled?: boolean
}

export function CategoryNav({ current, onChange, locale, disabled }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    if (disabled) return
    const btn = btnRefs.current[current]
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [current, disabled])

  return (
    <div ref={containerRef} className="flex gap-1 px-4 py-1 overflow-x-auto scrollbar-hide">
      {CATEGORIES.map(cat => {
        const active = !disabled && current === cat.id
        return (
          <button
            key={cat.id}
            ref={el => { btnRefs.current[cat.id] = el }}
            onClick={() => onChange(cat.id)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${
              active
                ? 'bg-indigo-100 text-indigo-700 font-medium'
                : disabled
                ? 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={disabled ? (locale === 'zh' ? '点击切换到该分类' : 'Click to switch to this category') : undefined}
          >
            <span>{cat.icon}</span>
            <span>{cat.label[locale]}</span>
          </button>
        )
      })}
    </div>
  )
}
