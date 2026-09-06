# P0-04 — Pretty Prompt UI / Flow Replication

状态：实现、自动化测试、TypeScript/Vite production build、development build 与扩展 bundle secret scan 已完成；真实 Chrome 手工验收仍需在重新加载测试目录 `dist-dev/` 后执行。

范围：只重构 ChatGPT 页面内 Improve 主流程的入口、loading、结果确认、Retry、Replace 失败恢复、fallback 提示、响应式和可访问性。不修改 DeepSeek Provider、`/api/optimize` contract、AI timeout、Local fallback policy、storage schema、Popup、Refine、Usage、Claude/Gemini、Manifest 权限、官网 SEO 或商店素材。

## 1. 本阶段目标

将旧的“浮动 Optimize 工具球 + 等权重 preview”改为自然贴近 ChatGPT composer 的 PromptPro Improve 任务流：

```text
输入草稿 → Improve → Improving → Original / Improved → Use / Retry / Keep Original
                                           ↓
                                  安全 Replace，不自动发送
```

本阶段借鉴成熟产品已经验证的信息层级、操作顺序和恢复路径，但不复制其品牌、Logo、独特图标、逐字文案、源码或高识别度视觉资产。

## 2. ui-ux Skill 使用情况

实现前读取并应用了 `ui-ux` Skill 的完整规范，以及 workflow、UX evaluation 和 development guardrails。采用 Full tier 的 half-built refactor：

- Project：在 AI 对话输入区内帮助用户增强草稿的 Chrome 扩展。
- Surface：嵌入 ChatGPT composer 的轻量任务工具，不是独立 SaaS 页面。
- Primary task：在不覆盖、不发送原草稿的前提下生成建议，并由用户确认 Replace。
- First decision：是否使用 Improved Prompt。
- Recovery：Retry、Keep Original、ESC/关闭、替换失败后保留结果。
- Product temperament：轻量、可信、AI-native，但避免高饱和营销感和通用紫色玻璃拟态。
- Internal terms excluded：Provider、endpoint、key、内部 engine ID、`service-error`、`malformed-response`。

技术上继续使用现有轻量 DOM 与 Shadow DOM，没有因为视觉重构引入 React、Redux、全局状态库或第二套注入系统。

## 3. 当前旧 UI 问题

- 36px 圆形渐变按钮更像独立悬浮工具球，没有文字说明，和 composer 的辅助动作关系弱。
- loading 依赖图标旋转，状态文案不明确。
- preview 把 Original 与 Optimized 做成等权重双列，优化结果没有成为阅读重点。
- style selector 与重新生成控制在结果页中占据明显位置。
- Apply 在关闭 preview 后才执行 Replace；一旦 snapshot/identity 校验失败，用户只看到通用 toast，已有结果也随面板一起消失。
- Retry 失败没有面板内恢复状态，且不能明确保证保留上一成功结果。
- fallback 展示偏技术说明；错误路径没有针对 timeout、input changed、input unavailable 和 replace failed 做人类语言翻译。

## 4. 新入口

继续复用 `src/content/floating-button.ts` 的唯一 host、mount、observer 和定位机制，不增加第二个入口。

- 圆形 icon-only 工具球改为带图标与 `Improve`/`优化` 文字的轻量按钮。
- 继续锚定 composer/form，并根据实际按钮尺寸定位；水平与垂直位置限制在 viewport 内。
- 空输入为原生 `disabled`，title/aria-label 提示先输入内容。
- 输入存在进入 ready；请求期间显示 `Improving…` 并禁用，外加 `aria-busy=true`。
- 首次请求失败后入口显示 Retry，用户可再次触发同一主流程。
- document `input` listener 只刷新可用状态和位置，不拦截 Enter/Shift+Enter，不触发发送。

## 5. 状态模型

`src/content/improve-flow.ts` 提供可单测的最小状态模型：

- phase：`idle | ready | loading | success | error | limit`
- busyAction：`improve | retry | replace | null`
- result：当前最后一次成功的 `OptimizationResult`
- error：面向 UI 的错误类别

Reducer 约束：

- busy 时忽略重复 Improve/Retry/Replace start。
- Retry start 不清空 result。
- Retry failure 保留上一份 result，只增加 error。
- Replace failure 保留 result 和 result panel。
- Replace success 或 Cancel 清空 result 并回到 ready。

## 6. Loading

首次 Improve 点击后立即：

- 入口改为 `Improving…`；
- button disabled，脚本层另有 `improveInFlight` 防重复；
- 原输入不清空、不覆盖；
- P0-01 snapshot 继续保存；
- 使用克制的单图标旋转，不使用 skeleton 或大面积动画；
- `prefers-reduced-motion` 下放慢动画。

Retry 和 Replace 也各自显示 `Retrying…`、`Using…`，并在 busy 期间禁用其他动作。

## 7. Result UI

结果层继续复用原 `previewOptimization` 入口，但内部升级为 Shadow DOM 隔离的语义 dialog：

- Original：低对比度、较小字号、较低最大高度，只作为价值对比。
- Improved：带 PromptPro 自有靛蓝色强调、较高字号与更大的阅读区域，成为主内容。
- 长文本使用独立滚动与 `overflow-wrap:anywhere`，不破坏面板宽度。
- 面板宽度上限 680px，高度受 viewport 限制；小窗口采用底部对齐和主操作全宽。

## 8. Use / Replace

`Use Improved Prompt` 是结果区域唯一 primary action。

与旧实现不同，Replace 现在由结果层内的回调执行：只有 P0-01 `replaceInput(improvedText, originalSnapshot)` 返回成功，result UI 才关闭。继续复用：

- input identity；
- route/mount identity；
- original snapshot；
- changed-input/stale-input 阻止；
- 写入后的双 animation-frame verification。

成功后输入框保留合理焦点、显示 Improved Prompt、记录 history/usage，并提供既有 Undo；没有调用 `triggerSend()`，不会自动发送。

## 9. Retry

- Retry 是 secondary action。
- 使用闭包中的同一个 Original Prompt、locale、platform 和统一 `optimizePrompt()` service。
- 默认沿用当前 style；用户只有展开 More options 并选择 style 后再点 Retry，style 才参与重新生成。
- Retry 时原输入框不修改。
- Retry 成功原位更新 Improved 内容及 fallback 提示。
- Retry 失败保留上一次成功结果，并显示“上一结果仍可使用”的恢复说明。

## 10. Error

内部异常统一映射为用户可行动的文案，不展示 stack、Provider、key、endpoint、engine ID 或内部错误码：

| 内部场景 | 用户状态 | 恢复动作 |
| --- | --- | --- |
| network error | 检查网络后重试 | Retry |
| timeout | 处理超时，请重试 | Retry |
| service error | 服务暂不可用 | Retry |
| malformed response | 无法读取结果 | Retry |
| changed input | 草稿已变化 | Keep Original，重新 Improve |
| stale/missing input | 原输入框已不可用 | 关闭后重新 Improve |
| write/verification failure | 无法插入，结果仍保留 | Retry 或 Keep Original |

首次 Improve 失败时用错误 toast 配合入口 Retry；结果内的 Retry/Replace 失败用 dialog 内 `role=alert` 展示，不关闭面板。

## 11. Local fallback

继续读取既有 `engineId` 和 `metadata.fallbackFrom` 判断 fallback，但 UI 只显示：

> AI 暂时不可用，当前展示的是本地备用结果。

提示使用低权重暖色 notice，不展示 `fallbackReason`、`service-error` 或 `promptpro-ai-v1`，也不会伪装成完全正常的 AI 成功。

## 12. i18n

所有新增主流程文案进入现有：

- `src/shared/i18n/en-US.ts`
- `src/shared/i18n/zh-CN.ts`

`translate(locale, key)` 允许 result dialog 明确按调用时 locale 渲染，同时保留既有全局 `t()`。测试检查 P0-04 必需 key 以及全部 `improve.*` 中英文 key 集合一致。

## 13. Accessibility

- 入口、Use、Retry、Keep Original、Close、select 均使用原生语义元素。
- entry/result busy 状态使用 `aria-busy`。
- result 使用 `role=dialog`、`aria-modal`、labelledby 和 describedby。
- fallback 使用 `role=status`，error 使用 `role=alert`。
- keyboard focus 有明确 focus-visible ring。
- dialog 打开后聚焦唯一 primary；Keep Original/关闭后恢复先前焦点；成功 Replace 保留输入框写入流程产生的焦点。
- 非 busy 结果可用 ESC 关闭；busy 时避免中途关闭造成动作状态不一致。
- 状态不只依赖颜色，均有文字。

## 14. Responsive

- 入口基于实际宽高定位并限制在 viewport 内，适应 composer 宽度、sidebar 和缩放变化。
- 复用 lifecycle 对 SPA route、composer 重挂载和 selector 变化的监听，不创建新 observer 系统。
- result panel 限制宽高；正文和 Original/Improved 长文本分别可滚动。
- 560px 以下或低高度窗口，panel 靠底、primary action 提升到第一行并全宽，次要操作位于其后。
- 不修改 ChatGPT input DOM 的布局，不遮盖或接管发送按钮。

## 15. Tests

执行：

```powershell
npm.cmd run test:p0
```

结果：48 tests，48 passed，0 failed。

P0-04 新增/扩展覆盖：empty、ready、重复 Improve 防护、success、retry、fallback、错误分类、stale/changed Replace 阻止、Replace success 状态关闭、Retry failure 保留旧结果、ESC 规则、中英文 i18n 完整性，以及既有 preview mode 判断。

Node 仍输出 website TypeScript 文件缺少 package-level module type 的既有性能 warning；不影响测试结果，本阶段没有修改 website package 配置。

## 16. Build

执行：

```powershell
npm.cmd run build
```

结果：

- TypeScript strict check：PASS
- Vite/CRXJS production build：PASS
- 输出：`dist-new/`
- extension bundle secret scan：PASS

Chrome 测试环境另执行：

```powershell
npm.cmd run build:dev
```

结果：TypeScript 与 Vite/CRXJS development build PASS，测试输出目录为 `dist-dev/`。该模式保留固定 development public key，用于维持 unpacked extension ID 稳定；`dist-new/` 继续只作为 production build、secret scan 和后续发布包来源。

保留 `src/shared/constants.ts` 同时被静态和动态 import 的既有 Vite warning；它不影响构建且与本阶段无关。

## 17. Chrome verification

自动化测试和 build 不能替代真实 Chrome。请在 `chrome://extensions/` 重新加载测试环境 `dist-dev/`，刷新 ChatGPT 页面后执行：

- [ ] A. 空输入：Improve 显示 disabled，不能误触。
- [ ] B. 中文输入：点击 Improve，loading 明确，返回 AI result。
- [ ] C. 英文输入：流程与中文一致。
- [ ] D. Original / Improved：内容对应，Improved 层级明显更高。
- [ ] E. Use Improved Prompt：安全 Replace 成功，结果层关闭，不自动发送。
- [ ] F. Retry：重新生成，不覆盖原输入；成功后原位更新结果。
- [ ] G. loading 或结果展示期间修改输入：Use 被 changed-input 阻止，旧结果不能覆盖新草稿。
- [ ] H. AI fallback：展示可理解的本地备用提示，不出现内部技术字段。
- [ ] I. timeout/network/service/malformed：存在 Retry/关闭恢复路径，无技术细节泄漏。
- [ ] J. 切换 ChatGPT 会话：入口不重复，旧 snapshot 不能写入新 composer。
- [ ] K. 刷新：入口随 composer 恢复，只有一个 PromptPro 一级入口。
- [ ] L. Enter / Shift+Enter：ChatGPT 原行为不受影响。
- [ ] M. 浏览器缩放、窄窗口、sidebar 开关、多行输入：入口/结果层不遮挡、不溢出、不被裁切。
- [ ] N. Console：无重复 mount、observer 刷屏或新增持续错误。

当前状态：**REAL CHROME UI FLOW NOT VERIFIED**。

本轮只读检查发现 Chrome 中已有一个登录态 ChatGPT 页面，但其中加载的仍是旧版 `Review optimization / Regenerate / Use optimized` 结果层，说明 unpacked extension 尚未重新加载本轮测试构建 `dist-dev/`。当前 Chrome 控制通道不能接管 `chrome://extensions/` 内部页完成 reload，因此没有把该旧界面记录成 P0-04 验收证据，也没有触碰或发送页面中的草稿。

## 18. Known risks

1. ChatGPT DOM 和 composer selector 会变化；P0-01 fallback selector/lifecycle 已复用，但仍需真实页面回归。
2. 入口继续采用 fixed host 跟随 composer rect，极端浏览器插件、实验版 ChatGPT composer 或非常高缩放下需要人工检查与宿主控件的实际间距。
3. ESC 在 Retry/Replace busy 时暂不关闭，避免进行中的异步动作完成后写入已销毁 UI；当前没有请求级 abort contract，本阶段不扩展引擎。
4. 首次 AI failure 多数会被既有 Local fallback 吸收；要验证纯 error UI，需要同时让 fallback 无法返回或注入受控测试环境。
5. 本轮没有修改 Provider、API、timeout 或 fallback policy，也没有重新验证真实 DeepSeek 调用；P0-03A 的 Provider 证据与本阶段 UI 证据应分开看待。

## 19. Old vs new comparison

| 项目 | 旧版 PromptPro | P0-04 新版 |
| --- | --- | --- |
| Improve 入口 | 圆形、icon-only、渐变浮动球 | composer 附近的文字型 Improve 辅助操作；空输入 disabled |
| 用户步骤 | Optimize → preview → Apply 后才尝试 Replace | Improve → loading → Review → Use/Retry/Keep；Use 内部完成安全 Replace |
| Loading | 只有旋转 icon | `Improving…` 文案、spinner、disabled、双层重复触发防护 |
| Result | Original/Optimized 等权重双列 | Original 弱化，Improved 成为单一阅读重点 |
| Primary action | Apply 与其他控制接近 | `Use Improved Prompt` 是唯一 primary |
| Retry | style + Regenerate 明显占位；失败无结果保护说明 | Retry 为 secondary；失败保留上一成功结果 |
| Error | 通用 toast，Replace 失败后面板已关闭 | 场景化人类文案；Replace/Retry 失败保留面板与结果 |
| Fallback | 技术模式 badge | 低权重、可理解的本地备用提示，不展示内部字段 |
| Style | 结果页持续显眼 | 收入 More options；默认 Improve 无需先选择 |
| 视觉层级 | 浮动工具球 + 配置型大 preview | 轻量入口 + 聚焦结果价值和确认动作的 dialog |

P0-04 到此停止；不进入 P0-05、Refine、Usage 或 Claude/Gemini。

## 20. 星号工具弹窗后续调整

后续 UI 调整将星号入口从“点击后立即请求优化”改为“点击后先打开 PromptPro 工具弹窗”：

- 弹窗复用竞品已验证的顶部模式栏、居中状态区、全屏和关闭层级，但使用 PromptPro 自有文案、图形与交互实现。
- 不提供 Sign In 入口，不引入账号、登录或新的远端数据行为。
- 空输入时仍可打开弹窗查看明确空态，但“优化提示词”操作保持禁用；输入框出现内容后弹窗原位切换为可优化状态。
- Improve 继续调用本阶段既有的 snapshot、安全 Replace、Retry、fallback 和结果确认流程；不会自动发送。
- Refine 只显示为禁用的后续能力提示，本次没有实现 Refine 功能或扩大阶段范围。
- Close、Maximize/Minimize 均提供悬停提示；Maximize 切换为带安全边距的大窗，再次点击 Minimize 恢复原窗口尺寸和位置。
- 还原态窗口按竞品 DOM 尺寸固定为 `748.667 × 398.667 CSS px` 并默认居中；最大化在桌面与 DevTools 挤压后的窄视口中保持 60px 安全边距并随可用空间伸缩，仅在宽度不超过 640px 或高度不超过 520px 时退化为 8px 安全边距。
- 顶部把手提供 `Drag to move` 提示，仅在还原态允许拖动；拖动位置被限制在 viewport 安全边距内，最大化时把手不可拖动。
- `How do I use PromptPro?` 打开独立引导弹窗，展示固定三步文案与内置循环动画；右下角按钮只关闭引导弹窗并返回主弹窗。
- `How do I use PromptPro?` 按钮使用独立渐变光点沿边框路径持续顺时针循环；不依赖 Shadow DOM 中兼容性不稳定的自定义属性角度动画，并遵循系统的减少动态效果设置。
- 教程弹窗按竞品 DOM 使用 `45vw` 自适应宽度、400px 最小内容高度和 16px 区块间距，使用扩展当前 `icon128.png` Logo；三步文案保持 PromptPro 品牌，仅加粗第二步的核心操作 `Improve Prompt ✨`，演示区域占弹窗宽度 75%。
- 桌面 1200×760 与移动 390×844 预览已检查；移动视口无水平溢出。真实 Chrome 中仍需重新加载最新 `dist-dev/` 后验证星号入口与 ChatGPT 页面交互。
