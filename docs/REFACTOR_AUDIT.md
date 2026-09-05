# PromptPro 重构审计报告

审计范围：现有 Chrome 扩展源码、Manifest、共享存储、Popup、平台适配器、隐私与发布文档，以及 `docs/PromptPro_rebuild_plan.md`。

审计阶段：Phase 1，仅审计与规划；本报告没有启动 P0 开发，也没有删除或迁移用户数据。

审计结论：当前产品是一个可构建的 MV3、本地规则优化器和双语模板库。它已经具备页面浮动入口、结果预览、写回、撤销、模板和本地历史基础，但核心架构仍围绕 `Local Prompt Optimizer` 和“每日额度 + Popup 模板库”展开，与新版“页面内 Improve → Original/Improved → Use/Replace → Send”的产品闭环存在明显差距。建议在保留平台适配、写回机制、模板和本地存储基础的前提下，先重构 ChatGPT P0 流程，再扩展 Refine、订阅和留存功能。

## 1. Current Architecture

### 1.1 运行时分层

| 层 | 当前实现 | 主要职责 | 审计判断 |
|---|---|---|---|
| Manifest | `src/manifest.ts` | MV3、15 个 host pattern、Popup、service worker、content script | 配置可构建，但首发范围过宽；P0 应收敛到 ChatGPT |
| Content script | `src/content/index.ts` | 检测平台、挂载按钮、读取输入、调用本地优化、预览、写回、历史和额度 | 当前核心业务全部集中在此，状态边界不清 |
| UI入口 | `src/content/floating-button.ts` | Shadow DOM 圆形浮动按钮、定位、引导、状态 | 可复用入口基础，但需要变成页面内 Improve 控件/结果 UI |
| Platform adapter | `src/content/platforms/*` | 各平台输入框查询、读取、写入、发送按钮查询 | 抽象方向正确；实现仍高度依赖易变 selector |
| Local engine | `src/content/optimizer.ts` | 语言检测、关键词分类、上下文推断、规则骨架、风格追加 | 可复用为第一版 engine；当前输出机械、重型且和“Local”定位耦合 |
| Background | `src/background/index.ts` | 右键菜单、模板转发、额度检查 | 优化请求的消息往返是多余边界；存在过期架构注释和未使用发送/注入路径 |
| Popup | `src/popup/*` | 8 类模板、Fuse 搜索、个人资产、历史、设置、引导 | 现在是产品主界面；新版应降级为账户/留存/设置中心 |
| Shared | `src/shared/*` | 类型、常量、storage、i18n、66 条模板 | 数据基础可复用，但缺少统一产品状态与订阅模型 |

### 1.2 构建与验证

- 技术栈：Vite 5、CRXJS、React 18、TypeScript、Tailwind CSS、Fuse.js；`zustand` 已安装但当前源码未形成可见的统一状态层。
- `npm run build` 已通过，TypeScript 检查和 Vite 构建均成功，产物输出到 `dist-new/`。
- 构建仅有动态/静态导入提示：`constants.ts` 同时被动态和静态导入；不阻塞构建，但应在 storage 重构时消除。
- 项目没有配置好的自动化测试、lint 或格式化脚本；`test-optimizer.js` 是引用旧构建文件名的历史手工脚本，不应作为验收依据。
- 目前没有本轮真实 Chrome 平台验收证据。配置了平台不等于按钮定位、输入写回和刷新恢复已通过验证。

## 2. Current User Flow

### 2.1 页面优化流程

当前流程为：

`AI 页面输入 → 浮动按钮 → 读取输入 → 查询本地额度 → 发送 OPTIMIZE_PROMPT 到后台 → 后台返回 local-only → content script 调用 localOptimize → 预览弹窗 → 用户取消或应用 → 写回输入框 → 记录历史并扣每日额度 → Toast + 撤销`

它已经有 Original/Optimized 预览和确认后扣额度的保护，但仍有以下差异：

- 用户看到的入口文案是 `PromptPro Optimize`/“PromptPro 优化”，不是清晰的一级 Improve 入口。
- 结果 UI 是一次性手工 DOM overlay，缺少明确的 `Use Improved Prompt`、`Refine`、`Retry`、`Save` 状态体系。
- 应用后仍需用户自行发送；这是符合“不代用户提交”的安全约束，但产品流程需要明确表达为 `Use/Replace → 用户 Send`。
- 空输入直接静默返回，没有空态或引导。

### 2.2 模板流程

`Popup → 分类/搜索 → 插入或复制 → background 转发 → content adapter 写入；失败时由 Popup 复制`

模板变量、自定义模板、版本历史、导入导出和右键保存选中文本均已存在，但它们在当前体验中比优化闭环更突出。

### 2.3 Popup 流程

Popup 首屏显示模板分类、搜索、优化风格、剩余每日次数、个人资产、设置和新手引导。个人资产内混合了自定义模板、模板版本历史和优化历史。当前不存在登录、账户、Pro、Upgrade、订阅管理或独立 Saved Prompts 产品状态。

## 3. Gap vs New PromptPro

| 新版要求 | 当前状态 | 差距 |
|---|---|---|
| 产品名称 PromptPro: AI Prompt Enhancer | Manifest 名称通过 locale 仍为旧名；website 和商店文案多处仍为旧定位 | 需要统一列出并分阶段更新，不能只改一个 manifest 字段 |
| ChatGPT 页面内 Improve | 有页面浮动按钮 | 入口位置和状态仍是通用浮动按钮，不是稳定的输入区集成 |
| Improved Prompt 结果展示 | 有 Original/Optimized 预览 | 没有新版 result state、Retry/Refine/Save 入口和一致交互 |
| Use / Replace | 应用按钮会调用 adapter 写回 | 可复用；需要保证 SPA 重渲染、焦点、格式和写回后状态稳定 |
| Send | adapter 有 `triggerSend()` | 当前流程不调用，且新版也不应自动发送；需要只保留为平台能力或明确禁用 |
| Refine | 未实现 | 缺问题生成、跳过、快捷选项和二次优化状态 |
| History | 本地最多 50 条，只有原文/优化文/风格/时间 | 缺自动标题、平台、Reuse、搜索、免费/Pro 保留规则 |
| Saved Prompts | 自定义模板可作为底层基础 | 语义和入口仍是 Personal Assets/模板管理，不是满意结果后的 Saved |
| Prompt Types | 规则引擎内部分类和 Popup 优化风格 | 没有自动识别展示、可选高级类型和 Pro 分层 |
| Free / Pro | 只有每日 10 次本地计数 | 没有每周窗口、Refine 独立额度、license、订阅或 paywall |
| ChatGPT P0 | 有专用 adapter | 尚未真实 Chrome 验证，DOM 和 SPA 恢复风险高 |
| Claude/Gemini P1 | 有专用 adapter | 可复用代码，但不应在 ChatGPT P0 未稳定前扩展承诺 |

### 当前功能分类

| 分类 | 当前功能 | 决策 |
|---|---|---|
| A. 保留 | MV3/Vite/React/TypeScript 技术栈；PlatformAdapter 抽象；ChatGPT/Claude/Gemini 专用 adapter；textarea/contenteditable 写回工具；Shadow DOM 隔离；本地 storage；双语基础；模板变量基础 | 这些是新版核心的低成本基础 |
| B. 重构 | `content/index.ts` 编排；`optimizer.ts`；浮动按钮；preview；storage schema；额度；Popup；history/custom template 命名和模型；manifest 平台范围 | 当前职责耦合或产品语义不匹配，需要保持行为兼容地拆边界 |
| C. 降级 | 8 分类公共模板首页、复杂个人资产、导入导出、版本历史、优化风格选择、通用平台列表、右键保存模板 | 作为二级/后续能力保留底层，但不占首屏和 Improve 路径 |
| D. 删除或暂缓 | 隐藏 tab/远程 AI 优化遗留路径；未使用的自动发送路径；无新版价值的过宽通用平台首发承诺；与核心闭环无关的新增功能 | 避免继续维护冲突架构；删除前必须确认没有用户数据或发布依赖 |
| E. 新增 | Improve 状态机；ChatGPT 页面内 result UI；Retry/Refine；明确 Use/Replace；weekly usage；subscription/license 抽象；Saved/History 独立语义；平台生命周期和 input detection 层；P0 验收测试 | 这些是新版闭环缺失的最小能力 |

## 4. Reusable Components

优先复用以下代码，不应因重构另起一个 extension：

1. `src/manifest.ts` 的 MV3、Popup、service worker、locale 结构和现有 extension ID 发布路径。
2. `src/content/platforms/base.ts` 的 adapter 抽象、textarea setter 和 contenteditable 写入思路；需要增强返回值和失败原因。
3. `src/content/platforms/chatgpt.ts` 的 ChatGPT 专用 selector 集合和发送按钮识别起点；必须经过实测和版本化维护。
4. `claude.ts`、`gemini.ts` 的平台隔离方式，作为 P1 adapter 起点，不在 P0 直接承诺稳定性。
5. `src/content/floating-button.ts` 的 Shadow DOM 样式隔离、固定层级和 loading/success/error 状态基础；入口和布局需要改造。
6. `src/content/optimizer.ts` 的中英文检测、类别关键词、上下文推断和自然语言输出约束；需要把规则数据与 orchestration 分离。
7. `src/shared/storage.ts` 的 local-first 存储和旧 sync 设置读取迁移；必须保留兼容入口并加入版本化迁移。
8. `PromptTemplate`、`PersonalTemplate`、`OptimizationHistoryEntry` 的部分字段和模板数据；应映射到新版 Saved/History，而不是破坏旧键。
9. Popup 的 Fuse 搜索、模板变量表单、个人模板编辑、隐私政策链接和中英文基础。
10. 现有品牌图标、locale 目录和隐私页面；不复制竞品品牌、代码、视觉素材或逐字文案。

## 5. Components to Refactor

### 5.1 Content orchestration

`src/content/index.ts` 同时负责平台初始化、额度、消息调用、本地优化、预览、写回、历史、撤销和 Toast。建议拆为轻量 orchestrator，至少分出：

- `input-detection`：读取、规范化、空态和当前输入实例变化；
- `improve-controller`：idle/loading/success/error/limit 状态机；
- `optimizer-engine`：输入 → 结构化分析 → 输出，不直接访问 DOM 或 storage；
- `result-ui`：Original/Improved、Use/Replace、Retry、Refine、Save；
- `history-service` 和 `usage-service`：独立持久化和额度决策。

### 5.2 Optimizer

当前 `localOptimize()` 默认 `smart`，基于少量关键词选一个类别骨架，并无感追加固定 guidance。风险是同类输入得到近似输出，输出可能只是更长而非更准确；`detectLanguage()` 在空白输入上存在 `0/0`，虽由入口提前阻止，仍应由纯函数测试覆盖。

第一阶段不应引入未经批准的远程模型或新产品功能。建议先保留本地 engine 接口，输出 `ImprovementResult`（文本、检测类型、缺失信息提示、可选 refine 问题），让后续实现可以替换 engine 而不影响页面 UI。

### 5.3 Preview/result UI

`preview.ts` 目前用命令式 DOM、硬编码中英文案和 inline style 构建 dialog。可复用 Original/Optimized 对比逻辑，但应升级为可测试的 result UI，并处理：loading、成功、Retry 失败、Refine available、limit reached、写回失败和页面输入已变化等状态。重新生成回调异常时当前实现没有明确 catch，可能出现未处理 rejection。

### 5.4 Storage and usage

当前 `Settings` 把 locale、风格和额度塞在同一个对象；`incrementUsage()` 使用读-改-写，多个快速点击/多个页面同时操作可能超计数或重复消费。新版应采用版本化 envelope、原子/串行更新策略和明确的 `canUse/consume` 事务语义。旧键必须只读兼容、可回滚迁移，不清除用户数据。

### 5.5 Popup

`App.tsx` 目前是模板库首屏和多个页面状态的单文件编排。建议保留组件，改变信息架构：首屏显示计划/额度/最近 History/Saved 入口；模板库降为 Saved 或低优先级 library。Settings 目前有优化风格、每日 10 次、Ko-fi 和隐私链接；需要去掉“每日”产品语义，增加 Free/Pro 状态占位，但不在本阶段实现支付。

## 6. Components to Remove or Downgrade

- **降级隐藏 tab/远程优化历史架构**：当前实际代码已不创建隐藏 tab，`background` 注释和 `handleOptimize` 的消息边界仍保留旧思想；清理为本地 engine 的内部服务，避免误导维护者。
- **降级通用 adapter 平台数量**：Perplexity、Copilot、Grok、Google AI Studio、Cursor、v0、Lovable 目前只复用 GenericAdapter，不能等同专用支持。P0 只发布 ChatGPT 体验；P1 再逐个实测 Claude/Gemini。
- **降级 8 类公共模板**：保留数据和搜索能力，但不再是首页第一入口；不把产品做成模板商城。
- **降级导入/导出和右键保存**：这些可留作高级留存功能，但要在新版核心闭环稳定后再评估；导入不应覆盖现有数据。
- **删除/重写过期架构文档表述**：`docs/ARCHITECTURE.md` 仍描述隐藏 tab、5 个平台和旧数据模型；本阶段只在后续代码改造同步时更新，避免把审计报告之外的文档改动扩大范围。
- **不删除当前用户本地数据**：任何旧字段、旧模板和历史键都不能因功能降级直接清除。

## 7. Missing Components

新版最小缺口如下：

1. `Improve` 一级入口和面向输入区的稳定挂载策略。
2. 可取消/可恢复的 Improve 状态机及请求去重。
3. Result UI：Original、Improved、Use/Replace、Retry、Refine、Save。
4. Refine 问题模型：少量高价值问题、快捷选项、跳过、合并回答、二次结果。
5. 输入变更检测：优化期间用户修改原文时不得覆盖新内容。
6. weekly Improve/Refine usage 基础框架，支持 Free/Pro 两种 policy。
7. license/subscription 状态抽象；当前不接支付服务，只定义可迁移的本地状态边界。
8. History 标题、平台、Reuse、搜索和免费/Pro 保留策略。
9. Saved Prompt 独立语义和从结果页保存/复用入口。
10. Prompt Type 自动识别与后续高级选择。
11. SPA 路由/DOM 生命周期管理、adapter readiness 和可观测的失败原因。
12. 自动化纯函数测试和至少一套 Chrome 手工回归清单；当前没有可配置测试脚本。

## 8. Storage Migration Risks

### 当前数据

当前 `chrome.storage.local` 键包括：

- `settings`：locale、optimizeStyle、dailyUsage、lastResetDate、可选 localeSetByUser；
- `customTemplates`：最多 10 条 `PersonalTemplate`，含 versions、favorite、useCount；
- `optimizationHistory`：最多 50 条原文/优化文/风格/时间；
- `promptpro_guide_shown`、`promptpro_popup_onboarded`；
- `pendingTemplateDraft`：右键菜单临时草稿。

`getSettings()` 在 local 缺失时读取一次 `chrome.storage.sync.settings` 并写入 local。这个迁移行为必须保留并记录版本，不应声称从未访问 Sync。

### 风险与方案

- `dailyUsage/lastResetDate` 不能直接解释成新版 weekly usage；迁移时保留旧字段，新增独立 usage ledger 或新字段，并按明确的迁移起始时间计算，避免向用户凭空扣除次数。
- `OptimizationHistoryEntry` 缺 platform/title，新增字段必须 optional 或通过 schema version 兼容旧条目。
- `PersonalTemplate` 可以映射为 Saved，但不要把旧 `customTemplates` 键直接覆盖为新结构；采用读旧写新、双读兼容或一次性可回滚迁移。
- 任何 `clear history`/`clear saved` 操作都必须精确限定键，不能调用清空整个 extension storage。
- 读-改-写会有并发覆盖和配额重复消费风险；需要 service 层串行化、按 operation id 去重或使用单一 writer。
- 本地存储存在容量限制；新版 History/Saved 的 Free/Pro 保留规则应在写入前裁剪，并避免把重复原文无限追加。

## 9. Platform Adapter Assessment

### 通用判断

PlatformAdapter 的方向正确，但接口同时包含 `triggerSend()` 和浮动按钮定位，混合了输入能力与产品 UI。建议 adapter 只负责 readiness、读取、写入、定位锚点和可选 send capability；不由 PromptPro 自动提交消息。

### 平台矩阵

| 平台 | 当前适配 | 可复用程度 | 主要风险/建议 |
|---|---|---:|---|
| ChatGPT | 专用 adapter，`#prompt-textarea`、contenteditable fallback、send selectors | 高，P0 起点 | selector、ProseMirror 事件、SPA/登录状态、页面刷新；必须真实 Chrome 验证 |
| Claude | 专用 ProseMirror/contenteditable adapter | 中高，P1 | selector 和写回事件易变；沿用接口但暂不承诺 |
| Gemini | 专用 adapter，尝试穿透 `rich-textarea.shadowRoot` | 中 | Shadow DOM 结构变化；需要检查 anchor 和输入事件 |
| DeepSeek | 专用 textarea adapter | 中 | 不属于新版 P0；send selector `button:has(svg)` 过宽 |
| 豆包 | 专用 textarea/contenteditable fallback | 中 | 站点 DOM 变化和中文 aria-label；需实测 |
| Perplexity/Copilot/Grok/AI Studio/Cursor/v0/Lovable | GenericAdapter | 低 | 通用 selector 只能证明尝试，不足以作为稳定平台功能；P2 或逐个专用化 |

建议新增 adapter contract：`getInput(): InputHandle | null`、`read() -> {text, element, identity}`、`replace(text, expectedIdentity) -> Result`、`observeReady(callback)`；保留 `triggerSend` 但默认不从 Improve 流程调用。

## 10. ChatGPT Integration Assessment

### 可复用部分

- `ChatGPTAdapter` 已有专用 selector 顺序；`getInputContent`、`setInputContent` 和 `getFloatingButtonAnchor` 可作为 P0 起点。
- `base.ts` 的原生 setter/`execCommand` 思路说明作者已考虑受控 DOM 的事件同步。
- Shadow DOM 浮动入口可以减少宿主页面 CSS 污染。

### 关键问题

- `#prompt-textarea`、`data-placeholder` 和 `.ProseMirror` 都是非稳定实现细节；需要记录 selector 版本和 fallback 命中情况，而不是只堆 selector。
- `getInputContent()` 通过 `innerText || textContent` 读取，可能引入不可见文本、段落换行或格式差异；需要统一 normalize 并保留原文快照。
- `simulateInput()` 依赖已不推荐的 `document.execCommand`，失败后直接构造 `<p>`；必须确保不破坏 ChatGPT 编辑器模型、光标和快捷键。
- `getFloatingButtonAnchor()` 取最近 form 或 parent，可能在页面重构后定位到过大的容器；新版应优先锚定输入区域附近的稳定容器，并限制重定位范围。
- `FloatingButton` 在 body 上持续监听整个 subtree 的 `MutationObserver`，每次变动都查询 DOM 并更新位置。ChatGPT 是高频变动页面，这可能带来性能和重复调用问题。
- 当前初始化只执行一次；observer 能间接恢复按钮，但没有明确的 SPA 路由、输入实例切换、旧 host 清理和 adapter readiness 状态。
- 优化期间没有检查输入框内容是否仍等于最初快照，用户并发编辑后可能被旧结果覆盖。
- 当前 result/Toast 不是 React 或可测试状态模型，错误、重试和页面输入失效难以统一处理。

### P0 建议验收

至少覆盖：首次进入、刷新、SPA 切换对话、输入为空、中英文输入、长输入、用户在 loading 时修改输入、Improve success、Retry、error、limit、Use/Replace、撤销、快捷键不受干扰、控制台无新增错误。

## 11. Claude Integration Assessment

`ClaudeAdapter` 已隔离 selector，并支持 ProseMirror/contenteditable 写入，适合 P1 复用。风险包括 `fieldset` 层级变化、`translate="no"` 选择器过宽、直接 `replaceChildren` 对编辑器内部状态的影响，以及发送按钮 aria-label 版本化。当前没有真实 Chrome 通过证据；不得把代码存在标为稳定支持。P1 应与 ChatGPT 共用 Improve/result/usage 服务，仅替换 adapter 和平台文案/定位。

## 12. Gemini Integration Assessment

`GeminiAdapter` 已尝试访问 `rich-textarea.shadowRoot`，这是比纯通用 selector 更合理的方向；但 Web Component 内部结构和 Shadow DOM 访问边界都可能变化。其 anchor 逻辑通过查找 send button 的祖先容器，循环条件和容器结构应在实测中核对。建议作为 P1：先建立输入读取/写回回归夹具，再接入共用结果 UI，不为 Gemini 单独复制优化业务。

## 13. UI Refactor Assessment

当前 UI 主要问题不是缺少颜色或组件，而是信息架构：Popup 模板库承担了产品主体验，页面浮动按钮只承担一次优化。新版应让页面内 UI 成为主流程：

`Improve`（一级） → `Original / Improved`（价值确认） → `Use Improved Prompt` 或 `Keep Original` → 可选 `Refine / Retry / Save`。

要求：

- Improve 控件显示明确文案、禁用条件和 loading；不能只有图标和 tooltip。
- 结果页必须能表达成功、错误、Retry、Refine available、额度耗尽、写回失败。
- 结果页不应在用户未确认时覆盖输入；应用前后应处理焦点和编辑器状态。
- Popup 首屏改为 Free/Pro、Usage、History、Saved、Settings；模板库和复杂编辑器降级。
- 中英文案不再硬编码散落在每个命令式 DOM 文件中；至少统一消息 key 和状态文案。
- 不复制竞品的 logo、视觉资产、逐字文案或独特插画；只复刻经验证的产品机制。

## 14. Subscription / Usage Assessment

### 当前实现

- `MAX_FREE_DAILY_USAGE = 10`；按本地日期重置。
- 只有 `dailyUsage` 和 `lastResetDate`，没有用户身份、license、Pro 状态、支付、服务器校验或订阅管理。
- 后台先查额度，content script 在用户确认应用后 `incrementUsage()`；这符合“取消不扣额度”的当前阶段验收原则，但存在并发读写风险。
- Settings 的文案写明“每日免费优化次数：10 次”，与新计划的“每周 10 次 Improve、每周 3 次 Refine”冲突。

### 新版边界

P0 只实现可替换的 usage policy 基础：operation 类型、窗口、免费额度、消费时机、limit state。建议先使用本地匿名状态，不伪造 Pro 或支付成功；P2 再实现正式 subscription/upgrade/payment flow。规划中的 pricing（$5.99/$7.99）是产品计划，不是当前代码事实，不能在审计阶段写成已提供能力。

## 15. Technical Debt

按优先级排序：

1. **P0 高风险：** content `index.ts` 把 DOM、业务、存储和额度耦合；输入变更竞态未处理；没有 Improve 状态机。
2. **P0 高风险：** ChatGPT selector 和 `MutationObserver` 对宿主 DOM 更新敏感；全 body subtree 观察可能过于频繁。
3. **P0 高风险：** usage 读-改-写不具备并发安全；每日模型与新版每周模型冲突。
4. **P1：** 29 KB 的 `optimizer.ts` 集中规则、分类、推断、输出和风格；缺少纯函数测试和 engine contract。
5. **P1：** 命令式 `preview.ts` 使用大量 inline style 和硬编码文案，错误状态不完整。
6. **P1：** Popup `App.tsx` 仍是多页面状态容器；个人资产文件也混合 Saved、版本历史、优化历史和下载工具。
7. **P1：** storage 类型缺 schema version、platform/title/reuse/refine/subscription 字段；历史数据边界不统一。
8. **P1：** `background/index.ts` 保留与当前本地行为不一致的旧架构注释；`handleOptimize` 的 payload 未实际使用，消息往返没有必要的优化价值。
9. **P2：** GenericAdapter 的通用 selector 和 `button:has(svg)` 过宽；平台能力应逐个验证。
10. **P2：** `innerHTML` 用于静态 SVG 图标和清空 contenteditable，当前未发现把用户输入拼入 HTML 的证据，但应继续采用 `textContent`/DOM 节点，避免未来引入注入风险。
11. **P2：** `constants.ts` 动态/静态双重导入造成构建提示；可在 storage service 整理时改为静态导入。
12. **发布债务：** README、ARCHITECTURE、商店文案、网站 SEO 文案、locale 和 privacy 页面存在旧产品名、平台数量及定位差异。

## 16. Proposed New Architecture

保持现有技术栈，采用最小分层：

```text
AI page content script
  ├─ platform-registry / lifecycle
  ├─ input-detection
  ├─ improve-controller (state machine)
  │    ├─ usage-service
  │    ├─ prompt-optimization-engine
  │    ├─ history-service
  │    └─ saved-service
  └─ shared page UI
       ├─ Improve entry
       ├─ Result UI
       └─ Refine UI

Popup
  ├─ account/plan + usage
  ├─ History
  ├─ Saved
  └─ Settings

Shared
  ├─ types / schemas / migration
  ├─ local storage repository
  ├─ i18n
  └─ low-level template data
```

原则：

- engine 不访问 DOM；adapter 不决定产品状态；UI 不直接改 storage。
- service worker 只保留真正需要后台上下文的消息、context menu 和受控转发；不再承担隐藏 tab 优化。
- P0 不引入新的后端、账号、遥测、远程 prompt 服务或支付集成。
- 使用现有 React/TypeScript；只有页面内轻量 UI 需要时才引入共享状态，不为“架构漂亮”增加大型框架。

## 17. Proposed File Structure

以下是建议的最小目录，不要求一次性创建全部文件：

```text
src/
├─ content/
│  ├─ index.ts
│  ├─ lifecycle.ts
│  ├─ input-detection.ts
│  ├─ improve-controller.ts
│  ├─ result-ui.tsx                 # 或保持轻量 DOM UI，取决于 P0 原型验证
│  ├─ refine-ui.tsx
│  └─ platforms/
│     ├─ base.ts
│     ├─ registry.ts
│     ├─ chatgpt.ts
│     ├─ claude.ts
│     ├─ gemini.ts
│     └─ generic.ts
├─ services/
│  ├─ prompt-optimization-engine.ts
│  ├─ usage-service.ts
│  ├─ history-service.ts
│  ├─ saved-service.ts
│  └─ subscription-service.ts       # P2，先定义边界
├─ shared/
│  ├─ types.ts
│  ├─ storage.ts
│  ├─ migration.ts
│  ├─ schemas.ts
│  ├─ i18n/
│  └─ templates/
├─ popup/
│  ├─ App.tsx
│  ├─ pages/
│  │  ├─ Overview.tsx
│  │  ├─ History.tsx
│  │  ├─ Saved.tsx
│  │  └─ Settings.tsx
│  └─ components/
└─ background/
   └─ index.ts
```

如果 P0 证明 React 页面内 UI 会增加 CRXJS/宿主 DOM 复杂度，可以先保持 `result-ui.ts` 命令式实现，但必须将状态和文本从 `content/index.ts` 分离并覆盖错误路径。

## 18. Refactor Order

### P0 — 核心闭环

1. 固化 ChatGPT adapter contract、输入 identity、SPA/lifecycle 和最小 selector 集合。
2. 把 `optimizer.ts` 包装成不依赖 DOM/storage 的 engine 接口，覆盖中英文、空输入、边界输入。
3. 实现页面内 Improve 入口和状态机：idle/loading/success/error/limit。
4. 实现 Original/Improved result、Use/Replace、Keep Original、Retry、写回失败处理。
5. 防止输入快照过期覆盖用户新输入；保留确认后写回和撤销。
6. 引入 weekly usage 基础框架：Free Improve 10/week；Refine 额度字段先可配置，按规格为 3/week。
7. 完成 ChatGPT Chrome 手工验收和控制台回归；在通过前不扩大平台范围。

### P1 — 准确率和多平台

1. Refine 问题、快捷选项、跳过、二次 Improve。
2. 完成 Claude、Gemini 专用 adapter 实测和共用 UI 接入。
3. 完善 usage policy、limit/paywall 占位、基础 license 状态接口，但不伪造支付能力。
4. 将 History/Saved 从 Personal Assets 语义中拆出最小可用流：标题、平台、Reuse、Save。

### P2 — 留存和商业化

1. Prompt Types 高级控制和 Pro 权限。
2. 完整 History/Saved 搜索、编辑、删除和保留策略。
3. Subscription、Upgrade、年付、支付失败/过期和管理页面。
4. 逐个平台评估 GenericAdapter，只有实测通过后才加入公开承诺。
5. 统一 Chrome Web Store、website、README、privacy 和 locales 的新版名称/描述。

本阶段完成后停止，不自动开始 P0 开发。

## 19. Risk List

| 风险 | 影响 | 缓解 |
|---|---|---|
| ChatGPT DOM/SPA 频繁变化 | Improve 消失、读写失败、按钮重复 | lifecycle + readiness + selector 版本化 + Chrome 回归 |
| contenteditable 事件不被宿主状态接受 | Replace 看似成功但页面实际为空 | adapter 返回验证结果，检查输入快照和宿主事件 |
| loading 时用户继续编辑 | 覆盖用户新内容 | identity/snapshot 校验，提示用户选择替换 |
| 多 tab 并发额度消费 | 超额或显示不一致 | 单一 writer、operation id、按操作类型的 policy |
| 旧 local/sync 数据迁移 | 丢失模板、历史、设置或 Pro 状态 | versioned migration、保留旧键、迁移前后校验 |
| 本地规则质量不足 | 优化只是变长、破坏原意 | engine 纯函数样例集、原意保留检查、Retry/Keep Original |
| 过早接入 Pro/支付 | 账号、隐私、远端依赖扩大 | P0 只做本地 policy 抽象，P2 单独审批 |
| 15 个 host permission 过宽 | 隐私审查和维护成本增加 | P0 收敛 ChatGPT，P1 逐个恢复 |
| 竞品机制复刻越界 | 品牌/版权/商标风险 | 只复刻交互机制，使用自有品牌、文案和视觉 |
| 文档/locale 不一致 | 商店审核、用户误解 | 发布前做全仓字符串和事实核对 |
| 缺少自动化测试和真实 Chrome 证据 | 回归不可见 | 增加纯函数测试并执行固定手工验收清单 |

## 20. Acceptance Criteria for Phase 1

Phase 1 审计交付满足以下条件：

- 已阅读当前扩展源码、Manifest、平台适配、Popup、storage、背景脚本、隐私和相关产品规格。
- 已明确当前架构、用户流程、可复用模块、需重构/降级/删除/新增模块。
- 已明确 Local Prompt Optimizer 与新版 AI Prompt Enhancer 的耦合差距。
- 已单独评估 ChatGPT、Claude、Gemini，并确认 ChatGPT 为 P0。
- 已识别 storage 迁移风险，并明确不删除现有 Prompt、settings、history、license/Pro 相关潜在数据。
- 已列出技术债务、权限/平台范围风险和名称/文案修改位置。
- 已给出最小的新架构、目录、P0/P1/P2 顺序和风险清单。
- `npm run build` 通过；仅有非阻塞的 constants 动态/静态导入提示。
- 未修改源码、Manifest、locale、隐私页、用户数据或生成目录；本轮唯一新增交付物是本文件。
- 未宣称任何平台已经通过真实 Chrome 验证；当前只能确认代码配置/静态实现。

### 名称与发布位置清单（本阶段只列出，不修改）

需要未来统一检查 `PromptPro: Local Prompt Optimizer` → `PromptPro: AI Prompt Enhancer` 的位置：

- `public/_locales/*/messages.json`：`extName`、`extDescription`；当前 9 个 locale 都带有旧“local optimizer”定位或其本地化表达。
- `src/manifest.ts`：名称/描述通过 locale 引用，版本当前为 `1.1.0`；不应新建 extension ID。
- `package.json`：description 仍为“AI 提示词优化器 + 模板库”。
- `src/shared/i18n/zh-CN.ts`、`en-US.ts`：app subtitle、Optimize 文案、toast fallback/limit 等产品语义。
- `src/content/floating-button.ts`、`src/content/preview.ts`：页面入口 tooltip、预览 mode 文案仍突出 Local/Optimize。
- `src/popup/App.tsx`、`SettingsPanel.tsx`：首屏、About、每日额度和本地产品描述。
- `README.md`：标题、副标题、功能、平台、使用方式和定位。
- `docs/STORE_LISTING.md`：Chrome Web Store name、short description、长描述和功能清单。
- `public/privacy_en.html`、`privacy_zh.html`：隐私说明可以保留“本地处理”作为信任特征，但必须与新版实际行为和权限一致。
- `docs/ARCHITECTURE.md`、`docs/seo/*`、`website/src/lib/seo.ts`、`website/src/app/layout.tsx`：网站 title、description、SEO、事实文档和旧架构描述。
- `docs/CONVERSATION_LOG.md`、历史验收/路线图文档：仅在内容仍作为当前事实或发布依据时同步，历史记录不应被伪装成当前产品事实。

## 下一阶段推荐执行顺序

1. 先冻结本报告和 `PromptPro_rebuild_plan.md` 作为范围边界。
2. 在不改数据的前提下，建立 P0 的 ChatGPT adapter/lifecycle/input identity 设计和纯函数 engine 样例。
3. 实现 P0 Improve/result 状态闭环与 weekly usage 基础，并逐项执行 Chrome 手工验收。
4. P0 通过后再进入 Refine、Claude/Gemini 和 usage 完善（P1）。
5. 最后处理 History、Saved、Prompt Types、Subscription 和发布文案统一（P2）。

本报告完成后停止，等待下一条 Codex 指令。
