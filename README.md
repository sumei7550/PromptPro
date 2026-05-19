# PromptPro

> AI 提示词优化器 + 模板库 Chrome 插件  
> AI Prompt Optimizer + Template Library Chrome Extension

一款面向中英文用户的 Chrome 插件，在 ChatGPT / Claude / Gemini / DeepSeek / 豆包上提供一键提示词优化和 62 个分类模板。完全本地运行，无后端、无账号。

A Chrome extension for Chinese and English AI users. One-click prompt optimization and 62 categorized templates on ChatGPT, Claude, Gemini, DeepSeek, and Doubao. Fully local — no backend, no account required.

---

## 功能 / Features

- **一键优化** — 浮动按钮读取输入框文本，自动改写为结构化提示词
- **62 个模板** — 覆盖写作、职场、编程、翻译、营销、学术、分析、创意 8 大分类
- **5 平台适配** — ChatGPT · Claude · Gemini · DeepSeek · 豆包
- **中英双语** — UI 和模板内容均可切换
- **隐私优先** — 数据 100% 存储在 `chrome.storage.local`

---

## 快速开始 / Quick Start

### 环境要求

- Node.js ≥ 18
- npm ≥ 9
- Chrome ≥ 114

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

Vite + CRXJS 会输出到 `dist/`，支持 HMR 热更新。

### 生产构建

```bash
npm run build
```

### 加载到 Chrome

1. 打开 `chrome://extensions/`
2. 开启右上角 **开发者模式**
3. 点击 **加载已解压的扩展程序**
4. 选择项目 `dist/` 目录
5. 修改代码后点击插件卡片刷新按钮即可更新

---

## 使用方式 / Usage

1. 打开任意支持的 AI 平台
2. **优化提示词：** 在输入框输入文本 → 点击右上角紫色浮动按钮 → 自动优化并填回
3. **插入模板：** 点击浏览器工具栏 PromptPro 图标 → 选择分类/搜索 → 点击"插入"
4. **切换语言：** Popup 顶部 EN/中 按钮

---

## 技术栈 / Tech Stack

| 层 | 技术 |
|----|------|
| 构建 | Vite 5 + @crxjs/vite-plugin |
| UI | React 18 + TypeScript + Tailwind CSS |
| 状态 | Zustand |
| 内容脚本 | 原生 DOM + Shadow DOM |
| 扩展规范 | Chrome Manifest V3 |
| 存储 | chrome.storage.local |

---

## 项目结构 / Structure

```
promptpro/
├── src/
│   ├── manifest.ts              # MV3 manifest 定义
│   ├── background/index.ts      # Service Worker
│   ├── content/
│   │   ├── index.ts             # Content Script 入口
│   │   ├── platforms/           # 5 个平台适配器
│   │   ├── platform-detector.ts
│   │   ├── optimizer.ts         # 本地规则 fallback
│   │   └── floating-button.ts   # Shadow DOM 浮动按钮
│   ├── popup/
│   │   ├── App.tsx              # Popup 主组件
│   │   └── components/          # CategoryNav / SearchBar / TemplateLibrary / SettingsPanel
│   └── shared/
│       ├── types.ts             # 类型定义
│       ├── constants.ts         # 分类、Meta Prompt
│       ├── storage.ts           # chrome.storage 封装
│       ├── i18n/                # 中英双语文案
│       └── templates/           # 62 个模板数据
├── public/_locales/             # 浏览器原生 i18n
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

---

## 文档 / Docs

- [PRD.md](PRD.md) — 产品需求文档
- [ARCHITECTURE.md](ARCHITECTURE.md) — 技术架构设计
- [CHANGELOG.md](CHANGELOG.md) — 变更日志

---

## License

MIT
