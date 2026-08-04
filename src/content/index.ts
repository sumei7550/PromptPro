import { detectPlatform } from './platform-detector'
import { FloatingButton } from './floating-button'
import { localOptimize } from './optimizer'
import { Platform } from '@/shared/types'
import { initializeLocale, incrementUsage, getRemainingUsage, getSettings, recordOptimization } from '@/shared/storage'
import { getLocale, setLocale, t } from '@/shared/i18n'
import { previewOptimization } from './preview'

function showToast(message: string, type: 'info' | 'error' = 'info', action?: { label: string; onClick: () => void }) {
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
  const messageNode = document.createElement('span')
  messageNode.textContent = message
  toast.appendChild(messageNode)
  if (action) {
    const actionButton = document.createElement('button')
    actionButton.type = 'button'
    actionButton.textContent = action.label
    actionButton.style.cssText = 'margin-left:12px;border:1px solid rgba(255,255,255,.65);border-radius:5px;background:transparent;color:#fff;padding:3px 8px;cursor:pointer;font-size:12px;'
    actionButton.addEventListener('click', () => {
      action.onClick()
      toast.remove()
    })
    toast.appendChild(actionButton)
  }
  document.body.appendChild(toast)
  setTimeout(() => {
    toast.style.opacity = '0'
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

async function init() {
  const platform = detectPlatform()
  if (!platform) return

  try {
    setLocale(await initializeLocale())
  } catch {
    // Keep the default locale when extension storage is unavailable.
  }

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

      const settings = await getSettings()
      const usedFallback = !result?.success && result?.error !== 'local-only'
      if (usedFallback) showToast(t('toast.fallback'), 'error')
      const initialOptimized = result?.success && result.text ? result.text : localOptimize(text, settings.optimizeStyle)
      const preview = await previewOptimization(
        text,
        initialOptimized,
        getLocale(),
        settings.optimizeStyle,
        async style => localOptimize(text, style),
      )
      if (preview.decision === 'cancel') {
        floatingBtn.setState('idle')
        return
      }

      await platform.setInputContent(preview.text)
      await recordOptimization({ originalText: text, optimizedText: preview.text, style: preview.style })
      await incrementUsage()
      floatingBtn.setState('success')
      showToast(t('toast.optimized'), 'info', {
        label: t('btn.undo'),
        onClick: () => platform.setInputContent(text),
      })
    } catch (error) {
      console.error('[PromptPro] optimization failed', error)
      floatingBtn.setState('error')
      showToast(t('toast.error'), 'error')
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
