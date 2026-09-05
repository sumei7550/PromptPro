import { detectPlatform } from './platform-detector'
import { FloatingButton } from './floating-button'
import { Platform } from '@/shared/types'
import { initializeLocale, incrementUsage, getRemainingUsage, getSettings, recordOptimization } from '@/shared/storage'
import { getLocale, setLocale, t } from '@/shared/i18n'
import { previewOptimization } from './preview'
import { ChatGPTAdapter } from './platforms/chatgpt'
import { ChatGPTInputLifecycle } from './lifecycle'
import { optimizePrompt } from '@/services/optimization-service'

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
  const chatGPTLifecycle = platform instanceof ChatGPTAdapter
    ? new ChatGPTInputLifecycle(platform)
    : null

  floatingBtn.mount({ observeDom: !chatGPTLifecycle })
  chatGPTLifecycle?.onStateChange(() => floatingBtn.refresh())
  chatGPTLifecycle?.start()

  floatingBtn.onClick(async () => {
    const inputSnapshot = platform.readInput()
    const text = inputSnapshot?.text.trim() ?? ''
    if (!text) return

    const remaining = await getRemainingUsage()
    if (remaining <= 0) {
      showToast(t('toast.limit'), 'error')
      return
    }

    floatingBtn.setState('loading')

    try {
      const settings = await getSettings()
      const request = {
        originalText: text,
        locale: getLocale(),
        platform: platform.name as Platform,
        style: settings.optimizeStyle,
      } as const
      const initialResult = await optimizePrompt(request)
      const preview = await previewOptimization(
        text,
        initialResult.improvedText,
        getLocale(),
        settings.optimizeStyle,
        async style => (await optimizePrompt({ ...request, style })).improvedText,
      )
      if (preview.decision === 'cancel') {
        floatingBtn.setState('idle')
        return
      }

      const replacement = await platform.replaceInput(preview.text, inputSnapshot ?? undefined)
      if (!replacement.success) {
        throw new Error(`Input replacement failed: ${replacement.reason}${replacement.detail ? ` (${replacement.detail})` : ''}`)
      }
      await recordOptimization({ originalText: text, optimizedText: preview.text, style: preview.style })
      await incrementUsage()
      floatingBtn.setState('success')
      showToast(t('toast.optimized'), 'info', {
        label: t('btn.undo'),
        onClick: () => {
          void platform.replaceInput(text, replacement.snapshot).then(result => {
            if (!result.success) showToast(t('toast.error'), 'error')
          }).catch(() => showToast(t('toast.error'), 'error'))
        },
      })
    } catch (error) {
      console.error('[PromptPro] optimization failed', error)
      floatingBtn.setState('error')
      showToast(t('toast.error'), 'error')
    }
  })

  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'INSERT_TEMPLATE') {
      void platform.replaceInput(message.payload.text).then(result => {
        if (!result.success) console.warn(`[PromptPro] template insertion failed: ${result.reason}`)
      }).catch(error => console.warn('[PromptPro] template insertion failed', error))
    }
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
