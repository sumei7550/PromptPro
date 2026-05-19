# Changelog / 变更日志

All notable changes to PromptPro are documented here.  
格式遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)。

---

## [1.0.0] — 2026-05-17

### Added / 新增
- 5 个 AI 平台适配器：ChatGPT、Claude、Gemini、DeepSeek、豆包
- Shadow DOM 浮动按钮（一键提示词优化）
- Background 隐藏 tab 优化方案 + 本地规则引擎 fallback
- Popup 模板库 UI（分类导航 + 全文搜索）
- 62 个中英双语模板，覆盖 8 大分类：
  - 写作 (8) · 职场 (10) · 编程 (10) · 翻译 (5) · 营销 (6) · 学术 (6) · 分析 (6) · 创意 (11)
- 中英双语 UI 切换（Popup 顶部按钮）
- 模板标题、描述、prompt、tags 全部双语化
- 语言选择持久化到 chrome.storage.local
- 模板"插入"按钮：支持 content script 转发 + scripting 注入兜底 + 剪贴板降级
- 浏览器原生 `_locales/` 本地化（扩展名称、描述）

### Fixed / 修复
- 修复 Popup "插入"按钮在非 AI 页面无反应的问题（加 scripting 权限兜底）
- 修复英文界面下 tags 仍显示中文（tags 改为 `{ zh, en }` 结构）
- 修复英文界面下插入的模板内容为中文（prompt 改为双语结构）
- 修复头部语言切换不持久化（同步保存到 storage）

### Technical / 技术
- 项目脚手架：Vite 5 + @crxjs/vite-plugin + React 18 + TypeScript + Tailwind CSS
- Chrome Manifest V3，最小权限（storage / activeTab / tabs / scripting）
- PlatformAdapter 基类抽象，新增平台 < 50 行代码
- 构建产物约 250KB

---

## [Unreleased] — 计划中

### Planned / 计划
- 自定义模板（用户创建/编辑）
- 优化历史记录
- 优化风格选择（详细/简洁/学术/口语）
- 模板变量填充 UI
- 快捷键支持（Ctrl+Shift+P）
- 右键菜单集成
