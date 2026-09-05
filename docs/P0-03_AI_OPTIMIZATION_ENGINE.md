# P0-03 — AI Optimization Engine

> 后续迁移说明：P0-03A 已将当前运行时 Provider 从 OpenAI 切换为 DeepSeek。本文保留为 P0-03 当时的历史实施记录；当前 Provider 事实与验证状态见 `docs/P0-03A_DEEPSEEK_PROVIDER.md`。

状态：实现、自动化测试、扩展 build、网站 build 与 bundle secret scan 已完成；真实 OpenAI 调用、Vercel 部署和真实 Chrome 端到端验证未完成。

范围：本阶段新增真实 AI Optimization Engine、最小 PromptPro API、单一 OpenAI Provider、结构化响应、受控 Local fallback、超时/错误模型、10 条 benchmark 和隐私事实同步。没有实现 P0-04 Pretty Prompt UI、Refine、Retry UI、Usage 商业化、多 Provider、Provider selector、storage schema 变更或 Chrome Web Store listing/网站 SEO 改写。

## 1. 架构与服务端方案

仓库审计未发现现成 backend、Worker、Supabase Edge Function 或 API route。仓库已有 `website/` Next.js App Router 项目，并以 Vercel 为部署目标，因此采用同一项目内的最小 Serverless Route：

```text
content/index.ts
  -> optimization-service
  -> AIOptimizationEngine
  -> chrome.runtime message
  -> extension service worker
  -> POST https://prompt-pro-psi.vercel.app/api/optimize
  -> Next.js Route Handler
  -> OpenAI Responses API
  -> strict JSON Schema response
  -> OptimizationResult
```

这样不新增独立服务、数据库、账号系统或复杂 SDK。content 页面层继续只调用 `optimizePrompt()`，不认识 OpenAI、HTTP endpoint 或 fallback 细节。跨域请求由 MV3 service worker 发出；扩展新增的唯一 API 主机权限是 `https://prompt-pro-psi.vercel.app/*`，没有加入 `api.openai.com` 权限。

## 2. Provider 与 Model

- Provider：OpenAI，P0-03 不实现多 Provider。
- API：`POST https://api.openai.com/v1/responses`，仅存在于服务端文件。
- 默认模型：`gpt-5-mini`。
- 配置覆盖：服务端 `AI_MODEL`。
- SDK：无；使用平台原生 `fetch`，降低依赖和维护成本。

选择理由：单接口接入、可用 JSON Schema structured output、成本/延迟定位适合高频 prompt rewrite，且直接 `fetch` 不需要引入 Provider SDK。本轮尝试读取 OpenAI 官方 Structured Outputs/模型页面，但当前网络分别返回空搜索结果及 Cloudflare Forbidden；因此没有把“官方文档在线验证”标记为 PASS。部署前仍需用实际账号验证模型可用性、Responses API schema 兼容性、质量、延迟与成本。

## 3. API Endpoint 与 Origin

Endpoint：`POST /api/optimize`。

服务端通过 `PROMPTPRO_ALLOWED_ORIGINS` 维护逗号分隔的允许 Origin。示例值使用当前已发布扩展 ID：

```env
PROMPTPRO_ALLOWED_ORIGINS=chrome-extension://lakcfmbmainingemilkajglcmlplkhdj
```

不在允许列表内的 Origin 返回 403。Route 同时实现受控 `OPTIONS`。Origin allowlist 是浏览器边界与误用抑制，不是强身份认证；没有账号或服务端签名的公开扩展 API 仍可能被非浏览器客户端伪造 Origin，这属于 known risk。

## 4. Request Contract 与数据最小化

扩展向 PromptPro API 发送：

```json
{
  "originalText": "...",
  "locale": "zh | en",
  "style": "concise | professional | structured | deep-analysis | content-creation | code",
  "platform": "chatgpt | ..."
}
```

`AIOptimizationEngine` 会显式重建 payload，即使 `OptimizationRequest.context` 中存在其他内容也不会透传。本阶段不发送 context。

明确排除：DOM、Cookie、完整 ChatGPT conversation history、storage 全量数据、用户历史 Prompt、Saved Prompts、模板、浏览器身份信息和无关页面内容。服务端限制 `originalText` 为非空且最多 12,000 字符，并校验 locale、style 和 platform。

## 5. Response Contract

服务端成功响应：

```json
{
  "ok": true,
  "result": {
    "improvedText": "...",
    "detectedLanguage": "zh",
    "detectedType": "writing",
    "warnings": [],
    "metadata": {
      "requestId": "...",
      "model": "gpt-5-mini",
      "durationMs": 1234
    }
  }
}
```

失败响应：

```json
{
  "ok": false,
  "error": {
    "code": "service-error",
    "message": "AI provider request failed."
  }
}
```

Provider 输出使用 strict JSON Schema，字段为 `improvedPrompt`、`detectedLanguage`、`detectedType`、`warnings`。服务端解析与二次校验后映射为 API 的 `improvedText`；客户端再映射为 P0-02 的统一 `OptimizationResult`。客户端不解析 Markdown 标题、`Improved Prompt:` 标签或其他自由文本约定。

`detectedType` 受控为：`general`、`writing`、`coding`、`research`、`marketing`、`seo`、`image`。P0-03 没有新增 Prompt Type UI。

## 6. System Prompt 设计

System Prompt 的固定原则：

1. 保持用户原意与目标；
2. 不编造用户、公司、受众、代码库、数据、预算、时间或约束；
3. 提升清晰度、具体性和可执行性；
4. 仅在确有帮助时增加约束；
5. 仅在有价值时增加输出格式；
6. 仅在有价值时增加角色；
7. 简单 Prompt 保持简洁，不机械扩写；
8. 输出语言与原输入一致；
9. 缺少关键信息时，让下游 AI 先提出简短澄清问题；
10. 只返回 schema 要求的结构化结果，不返回优化说明。

Prompt 要求模型按实际任务适配 general、writing、coding、research、marketing、SEO 和 image generation，不把所有输入固定转换为 Role/Background/Objective/Workflow/Constraints 模板。

## 7. AIOptimizationEngine

`AIOptimizationEngine` 实现 P0-02 contract：

```ts
optimize(request: Readonly<OptimizationRequest>): Promise<OptimizationResult>
```

稳定 ID 为 `promptpro-ai-v1`。职责包括：最小 request mapping、调用扩展 service worker transport、18 秒客户端超时、API error 映射、response shape 验证和统一 `OptimizationResult` 映射。它不知道页面 DOM、adapter、preview、Replace、Undo、History 或 Usage。

`optimization-service` 的默认 active engine 已由 `LocalOptimizationEngine` 切换为 `AIOptimizationEngine`。现有 `content/index.ts` 的 initial optimize 和 preview style regeneration 仍调用同一个 `optimizePrompt()`。

## 8. AI / Local fallback 规则

Local Engine ID 仍为 `local-rule-v1`，不删除、不重写规则主体。

仅下列基础设施/服务异常触发 Local fallback：

- `network-error`
- `service-error`
- `timeout`
- `malformed-response`

以下情况不 fallback：

- `invalid-input`
- `engine-failed`
- AI 正常返回但结果较短
- AI 类型判断与 Local 不同
- 用户主观不喜欢结果

fallback 结果保留 Local `engineId`，并添加：

```json
{
  "fallbackFrom": "promptpro-ai-v1",
  "fallbackReason": "service-error"
}
```

同时加入一条 fallback warning。P0-03 旧 UI 不展示复杂技术信息，但 result contract 不会把 fallback 伪装成 AI 成功。

## 9. Error Model 与 Timeout

`OptimizationErrorCode` 当前包含：

- `invalid-input`
- `network-error`
- `service-error`
- `timeout`
- `malformed-response`
- `engine-failed`
- `cancelled`（P0-02 兼容保留）

Provider 端 AbortController timeout：15 秒。扩展 service-worker HTTP timeout：16 秒。AI Engine 最外层 timeout：18 秒。三层递增，使服务端优先返回受控错误，同时保证 UI 不会无限 loading。同一 `OptimizationRequest` 可再次调用；本阶段没有提前实现 Retry UI。

## 10. Secret、日志与隐私

服务端环境变量：

```env
AI_API_KEY=
AI_MODEL=gpt-5-mini
PROMPTPRO_ALLOWED_ORIGINS=chrome-extension://lakcfmbmainingemilkajglcmlplkhdj
```

真实 key 不在源码、Vite env、Manifest、public 或 extension bundle。服务端只记录：request id、engine、duration、success/failure、error code；不显式记录 request body 或完整 Prompt。API 返回结构也不包含 secret。

由于产品从本地优化改为远程 AI 优化，本轮同步了扩展内置中英文隐私页、官网中英文 Privacy 内容与 README 的事实描述。没有修改 Chrome Web Store listing 或网站 SEO 页面。

## 11. Benchmark

固定输入位于 `benchmarks/p0-03-cases.json`，共 10 条，中英文均包含，覆盖：

1. 简单写作；
2. 商务邮件；
3. Coding Debug；
4. Coding 实现；
5. Research；
6. Marketing；
7. SEO；
8. Image prompt；
9. 很短且信息不足的请求；
10. 已经较完整的 Prompt。

执行：

```bash
npm run benchmark:p0-03
```

runner 为每条输出完整 `original`、`localEngineResult`、`aiEngineResult`、AI 状态和以下人工评价字段：保持原意、更具体、增加有价值信息、避免无意义变长、语言一致、是否编造用户事实。

本轮环境没有 `AI_API_KEY`，也没有已部署的 P0-03 endpoint，因此当前 10 条记录的 Local Engine Result 已生成，AI Engine Result 均诚实记录为：

```text
REAL AI CALL NOT VERIFIED
```

没有自动宣称 AI 结果更好。部署并配置后可执行：

```powershell
$env:BENCHMARK_API_URL='https://prompt-pro-psi.vercel.app/api/optimize'
$env:PROMPTPRO_EXTENSION_ORIGIN='chrome-extension://lakcfmbmainingemilkajglcmlplkhdj'
npm.cmd run benchmark:p0-03
```

为避免大量 token 消耗，应只跑一次固定 10 条并人工评价。

## 12. Tests

执行日期：2026-09-05。

`npm run test:p0`：PASS，23 tests、23 passed、0 failed。

P0-03 新测试覆盖：

1. 最小 request mapping，`context` 不透传；
2. response 到 `OptimizationResult` mapping；
3. invalid/malformed response；
4. client timeout；
5. server/provider timeout；
6. network failure；
7. Local fallback metadata；
8. invalid input 不 fallback；
9. 正常但更短的 AI 结果不 fallback；
10. Provider request/schema mapping；
11. extension source 不含 Provider endpoint、secret env、Authorization header 或 key 形态。

Node 对 `website/src/lib/ai-optimization.ts` 输出 `MODULE_TYPELESS_PACKAGE_JSON` 性能提示；tests 仍全部通过，且 website 的 Next.js TypeScript build 另行通过。本轮没有为了消除非失败提示而改 `website/package.json` module 类型。

## 13. Build

### Extension

`npm run build`：PASS。

- TypeScript strict check：PASS；
- Vite/CRXJS production build：PASS；
- 输出：`dist-new/`；
- 保留既有 `constants.ts` 动态/静态混合导入 warning；不影响 build，本轮不扩大范围处理。

### Website/API

在 `website/` 运行：

```powershell
$env:NEXT_PUBLIC_SITE_URL='https://prompt-pro-psi.vercel.app'
npm.cmd run build
```

结果：PASS；Next.js 15.5.23 compiled、typecheck、page data 与 22/22 static pages 均完成，`/api/optimize` Route Handler 被构建。该结果只证明本地 production build，不证明 Vercel 已部署。

`git diff --check`：PASS；Git 仅输出已有全局 ignore 权限与 LF/CRLF 工作区提示，无 whitespace error。

## 14. Bundle Secret Scan

扩展 build 已串联 `scripts/scan-extension-secrets.mjs`。本轮结果：PASS。

- No provider endpoint
- No server-only environment variable
- No provider authorization header
- No OpenAI-style or configured API key

扫描目标是生成后的 `dist-new/` 文本 bundle，并在当前环境存在 `AI_API_KEY` 时额外检查该实际值是否意外进入 bundle。

## 15. Real AI Verification

**REAL AI CALL NOT VERIFIED**

当前进程环境检查结果：`AI_API_KEY_PRESENT=false`。没有伪造调用、没有使用示例 key，也没有执行大规模 benchmark。

后续真实验证步骤：

1. 在 Vercel Production 环境设置 `AI_API_KEY`、`AI_MODEL`、`PROMPTPRO_ALLOWED_ORIGINS`；
2. 部署包含 `/api/optimize` 的当前代码；
3. 用固定 10 条 benchmark 做一次小规模调用并人工评价；
4. 重新加载 `dist-new/` unpacked extension，在真实 ChatGPT 页面验证 Improve → preview → Apply → Replace；
5. 分别模拟 provider 5xx、网络断开和超时，核对 Local fallback metadata 与旧 UI 可恢复状态。

## 16. 对现有功能的影响

- 默认优化主路径从 Local Engine 切换到 AI Engine。
- Local Engine 保留为受控 fallback/development safety net。
- preview 与 style regeneration 继续使用统一 service。
- Apply/Replace、input snapshot、identity、lifecycle、Undo、History 写入时机和 Usage schema 未修改。
- Popup IA、Saved、Refine、Prompt Types UI、Claude/Gemini Provider 与最终 Improve/Result UI 未修改。
- storage schema 未修改。
- Manifest 仅新增 PromptPro API production origin，不新增 OpenAI host permission。

真实 Chrome 行为仍未验证；build 不能替代浏览器端 E2E。

## 17. Known Risks

1. 公开 Chrome 扩展无法安全保管共享 client secret；Origin allowlist 可被非浏览器客户端伪造。正式上线前至少应配置 Vercel rate limit/firewall、请求上限与成本告警，后续商业化阶段再设计账号/额度认证。
2. 本轮没有真实 OpenAI 调用，尚未确认当前账号对默认模型的权限、实际 structured output 兼容性、质量、延迟和成本。
3. `gpt-5-mini` 是服务端默认值而非扩展常量；如模型在目标账号不可用，应只改 Vercel `AI_MODEL`，不改扩展或加入多 Provider 路由。
4. 当前 AI request 只包含用户原始输入和最少设置，质量可能受缺少任务上下文影响；这是隐私最小化的刻意取舍。
5. 当前 UI 不显示 fallback 技术原因；metadata/warning 已保留，P0-04 可决定如何以用户可理解方式呈现。
6. 官网 FAQ/Home/Features 等非 Privacy 营销页面仍包含 P0-03 前的 local-only 文案。本阶段明确禁止网站 SEO/最终 UI 扩展，因此未改；发布 AI 版本前必须单独同步事实文案。
7. `docs/PRD.md` 与 `docs/ARCHITECTURE.md` 仍包含早期“无后端/完全本地”产品描述；P0-03 实现以本文档为当前事实基线，旧文档应在单独文档治理阶段更新。
8. 现有旧 `OPTIMIZE_PROMPT` quota-only background handler 暂时保留以降低兼容风险；P0-03 主路径不调用它。

## 18. 文件范围与 Git Diff 摘要

P0-03 修改的既有文件：

- `README.md`
- `package.json`
- `public/privacy_en.html`
- `public/privacy_zh.html`
- `src/background/index.ts`
- `src/content/optimizer.ts`（仅更新 Local fallback 注释；规则主体未改）
- `src/manifest.ts`
- `src/services/optimization-engine.ts`
- `src/services/optimization-service.ts`
- `website/.env.example`
- `website/src/content/en/privacy.ts`
- `website/src/content/zh-CN/privacy.ts`
- `docs/website/PRIVACY_FACT_AUDIT.md`（标记为 P0-03 前历史快照）

P0-03 新增文件：

- `src/services/ai-optimization-engine.ts`
- `src/services/promptpro-api-client.ts`
- `website/src/app/api/optimize/route.ts`
- `website/src/lib/ai-optimization.ts`
- `tests/ai-optimization-engine.test.ts`
- `benchmarks/p0-03-cases.json`
- `scripts/run-p0-03-benchmark.mjs`
- `scripts/scan-extension-secrets.mjs`
- `docs/P0-03_AI_OPTIMIZATION_ENGINE.md`

仓库开始本阶段前已有未提交的 P0-01、P0-02 和 website `language-switcher.tsx` 改动；这些改动均被保留，没有 reset、clean、commit 或 push。当前累计 `git diff`/status 不能全部归因于 P0-03。

P0-03 到此停止；未开始 P0-04。
