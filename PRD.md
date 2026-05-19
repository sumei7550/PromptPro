# PromptPro — 产品需求文档 (PRD)

> 版本 v1.0.0 · 2026-05-19 · 中英双语 / Bilingual

---

## 一、产品概述 / Overview

**PromptPro** 是一款面向中英文用户的 AI 提示词工具 Chrome 插件，提供两大核心能力：

1. **一键提示词优化器（Pretty Prompt 模式）** — 在 ChatGPT / Claude / Gemini / DeepSeek / 豆包等主流 AI 网站上，将口语化、不完整的提示词一键改写为结构化、高质量的提示词。
2. **分类模板库（62 个内置 + 8 大分类）** — 内置覆盖写作、职场、编程、翻译、营销、学术、分析、创意 8 大场景的中英双语提示词模板，一键插入到 AI 输入框。

完全本地运行，**无后端、无账号、无数据上传**，所有用户数据保存在 `chrome.storage.local`。

## 二、目标用户 / Target Users

- AI 工具重度使用者（每日 ≥10 次对话）
- 中英文内容创作者、程序员、运营、市场、学生、研究人员
- 不愿意自己写复杂提示词，希望"开箱即用"的实用主义者
- 对隐私敏感、不希望数据上传到第三方服务器的用户

## 三、核心价值主张 / Value Proposition

| 维度 | 说明 |
|------|------|
| 速度 | 浮动按钮一键触发，无需切换页面 |
| 质量 | 内置 Meta Prompt + 62 个精选模板 |
| 兼容 | 一次安装覆盖 5 个主流 AI 平台 |
| 本地 | 无后端依赖，数据 100% 本地存储 |
| 双语 | 模板内容、UI 全面支持中英文切换 |

## 四、功能需求 / Functional Requirements

### F1 提示词优化（核心）
- F1.1 在支持的 AI 平台页面右上角注入紫色浮动按钮
- F1.2 点击后读取当前输入框文本，生成优化后的提示词并写回
- F1.3 主方案：Background 创建隐藏 tab 调用 AI 完成优化
- F1.4 Fallback：本地规则引擎（角色补充、输出格式、结构化包装）
- F1.5 状态反馈：idle / loading / success / error

### F2 模板库
- F2.1 8 大分类共 62 个模板，全部支持中英双语
- F2.2 分类导航 + 全文搜索（标题、描述、标签）
- F2.3 模板卡片支持"插入"和"复制"两种动作
- F2.4 插入逻辑：检测当前 tab → 已加载 content script 直接转发，否则用 `chrome.scripting.executeScript` 注入兜底；非 AI 页面降级为剪贴板复制

### F3 平台适配
- F3.1 ChatGPT (`chatgpt.com`) — ProseMirror 输入框
- F3.2 Claude (`claude.ai`) — ProseMirror contenteditable
- F3.3 Gemini (`gemini.google.com`) — `rich-textarea` Web Component（穿透 Shadow DOM）
- F3.4 DeepSeek (`chat.deepseek.com`) — 原生 textarea
- F3.5 豆包 (`www.doubao.com`) — textarea / contenteditable 运行时检测
- F3.6 各平台需正确触发 React/Vue 受控组件的 input 事件

### F4 i18n 与设置
- F4.1 中英双语 UI（Popup 顶部 EN/中 切换按钮）
- F4.2 模板的标题、描述、prompt、tags 全部按 locale 切换
- F4.3 语言选择持久化到 `chrome.storage.local`
- F4.4 浏览器原生 `_locales/` 提供扩展名称、描述本地化

### F5 数据持久化
- F5.1 设置（语言、收藏夹、使用偏好）→ `chrome.storage.local`
- F5.2 模板数据内置在打包产物中，不动态下载
- F5.3 不收集任何用户行为数据，无遥测

## 五、非功能需求 / Non-Functional Requirements

- **性能：** Popup 首屏 < 200ms；浮动按钮注入 < 100ms；优化耗时取决于 AI 平台
- **包体：** 构建产物 ≤ 300KB（实际约 250KB）
- **兼容：** Chrome 114+，Manifest V3
- **安全：** 不申请 `<all_urls>` 权限；host_permissions 严格枚举 5 个平台
- **可维护：** 平台适配统一抽象为 `PlatformAdapter` 基类，新增平台 < 50 行代码

## 六、商业化路径 / Monetization

| 版本 | 定价 | 权益 |
|------|------|------|
| 免费版 | ¥0 | 每日 10 次优化、30 个模板、ChatGPT + Claude |
| Pro 版 | ¥29/月 或 ¥199/年 | 无限优化、62+ 全部模板、5 个全平台 |
| 验证方式 | Gumroad / LemonSqueezy License Key | 本地校验，无后端 |

## 七、版本规划 / Roadmap

- **v1.0（已发布）** — 5 个平台、62 个双语模板、Pretty Prompt 优化
- **v1.1** — 自定义模板、优化历史、风格选择、变量填充 UI
- **v1.2-1.3** — 100+ 模板、快捷键、右键菜单、数据导入导出
- **v2.0** — 付费验证、模板社区、Chrome Web Store 上架、日韩语言扩展

## 八、关键 KPI / Success Metrics

- 周活用户 ≥ 1,000（v1.0 上架 90 天内）
- 优化按钮日均点击 ≥ 3 次/用户
- 模板插入日均 ≥ 1 次/用户
- 付费转化率 ≥ 5%（参照竞品 Pretty Prompt 25%）

---

# English Version

## 1. Overview

**PromptPro** is a Chrome extension for both Chinese and English AI users, offering two core capabilities:

1. **One-click Prompt Optimizer (Pretty Prompt mode)** — On ChatGPT, Claude, Gemini, DeepSeek, and Doubao, rewrites colloquial, incomplete prompts into structured, high-quality ones with a single click.
2. **Categorized Template Library (62 built-in templates across 8 categories)** — Bilingual templates covering writing, workplace, coding, translation, marketing, academic, analysis, and creative scenarios. One-click insert into the AI input box.

Runs fully locally — **no backend, no account, no data upload**. All user data stored in `chrome.storage.local`.

## 2. Target Users

- Heavy AI tool users (≥ 10 chats/day)
- Chinese and English content creators, developers, marketers, students, researchers
- Pragmatists who don't want to write complex prompts manually
- Privacy-conscious users who reject third-party data collection

## 3. Value Proposition

| Dimension | Description |
|-----------|-------------|
| Speed | One-click floating button, no page switching |
| Quality | Built-in Meta Prompt + 62 curated templates |
| Coverage | Single install covers 5 major AI platforms |
| Local | No backend, 100% local storage |
| Bilingual | Full Chinese/English UI and template content |

## 4. Functional Requirements

### F1 Prompt Optimization (Core)
- F1.1 Inject a purple floating button at top-right on supported AI sites
- F1.2 On click, read the current input, generate an optimized prompt, write it back
- F1.3 Primary path: Background creates a hidden tab and invokes the AI itself
- F1.4 Fallback: local rule engine (role injection, output formatting, structural wrap)
- F1.5 States: idle / loading / success / error

### F2 Template Library
- F2.1 62 templates across 8 categories, all bilingual
- F2.2 Category nav + full-text search (title, description, tags)
- F2.3 Each card supports "insert" and "copy"
- F2.4 Insert flow: detect active tab → forward to content script if loaded; otherwise inject via `chrome.scripting.executeScript`; on non-AI pages fall back to clipboard

### F3 Platform Adapters
- F3.1 ChatGPT — ProseMirror editor
- F3.2 Claude — ProseMirror contenteditable
- F3.3 Gemini — `rich-textarea` Web Component (Shadow DOM piercing)
- F3.4 DeepSeek — native textarea
- F3.5 Doubao — runtime detection (textarea or contenteditable)
- F3.6 Must dispatch correct input events for React/Vue controlled components

### F4 i18n & Settings
- F4.1 Chinese/English UI toggle in Popup header
- F4.2 Template title, description, prompt, and tags switch by locale
- F4.3 Locale persisted in `chrome.storage.local`
- F4.4 Native `_locales/` for the extension name & description

### F5 Persistence
- F5.1 Settings (locale, favorites, preferences) → `chrome.storage.local`
- F5.2 Template data bundled at build time, not fetched dynamically
- F5.3 No user behavior tracking, no telemetry

## 5. Non-Functional Requirements

- **Performance:** Popup first paint < 200ms; floating button inject < 100ms
- **Bundle size:** ≤ 300KB (actual ~250KB)
- **Compatibility:** Chrome 114+, Manifest V3
- **Security:** No `<all_urls>`; host_permissions strictly enumerate 5 platforms
- **Maintainability:** Adapters abstracted via `PlatformAdapter` base class — new platform < 50 LOC

## 6. Monetization

| Tier | Price | Entitlements |
|------|-------|--------------|
| Free | $0 | 10 optimizations/day, 30 templates, ChatGPT + Claude |
| Pro | ¥29/mo or ¥199/yr | Unlimited, all 62+ templates, all 5 platforms |
| Verification | Gumroad / LemonSqueezy License Key | Local validation, no backend |

## 7. Roadmap

- **v1.0 (shipped)** — 5 platforms, 62 bilingual templates, Pretty Prompt optimization
- **v1.1** — Custom templates, optimization history, style selector, variable-fill UI
- **v1.2-1.3** — 100+ templates, hotkeys, context menu, import/export
- **v2.0** — Paid verification, template community, Chrome Web Store launch, JP/KR locales

## 8. Success Metrics

- Weekly active users ≥ 1,000 within 90 days post-launch
- Optimize button clicks ≥ 3/user/day
- Template inserts ≥ 1/user/day
- Paid conversion ≥ 5% (Pretty Prompt benchmark: 25%)
