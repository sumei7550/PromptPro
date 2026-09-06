import { detectPlatform } from './platform-detector'
import { FloatingButton } from './floating-button'
import type { Platform } from '@/shared/types'
import { consumeFreeAiImproves, getFreeUsageState, initializeLocale, getSettings, recordOptimization } from '@/shared/storage'
import { getLocale, setLocale, t } from '@/shared/i18n'
import { getOptimizationMode, previewOptimization } from './preview'
import { ChatGPTAdapter } from './platforms/chatgpt'
import { ChatGPTInputLifecycle } from './lifecycle'
import { optimizePrompt } from '@/services/optimization-service'
import { classifyOptimizationError, hasPromptInput, type ImproveErrorKind } from './improve-flow'
import { PromptPanel } from './prompt-panel'

function showToast(message: string, type: 'info' | 'error' = 'info', action?: { label: string; onClick: () => void }) {
  const existing = document.getElementById('promptpro-toast')
  if (existing) existing.remove()

  const toast = document.createElement('div')
  toast.id = 'promptpro-toast'
  toast.setAttribute('role', type === 'error' ? 'alert' : 'status')
  const bg = type === 'error' ? '#b42318' : '#4f46e5'
  toast.style.cssText = `
    position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    max-width: min(520px, calc(100vw - 32px)); background: ${bg}; color: white;
    padding: 10px 16px; border-radius: 9px; font-size: 13px; line-height: 1.45;
    z-index: 2147483647; box-shadow: 0 6px 20px rgba(0,0,0,.18);
    transition: opacity .2s;
  `
  const messageNode = document.createElement('span')
  messageNode.textContent = message
  toast.appendChild(messageNode)
  if (action) {
    const actionButton = document.createElement('button')
    actionButton.type = 'button'
    actionButton.textContent = action.label
    actionButton.style.cssText = 'margin-left:12px;border:1px solid rgba(255,255,255,.65);border-radius:6px;background:transparent;color:#fff;padding:3px 8px;cursor:pointer;font-size:12px;'
    actionButton.addEventListener('click', () => {
      action.onClick()
      toast.remove()
    })
    toast.appendChild(actionButton)
  }
  document.body.appendChild(toast)
  window.setTimeout(() => {
    toast.style.opacity = '0'
    window.setTimeout(() => toast.remove(), 200)
  }, 3600)
}

function getOptimizationErrorMessage(error: unknown): string {
  const keys: Record<ImproveErrorKind, string> = {
    network: 'improve.error.network',
    timeout: 'improve.error.timeout',
    service: 'improve.error.service',
    'malformed-response': 'improve.error.malformed',
    'input-changed': 'improve.error.inputChanged',
    'input-unavailable': 'improve.error.inputUnavailable',
    'replace-failed': 'improve.error.replaceFailed',
    'quota-exhausted': 'improve.error.quotaExhausted',
    unknown: 'improve.error.unknown',
  }
  return t(keys[classifyOptimizationError(error)])
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

  let improveInFlight = false
  const promptPanel = new PromptPanel()
  const runImprove = async (): Promise<void> => {
    if (improveInFlight) return
    const inputSnapshot = platform.readInput()
    const text = inputSnapshot?.text.trim() ?? ''
    if (!text) {
      floatingBtn.refresh()
      return
    }

    improveInFlight = true
    floatingBtn.setState('loading')

    try {
      const usage = await getFreeUsageState()
      if (usage.quotaExhausted) {
        promptPanel.showQuotaExhausted(usage.resetAt)
        floatingBtn.setState('ready')
        return
      }

      const settings = await getSettings()
      const request = {
        originalText: text,
        locale: getLocale(),
        platform: platform.name as Platform,
        style: settings.optimizeStyle,
      } as const
      const initialResult = await optimizePrompt(request)
      if (getOptimizationMode(initialResult) === 'ai') await consumeFreeAiImproves(1)
      const remainingAfterInitial = (await getFreeUsageState()).remaining
      const promptPanelMount = promptPanel.handoff()
      floatingBtn.setState('ready')
      const preview = await previewOptimization(
        text,
        initialResult,
        getLocale(),
        remainingAfterInitial,
        (await getFreeUsageState()).resetAt,
        settings.optimizeStyle,
        async style => {
          const currentUsage = await getFreeUsageState()
          if (currentUsage.remaining <= 0) {
            throw Object.assign(new Error('Free AI Improve quota exhausted.'), { code: 'quota-exhausted' })
          }
          return optimizePrompt({ ...request, style })
        },
        async result => {
          if (getOptimizationMode(result) === 'ai') await consumeFreeAiImproves(1)
        },
        async improvedText => platform.replaceInput(improvedText, inputSnapshot ?? undefined),
        promptPanelMount,
      )
      if (preview.decision === 'cancel') {
        floatingBtn.setState('idle')
        floatingBtn.focus()
        return
      }

      await recordOptimization({ originalText: text, optimizedText: preview.text, style: preview.style })
      floatingBtn.setState('success')
      showToast(t('toast.optimized'), 'info', {
        label: t('btn.undo'),
        onClick: () => {
          void platform.replaceInput(text, preview.replacementSnapshot).then(result => {
            if (!result.success) showToast(t('toast.error'), 'error')
          }).catch(() => showToast(t('toast.error'), 'error'))
        },
      })
    } catch (error) {
      console.error('[PromptPro] optimization failed', error)
      promptPanel.close()
      floatingBtn.setState('error')
      showToast(getOptimizationErrorMessage(error), 'error')
    } finally {
      improveInFlight = false
    }
  }

  floatingBtn.onClick(() => {
    void getFreeUsageState().then(usage => {
    floatingBtn.setPanelOpen(true)
    promptPanel.open({
      locale: getLocale(),
      getPrompt: () => platform.readInput()?.text ?? '',
      onImprove: () => { void runImprove() },
      onClose: () => floatingBtn.setPanelOpen(false),
      remaining: usage.remaining,
      resetAt: usage.resetAt,
    })
    if (usage.quotaExhausted) {
      promptPanel.showQuotaExhausted(usage.resetAt)
    } else if (hasPromptInput(platform.readInput()?.text)) {
      promptPanel.setLoading()
      void runImprove()
    }
    })
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
  void init()
}
