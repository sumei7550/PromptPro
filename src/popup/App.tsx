import { useState, useEffect } from 'react'
import { CategoryNav } from './components/CategoryNav'
import { SearchBar } from './components/SearchBar'
import { TemplateLibrary } from './components/TemplateLibrary'
import { SettingsPanel } from './components/SettingsPanel'
import { allTemplates } from '@/shared/templates'
import { getSettings, saveSettings } from '@/shared/storage'
import { Locale } from '@/shared/types'

export default function App() {
  const [locale, setLocale] = useState<Locale>('zh')
  const [category, setCategory] = useState<string>('writing')
  const [search, setSearch] = useState('')
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    getSettings().then(s => setLocale(s.locale))
  }, [])

  const handleLocaleToggle = () => {
    const next: Locale = locale === 'zh' ? 'en' : 'zh'
    setLocale(next)
    saveSettings({ locale: next })
  }

  const filtered = allTemplates.filter(t => {
    const matchCategory = t.category === category
    const matchSearch = !search ||
      t.title[locale].toLowerCase().includes(search.toLowerCase()) ||
      t.tags.some(tag => tag[locale].toLowerCase().includes(search.toLowerCase()))
    return matchCategory && matchSearch
  })

  if (showSettings) {
    return <SettingsPanel locale={locale} onLocaleChange={(l) => { setLocale(l); saveSettings({ locale: l }) }} onBack={() => setShowSettings(false)} />
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <header className="flex items-center justify-between px-4 py-3 bg-white border-b">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <h1 className="text-base font-semibold text-gray-800">PromptPro</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleLocaleToggle}
            className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-600"
          >
            {locale === 'zh' ? 'EN' : '中'}
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className="p-1.5 rounded hover:bg-gray-100 text-gray-500"
            aria-label="Settings"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="px-4 py-2">
        <SearchBar value={search} onChange={setSearch} locale={locale} />
      </div>

      <CategoryNav current={category} onChange={setCategory} locale={locale} />

      <div className="flex-1 overflow-y-auto px-4 py-2">
        <TemplateLibrary templates={filtered} locale={locale} />
      </div>
    </div>
  )
}
