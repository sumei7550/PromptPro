# AGENTS.md

## 项目概述

PromptPro 是一个基于 Vite、React、TypeScript 和 CRXJS 的 Chrome Manifest V3 扩展。它在支持的 AI 网站上提供本地提示词优化、双语提示词模板库和模板插入功能；设置、个人模板及优化历史使用 `chrome.storage.local` 保存。项目无后端和账号系统。

## 目录与文件归属

- `src/`：源文件，提交的主要实现代码。
  - `src/manifest.ts`：Manifest V3、权限、站点匹配、popup、content script 和 service worker 配置。
  - `src/content/`：页面内 content script、本地优化器、浮动按钮、平台检测和各 AI 平台适配器。
  - `src/popup/`：React 弹窗及模板、搜索、设置、个人资产等组件和样式。
  - `src/background/`：扩展 service worker 与右键菜单/跨上下文消息处理。
  - `src/shared/`：共享类型、常量、`chrome.storage` 封装、i18n 和模板数据。
  - `src/assets/`：源图标资源。
- `public/`：随扩展复制的静态源资源，包括 `_locales` 国际化消息和中英文隐私说明页面。
- `doc/`：产品、架构、路线图、验收、会话和变更文档；功能或流程变化时仅在相关内容仍准确的情况下同步更新。
- `package.json` / `package-lock.json`：依赖和脚本；使用 npm 并保持 lockfile 同步。
- `vite.config.ts`、`tsconfig.json`、`tailwind.config.js`、`postcss.config.js`：构建和类型检查配置。
- `dist/`、`dist-1.1.0/`、`dist-new/`：生成的扩展构建产物或历史产物，不是源文件；不要直接修改。当前 Vite 输出目录是 `dist-new/`。
- `node_modules/`：依赖安装生成目录，不是源文件；不要直接修改或提交。
- `test-optimizer.js`：历史手工检查脚本，引用硬编码的旧构建文件名，不是已配置的自动化测试入口。

## 安装、构建与运行

在仓库根目录执行：

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` 先执行 TypeScript 检查，再用 Vite/CRXJS 构建到 `dist-new/`。开发或构建后，在 Chrome 的 `chrome://extensions/` 开启开发者模式，加载/重新加载 `dist-new/` 解压目录。项目没有额外的测试、lint 或格式化 npm script，不要凭空添加或声称存在这些命令。

## 编码规范

- 遵循现有 TypeScript/React 风格和严格类型检查；保持 `strict`、`noUnusedLocals`、`noUnusedParameters` 等 tsconfig 约束通过。
- 使用现有 `@/*`（指向 `src/*`）别名；共享逻辑放 `src/shared/`，不要在 popup 与 content 中复制存储、类型或模板定义。
- 平台差异优先收敛在 `src/content/platforms/` 的适配器中；修改输入框写入或选择器时，兼顾各平台的 DOM/事件行为。
- UI 文案同时维护中英文来源；浏览器 `_locales` 消息与隐私页面涉及的权限说明也要同步更新。
- 修改应尽量小而聚焦，不要改写生成目录来“修复”源码问题。

## 权限、隐私与安全约束

- 不得把用户提示词、模板、设置或历史发送到新的远端服务，也不得引入账号、遥测或后台数据收集，除非需求明确批准并同步更新隐私说明。
- `host_permissions` 和 `content_scripts.matches` 只保留确有功能需要的支持站点；新增站点必须同时评估权限范围、平台适配、隐私页面和手工验收。
- 不要扩大 `storage`、`activeTab`、`scripting`、`contextMenus` 或主机权限；不要自动导航、自动发送消息或代替用户执行提交操作。
- 仅在用户操作需要时使用脚本注入；避免记录或输出页面中的敏感提示词。继续使用 `chrome.storage.local` 的本地优先策略，并注意存储数据的数量上限和迁移兼容性。
- 发布前核对 `src/manifest.ts` 的版本、权限、站点列表、图标、locale 和隐私页面；发布包只能来自经过验证的 `dist-new/` 构建产物，不要手工编辑打包文件。

## 测试与完成标准

- 每次代码修改至少运行 `npm run build`，确认 TypeScript 和 Vite 构建成功。
- 涉及 popup、content script、平台选择器、模板插入、存储或权限的修改：在 Chrome 中重新加载 `dist-new/`，至少验证对应功能和受影响的支持平台；检查中英文切换及控制台是否有新增错误。
- 涉及优化器时，覆盖中英文输入、空输入/边界输入和结果写回输入框；不要直接依赖当前硬编码旧路径的 `test-optimizer.js`。
- 完成前确认没有把 `node_modules/` 或 `dist*` 生成物当作源码修改，权限和隐私说明与实际行为一致，且相关文档没有明显过期。
