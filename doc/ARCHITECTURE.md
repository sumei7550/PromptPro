# PromptPro — 技术架构 / Architecture

> v1.0.0 · 2026-05-19

---

## 一、系统总览 / System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Chrome Extension (MV3)                    │
├──────────────┬──────────────────────┬───────────────────────┤
│   Popup      │   Background (SW)    │   Content Script      │
│  (React UI)  │   (Service Worker)   │   (per AI platform)   │
├──────────────┼──────────────────────┼───────────────────────┤
│ - 模板浏览    │ - 消息路由            │ - 浮动按钮 (Shadow DOM)│
│ - 搜索/分类   │ - 隐藏 tab 优化       │ - 输入框读写           │
│ - 设置面板    │ - scripting 注入兜底  │ - 平台适配器           │
│ - 语言切换    │                      │ - 本地规则 fallback    │
└──────────────┴──────────────────────┴───────────────────────┘
                          ↕ chrome.storage.local
```

## 二、模块划分 / Module Breakdown

### 2.1 Content Script (`src/content/`)

| 文件 | 职责 |
|------|------|
| `index.ts` | 入口：检测平台 → 初始化适配器 → 挂载浮动按钮 |
| `platform-detector.ts` | 根据 `location.hostname` 返回平台标识 |
| `platforms/base.ts` | `PlatformAdapter` 抽象基类（getInput / setInput / isReady） |
| `platforms/chatgpt.ts` | ChatGPT ProseMirror 适配 |
| `platforms/claude.ts` | Claude ProseMirror 适配 |
| `platforms/gemini.ts` | Gemini `rich-textarea` Shadow DOM 穿透 |
| `platforms/deepseek.ts` | DeepSeek 原生 textarea |
| `platforms/doubao.ts` | 豆包运行时检测 |
| `floating-button.ts` | Shadow DOM 浮动按钮组件 |
| `optimizer.ts` | 本地规则引擎 fallback |

### 2.2 Background (`src/background/`)

- Service Worker，无持久状态
- 职责：
  1. 接收 Popup 的 `INSERT_TEMPLATE` 消息 → 转发给 Content Script
  2. 接收 Content Script 的优化请求 → 创建隐藏 tab → 注入 Meta Prompt → 提取结果 → 返回
  3. 当 Content Script 未加载时，用 `chrome.scripting.executeScript` 注入一次性函数

### 2.3 Popup (`src/popup/`)

- React 18 SPA，打包为独立 HTML
- 组件：
  - `App.tsx` — 布局 + 语言切换 + 状态管理
  - `CategoryNav.tsx` — 8 分类横向导航
  - `SearchBar.tsx` — 全文搜索（标题/描述/标签）
  - `TemplateLibrary.tsx` — 模板卡片列表
  - `SettingsPanel.tsx` — 设置面板

### 2.4 Shared (`src/shared/`)

- `types.ts` — `PromptTemplate`、`Settings`、`Platform` 等类型
- `constants.ts` — 分类列表、Meta Prompt 文本
- `storage.ts` — `chrome.storage.local` 的 get/set 封装
- `i18n/` — 中英文案 JSON
- `templates/` — 按分类拆分的 62 个模板数据文件

---

## 三、关键流程 / Key Flows

### 3.1 提示词优化流程

```
用户在 AI 页面输入文本
  → 点击浮动按钮
  → Content Script 读取输入框文本
  → 发送 { type: 'OPTIMIZE', text } 给 Background
  → Background 创建隐藏 tab（同一 AI 平台）
  → 在隐藏 tab 注入 Meta Prompt + 用户文本
  → 等待 AI 回复完成
  → 提取优化后的文本
  → 关闭隐藏 tab
  → 返回结果给 Content Script
  → Content Script 写入输入框
  → 浮动按钮显示 ✓ 成功状态
```

**Fallback 路径：** 如果隐藏 tab 方案失败（超时/权限问题），Content Script 调用本地 `optimizer.ts` 规则引擎进行基础优化。

### 3.2 模板插入流程

```
用户点击 Popup 中的"插入"按钮
  → Popup 发送 { type: 'INSERT_TEMPLATE', template, locale }
  → Background 接收
  → 查询当前活动 tab
  → URL 匹配支持的平台？
    ├─ 是 → chrome.tabs.sendMessage 转发给 Content Script
    │       → Content Script 调用 adapter.setInput(text)
    └─ 否 → chrome.scripting.executeScript 注入写入函数
            → 如果也失败 → 复制到剪贴板 + 通知用户
```

### 3.3 语言切换流程

```
用户点击 Popup 顶部 EN/中 按钮
  → React state 更新 locale
  → 同步保存到 chrome.storage.local
  → 所有组件重新渲染（模板标题/描述/标签按 locale 取值）
```

---

## 四、平台适配策略 / Platform Adapter Strategy

所有适配器继承 `PlatformAdapter` 基类：

```typescript
abstract class PlatformAdapter {
  abstract getInputElement(): HTMLElement | null
  abstract getInputText(): string
  abstract setInputText(text: string): void
  abstract isReady(): boolean
}
```

### 输入框写入方式

| 平台 | 输入框类型 | 写入策略 |
|------|-----------|----------|
| ChatGPT | ProseMirror `#prompt-textarea` | `execCommand('insertText')` + `InputEvent` |
| Claude | ProseMirror `div.ProseMirror[contenteditable]` | 同 ChatGPT |
| Gemini | `rich-textarea` (Web Component) | 穿透 Shadow DOM → 内部 textarea |
| DeepSeek | 原生 `<textarea>` | `nativeInputValueSetter.call()` + `input` event |
| 豆包 | textarea 或 contenteditable | 运行时检测后选择对应策略 |

### 为什么不用 `element.value = text`？

React/Vue 等框架使用受控组件，直接赋值不会触发框架的状态更新。必须通过原生事件（`InputEvent`）或 `Object.getOwnPropertyDescriptor` hack 来通知框架。

---

## 五、数据模型 / Data Model

### PromptTemplate

```typescript
interface PromptTemplate {
  id: string
  category: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  prompt: { zh: string; en: string }
  variables?: string[]
  tags: { zh: string; en: string }[]
}
```

### Settings

```typescript
interface Settings {
  locale: 'zh' | 'en'
  favorites: string[]        // template IDs
  dailyUsage: number
  lastResetDate: string
}
```

---

## 六、构建与打包 / Build Pipeline

```
源码 (TypeScript + React + Tailwind)
  → Vite 5 + @crxjs/vite-plugin
  → 自动生成 manifest.json
  → 输出 dist/
      ├── manifest.json
      ├── service-worker-loader.js
      ├── assets/index.html-*.js   (Popup bundle ~208KB)
      ├── assets/index.ts-*.js     (Content Script ~10KB)
      └── _locales/
```

- CRXJS 自动处理 manifest.ts → manifest.json 转换
- Content Script 和 Popup 分别打包为独立 chunk
- Tailwind 通过 PostCSS 在构建时 purge 未使用样式

---

## 七、安全设计 / Security

- **最小权限原则：** 仅申请 `storage`、`activeTab`、`tabs`、`scripting`
- **host_permissions 枚举：** 不使用 `<all_urls>`，仅 5 个明确域名
- **Shadow DOM 隔离：** 浮动按钮样式不影响宿主页面，宿主样式不泄漏
- **无外部网络请求：** 不向任何第三方服务器发送数据
- **CSP 兼容：** 不使用 `eval()`、`innerHTML` 注入脚本

---

## English Summary

PromptPro is a Chrome MV3 extension built with Vite + CRXJS + React 18 + TypeScript + Tailwind CSS. It consists of three layers:

1. **Content Script** — Injected into 5 AI platforms. Provides a Shadow DOM floating button and platform-specific input adapters.
2. **Background Service Worker** — Routes messages between Popup and Content Script. Handles hidden-tab optimization and scripting injection fallback.
3. **Popup** — React SPA for browsing/searching 62 bilingual templates and managing settings.

All data stays local (`chrome.storage.local`). No backend, no telemetry. Platform adapters are abstracted behind a base class, making it trivial to add new platforms.
