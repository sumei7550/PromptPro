import { PLATFORM_URLS, MAX_FREE_DAILY_USAGE } from '@/shared/constants'
import { incrementUsage, getSettings } from '@/shared/storage'
import { Platform } from '@/shared/types'
import { buildOptimizePrompt } from '@/content/optimizer'

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'OPTIMIZE_PROMPT') {
    handleOptimize(message.payload, sender.tab?.id)
      .then(sendResponse)
      .catch(() => sendResponse({ success: false, error: 'Optimization failed' }))
    return true
  }

  if (message.type === 'INSERT_TEMPLATE') {
    handleInsertTemplate(message.payload)
    return false
  }
})

async function handleOptimize(
  payload: { text: string; platform: Platform },
  _sourceTabId?: number
): Promise<{ success: boolean; text?: string; error?: string }> {
  const settings = await getSettings()
  const today = new Date().toISOString().split('T')[0]
  const usage = settings.lastResetDate === today ? settings.dailyUsage : 0

  if (usage >= MAX_FREE_DAILY_USAGE) {
    return { success: false, error: 'Daily limit reached' }
  }

  try {
    const result = await optimizeViaHiddenTab(payload.text, payload.platform)
    await incrementUsage()
    return { success: true, text: result }
  } catch (err) {
    return { success: false, error: String(err) }
  }
}

async function optimizeViaHiddenTab(userText: string, platform: Platform): Promise<string> {
  const url = PLATFORM_URLS[platform]
  if (!url) throw new Error(`Unknown platform: ${platform}`)

  const tab = await chrome.tabs.create({ url, active: false })
  if (!tab.id) throw new Error('Failed to create tab')

  await waitForTabReady(tab.id)
  await sleep(2000)

  const prompt = buildOptimizePrompt(userText)

  const response = await chrome.tabs.sendMessage(tab.id, {
    type: 'HIDDEN_TAB_OPTIMIZE',
    payload: { prompt },
  })

  await chrome.tabs.remove(tab.id)

  if (response?.text) {
    return response.text
  }
  throw new Error('No response from hidden tab')
}

function waitForTabReady(tabId: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      chrome.tabs.onUpdated.removeListener(listener)
      reject(new Error('Tab load timeout'))
    }, 30000)

    const listener = (id: number, info: chrome.tabs.TabChangeInfo) => {
      if (id === tabId && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(listener)
        clearTimeout(timeout)
        resolve()
      }
    }
    chrome.tabs.onUpdated.addListener(listener)
  })
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
    // Content script not loaded yet — inject it dynamically then retry
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: insertTextToInput,
        args: [payload.text],
      })
    } catch {
      // Tab is not a supported platform or no permission
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

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
