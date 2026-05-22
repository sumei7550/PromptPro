import { MAX_FREE_DAILY_USAGE } from '@/shared/constants'
import { getSettings } from '@/shared/storage'

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'OPTIMIZE_PROMPT') {
    handleOptimize()
      .then(sendResponse)
      .catch(() => sendResponse({ success: false, error: 'Optimization failed' }))
    return true
  }

  if (message.type === 'INSERT_TEMPLATE') {
    handleInsertTemplate(message.payload)
    return false
  }
})

/**
 * 优化逻辑全部在 content script 中本地完成（localOptimize）。
 * Background 仅负责配额校验，不再打开任何隐藏 tab，不向第三方平台投递文本。
 */
async function handleOptimize(): Promise<{ success: boolean; error?: string }> {
  const settings = await getSettings()
  const today = new Date().toISOString().split('T')[0]
  const usage = settings.lastResetDate === today ? settings.dailyUsage : 0

  if (usage >= MAX_FREE_DAILY_USAGE) {
    return { success: false, error: 'Daily limit reached' }
  }

  // 让 content script 走本地 fallback 优化路径
  return { success: false, error: 'local-only' }
}

async function handleInsertTemplate(payload: { text: string }) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  if (!tab?.id) return

  try {
    await chrome.tabs.sendMessage(tab.id, {
      type: 'INSERT_TEMPLATE',
      payload,
    })
  } catch {
    // Content script 尚未注入 — 动态注入一次性插入函数
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: insertTextToInput,
        args: [payload.text],
      })
    } catch {
      // 当前页不在支持的平台域内，或无权限
    }
  }
}

function insertTextToInput(text: string) {
  const selectors = [
    '#prompt-textarea',
    'div.ProseMirror[contenteditable="true"]',
    'div[contenteditable="true"][data-placeholder]',
    'div[contenteditable="true"][translate="no"]',
    'rich-textarea div[contenteditable="true"]',
    'textarea#chat-input',
    'textarea[placeholder]',
    'textarea',
    'div[contenteditable="true"]',
  ]

  let el: HTMLElement | null = null
  for (const s of selectors) {
    el = document.querySelector<HTMLElement>(s)
    if (el) break
  }
  if (!el) return

  el.focus()

  if (el instanceof HTMLTextAreaElement) {
    const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')?.set
    setter?.call(el, text)
    el.dispatchEvent(new Event('input', { bubbles: true }))
    el.dispatchEvent(new Event('change', { bubbles: true }))
  } else {
    document.execCommand('selectAll', false)
    document.execCommand('delete', false)
    document.execCommand('insertText', false, text)
    if (!el.textContent?.trim()) {
      el.innerHTML = `<p>${text}</p>`
      el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: text }))
    }
  }
}
