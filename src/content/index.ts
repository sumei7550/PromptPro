import { detectPlatform } from './platform-detector'
import { FloatingButton } from './floating-button'
import { localOptimize } from './optimizer'
import { Platform } from '@/shared/types'
import { incrementUsage, getRemainingUsage } from '@/shared/storage'
import { t } from '@/shared/i18n'

function showToast(message: string, type: 'info' | 'error' = 'info') {
  const existing = document.getElementById('promptpro-toast')
  if (existing) existing.remove()

  const toast = document.createElement('div')
  toast.id = 'promptpro-toast'
  const bg = type === 'error' ? '#ef4444' : '#667eea'
  toast.style.cssText = `
    position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    background: ${bg}; color: white; padding: 10px 20px;
    border-radius: 8px; font-size: 14px; z-index: 2147483647;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: opacity 0.3s;
  `
  toast.textContent = message
  document.body.appendChild(toast)
  setTimeout(() => {
    toast.style.opacity = '0'
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

function init() {
  const platform = detectPlatform()
  if (!platform) return

  const floatingBtn = new FloatingButton(platform)
  floatingBtn.mount()

  floatingBtn.onClick(async () => {
    const text = platform.getInputContent().trim()
    if (!text) return

    const remaining = await getRemainingUsage()
    if (remaining <= 0) {
      showToast(t('toast.limit'), 'error')
      return
    }

    floatingBtn.setState('loading')

    try {
      const result = await chrome.runtime.sendMessage({
        type: 'OPTIMIZE_PROMPT',
        payload: {
          text,
          platform: platform.name as Platform,
        },
      })

      if (result?.success && result.text) {
        await platform.setInputContent(result.text)
        floatingBtn.setState('success')
      } else {
        const fallback = localOptimize(text)
        await platform.setInputContent(fallback)
        await incrementUsage()
        floatingBtn.setState('success')
      }
    } catch {
      const fallback = localOptimize(text)
      await platform.setInputContent(fallback)
      await incrementUsage()
      floatingBtn.setState('success')
    }
  })

  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'INSERT_TEMPLATE') {
      platform.setInputContent(message.payload.text)
    }
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
