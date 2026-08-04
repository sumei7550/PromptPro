import { useEffect, useMemo, useState } from 'react'
import { Locale, PersonalTemplate, OptimizationHistoryEntry } from '@/shared/types'
import { getCustomTemplates, getOptimizationHistory, recordTemplateUse, saveCustomTemplates, upsertCustomTemplate } from '@/shared/storage'
import { MAX_PERSONAL_TEMPLATES } from '@/shared/constants'

interface Props { locale: Locale; onBack: () => void; draft?: string }
type Filter = 'all' | 'favorites' | 'recent'

const blank = (prompt = ''): PersonalTemplate => ({
  id: crypto.randomUUID(), title: '', description: '', prompt, category: 'writing', tags: [],
  isFavorite: false, createdAt: Date.now(), updatedAt: Date.now(), useCount: 0, versions: [],
})

export function PersonalAssets({ locale, onBack, draft = '' }: Props) {
  const zh = locale === 'zh'
  const [items, setItems] = useState<PersonalTemplate[]>([])
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')
  const [editing, setEditing] = useState<PersonalTemplate | null>(null)
  const [history, setHistory] = useState<PersonalTemplate | null>(null)
  const [optimizationHistory, setOptimizationHistory] = useState<OptimizationHistoryEntry[]>([])
  const [showOptimizationHistory, setShowOptimizationHistory] = useState(false)
  const [notice, setNotice] = useState('')

  useEffect(() => { getCustomTemplates().then(setItems); getOptimizationHistory().then(setOptimizationHistory) }, [])
  useEffect(() => { if (draft && !editing) setEditing(blank(draft)) }, [draft])

  const visible = useMemo(() => items
    .filter(item => filter === 'favorites' ? item.isFavorite : filter === 'recent' ? !!item.lastUsedAt : true)
    .filter(item => `${item.title} ${item.description} ${item.prompt} ${item.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())), [items, filter, query])

  const flash = (text: string) => { setNotice(text); window.setTimeout(() => setNotice(''), 1800) }
  const copy = async (item: PersonalTemplate) => { await navigator.clipboard.writeText(item.prompt); await recordTemplateUse(item.id); setItems(await getCustomTemplates()); flash(zh ? '已复制，可直接粘贴' : 'Copied to clipboard') }
  const toggleFavorite = async (item: PersonalTemplate) => { const next = { ...item, isFavorite: !item.isFavorite, updatedAt: Date.now() }; await upsertCustomTemplate(next); setItems(await getCustomTemplates()) }
  const remove = async (id: string) => { const next = items.filter(item => item.id !== id); await saveCustomTemplates(next); setItems(next) }

  const exportJson = () => download('promptpro-templates.json', JSON.stringify({ version: 1, templates: items }, null, 2), 'application/json')
  const exportMarkdown = () => download('promptpro-templates.md', items.map(item => `# ${item.title}\n\n${item.description}\n\n\`\`\`prompt\n${item.prompt}\n\`\`\`\n`).join('\n'), 'text/markdown')
  const importFile = (file: File) => {
    const reader = new FileReader()
    reader.onload = async () => {
      try {
        const raw = String(reader.result)
        let incoming: unknown
        if (file.name.toLowerCase().endsWith('.md')) {
          incoming = raw.split(/\n(?=# )/).filter(Boolean).map(section => {
            const lines = section.split('\n')
            const title = (lines[0] || '').replace(/^#\s*/, '').trim()
            const promptMatch = section.match(/```prompt\n([\s\S]*?)\n```/)
            const description = lines.slice(2, promptMatch ? lines.findIndex(line => line.startsWith('```prompt')) : lines.length).join('\n').trim()
            return { title, description, prompt: promptMatch?.[1] || '' }
          })
        } else {
          const parsed = JSON.parse(raw)
          incoming = Array.isArray(parsed) ? parsed : parsed.templates
        }
        if (!Array.isArray(incoming)) throw new Error('invalid')
        const valid = incoming.filter(item => item && typeof item.title === 'string' && typeof item.prompt === 'string').map(item => ({ ...blank(), ...item, id: item.id || crypto.randomUUID(), updatedAt: Date.now(), versions: Array.isArray(item.versions) ? item.versions : [] }))
        const merged = [...valid, ...items.filter(item => !valid.some(other => other.id === item.id))]
        const saved = merged.slice(0, MAX_PERSONAL_TEMPLATES)
        await saveCustomTemplates(saved); setItems(saved); flash(zh ? `已导入 ${Math.min(valid.length, MAX_PERSONAL_TEMPLATES)} 个模板` : `Imported ${Math.min(valid.length, MAX_PERSONAL_TEMPLATES)} templates`)
      } catch { flash(zh ? '导入失败：文件格式不正确' : 'Import failed: invalid file') }
    }
    reader.readAsText(file)
  }

  return <div className="flex h-full flex-col bg-gray-50">
    <header className="border-b bg-white px-4 py-3">
      <div className="flex min-w-0 items-center gap-2">
        <button onClick={onBack} aria-label={zh ? '返回' : 'Back'} className="shrink-0 rounded-md p-1.5 text-gray-500 hover:bg-gray-100">
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        </button>
        <div className="min-w-0 flex-1"><h1 className="whitespace-nowrap text-sm font-semibold text-gray-900">{zh ? '我的 Prompt 资产' : 'My Prompt assets'}</h1><p className="whitespace-nowrap text-[10px] text-gray-400">{zh ? '仅保存在本机，不会上传' : 'Stored locally on this device'}</p></div>
      </div>
      <div className="mt-2 flex items-center justify-end gap-2">
        <button onClick={() => setShowOptimizationHistory(true)} className="shrink-0 whitespace-nowrap rounded bg-indigo-50 px-2 py-1 text-[11px] text-indigo-600">{zh ? '优化历史' : 'Optimization history'}</button>
        <label className="shrink-0 cursor-pointer whitespace-nowrap rounded bg-gray-100 px-2 py-1 text-[11px] text-gray-600">{zh ? '导入' : 'Import'}<input type="file" accept=".json,.md" className="hidden" onChange={e => e.target.files?.[0] && importFile(e.target.files[0])} /></label>
        <button onClick={exportJson} className="shrink-0 whitespace-nowrap rounded bg-gray-100 px-2 py-1 text-[11px] text-gray-600">JSON</button>
        <button onClick={exportMarkdown} className="shrink-0 whitespace-nowrap rounded bg-gray-100 px-2 py-1 text-[11px] text-gray-600">MD</button>
      </div>
    </header>
    <div className="border-b bg-white px-4 py-2"><div className="flex gap-1 rounded-lg bg-gray-100 p-1">{(['all','favorites','recent'] as Filter[]).map(value => <button key={value} onClick={() => setFilter(value)} className={`flex-1 rounded-md py-1 text-xs ${filter === value ? 'bg-white font-medium text-indigo-600 shadow-sm' : 'text-gray-500'}`}>{value === 'all' ? (zh ? '全部' : 'All') : value === 'favorites' ? (zh ? '收藏' : 'Favorites') : (zh ? '最近使用' : 'Recent')}</button>)}</div><input value={query} onChange={e => setQuery(e.target.value)} placeholder={zh ? '搜索我的模板...' : 'Search my templates...'} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-xs outline-none focus:border-indigo-400" /></div>
    <div className="flex-1 overflow-y-auto p-4">{visible.length === 0 ? <div className="py-10 text-center text-xs text-gray-400">{zh ? '还没有个人模板，点击下方开始创建' : 'No personal templates yet'}</div> : <div className="space-y-2">{visible.map(item => <div key={item.id} className="rounded-xl border border-gray-100 bg-white p-3"><div className="flex items-start gap-2"><div className="flex-1"><h2 className="text-sm font-medium text-gray-800">{item.title || (zh ? '未命名模板' : 'Untitled template')}</h2><p className="mt-1 line-clamp-2 whitespace-pre-wrap text-xs text-gray-500">{item.prompt}</p></div><button onClick={() => toggleFavorite(item)} className="text-lg text-amber-400">{item.isFavorite ? '★' : '☆'}</button></div><div className="mt-2 flex items-center gap-1"><button onClick={() => copy(item)} className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs text-indigo-600">{zh ? '复制' : 'Copy'}</button><button onClick={() => { setEditing(item); recordTemplateUse(item.id) }} className="rounded-md bg-gray-50 px-2.5 py-1 text-xs text-gray-600">{zh ? '复用/编辑' : 'Reuse / edit'}</button><button onClick={() => setHistory(item)} className="rounded-md bg-gray-50 px-2.5 py-1 text-xs text-gray-600">{zh ? '历史' : 'History'}</button><button onClick={() => remove(item.id)} className="ml-auto px-2 py-1 text-xs text-red-400">{zh ? '删除' : 'Delete'}</button></div></div>)}</div>}</div>
    <div className="border-t bg-white p-3"><button disabled={items.length >= MAX_PERSONAL_TEMPLATES} onClick={() => setEditing(blank())} className="w-full rounded-lg bg-indigo-600 py-2 text-xs font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300">{items.length >= MAX_PERSONAL_TEMPLATES ? (zh ? '已达到 10 个模板上限' : '10-template limit reached') : (zh ? '新建模板（3 步保存）' : 'New template (save in 3 steps)' )}</button></div>
    {notice && <div className="fixed bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-3 py-2 text-xs text-white">{notice}</div>}
    {editing && <Editor locale={locale} item={editing} onCancel={() => setEditing(null)} onSave={async item => { try { await upsertCustomTemplate(item); setItems(await getCustomTemplates()); setEditing(null); flash(zh ? '模板已保存' : 'Template saved') } catch { flash(zh ? '个人模板最多保存 10 个' : 'You can save up to 10 personal templates') } }} />}
    {history && <History locale={locale} item={history} onClose={() => setHistory(null)} />}
    {showOptimizationHistory && <OptimizationHistory locale={locale} items={optimizationHistory} onClose={() => setShowOptimizationHistory(false)} />}
  </div>
}

function Editor({ locale, item, onCancel, onSave }: { locale: Locale; item: PersonalTemplate; onCancel: () => void; onSave: (item: PersonalTemplate) => void }) {
  const zh = locale === 'zh'; const [draft, setDraft] = useState(item)
  const save = () => { if (!draft.title.trim() || !draft.prompt.trim()) return; const changed = item.prompt !== draft.prompt; onSave({ ...draft, title: draft.title.trim(), prompt: draft.prompt.trim(), updatedAt: Date.now(), versions: changed ? [{ id: crypto.randomUUID(), prompt: item.prompt, createdAt: Date.now() }, ...item.versions].slice(0, 20) : item.versions }) }
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"><div className="w-full rounded-2xl bg-white p-4 shadow-2xl"><h2 className="text-base font-semibold">{zh ? '保存个人模板' : 'Save personal template'}</h2><p className="mt-1 text-xs text-gray-400">{zh ? '填写标题 → 检查内容 → 保存' : 'Name it, review it, save it'}</p><input autoFocus value={draft.title} onChange={e => setDraft({ ...draft, title: e.target.value })} placeholder={zh ? '模板名称' : 'Template name'} className="mt-4 w-full rounded-lg border px-3 py-2 text-sm" /><textarea value={draft.description} onChange={e => setDraft({ ...draft, description: e.target.value })} placeholder={zh ? '用途说明（可选）' : 'Description (optional)'} className="mt-2 w-full rounded-lg border px-3 py-2 text-xs" rows={2} /><textarea value={draft.prompt} onChange={e => setDraft({ ...draft, prompt: e.target.value })} placeholder={zh ? 'Prompt 内容' : 'Prompt content'} className="mt-2 w-full rounded-lg border px-3 py-2 text-sm" rows={7} /><div className="mt-3 flex justify-end gap-2"><button onClick={onCancel} className="rounded-lg border px-3 py-2 text-xs text-gray-600">{zh ? '取消' : 'Cancel'}</button><button disabled={!draft.title.trim() || !draft.prompt.trim()} onClick={save} className="rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white disabled:opacity-40">{zh ? '保存模板' : 'Save template'}</button></div></div></div>
}

function History({ locale, item, onClose }: { locale: Locale; item: PersonalTemplate; onClose: () => void }) { const zh = locale === 'zh'; return <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"><div className="max-h-[80vh] w-full overflow-y-auto rounded-2xl bg-white p-4"><div className="flex justify-between"><h2 className="text-sm font-semibold">{zh ? '版本历史与对比' : 'Version history & compare'}</h2><button onClick={onClose}>×</button></div><div className="mt-3 rounded-lg bg-indigo-50 p-3"><p className="mb-1 text-[10px] text-indigo-600">{zh ? '当前版本' : 'Current version'}</p><pre className="whitespace-pre-wrap text-xs text-gray-700">{item.prompt}</pre></div>{item.versions.map((version, index) => <div key={version.id} className="mt-2 rounded-lg border p-3"><p className="mb-1 text-[10px] text-gray-400">{zh ? `历史版本 ${item.versions.length - index}` : `Previous version ${item.versions.length - index}`}</p><pre className="whitespace-pre-wrap text-xs text-gray-500">{version.prompt}</pre></div>)}</div></div> }
function OptimizationHistory({ locale, items, onClose }: { locale: Locale; items: OptimizationHistoryEntry[]; onClose: () => void }) { const zh = locale === 'zh'; return <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"><div className="max-h-[80vh] w-full overflow-y-auto rounded-2xl bg-white p-4"><div className="flex justify-between"><h2 className="text-sm font-semibold">{zh ? '优化历史' : 'Optimization history'}</h2><button onClick={onClose}>×</button></div>{items.length === 0 ? <p className="py-8 text-center text-xs text-gray-400">{zh ? '暂无优化记录' : 'No optimization history yet'}</p> : items.map(item => <div key={item.id} className="mt-3 rounded-lg border p-3"><p className="mb-2 text-[10px] text-gray-400">{new Date(item.createdAt).toLocaleString()} · {item.style}</p><p className="text-[11px] font-medium text-gray-500">{zh ? '原文' : 'Original'}</p><pre className="whitespace-pre-wrap text-xs text-gray-700">{item.originalText}</pre><p className="mt-2 text-[11px] font-medium text-indigo-600">{zh ? '优化结果' : 'Optimized'}</p><pre className="whitespace-pre-wrap text-xs text-gray-700">{item.optimizedText}</pre></div>)}</div></div> }
function download(name: string, content: string, type: string) { const url = URL.createObjectURL(new Blob([content], { type })); const link = document.createElement('a'); link.href = url; link.download = name; link.click(); URL.revokeObjectURL(url) }
