你现在负责重构现有 Chrome 扩展 PromptPro。

项目的新产品名称保持为：

PromptPro: AI Prompt Enhancer

旧名称：

PromptPro: Local Prompt Optimizer

本次不是新建一个插件，也不是重新从零开发，而是在现有 PromptPro 代码基础上进行大版本重构。

核心竞品：

Pretty Prompt
https://chromewebstore.google.com/detail/prettyprompt/opjebobgkipcdimgofkboimilnchghpd?hl=zh-CN&authuser=0

官网：
https://www.pretty-prompt.com/

Pricing：
https://www.pretty-prompt.com/pricing

Prompt Optimizer：
https://www.pretty-prompt.com/prompt-optimizer

产品重构方案以项目中的《PromptPro_rebuild_plan.md》为最高优先级产品规格。

本次目标是：

在不复制 Pretty Prompt 的品牌、Logo、图标、源代码、逐字文案和独特视觉素材的前提下，尽可能 1:1 复刻其已经验证的：

- 核心产品流程
- 功能结构
- 用户操作路径
- Improve 交互
- Refine 交互
- History
- Saved Prompts
- Prompt Types
- 免费 / Pro 产品分层
- ChatGPT / Claude / Gemini 页面内使用方式

但这一次只进行第一阶段：代码库审计和重构规划。

不要开始大规模开发。

请完成以下任务：

1. 完整阅读当前代码库。

2. 阅读《PromptPro_rebuild_plan.md》。

3. 分析当前 PromptPro 的：
   - Chrome Extension 架构
   - manifest
   - content scripts
   - background / service worker
   - popup
   - options / settings
   - storage
   - prompt 数据结构
   - 本地 Prompt 功能
   - AI 调用相关代码
   - ChatGPT / Claude / Gemini 已有适配
   - 页面注入逻辑
   - 用户状态
   - 使用次数限制
   - 支付 / Pro 相关代码
   - 国际化
   - 构建方式
   - 测试情况

4. 找出当前代码中哪些模块可以直接复用。

5. 找出哪些模块与新版 PromptPro 架构冲突，需要：
   - 删除
   - 降级
   - 重构
   - 替换

6. 重点检查当前“Local Prompt Optimizer”架构是否把本地功能耦合进了核心流程。

新版核心定位必须调整为：

PromptPro: AI Prompt Enhancer

核心流程应围绕：

用户在 AI 网站输入内容
→ Improve
→ 生成 Improved Prompt
→ 查看 Original / Improved
→ Use / Replace
→ Send

后续加入：

Refine
History
Saved
Prompt Types
Free / Pro

7. 重点检查当前 ChatGPT 页面注入实现。

需要判断现有代码是否适合重构成：

- 在 ChatGPT 输入区域附近显示 PromptPro 的 Improve 入口
- 正确读取当前输入
- 正确监听 SPA 页面变化
- 页面更新后自动恢复
- 不干扰 ChatGPT 原有输入和快捷键
- 优化完成后可以安全替换原输入
- 支持 loading / success / error / retry 状态

8. 同时检查 Claude 和 Gemini 是否已有可复用适配。

但首个正式重构版本仍然以 ChatGPT 为 P0。

9. 对当前所有功能进行分类。

请输出：

A. 保留
B. 重构
C. 降级
D. 删除
E. 新增

每一项都说明原因。

10. 生成新版建议目录 / 模块架构。

重点考虑以下模块：

- platform adapters
- ChatGPT adapter
- Claude adapter
- Gemini adapter
- input detection
- Improve
- Refine
- prompt optimization engine
- result UI
- History
- Saved Prompts
- usage limits
- subscription
- settings
- local storage
- shared UI
- state management

但不要为了“架构漂亮”而过度工程化。

尽量复用当前项目技术栈。

11. 特别识别技术债务，包括：

- 大型单文件
- 重复 DOM 查询
- 站点 selector 硬编码
- MutationObserver 滥用
- 状态耦合
- storage 混乱
- UI 与业务逻辑耦合
- Prompt 模板硬编码
- 平台逻辑混在一起
- 不安全 innerHTML
- 不必要权限
- manifest 权限过宽
- 容易因 ChatGPT DOM 更新而失效的代码

12. 检查 Chrome Web Store 名称、manifest name、short_name、description 等相关位置。

规划把：

PromptPro: Local Prompt Optimizer

统一调整为：

PromptPro: AI Prompt Enhancer

但本次先列出需要修改的位置，不要立即修改所有文件。

13. 不要删除现有用户本地数据。

如果未来重构 storage schema，需要设计向后兼容迁移方案。

必须优先保护已有用户：

- Prompt
- settings
- history
- license / Pro 状态
- 本地数据

14. 不要因为重构直接创建一个全新 extension ID 或全新项目。

必须基于现有插件升级。

15. 不要擅自新增产品功能。

以《PromptPro_rebuild_plan.md》为准。

当前明确不做：

- AI Conversation Manager
- PDF 导出
- Word 导出
- Notion 同步
- AI 知识库
- Agent
- 工作流自动化
- Prompt Marketplace
- Prompt 社区
- 大规模公共模板库

16. 当前阶段不要写实际重构代码。

除非为了确认现有代码行为必须进行极小范围的非功能性检查，否则不要修改项目。

17. 最终输出一份：

REFACTOR_AUDIT.md

文件必须包含：

# 1. Current Architecture
# 2. Current User Flow
# 3. Gap vs New PromptPro
# 4. Reusable Components
# 5. Components to Refactor
# 6. Components to Remove or Downgrade
# 7. Missing Components
# 8. Storage Migration Risks
# 9. Platform Adapter Assessment
# 10. ChatGPT Integration Assessment
# 11. Claude Integration Assessment
# 12. Gemini Integration Assessment
# 13. UI Refactor Assessment
# 14. Subscription / Usage Assessment
# 15. Technical Debt
# 16. Proposed New Architecture
# 17. Proposed File Structure
# 18. Refactor Order
# 19. Risk List
# 20. Acceptance Criteria for Phase 1

18. 在 REFACTOR_AUDIT.md 最后给出下一阶段推荐执行顺序。

必须明确拆分为：

P0
P1
P2

其中 P0 优先完成：

- ChatGPT
- Improve
- prompt optimization engine
- Original / Improved result
- Use / Replace
- Retry
- loading
- error handling
- usage limit 基础框架

19. 本轮结束时不要自动开始 P0 开发。

完成审计文档后停止。

等待下一条 Codex 指令。

重要原则：

- 不要重新设计一个你认为更好的产品。
- 不要偏离 Pretty Prompt 这个母版竞品。
- 不要把 Local 当作主产品定位。
- 不要过度工程化。
- 不要无必要地重写现有可复用代码。
- 不要破坏现有用户数据。
- 不要直接复制竞品受保护的品牌、代码、文案或视觉资产。

本轮唯一交付物：

REFACTOR_AUDIT.md