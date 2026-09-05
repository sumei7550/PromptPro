# P0-02 — Optimization Engine Boundary

状态：代码实现与本地自动化验证完成；真实 Chrome 端到端回归待人工执行。

范围：仅把现有本地规则优化器置于可替换的异步 engine contract 后，并让 content orchestration 通过统一 service 调用。未实现 AI API、后端、streaming、新 Improve/Result UI、Refine、Retry UI、Free/Pro、weekly usage、Popup、History、Saved、Prompt Types、Claude/Gemini 接入、Manifest 或网站修改。

## 1. 修改与新增文件

本阶段修改：

| 文件 | 修改内容 |
|---|---|
| `src/content/optimizer.ts` | 保留原规则主体，新增结构化纯函数入口 `runLocalOptimization()`；旧 `localOptimize()` 保留为兼容包装。 |
| `src/content/index.ts` | 删除对 `localOptimize()` 和优化消息往返的直接依赖；初次优化与 preview 风格重生成统一调用 `optimizePrompt()`。 |
| `package.json` | 扩展既有 `test:p0`，运行 `tests/*.test.ts`，未增加测试框架或依赖。 |

本阶段新增：

| 文件 | 用途 |
|---|---|
| `src/services/optimization-engine.ts` | 定义 request、result、engine 和受控错误 contract。 |
| `src/services/local-optimization-engine.ts` | 把现有本地规则实现适配为异步 engine。 |
| `src/services/optimization-service.ts` | 固定当前 active engine，并统一转换未知 engine 异常。 |
| `tests/optimization-engine.test.ts` | 覆盖中英文、字段、异步、非法输入、style、category 和异常转换。 |
| `docs/P0-02_OPTIMIZATION_ENGINE.md` | 记录本阶段结构、验证和风险。 |

没有修改 `src/shared/storage.ts`、storage schema、Manifest、Popup、preview UI、background、usage/history 实现、平台 adapter、locale、隐私页或 website。本阶段开始时工作区已有 P0-01 和 website 的未提交改动，均予以保留；`src/content/index.ts` 和 `package.json` 的 P0-01 改动是本阶段叠加工作的基线。

## 2. OptimizationRequest

```ts
interface OptimizationRequest {
  originalText: string
  locale: Locale
  style?: OptimizeStyle
  platform: Platform
  context?: Readonly<Record<string, unknown>>
}
```

- `originalText`：待优化的纯文本，不包含 DOM element。
- `locale`：调用页面的 UI locale；Local Engine 仍独立检测输入文本语言。
- `style`：保留现有六种 optimize style；缺省时为 `structured`。
- `platform`：纯 platform 标识，不传 adapter 或页面对象。
- `context`：为后续实现保留的只读可选元数据；本阶段 Local Engine 不使用，也未提前定义 AI、Refine 或 billing 字段。

contract 不接受 DOM、`chrome.storage`、UI callback、history 或 usage 对象。

## 3. OptimizationResult

```ts
interface OptimizationResult {
  originalText: string
  improvedText: string
  detectedLanguage: Locale
  detectedType: string
  engineId: string
  warnings?: readonly string[]
  metadata?: Readonly<Record<string, unknown>>
}
```

Local Engine 当前返回：原文、优化文本、现有语言检测结果、现有 category detection 结果、`local-rule-v1` engine id，以及本次 platform/style 元数据。

`warnings` 和 `metadata` 保持可选。本阶段没有虚构 missing information、refine hints 或新产品逻辑。现有 preview 只消费 `improvedText`，因此未来 result UI contract 可以继续使用同一结构，不需要认识具体 Local Engine。

## 4. OptimizationEngine contract

```ts
interface OptimizationEngine {
  readonly id: string
  optimize(request: Readonly<OptimizationRequest>): Promise<OptimizationResult>
}
```

Local Engine 虽然内部是同步纯函数，对外仍统一返回 `Promise`。未来 `AIOptimizationEngine` 只需实现该接口；它不需要了解 ChatGPT DOM、adapter、FloatingButton、preview、storage、usage 或 history。

## 5. Local Engine 适配

`LocalOptimizationEngine.optimize()` 执行以下最小工作：

1. 校验 `originalText` 是非空字符串；
2. 调用 `runLocalOptimization(originalText, style)`；
3. 把既有 `improvedText`、language 和 category 映射到统一 result；
4. 添加稳定的 `engineId` 与 platform/style metadata。

`runLocalOptimization()` 继续调用同一套 `detectLanguage()`、`detectCategory()`、`buildPrompt()`、`humanizePrompt()` 和 `applyStyle()`。没有调整 category 关键词、prompt skeleton、上下文推断、输出文案或 style guidance。旧 `localOptimize()` 仍保留并委托结构化入口，降低非页面旧调用方的兼容风险。

## 6. 页面调用链 before / after

Before：

```text
content/index.ts
  -> getRemainingUsage()
  -> chrome.runtime.sendMessage(OPTIMIZE_PROMPT)
  -> background 返回 local-only
  -> localOptimize(text, style)
  -> previewOptimization()
       -> style 重生成直接 localOptimize()
  -> adapter replace
  -> history / usage
```

After：

```text
content/index.ts (orchestration)
  -> getRemainingUsage()
  -> optimizePrompt(request)
       -> active OptimizationEngine（当前固定 LocalOptimizationEngine）
       -> OptimizationResult
  -> previewOptimization(result.improvedText)
       -> style 重生成再次调用 optimizePrompt(request)
  -> adapter replace
  -> history / usage
```

页面层不再导入或调用 `localOptimize()`。active engine 固定在 service 内；没有 engine selector、model selector、AI/Local toggle 或 fallback UI。

## 7. 错误模型

统一错误类为 `OptimizationEngineError`，错误码为：

- `invalid-input`：空白或非字符串 `originalText`；
- `engine-failed`：engine 抛出未知异常时，由 optimization service 转成受控错误，并在 `cause` 保留内部异常供本地诊断；
- `cancelled`：contract 预留的最小取消语义。本阶段 preview 的 Cancel 仍由 UI 层处理，engine 不主动产生该错误，也未增加 AbortController 或状态机。

已属于 `OptimizationEngineError` 的错误不会被二次包装。页面现有 `try/catch` 继续把受控错误映射为既有 error 状态和 toast，不产生未处理 rejection。

## 8. 不可变与职责边界

engine 仅执行 `request -> result`。三个 service 文件及 optimizer 均不读取/写入 DOM 或 `chrome.storage`，不记录 history、不扣 usage、不展示 toast、不打开 preview、不识别页面平台、不写回输入框。

页面/业务层继续负责：额度预检查、preview、Apply/Replace、Undo、history 与 usage。只有 adapter 写回成功后才记录 history 和递增 usage，这一 P0-01 行为保持不变。

## 9. 对 optimizer.ts 的处理范围

没有重写 29 KB 文件或拆分全部规则。仅进行以下边界调整：

- 将内部 language 类型命名为 `OptimizationLanguage`；
- 新增 `LocalOptimizationOutput`；
- 新增结构化 `runLocalOptimization()` 入口；
- 让旧 `localOptimize()` 返回该结构化入口的 `improvedText`；
- 把仅类型用途的 `OptimizeStyle` import 改成 Node test runner 可解析的相对 type import。

文本分析、type/category detection、prompt rewrite、上下文推断和 style 仍属于 Local Engine 规则实现；platform adapter、preview presentation、storage/history/usage 和 UI 不进入 optimizer。

## 10. 自动化测试结果

执行日期：2026-09-05。

### `npm run test:p0`

结果：PASS。

- 总计 11 tests；11 passed；0 failed；
- 其中 P0-02 新增 5 tests；
- 英文通过统一异步 contract 优化并检测为 `content`；
- 中文通过统一 service 优化并检测为 `coding`；
- 校验 result 的 original/improved/language/type/engine/metadata 字段；
- 校验返回值为 Promise；
- 空白和非字符串输入返回 `invalid-input`；
- `concise` 与 `code` style 的现有 guidance 仍生效且输出不同；
- 模拟 engine 异常被转换为 `engine-failed`。

这些测试不是 Prompt 质量 benchmark，也不宣称本地规则质量已经达到 AI Engine 目标。

## 11. Build 与静态检查

### `npm run build`

结果：PASS。

- TypeScript strict check：PASS；
- Vite/CRXJS production build：PASS；
- 输出目录：`dist-new/`；
- 保留已知的 `constants.ts` 动态/静态混合导入警告，不阻塞构建，本阶段未扩大范围处理。

### `git diff --check`

结果：PASS，没有 whitespace error。Git 输出了现有全局 ignore 文件权限提示及 LF/CRLF 工作区提示；这些不是本阶段代码错误。

## 12. 当前功能兼容情况

从代码路径和自动化构建确认：

- 当前本地规则优化仍是唯一 active engine；
- preview 仍接收字符串并保持原 UI；
- style 切换/重新生成改走同一 engine contract；
- Apply/Replace、snapshot 校验、Undo 代码路径未被 engine 接管；
- history 字段和记录时机不变；
- daily usage schema、预检查和成功后递增不变；
- 模板消息处理、Popup、storage schema 与旧用户数据未修改；
- 未接 AI、未新增网络请求或权限。

真实 Chrome 端到端结果：**本阶段未验证**。自动化和 build 不能证明已加载 `dist-new/` 后的 ChatGPT preview、Replace、Undo、history 与 usage 全链路，因此这些仍需按 P0-01 的人工步骤回归后才能标记为真实运行 PASS。

## 13. 已知风险

1. `detectedType` 目前是 `string`，因为现有 category 规则仍封装在 Local Engine 内；后续 AI Engine 若需要受控枚举，应在真实 AI 输出规格确定后单独收敛，不能在本阶段虚构类型体系。
2. `locale` 表示 UI locale，`detectedLanguage` 表示输入文本检测结果；未来 AI Engine 实现必须继续区分两者。
3. 当前 background 仍保留旧 `OPTIMIZE_PROMPT` 的 `local-only` handler，但 content 主流程已不再调用它。本阶段未扩大到 background 清理；后续应在独立授权范围内确认无其他调用后删除过期边界。
4. 当前 service 使用单一模块级 active engine，满足可替换目标但不提供运行时选择；这是本阶段刻意限制，不是缺失的用户功能。
5. engine contract 已阻断 DOM/storage/UI 耦合，但 `content/index.ts` 仍承担 preview、replace、history 和 usage 编排；这些属于后续已规划阶段，本轮不提前重构。
6. 真实 ChatGPT DOM、扩展加载、写回和撤销仍受 P0-01 所列线上依赖影响，需要人工回归。

## 14. Git diff 摘要

本阶段自身共涉及 8 个文件（含本阶段文档）：3 个已有文件修改，5 个文件新增。主要变化是：

- 新增 3 个 engine/service 文件；
- `optimizer.ts` 增加薄结构化入口，不改规则主体；
- `content/index.ts` 的两处直接 Local Engine 调用迁移到统一 service；
- 新增 5 个 engine contract tests；
- `test:p0` 从单文件改为运行全部 `tests/*.test.ts`。

仓库当前总 `git diff --stat` 还包含本阶段开始前的 P0-01 与 website 工作区改动，不能把累计统计全部归因于 P0-02。未提交、未推送。

P0-02 到此停止；未开始 P0-03 AI Optimization Engine。
