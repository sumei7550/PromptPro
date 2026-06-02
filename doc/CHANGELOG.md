# Changelog / 变更日志

All notable changes to PromptPro are documented here.  
格式遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)。

---
## [1.0.2] - 2026-06-02

### Fixed / 修复

**浮动按钮位置**
- 修复 ChatGPT 浮动按钮遮挡发送按钮：`ChatGPTAdapter` 新增 `getFloatingButtonPlacement()`，改用 `top-right-outside` 放在输入框右上方外侧。
- 修复 Gemini 浮动按钮落在输入框中部：`getFloatingButtonAnchor()` 改为从发送按钮回溯到包含 `rich-textarea` 的共同祖先，使 `rect.right` 对齐输入框真正的右边缘；placement `offsetX` 调整为 `2`。

**Claude 输入排版**
- 修复 Claude 输入框写入后丢失换行格式：`ClaudeAdapter` 覆盖 `setInputContent()`，按 `\n` 分割文本生成多个 `<p>`，保留段落结构，空行用 `<br>` 占位。

**构建验证**
- `npm run build` 通过，无 TS 报错。

---
## [1.0.1] - 2026-05-22

### 修复与优化

**提示词优化**
- `localOptimize()` 默认使用 smart 模式输出自然语言。
- 支持三种模式：`light` / `smart`（默认） / `pro`。
- 新增 `META_PROMPT_NATURAL` 用于隐藏标签页路径。
- 修复 fallback 路径未调用 `incrementUsage()`，保证优化次数统计正确。
- 版本号统一为 `1.0.1`，确保与 CHANGELOG 记录一致。

**文件调整**
- 删除未引用文件：`smartOptimizer.js`（逻辑已复用在 `optimizer.ts`）。
- 保留 dist 下的隐私政策文件供插件用户访问。
- 清理无用注释和调试代码（console.log），保留 `// TODO` 或 `// @keep`。

## [1.0.1] — 2026-05-21

### Added / 新增

- 插件 Logo 图标（入口图标 + 弹窗图标）
- 首次使用新手引导弹窗，自动识别 AI 对话页面
- 搜索升级：局部搜索 → 全局全文搜索
- 搜索支持结果跳转分类 + 自动滚动定位
- 中英文关键词模糊匹配、同义联想（sql ↔ mysql、test ↔ 测试）
- 提示词优化模板 B 方案正式落地
- 新增 smartOptimizer.js 本地优化核心模块（逻辑已迁移至 `optimizer.ts`，文件已删除）
- 免费次数耗尽弹窗提示机制

### Changed / 变更

- 优化悬浮气泡 z-index，解决 DeepSeek / Gemini 遮挡问题
- 统一全产品中英双语文案与提示语
- 优化次数统计逻辑，优化成功后自动扣减次数

### Fixed / 修复

- 修复免费次数为 0 时点击优化无响应、无提示 Bug
- 修复优化成功后次数不减少的统计 Bug
- 修复多平台悬浮气泡布局遮挡问题

### Technical / 技术

- 重建并补全 PRD.md 产品需求文档
- 完善会话日志CHANGELOG.md、版本日志归档CONVERSATION_LOG.md
- smartOptimizer 遵循 ES Module、无第三方依赖、中文注释

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
