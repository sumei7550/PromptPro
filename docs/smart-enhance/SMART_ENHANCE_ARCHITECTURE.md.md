# Smart Enhance Solution

Version: V2

---

# 1. Module Background

Smart Enhance 是 PromptPro 的核心增强模块。

作用：

当用户输入一句简单、模糊、口语化需求时：

```text
帮我写减肥文案
```

系统自动：

- 理解用户意图
- 推断上下文
- 增强结构
- 保持自然语言感

最终生成：

# 更容易被 AI 理解的输入。

---

# 2. Current Problems

当前 Prompt 优化器主要存在以下问题：

## 2.1 Prompt Engineering 感过重

大量 Prompt 工具默认输出：

```text
# 角色
# 任务
# 输出格式
```

这类 System Prompt 风格。

问题：

- 普通用户理解成本高
- AI 味明显
- 不像正常提问
- 输出越来越模板化

用户真正需要的：

不是：

# “Prompt 工程”

而是：

# “更清晰地表达需求”

---

## 2.2 优化结果越来越模板化

很多 Prompt 优化器：

本质是：

# 固定模板拼接。

导致：

- 所有 Prompt 一个味
- 输出越来越像 AI
- 缺少真实表达感
- 模型创造力被限制

---

## 2.3 用户输入成本过高

很多工具要求用户填写：

- 平台
- 风格
- 用户画像
- 输出格式

但真实用户更希望：

# 点击后直接得到结果。

系统应自动推断上下文。

---

## 2.4 Prompt 越来越长

很多 Prompt 工具默认认为：

# “Prompt 越长越专业”

但实际上：

过长 Prompt 会：

- 降低自然度
- 增加 AI 味
- 限制模型发挥
- 提高阅读成本

尤其在中文场景更明显。

---

# 3. Solution Goals

Smart Enhance 的目标不是：

- 生成复杂 Prompt
- 炫 Prompt Engineering
- 强行结构化

而是：

# 帮用户更自然、更清晰地表达需求。

最终效果：

用户看到的不是：

```text
# 角色
你是一位资深营销专家
```

而是：

```text
请帮我写一篇适合小红书风格的减肥文案，
语言真实自然，
不要太像广告，
结尾带一点互动感。
```

---

# 4. Core Principles

## 4.1 默认自然语言化

最终输出必须像：

# “更专业的人类提问”

而不是：

# “System Prompt”

---

## 4.2 自动推断上下文

系统自动推断：

- 平台
- 风格
- 输出形式
- 用户目标

禁止要求用户频繁补充信息。

例如：

| 用户输入   | 自动推断 |
| ---------- | -------- |
| 减肥文案   | 小红书   |
| SQL报错    | Debug    |
| 周报       | 职场     |
| 失恋怎么办 | 情绪支持 |

---

## 4.3 优化 ≠ Prompt 变长

优化重点：

- 减少歧义
- 增强结构
- 提升 AI 理解能力
- 保持自然表达

不是：

- 堆 Prompt 术语
- 无限加长
- Prompt DSL 化

---

## 4.4 不同场景使用不同结构

禁止：

所有分类共用同一种 Prompt 模板。

不同场景：

必须拥有不同 Skeleton。

例如：

- content 更强调传播感
- coding 更强调稳定输出
- learning 更强调教学感
- life 更强调共情感

---

# 5. System Architecture

```text
用户输入
→ Intent Detection（意图识别）
→ Scene Classification（场景分类）
→ Context Inference（上下文推断）
→ Skeleton Build（场景骨架）
→ Humanize Engine（自然语言化）
→ 输出最终 Prompt
```

---

# 6. Intent Detection

## 6.1 分类体系

系统默认支持 8 个分类：

| 分类     | 用途                 |
| -------- | -------------------- |
| content  | 文案 / 小红书 / 营销 |
| coding   | 编程 / SQL / Debug   |
| work     | 周报 / 邮件 / OKR    |
| learning | 学习 / 解题 / 概念   |
| life     | 情绪 / 心理 / 人生   |
| travel   | 攻略 / 行程 / 美食   |
| finance  | 股票 / 理财 / 分析   |
| general  | 默认分类             |

---

## 6.2 分类规则

禁止：

```javascript
includes(keyword)
```

必须：

# 使用权重机制。

例如：

```javascript
{
  keyword: "小红书",
  weight: 5
}
```

最终：

```javascript
score += weight
```

而不是简单命中。

---

## 6.3 Pattern Rules

除了关键词：

还需要 Pattern Detection：

```javascript
containsQuestion
containsCode
containsEmotionWords
containsTableRequest
```

用于提高分类准确率。

---

# 7. Scene Skeleton System

## 7.1 核心原则

不同场景：

必须有不同 Skeleton。

禁止：

所有分类共用统一结构。

---

## 7.2 content Skeleton

目标：

- 平台感
- 传播感
- 互动感

```text
请帮我创作一篇适合[平台]风格的内容。

主题：
{userInput}

要求：
- 标题有吸引力
- 语言自然口语化
- 分段清晰
- 适合移动端阅读
- 结尾带互动感
```

---

## 7.3 coding Skeleton

目标：

- 输出稳定
- 提升代码质量

```text
请帮我解决以下编程问题：

问题：
{userInput}

要求：
- 说明解决思路
- 提供代码示例
- 添加关键注释
- 如有必要给出优化建议
```

---

## 7.4 learning Skeleton

目标：

- 易懂
- 教学感

```text
请用简单易懂的方式解释以下内容：

{userInput}

要求：
- 分步骤说明
- 使用类比或示例
- 避免复杂术语
```

---

## 7.5 work Skeleton

```text
请帮我整理以下职场内容：

{userInput}

要求：
- 逻辑清晰
- 重点明确
- 表达专业简洁
```

---

## 7.6 life Skeleton

```text
请从情绪、原因和建议几个角度，
帮助分析以下问题：

{userInput}

要求：
- 语气温和
- 有共情感
- 提供实际建议
```

---

# 8. Context Inference

## 8.1 功能

系统自动推断：

- 平台
- 风格
- 输出形式
- 用户目标

禁止要求用户手动填写。

---

## 8.2 示例

| 用户输入   | 自动推断 |
| ---------- | -------- |
| 减肥文案   | 小红书   |
| 写封辞职信 | 职场     |
| Python报错 | Debug    |
| 旅行攻略   | 表格行程 |

---

# 9. Humanize Engine

## 9.1 核心作用

内部结构：

```text
role
constraints
structure
```

最终必须转换为：

# 自然语言 Prompt

---

## 9.2 错误示例（禁止）

```text
# 角色
你是一位资深营销专家
```

---

## 9.3 正确示例（推荐）

```text
请帮我写一篇适合小红书风格的减肥文案，
语言真实自然，
不要太像广告，
结尾带互动感。
```

---

# 10. Optimization Modes

系统需支持三种模式：

| 模式  | 说明                    |
| ----- | ----------------------- |
| Light | 微调表达                |
| Smart | 智能结构化（默认）      |
| Pro   | 高级 Prompt Engineering |

---

## 10.1 Light Mode

仅做：

- 轻结构化
- 增强清晰度
- 增强自然表达

禁止：

- 长 Prompt
- Prompt DSL
- Role Play

示例：

```text
请帮我写一篇减肥营销文案，
语言自然真实，
适合小红书风格，
不要太像硬广告。
```

---

## 10.2 Smart Mode（默认）

允许：

- 增加结构
- 增加输出要求
- 增加平台风格

但：

# 必须保持自然语言感。

---

## 10.3 Pro Mode

仅高级模式允许：

- role
- framework
- constraints
- output format

适合高级用户。

默认不启用。

---

# 11. Model Adaptor

不同模型：

适合不同 Prompt 风格。

| 模型     | 风格       |
| -------- | ---------- |
| ChatGPT  | 结构化     |
| Claude   | 自然长文本 |
| Gemini   | 简洁       |
| DeepSeek | 中文口语化 |
| 豆包     | 轻表达     |

系统需支持：

```javascript
optimizeByModel(model)
```

---

# 12. Output Principles

用户最终看到的：

必须像：

# “更好的提问”

而不是：

# “Prompt Engineering 结果”

---

## 默认模式禁止：

- #角色
- #任务
- System Prompt 风格
- Prompt DSL
- 复杂工程化结构

---

## 推荐输出风格

```text
请帮我...
要求：
- ...
- ...
```

---

# 13. Future Directions

后续可增加：

- Prompt Chains
- Slash Commands
- Variables System
- 用户偏好记忆
- 模型风格适配
- Prompt 压缩
- AI 输出后二次优化

---

# 14. Product Positioning

PromptPro 不应该定位为：

```text
Prompt Generator
```

而应该定位为：

# AI Input Layer

或者：

# AI 输入法

核心价值：

# “让普通用户的表达，
自动变成 AI 更容易理解的输入。”



# Output Requirements

- 使用纯 JavaScript
- 不依赖第三方库
- 使用 ES Module
- 包含中文注释
- 可直接运行
- 只输出完整代码
- 使用 ```javascript 包裹
- 不要输出解释