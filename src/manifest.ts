import { ManifestV3Export } from '@crxjs/vite-plugin'

const manifest: ManifestV3Export = {
  manifest_version: 3,
  name: '__MSG_extName__',
  version: '1.1.0',
  description: '__MSG_extDescription__',
  default_locale: 'en',
  icons: {
    '16': 'src/assets/icons/icon16.png',
    '48': 'src/assets/icons/icon48.png',
    '128': 'src/assets/icons/icon128.png',
  },
  permissions: ['storage', 'scripting', 'contextMenus'],
  host_permissions: [
    'https://chatgpt.com/*',
    'https://claude.ai/*',
    'https://gemini.google.com/*',
    'https://chat.deepseek.com/*',
    'https://www.doubao.com/*',
    'https://www.perplexity.ai/*',
    'https://perplexity.ai/*',
    'https://copilot.microsoft.com/*',
    'https://copilot.com/*',
    'https://grok.com/*',
    'https://x.com/i/grok*',
    'https://aistudio.google.com/*',
    'https://cursor.com/*',
    'https://v0.dev/*',
    'https://lovable.dev/*',
  ],
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: [
        'https://chatgpt.com/*',
        'https://claude.ai/*',
        'https://gemini.google.com/*',
        'https://chat.deepseek.com/*',
        'https://www.doubao.com/*',
        'https://www.perplexity.ai/*',
        'https://perplexity.ai/*',
        'https://copilot.microsoft.com/*',
        'https://copilot.com/*',
        'https://grok.com/*',
        'https://x.com/i/grok*',
        'https://aistudio.google.com/*',
        'https://cursor.com/*',
        'https://v0.dev/*',
        'https://lovable.dev/*',
      ],
      js: ['src/content/index.ts'],
      run_at: 'document_idle',
    },
  ],
  action: {
    default_popup: 'src/popup/index.html',
    default_icon: {
      '16': 'src/assets/icons/icon16.png',
      '48': 'src/assets/icons/icon48.png',
      '128': 'src/assets/icons/icon128.png'
    },
  },
}

export default manifest
