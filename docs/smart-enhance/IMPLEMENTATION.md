# PromptPro Smart Optimizer

## Goal

Create `smartOptimizer.js`.

Pure frontend.
No API.
No external libraries.

System converts vague user prompts into clearer AI-friendly prompts.

Default output must feel like natural human language.

Do NOT output:
- #角色
- #任务
- Prompt Engineering style
- System Prompt style

---

# Functions

Implement:

```javascript
detectCategory(userInput, selectedCategory)

inferContext(userInput)

buildPrompt(userInput, category, mode)

humanizePrompt(data)

smartOptimize(userInput, mode = "smart", model = "gpt")

quickEnhance(userInput)
```

---

# Categories

Implement `categoryRules`.

Categories:

- content
- coding
- work
- learning
- life
- travel
- finance
- general

Each category contains:

```javascript
{
  keywords: [],
  weight: number,
  skeleton: {}
}
```

Use weighted keyword matching.

---

# Modes

## light

Only:
- improve clarity
- improve structure
- keep short

Do NOT:
- roleplay
- long prompts

Example:

Input:

```text
帮我写减肥文案
```

Output:

```text
请帮我写一篇减肥营销文案，
语言自然真实，
适合小红书风格，
不要太像广告。
```

---

## smart (default)

Add:
- structure
- platform style
- output requirements

But keep natural language.

---

## pro

Can use:
- role
- framework
- constraints

Only in pro mode.

---

# Context Inference

Auto infer:
- platform
- tone
- audience
- output style

Examples:

| Input    | Infer  |
| -------- | ------ |
| 减肥文案 | 小红书 |
| SQL报错  | Debug  |
| 周报     | 职场   |

Do NOT ask user for missing info.

---

# Skeleton Rules

Different categories use different skeletons.

Do NOT use one global structure.

---

# content skeleton

```text
请帮我创作一篇适合[platform]风格的内容。

主题：
{userInput}

要求：
- 标题有吸引力
- 自然口语化
- 分段清晰
- 适合移动端阅读
```

---

# coding skeleton

```text
请帮我解决以下编程问题：

问题：
{userInput}

要求：
- 解释思路
- 提供代码
- 添加注释
```

---

# learning skeleton

```text
请用简单易懂的方式解释：

{userInput}

要求：
- 分步骤
- 举例
- 避免复杂术语
```

---

# Humanize Rules

Internal structure may contain:

```javascript
{
 role,
 constraints,
 structure
}
```

But final output must be natural language.

Bad:

```text
# 角色
你是一位专家
```

Good:

```text
请帮我写一篇适合小红书风格的减肥文案，
语言真实自然，
不要太营销化。
```

---

# Export

Export all functions.

Use ES Module syntax.

Include Chinese comments.

Output only complete `smartOptimizer.js`.

# Final Output Rules（最高优先级）

最终输出必须是：

- 自然语言
- 像真实用户提问
- 可直接发送给 AI

禁止默认输出：

- #角色
- #任务
- #背景
- #输出格式
- markdown 标题结构
- System Prompt 风格

内部允许存在：

- role
- constraints
- structure

但 humanizePrompt() 必须将其转换为自然表达。

最终用户看到的内容：

必须像：

“更专业的人类提问”

而不是：

“Prompt Engineering 模板”