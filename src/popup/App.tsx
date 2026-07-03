import { useState, useEffect, useMemo } from 'react'
import Fuse from 'fuse.js'
import { CategoryNav } from './components/CategoryNav'
import { SearchBar } from './components/SearchBar'
import { TemplateLibrary } from './components/TemplateLibrary'
import { SettingsPanel } from './components/SettingsPanel'
import { OnboardingBanner } from './components/OnboardingBanner'
import { allTemplates } from '@/shared/templates'
import { getSettings, saveSettings, getRemainingUsage } from '@/shared/storage'
import { Locale } from '@/shared/types'
import logoSvg from '@/assets/icons/icon.svg'

const ONBOARDING_KEY = 'promptpro_popup_onboarded'

export default function App() {
  const [locale, setLocale] = useState<Locale>('en')
  const [category, setCategory] = useState<string>('writing')
  const [categoryActive, setCategoryActive] = useState(true)
  const [search, setSearch] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    getSettings().then(s => setLocale(s.locale))
    getRemainingUsage().then(setRemaining)
    chrome.storage.local.get(ONBOARDING_KEY).then(result => {
      if (!result[ONBOARDING_KEY]) setShowOnboarding(true)
    })
  }, [])

  const handleLocaleToggle = () => {
    const next: Locale = locale === 'zh' ? 'en' : 'zh'
    setLocale(next)
    saveSettings({ locale: next })
  }

  const handleCategoryChange = (id: string) => {
    setCategory(id)
    setCategoryActive(true)
  }

  const handleSearchChange = (value: string) => {
    setSearch(value)
    if (value.trim()) setCategoryActive(false)
    else setCategoryActive(true)
  }

  const isSearching = search.trim().length > 0
  const query = search.trim()
  const isGlobalSearch = isSearching && !categoryActive

  const fuse = useMemo(() => new Fuse(allTemplates, {
    keys: [
      { name: 'title.zh', weight: 0.3 },
      { name: 'title.en', weight: 0.3 },
      { name: 'keywords', weight: 0.25 },
      { name: 'description.zh', weight: 0.15 },
      { name: 'description.en', weight: 0.15 },
      { name: 'tags.zh', weight: 0.1 },
      { name: 'tags.en', weight: 0.1 },
      { name: 'category', weight: 0.05 },
    ],
    threshold: 0.3,
    ignoreLocation: true,
    includeScore: true,
  }), [])

  const filtered = useMemo(() => {
    if (!isSearching) {
      return allTemplates.filter(t => t.category === category)
    }
    const hasCJK = /[一-鿿]/.test(query)
    const maxScore = hasCJK ? 0.35 : (query.length <= 3 ? 0.15 : 0.3)
    const results = fuse.search(query)
      .filter(r => (r.score ?? 1) <= maxScore)
      .map(r => r.item)
    if (categoryActive) {
      return results.filter(t => t.category === category)
    }
    return results
  }, [isSearching, query, categoryActive, category, fuse])

  if (showSettings) {
    return <SettingsPanel locale={locale} onLocaleChange={(l) => { setLocale(l); saveSettings({ locale: l }) }} onBack={() => setShowSettings(false)} />
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <header className="flex items-center justify-between px-4 py-3 bg-white border-b">
        <div className="flex items-center gap-2">
          <img src={logoSvg} alt="PromptPro" className="w-7 h-7" />
          <h1 className="text-base font-semibold text-gray-800">PromptPro</h1>
          {remaining !== null && (
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              remaining <= 3 ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500'
            }`}>
              {locale === 'zh' ? `${remaining}次` : `${remaining} left`}
            </span>
          )}
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

      {showOnboarding && (
        <OnboardingBanner
          locale={locale}
          onDismiss={() => {
            setShowOnboarding(false)
            chrome.storage.local.set({ [ONBOARDING_KEY]: true })
          }}
        />
      )}

      <div className="px-4 py-2">
        <SearchBar value={search} onChange={handleSearchChange} locale={locale} />
      </div>

      <CategoryNav current={category} onChange={handleCategoryChange} locale={locale} disabled={isGlobalSearch} />

      <div className="flex-1 overflow-y-auto px-4 py-2">
        <TemplateLibrary
          templates={filtered}
          locale={locale}
          isSearching={isSearching}
          isGlobalSearch={isGlobalSearch}
          query={query}
          onCategoryClick={handleCategoryChange}
        />
      </div>
    </div>
  )
}
