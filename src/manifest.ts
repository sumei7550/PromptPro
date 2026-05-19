import { ManifestV3Export } from '@crxjs/vite-plugin'

const manifest: ManifestV3Export = {
  manifest_version: 3,
  name: 'PromptPro - AI Prompt Optimizer',
  version: '1.0.0',
  description: '__MSG_extDescription__',
  default_locale: 'zh_CN',
  icons: {
    '16': 'src/assets/icons/icon16.png',
    '48': 'src/assets/icons/icon48.png',
    '128': 'src/assets/icons/icon128.png',
  },
  permissions: ['storage', 'activeTab', 'tabs', 'scripting'],
  host_permissions: [
    'https://chatgpt.com/*',
    'https://claude.ai/*',
    'https://gemini.google.com/*',
    'https://chat.deepseek.com/*',
    'https://www.doubao.com/*',
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
    },
  },
}

export default manifest
