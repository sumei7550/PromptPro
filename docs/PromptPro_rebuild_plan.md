# PromptPro 重构方案

## 1. 项目背景

PromptPro 最初参考竞品 Pretty Prompt，但当前版本并未按照竞品已经验证的核心产品路径进行复刻，而是在交互、产品定位和本地化实现上做了较多自主设计。

当前判断是：

- 竞品方向本身没有选错。
- PromptPro 当前效果不理想，核心问题不是赛道，而是没有复刻竞品已经验证过的核心体验。
- 本次不重新创建一个新的 Chrome 插件，不切换到 AI Exporter 等其他赛道。
- 本次直接对现有 PromptPro 做一次大版本重构。
- 重构策略采用“功能、流程、信息架构、商业化路径尽可能 1:1 对齐竞品”的方式。
- 不复制竞品的品牌、名称、Logo、图标、源代码、独特视觉素材和逐字文案。

---

## 2. 核心竞品

### 2.1 Pretty Prompt

Chrome Web Store：

https://chromewebstore.google.com/detail/prettyprompt/opjebobgkipcdimgofkboimilnchghpd?hl=zh-CN&authuser=0

官网：

https://www.pretty-prompt.com/

Pricing：

https://www.pretty-prompt.com/pricing

Prompt Optimizer：

https://www.pretty-prompt.com/prompt-optimizer

本次 PromptPro 重构以 Pretty Prompt 为唯一核心母版竞品。

### 2.2 竞品筛选逻辑

此前筛选竞品时采用以下标准：

1. Chrome 安装量达到 2 万以上。
2. 最近 3 个月仍有更新。
3. 产品存在明确付费路径。
4. 产品功能和 PromptPro 原有方向高度相关。
5. 用户需求已经经过市场验证，而不是概念型产品。

Pretty Prompt 满足上述筛选思路，并且和 PromptPro 的原始产品方向最一致。

---

## 3. 本次重构目标

PromptPro 不是重新做一个“新的 Prompt 产品”。

本次目标是：

> 将现有 PromptPro 重构为一个在核心使用流程、功能层级和商业化逻辑上高度对齐 Pretty Prompt 的产品。

重构后的 PromptPro 应满足：

- 用户进入 ChatGPT、Claude、Gemini 等 AI 页面后即可直接使用。
- 不需要先打开一个复杂插件面板。
- 不要求用户理解 Prompt Engineering。
- 用户输入一句普通需求后，可以一键优化。
- 优化结果可直接替换原输入。
- 当信息不足时，可进一步 Refine。
- 使用历史、保存 Prompt、Prompt 类型等能力属于第二层功能。
- 免费限制与 Pro 付费形成清晰转化链路。
- “本地”从产品主定位降级为隐私与数据能力。

---

## 4. 重构原则

### 4.1 复刻的是产品机制

需要高度对齐：

- 用户入口
- 核心操作路径
- 功能顺序
- 信息架构
- 按钮层级
- 使用限制
- 免费 / Pro 分层
- History 逻辑
- Saved Prompt 逻辑
- Refine 逻辑
- Prompt Type 逻辑
- 多 AI 平台接入逻辑

### 4.2 不直接复制的内容

禁止直接复制：

- Pretty Prompt 品牌名称
- Logo
- 插件图标
- 商标
- 独特插画
- 官网宣传图
- Chrome 商店截图
- 源代码
- 逐字营销文案
- 具有高度识别性的视觉资产

PromptPro 保留自己的：

- 名称
- 品牌
- 图标体系
- 配色
- 文案
- 视觉设计语言

---

## 5. 产品定位调整

### 5.1 当前定位问题

PromptPro 当前强调“本地”或本地 Prompt 能力，但“本地”不是用户最核心的购买理由。

用户真正关心的是：

> 我现在输入的这句话，能不能一键变成更好的 Prompt，并让 AI 给出更好的答案。

因此，“Local”不应继续作为主价值。

### 5.2 新定位

建议主定位：

> PromptPro — AI Prompt Enhancer

核心价值：

> 在 ChatGPT、Claude、Gemini 等 AI 产品中，一键把普通输入优化成更高质量 Prompt。

本地能力调整为：

> Privacy / Local History / Local Saved Prompts

也就是：

**本地能力从 Product Positioning 降级为 Trust Feature。**

---

## 6. 核心用户路径

新版 PromptPro 的第一用户路径必须非常短。

### 6.1 标准流程

1. 用户打开 ChatGPT。
2. 用户正常输入一句需求。
3. PromptPro 在输入框附近显示 Improve 入口。
4. 用户点击 Improve。
5. PromptPro 读取当前输入。
6. 优化引擎生成更高质量 Prompt。
7. 用户看到优化结果。
8. 用户选择 Use / Replace。
9. 优化后的 Prompt 替换原输入。
10. 用户直接发送给当前 AI。

核心链路：

**原始输入 → Improve → 优化结果 → Replace / Use → Send**

### 6.2 目标

首次安装后的新用户，应当能够在极短时间内完成第一次有效体验。

用户不需要：

- 打开独立管理页
- 创建 Prompt
- 学习模板
- 手动选择复杂参数
- 复制到另一个页面
- 理解 Prompt Engineering 术语

---

## 7. Improve 功能

Improve 是整个 PromptPro 的一级核心能力。

### 7.1 入口

Improve 按钮应嵌入目标 AI 产品的输入区域附近。

支持优先级：

1. ChatGPT
2. Claude
3. Gemini
4. 后续再扩展其他 AI 产品

### 7.2 操作逻辑

用户输入：

> 帮我写一封邮件催客户付款

点击：

> Improve

系统自动判断：

- 当前任务类型
- 用户目标
- 所需背景
- 输出格式
- 约束条件
- 是否存在明显信息缺失

生成更完整 Prompt。

### 7.3 Improve 输出原则

不能简单套固定“超级 Prompt 模板”。

需要根据任务类型进行优化。

例如：

#### 邮件任务

重点补充：

- 受众
- 语气
- 目标
- 长度
- CTA
- 限制条件

#### 编程任务

重点补充：

- 技术环境
- 语言 / 框架
- 当前问题
- 期望行为
- 边界条件
- 输出要求

#### 研究任务

重点补充：

- 研究范围
- 时间范围
- 数据要求
- 证据要求
- 分析方法
- 输出结构

#### 图片生成任务

重点补充：

- 主体
- 场景
- 构图
- 光线
- 风格
- 镜头
- 画面限制

### 7.4 核心原则

不要机械输出：

- Role
- Background
- Objective
- Skills
- Workflow
- Constraints
- Output Format

只有任务确实需要时才使用相关结构。

最终目标是：

> 优化后的 Prompt 更准确，而不是单纯更长。

---

## 8. Refine 功能

Refine 是第二个核心功能。

### 8.1 触发条件

当原始输入信息明显不足时：

- Improve 仍可直接生成一个版本。
- 同时允许用户使用 Refine 进一步优化。

### 8.2 Refine 交互

例如用户输入：

> 帮我设计一个 SaaS 产品

Refine 可以追问少量高价值问题：

- 产品面向谁？
- 当前处于什么阶段？
- 希望输出 PRD、商业模式还是功能列表？
- 是否存在明确行业？
- 是否有目标价格或商业模式？

### 8.3 Refine 原则

Refine 不能变成传统表单。

要求：

- 问题数量少
- 每个问题都显著影响结果
- 尽量提供快捷选项
- 允许跳过
- 不强迫用户填写所有内容

目标：

**Improve = 快速得到结果**

**Refine = 提高准确率**

---

## 9. 优化结果交互

优化完成后，不建议无感直接覆盖。

用户需要看到 PromptPro 带来的价值。

建议结构：

### Original

展示用户原始输入。

### Improved

展示优化后的 Prompt。

### 操作

核心操作：

- Use / Replace
- Refine
- Retry

可选：

- Save

默认主按钮：

> Use Improved Prompt

点击后替换当前 AI 输入框内容。

---

## 10. History

History 属于第二层能力，不作为首页核心。

### 10.1 功能

记录用户最近优化过的 Prompt。

每条至少包含：

- 自动标题
- 原始 Prompt
- 优化后的 Prompt
- 时间
- 来源平台
- 再次使用

### 10.2 免费与 Pro

免费用户：

- 仅保留最近少量记录

Pro：

- 完整 History
- 更长时间保存
- 搜索
- 再次使用

### 10.3 本地策略

Prompt History 默认可以继续保留 PromptPro 原有的本地优势。

例如：

> History stored locally by default.

但不要把这个能力放在用户第一次使用时强调。

---

## 11. Saved Prompts / Library

Saved Prompts 属于留存与 Pro 能力。

### 11.1 保存入口

用户获得一个满意的优化结果后：

> Save

保存为可复用 Prompt。

### 11.2 保存内容

包括：

- 标题
- Prompt
- 标签
- 创建时间
- 最近使用时间

### 11.3 再次使用

用户可从 Saved 中：

- 插入当前 AI 输入框
- 复制
- 编辑
- 删除

### 11.4 产品原则

不要把 PromptPro 重新做成一个“Prompt 商城”。

第一阶段不重点建设：

- 大规模模板库
- 社区 Prompt
- Prompt 市场
- 公共 Prompt 分享平台

Library 首先解决：

> 用户保存自己的高价值 Prompt。

---

## 12. Prompt Types

Prompt Types 不作为第一层必选项。

用户默认只需要点击：

> Improve

系统自动判断当前类型。

### 12.1 高级类型

后续 Pro 可提供类型选择，例如：

- General
- Writing
- Coding
- Research
- Image
- Video
- Marketing

### 12.2 原则

不要让用户在每次 Improve 前都必须先选择类型。

Prompt Type 是高级控制，不是核心步骤。

---

## 13. Popup 重构

Chrome 扩展 Popup 不再承担核心使用流程。

### 13.1 Popup 应只承担

- 当前账户状态
- Free / Pro 使用量
- History
- Saved
- Settings
- Upgrade

### 13.2 Popup 不应成为

- Prompt 编辑器主入口
- 复杂模板管理后台
- 第一使用入口
- 强制中转页

核心行为必须发生在 ChatGPT / Claude / Gemini 页面本身。

---

## 14. Settings

设置页保持轻量。

建议包含：

### General

- Language
- Default behavior
- Auto detect platform

### Privacy

- Local history
- Clear history
- Clear saved prompts
- Cloud sync 状态

### Subscription

- 当前计划
- 使用额度
- Upgrade
- Manage subscription

### Advanced

后期再考虑：

- Prompt model
- 自定义优化偏好
- Prompt Types 默认值

---

## 15. 免费 / Pro 商业化

本次重构应复刻竞品已经验证的“使用次数 → 付费”逻辑。

### 15.1 Free

建议第一版：

- 每周 10 次 Improve
- 每周 3 次 Refine
- 最近 5 条 History
- 少量 Saved Prompts
- 基础 Prompt Type

### 15.2 Pro

建议：

- Unlimited Improve
- Unlimited Refine
- Unlimited History
- Unlimited Saved Prompts
- Advanced Prompt Types
- 后续云同步能力

### 15.3 Pricing

首版建议定价区间：

- $5.99 / month
- 或 $7.99 / month

同时提供年付折扣。

第一阶段目标不是最大化客单价，而是验证：

> PromptPro 是否能依靠 Prompt 优化形成真实付费。

---

## 16. 支持平台

### P0

- ChatGPT

### P1

- Claude
- Gemini

### P2

根据用户需求和竞品覆盖情况继续增加：

- Perplexity
- Grok
- 其他 AI Chat 产品

原则：

不要首发就支持大量平台。

优先保证前三个平台：

- 按钮位置稳定
- 输入读取稳定
- 内容替换稳定
- 页面变化后可恢复
- 不干扰原站交互

---

## 17. PromptPro 保留的差异化

1:1 复刻不代表完全没有自己的优势。

但差异化必须排在核心闭环之后。

### 17.1 中文优化质量

不是简单“支持中文”。

目标是：

> 中文用户输入中文时，优化后的 Prompt 更自然、更准确、更符合中文场景。

后续可以重点优化：

- 中文商务
- 小红书
- 微信内容
- 电商
- 中文营销
- 中文办公
- 中文研究

### 17.2 本地隐私

保留：

- Local History
- Local Saved Prompts
- 清除本地数据
- 默认不上传非必要数据

但作为信任能力，而不是第一产品卖点。

### 17.3 更轻

PromptPro 第一阶段不扩展大量外围功能。

核心定位：

> 一个足够快、足够轻的一键 Prompt Enhancer。

---

## 18. 建议删除或降级的旧功能

如果当前 PromptPro 存在以下功能，应重新评估优先级：

- 大量 Prompt 分类
- 复杂文件夹
- Prompt 导入导出
- 重度模板管理
- 多级参数设置
- 大量本地管理页面
- 非核心 AI 功能
- 和 Improve 无关的入口

这些功能不一定全部删除。

处理原则：

### 保留

如果底层代码可复用，可继续保留。

### 降级

不要占据首页和第一使用路径。

### 删除

如果维护成本高、用户使用低，并且影响新版结构，可以删除。

---

## 19. 产品信息架构

重构后建议只保留五个核心模块：

1. Improve
2. Refine
3. History
4. Saved
5. Settings

其中：

### 一级

- Improve
- Refine

### 二级

- History
- Saved

### 三级

- Settings

任何新增功能都需要回答：

> 它是否直接提高 Improve 的使用率、效果、留存或付费？

如果不是，暂缓。

---

## 20. 版本规划

## V2.0 — 核心复刻版本

必须完成：

- ChatGPT 输入框注入
- Improve
- 优化引擎
- Original / Improved 对比
- Replace / Use
- Retry
- Loading
- Error handling
- Free usage limit

这一版本的目标：

> 跑通完整的 Pretty Prompt 核心闭环。

---

## V2.1 — Refine + 多平台

增加：

- Refine
- Claude
- Gemini
- 使用次数体系完善
- 登录
- Pro 状态

目标：

> 用户开始形成高频使用。

---

## V2.2 — 留存体系

增加：

- History
- Saved Prompts
- Search
- Reuse
- Prompt Types

目标：

> 提高留存和 Pro 价值。

---

## V2.3 — 商业化完善

增加：

- Subscription
- Annual plan
- Upgrade 页面
- Paywall
- Usage 页面
- Pro 管理

目标：

> 正式验证付费转化。

---

## 21. 核心页面 / 状态清单

后续设计与开发必须覆盖以下状态。

### AI 页面

- 未输入内容
- 已输入内容
- Improve 可用
- Improve loading
- Improve success
- Improve error
- Replace success
- Retry
- Refine available
- Refine questions
- Refine loading
- Refine result
- Free limit reached
- Pro required

### Popup

- Free user
- Pro user
- 未登录
- 已登录
- 剩余额度
- History
- Saved
- Settings
- Upgrade

### History

- Empty
- List
- Detail
- Search
- Reuse
- Delete

### Saved

- Empty
- List
- Detail
- Edit
- Use
- Delete

### Subscription

- Free
- Upgrade
- Pro
- Subscription management
- Payment failure / expired

---

## 22. 验收标准

本次重构不能只以“功能开发完成”为验收标准。

### 22.1 核心体验

新用户可以：

1. 安装插件。
2. 打开 ChatGPT。
3. 输入普通需求。
4. 看到 Improve。
5. 点击 Improve。
6. 获得明显优于原输入的 Prompt。
7. 一键替换。
8. 发送。

整个过程不需要阅读教程。

### 22.2 竞品对齐

同时安装 Pretty Prompt 与 PromptPro。

针对核心操作：

- Improve
- Refine
- Replace
- History
- Saved
- Usage limit
- Upgrade

用户的学习成本和操作步骤应基本处于同一水平。

### 22.3 产品质量

不能出现：

- Prompt 只是机械变长
- 所有 Prompt 都使用同一模板
- Improve 经常破坏用户原意
- 输入框注入位置不稳定
- 页面刷新后按钮消失
- 与原站快捷键冲突
- 优化后无法正确回填
- 免费额度显示不一致

---

## 23. 本次明确不做

为了避免再次偏离竞品核心，本轮重构先不做：

- AI Conversation Manager
- AI 对话导出
- PDF 导出
- Word 导出
- Notion 同步
- AI 知识库
- 团队知识库
- Prompt 社区
- Prompt Marketplace
- Agent
- 工作流自动化
- 大规模公共模板库
- 与核心 Prompt Improve 无关的 AI 功能

---

## 24. 最终重构决策

最终方案：

**不新建一个新的提示词插件。**

直接基于当前 PromptPro 做大版本重构。

产品策略：

> 先 1:1 复刻 Pretty Prompt 已经验证的核心产品机制，再做 PromptPro 自己的优化。

复刻优先级：

1. 输入框原生入口
2. Improve
3. 优化结果
4. Replace
5. Refine
6. 免费使用限制
7. Pro
8. History
9. Saved
10. Prompt Types
11. 多平台

PromptPro 差异化只保留：

- 中文优化质量
- 本地隐私
- 更轻量

其他创新全部放到核心闭环验证之后。

---

## 25. 后续执行原则

本 Markdown 只作为产品重构规格。

当前阶段：

- 不写代码。
- 不输出 Codex 命令。
- 不定义具体代码文件。
- 不制定具体框架实现。
- 不进行数据库结构设计。
- 不进行 API 代码设计。

下一阶段可单独根据此文档生成：

- Codex 执行命令
- 技术拆分
- 文件级改造清单
- UI 实现任务
- Prompt 优化引擎规格
- Chrome Extension 开发任务
- 测试与验收任务
