# P0-03A — DeepSeek Provider Migration

状态：Provider 迁移、自动化测试、扩展 build、网站 build、bundle secret scan 与无凭据 benchmark 已完成；真实 DeepSeek 调用、部署和真实 Chrome 端到端验证未完成。

范围：只将 P0-03 的服务端 AI Provider 从 OpenAI 切换为 DeepSeek。`OptimizationEngine`、扩展侧 `/api/optimize` request/response、AI 默认主路径、Local fallback、15s/16s/18s timeout、preview、Replace、Undo、storage schema 和 benchmark 输入集保持不变。没有实现多 Provider、Provider selector、模型选择 UI、AI/Local toggle 或 P0-04 UI。

## 1. 为什么迁移

本阶段按产品决策将唯一运行时 Provider 从 OpenAI 迁移到 DeepSeek，并清除 OpenAI Responses API 的运行时耦合。迁移沿用 P0-03 已验证的引擎与 fallback 边界，不以 Provider 切换为理由重做产品逻辑。

没有基于未经验证的价格、质量或 SLA 数据声明 DeepSeek 一定优于 OpenAI。真实质量、延迟和成本仍需在目标账号与生产部署中验证。

## 2. 当前 Provider、Model 与 Endpoint

- Provider：DeepSeek（唯一 AI Provider）
- 默认模型：`deepseek-v4-flash`
- Endpoint：`POST https://api.deepseek.com/chat/completions`
- API 形式：DeepSeek Chat Completions
- SDK：无；服务端继续使用平台原生 `fetch`
- Thinking：默认关闭，`thinking: { "type": "disabled" }`

扩展只调用 PromptPro 自己的 `/api/optimize`。DeepSeek endpoint、Authorization header 和 key 只存在于 Next.js 服务端 Provider 层。

## 3. Environment Variables

```env
DEEPSEEK_API_KEY=
AI_MODEL=deepseek-v4-flash
PROMPTPRO_ALLOWED_ORIGINS=chrome-extension://lakcfmbmainingemilkajglcmlplkhdj
```

`DEEPSEEK_API_KEY` 替代旧的通用 `AI_API_KEY`，避免维护者误判当前 Provider。`AI_MODEL` 保持通用，因为它只是当前唯一 Provider 的服务端模型覆盖项。没有保留 OpenAI key fallback，也没有把任何 key 放入 `NEXT_PUBLIC_*`、extension source、`public/` 或 API response。

## 4. PromptPro API Contract

扩展到 PromptPro API 的 request 保持不变：

```json
{
  "originalText": "...",
  "locale": "zh",
  "style": "professional",
  "platform": "chatgpt"
}
```

成功 response 保持不变：

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
      "model": "deepseek-v4-flash",
      "durationMs": 1234
    }
  }
}
```

`AIOptimizationEngine` ID 继续使用 Provider-neutral 的稳定值 `promptpro-ai-v1`，因此 extension contract、fallback metadata 和现有消费者不需要迁移。

## 5. DeepSeek Request Shape

服务端 Provider request：

```json
{
  "model": "deepseek-v4-flash",
  "messages": [
    {
      "role": "system",
      "content": "PromptPro optimization instructions plus the required JSON example"
    },
    {
      "role": "user",
      "content": "{\"originalText\":\"...\",\"requestedStyle\":\"professional\",\"targetPlatform\":\"chatgpt\",\"uiLocale\":\"zh\"}"
    }
  ],
  "response_format": {
    "type": "json_object"
  },
  "thinking": {
    "type": "disabled"
  },
  "max_tokens": 1800
}
```

HTTP headers 仅在服务端构造：

```text
Authorization: Bearer <DEEPSEEK_API_KEY>
Content-Type: application/json
```

旧 OpenAI Responses API 的 `input`、`text.format.json_schema`、`max_output_tokens`、response `output_text`/`output[]` parser 和 `api.openai.com` endpoint 已从运行路径移除。

## 6. JSON Output 与 Response Parsing

Provider 内容只从 `choices[0].message.content` 读取。服务端依次执行：

1. response object/choice/message/content 存在性检查；
2. 非空白 content 检查；
3. `JSON.parse`；
4. result object 检查；
5. `improvedPrompt` 非空字符串检查；
6. `detectedLanguage` 必须为 `zh | en`；
7. `detectedType` 必须为 `general | writing | coding | research | marketing | seo | image`；
8. `warnings` 必须为字符串数组；
9. 映射为既有 `OptimizationResult`/API `improvedText`。

空 content、malformed JSON 或字段无效统一映射为 `malformed-response`，由既有策略触发 Local fallback。Extension 不解析 DeepSeek 原始 response。

## 7. System Prompt Compatibility

P0-03 的十条优化原则保持不变：保持原意、不编造事实、提升清晰度与具体性、仅在有帮助时增加约束/格式/角色、不机械扩写、保持原语言、缺少关键上下文时让下游 AI 简短澄清。

为兼容 DeepSeek JSON Output，只增加了格式约束：

- 明确写出 response 必须是 valid JSON；
- 明确只输出 JSON，不使用 Markdown code fence；
- 提供包含全部四个字段的完整 JSON 示例；
- 明确 language/type 枚举和 warnings 类型。

没有重新设计 Prompt rewrite 策略。

## 8. Timeout 与 Error Mapping

现有层级保持不变：

- DeepSeek Provider fetch：15 秒
- Extension service worker 请求：16 秒
- `AIOptimizationEngine`：18 秒

Provider 4xx/5xx 与 fetch/network failure 映射为 `service-error`；AbortController 超时映射为 `timeout`；response body 或 structured content 无效映射为 `malformed-response`。请求不会无限等待。

## 9. Local Fallback

AI Engine 仍是默认主路径。只有以下错误触发 Local Engine：

- `network-error`
- `service-error`
- `timeout`
- `malformed-response`

`invalid-input` 不 fallback；AI 结果较短、类型不同或用户不喜欢结果也不 fallback。fallback metadata 保持：

```json
{
  "fallbackFrom": "promptpro-ai-v1",
  "fallbackReason": "service-error"
}
```

## 10. Tests

2026-09-05 执行 `npm.cmd run test:p0`：**PASS**。

- 33 tests
- 33 passed
- 0 failed

Provider-specific coverage 包括 DeepSeek endpoint、server-only Authorization、request/messages mapping、`response_format=json_object`、thinking disabled、JSON content parsing、空 content、malformed JSON、无效 improvedPrompt/language/type、DeepSeek 4xx/5xx、network failure、Provider timeout、Local fallback、invalid-input 不 fallback，以及 extension source 不含 DeepSeek/OpenAI endpoint、key variable 或 Authorization header。

Node 对跨 package 直接导入 TypeScript 测试文件仍输出既有 `MODULE_TYPELESS_PACKAGE_JSON` 性能提示；测试结果不受影响，本阶段未修改 package module 配置。

## 11. Build 与 Secret Scan

### Extension

`npm.cmd run build`：**PASS**。

- TypeScript strict check：PASS
- Vite/CRXJS production build：PASS
- 输出目录：`dist-new/`
- bundle secret scan：PASS

保留既有 `constants.ts` 动态/静态混合导入 warning；该 warning 不影响构建，也与 Provider 迁移无关。

Scanner 确认生成 bundle 不含：

- `api.deepseek.com`
- `api.openai.com`
- `DEEPSEEK_API_KEY`
- 旧 `AI_API_KEY` / `OPENAI_API_KEY`
- Provider Authorization header
- `sk-...` 形态的 Provider key
- 当前进程中已配置的 DeepSeek/OpenAI key 实际值（若存在）

### Website/API

首次无环境变量构建在既有 `robots.txt`/`sitemap.xml` page-data 阶段因缺少 `NEXT_PUBLIC_SITE_URL` 停止；这不是 Provider 编译错误。随后只对构建进程设置：

```powershell
$env:NEXT_PUBLIC_SITE_URL='https://prompt-pro-psi.vercel.app'
npm.cmd run build
```

结果：**PASS**。Next.js 15.5.23 完成 compile、typecheck、page data、22/22 static pages，并构建动态 `/api/optimize` route。该证据仅证明本地 production build，不证明 Vercel 已部署。

## 12. Real DeepSeek Call Status

**REAL DEEPSEEK CALL NOT VERIFIED**

当前进程检查结果：`DEEPSEEK_API_KEY_PRESENT=false`。没有使用示例 key、没有 mock 成真实调用，也没有将自动化 parser 测试描述成 Provider 在线验证。

配置真实 key 后，先验证 3 条：中文简单 Prompt、Coding Prompt、信息不足的短 Prompt；确认 HTTP、JSON、非空 improvedPrompt、language/type、无 fallback 和延迟后，再决定是否跑完整 10 条。

## 13. Benchmark Status

继续复用 `benchmarks/p0-03-cases.json`，没有创建第二套输入集。`npm.cmd run benchmark:p0-03` 已执行；10 条 Local Result 正常生成，10 条 AI Result 均诚实记录：

```text
REAL DEEPSEEK CALL NOT VERIFIED
```

状态均为 `NOT_RUN`，人工评价字段保持为空。因为当前没有部署 endpoint/origin 配置和真实 key，没有生成或伪造 DeepSeek benchmark 结果。

## 14. Privacy 与事实同步

README、扩展内置中英文 Privacy 和官网中英文 Privacy 中原有明确 OpenAI 品牌事实已更新为 DeepSeek。Provider-neutral 文案不做营销性扩写。P0-03 历史文档未删除或改写，只在开头增加 P0-03A 后续迁移说明。

## 15. Known Risks

1. 当前没有真实 DeepSeek 调用，尚未验证目标账号权限、实际延迟、输出质量、偶发空 content 比例和成本。
2. DeepSeek 官方将当前 V4 Flash API 标记为 public beta；模型行为、限制或价格可能变化，部署前应再次核对官方文档并做小规模真实验证。
3. JSON Output 仍可能出现空 content；当前实现会安全映射为 `malformed-response` 并进入 Local fallback，但这会影响 AI 主路径成功率。
4. 公开扩展的 Origin allowlist 不能替代服务端认证；生产上线仍需 rate limit、成本告警和滥用防护。
5. 本地 website build 不证明 Vercel 环境已配置 `DEEPSEEK_API_KEY`，也不证明线上 `/api/optimize` 已迁移成功。
6. 自动化测试和 build 不替代 Chrome 中的 Improve → preview → Replace → Undo 与真实平台验证；本阶段未改这些流程。
7. 官网非 Privacy 的旧 local-only SEO/营销内容不在本阶段范围内，发布 AI 版本前仍需单独做事实同步审计。

## 16. 文件范围

P0-03A 修改：

- `README.md`
- `public/privacy_en.html`
- `public/privacy_zh.html`
- `website/.env.example`
- `website/src/app/api/optimize/route.ts`
- `website/src/content/en/privacy.ts`
- `website/src/content/zh-CN/privacy.ts`
- `website/src/lib/ai-optimization.ts`
- `scripts/run-p0-03-benchmark.mjs`
- `scripts/scan-extension-secrets.mjs`
- `tests/ai-optimization-engine.test.ts`
- `docs/P0-03_AI_OPTIMIZATION_ENGINE.md`（仅增加后续迁移说明）

P0-03A 新增：

- `docs/P0-03A_DEEPSEEK_PROVIDER.md`

仓库在 P0-03A 开始前已有未提交的 P0-01/P0-02/P0-03 与 website `language-switcher.tsx` 改动；这些改动继续保留，没有 reset、clean、commit 或 push。P0-03A 到此停止，不进入 P0-04。
