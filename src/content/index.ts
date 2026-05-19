import { detectPlatform } from './platform-detector'
import { FloatingButton } from './floating-button'
import { localOptimize, buildOptimizePrompt } from './optimizer'
import { Platform } from '@/shared/types'

function init() {
  const platform = detectPlatform()
  if (!platform) return

  const floatingBtn = new FloatingButton(platform)
  floatingBtn.mount()

  floatingBtn.onClick(async () => {
    const text = platform.getInputContent().trim()
    if (!text) return

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
        floatingBtn.setState('success')
      }
    } catch {
      const fallback = localOptimize(text)
      await platform.setInputContent(fallback)
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
