# P0-01 — ChatGPT Integration Foundation

状态：代码实现与本地自动化验证完成；真实 Chrome 验收待人工执行。

范围：仅建立 ChatGPT 输入框识别、生命周期、输入 identity/snapshot、读取和验证式写回底座。未实现 P0-02、Improve UI、AI Engine、Result UI、Refine、Usage、Popup、Claude 或 Gemini 改造。

## 1. 实现摘要

本阶段在保留现有 `PlatformAdapter` 和本地优化流程的前提下，增加了结构化输入 contract：

- `detectInput()`：返回 `ready`、`not-ready` 或 `selector-mismatch`，并包含可调试原因。
- `getInputHandle()`：返回当前元素、selector id、轻量 identity 和实时有效性检查。
- `readInput()`：返回规范化文本、identity、时间戳和单调递增 sequence。
- `replaceInput(text, expectedSnapshot?)`：写回前检查输入实例和原文是否过期，写回后等待宿主更新并重新读取验证，返回显式成功或失败原因。
- 旧的 `getInputElement()`、`getInputContent()` 和 `setInputContent()` 继续保留，避免一次性破坏其他平台 adapter。

失败原因包括：

- `input-not-ready`
- `selector-mismatch`
- `stale-input`
- `changed-input`
- `write-rejected`
- `verification-failed`

现有优化流程现在会在打开预览前保留快照，并在应用结果前校验快照。用户在等待期间修改输入、切换会话或遇到输入框重挂载时，旧结果不会被底层静默覆盖。写回失败时不记录 history，也不扣减 usage。

## 2. 修改文件

| 文件 | 修改内容 |
|---|---|
| `src/content/input-foundation.ts` | 新增 DOM 无关的文本规范化、identity 比较、snapshot 过期判断和缺失输入分类。 |
| `src/content/platforms/base.ts` | 扩展 adapter contract，增加 handle/snapshot/detection/replace result 类型、默认读取和验证式写回兼容层。 |
| `src/content/platforms/chatgpt.ts` | 收敛 selector、记录 selector id、区分 readiness 与 selector mismatch、统一读取、实现 ChatGPT 写回事件和失败抛出。 |
| `src/content/lifecycle.ts` | 新增 ChatGPT 单实例 lifecycle，处理输入挂载/移除/属性变化、路由变化和状态通知。 |
| `src/content/floating-button.ts` | 支持由外部 lifecycle 驱动刷新；mount 幂等；重复 host 清理；非 ChatGPT observer 使用 rAF 合并刷新。 |
| `src/content/index.ts` | 接入 ChatGPT lifecycle 和 snapshot-aware replace；模板插入与撤销也检查显式写回结果。 |
| `tests/input-foundation.test.ts` | 覆盖规范化、长文本、identity、stale snapshot 和 selector result classification。 |
| `package.json` | 新增 `npm run test:p0`，使用 Node 内建 test runner，不引入测试依赖。 |
| `docs/P0-01_CHATGPT_INTEGRATION.md` | 本阶段实现、验证结果、人工验收步骤和风险记录。 |

未修改 manifest、popup、optimizer、templates、storage schema、website、支付或生成目录源码。

## 3. Input identity 与 snapshot

identity 由以下字段组合：

- `platform`：当前 adapter 名称，本阶段为 `chatgpt`。
- `routeKey`：`location.pathname + location.search`，用于区分新对话和已有会话路由。
- `mountId`：adapter 内通过 `WeakMap<HTMLElement, number>` 为每个实际输入元素实例分配的递增编号。

identity 不是永久用户 ID，也不依赖用户可见文本。输入元素被替换或会话路由变化都会产生不同 identity。

snapshot 包含：

- `identity`
- 规范化后的 `text`
- `capturedAt`
- adapter 内递增的 `sequence`

写回前同时比较 identity 和文本：identity 变化返回 `stale-input`，同一实例文本变化返回 `changed-input`。底层不会在这两种情况下强制覆盖。

## 4. Selector 策略

按以下优先级查询，并把命中项写入 handle 的 `selector` 字段：

1. `prompt-textarea-id`：`#prompt-textarea`
2. `composer-role-textbox`：`main form div[contenteditable="true"][role="textbox"]`
3. `composer-prosemirror`：`main form .ProseMirror[contenteditable="true"]`

每个候选还必须是已连接、未禁用的 textarea 或 contenteditable。删除了原先只依赖 `data-placeholder` 的宽泛 fallback；fallback 被限制在 `main form` 内，避免误命中页面其他编辑区。

当页面仍在加载或 composer 尚未挂载时返回 `not-ready`。当页面已加载且已出现 form、role textbox 或 send button 等 composer 证据，但支持的 selector 均未命中时返回 `selector-mismatch`。

默认不输出日志。开发时可在页面 localStorage 设置 `promptpro:debug=1`；selector id 发生变化时只输出一次 debug 日志。没有新增遥测或远端数据发送。

## 5. 输入读取

所有新调用通过 `readInput()` 进入同一读取路径：textarea/input 使用 `value`，contenteditable/ProseMirror 使用浏览器可见文本，随后统一：

- CRLF/CR 转换为 LF；
- NBSP 转换为普通空格；
- 移除常见零宽编辑器字符；
- 去除浏览器编辑器额外产生的首尾换行；
- 只含空白的内容明确返回空字符串；
- 保留内部换行和空行。

业务层仍对交给旧本地 optimizer 的文本执行首尾 `trim()`，以保持现有行为；snapshot 本身保留规范化后的实际输入文本，用于准确判断用户是否改动。

## 6. 写回与验证

ChatGPT contenteditable 写回继续优先保留 `document.execCommand('insertText')`。原因不是依赖其长期标准地位，而是当前浏览器中的编辑器通常通过原生编辑命令产生更接近真实用户编辑的 selection/input 行为，较直接改 DOM 更容易被 ProseMirror/受控编辑器接收。

执行前会显式把 selection 限制在当前输入元素内，不使用原先可能作用于页面选择区的全局 `selectAll`。如果原生命令返回失败或即时读取不匹配，则使用最小 DOM fragment fallback，并发送冒泡、composed 的 `input` 事件及 `change` 事件。

写回不会调用 `triggerSend()`，不会点击发送按钮，也不会合成 Enter/Shift+Enter。写回后等待两个 animation frame，再重新检测当前输入并读取文本；只有规范化后的实际文本与目标完全一致才返回 success。否则返回 `verification-failed`。

该验证能证明宿主页面在事件循环后仍暴露目标编辑器文本，但是否完全进入 ChatGPT 当前线上版本的内部编辑器状态仍需要真实 Chrome 中通过发送按钮状态和继续编辑行为验证，不能仅凭本地 DOM 测试宣称完成。

## 7. SPA / lifecycle

`ChatGPTInputLifecycle` 具有明确的 `start()`/`destroy()`，重复 `start()` 不会创建第二个 observer。它维护当前 detection state，并仅在状态、reason 或 identity 变化时通知订阅者。

生命周期信号包括：

- 首次启动时立即检测；
- 单个 `MutationObserver` 观察 child mount/unmount 和有限属性变化；
- 只在新增节点可能包含受支持输入、当前输入被移除/断开或相关输入属性变化时调度检测；
- 120 ms debounce 合并 DOM 批量变化；
- 500 ms 仅比较轻量 URL route key，只有 SPA route 变化才重新检测 DOM。

observer 虽挂在 `body` subtree 以捕获 ChatGPT 任意层级的 composer 重挂载，但不再像旧实现那样对每条 mutation 都执行全页面 adapter 查询和按钮定位。文本节点流式追加不会触发 selector 扫描；候选检查只在新增局部节点内完成。

ChatGPT 的 `FloatingButton` 不再创建自己的 DOM observer，而由 lifecycle 状态变化驱动 `refresh()`，因此 ChatGPT 页面只有一个负责输入生命周期的 observer。按钮 `mount()` 幂等，并会清理同 id 的旧 host，避免重复 UI host。其他平台保持兼容行为，其原 observer 的回调也改为每帧最多执行一次。

## 8. 自动化验证结果

执行日期：2026-09-05。

### `npm run test:p0`

结果：PASS。

- 6 tests
- 6 passed
- 0 failed

覆盖：英文、中文、中英混合、CRLF/CR、内部多行和空行、空内容、NBSP、零宽字符、10,000 字符长文本、粘贴风格换行、identity 路由/挂载比较、文本改变、输入实例改变、`not-ready` 与 `selector-mismatch` 分类。

### `npm run build`

结果：PASS。

- TypeScript strict check：PASS
- Vite/CRXJS production build：PASS
- 输出：`dist-new/`
- 仍存在审计已记录的 `constants.ts` 动态/静态混合导入提示；本阶段未扩大范围处理，且不阻塞构建。

### `git diff --check`

结果：PASS。PowerShell/Git 输出了现有全局 ignore 文件权限提示和 LF/CRLF 工作区提示；没有 whitespace error。

## 9. 真实 Chrome 验收

结果：**NOT VERIFIED IN REAL CHROME**。

已在真实 Chrome 的已登录 `https://chatgpt.com/` 页面执行只读检查。2026-09-05 的线上 DOM 结果为：

- `#prompt-textarea`：1 个
- `main form div[contenteditable="true"][role="textbox"]`：1 个
- `main form .ProseMirror[contenteditable="true"]`：1 个
- 当前 route：`/`
- `#promptpro-floating-btn`：0 个

这证明当前 selector 优先级能够覆盖当时可见的真实 ChatGPT 输入 DOM，但当前 Chrome 会话没有加载/注入这份新构建，因此不能证明 adapter、lifecycle、写回或按钮行为。页面还保留了用户现有未发送草稿，本轮没有改写或发送它。以下项目不能标记为 PASS：

- A. 首次打开页面识别输入框
- B. 英文读取
- C. 中文读取
- D. 多行读取
- E. 新建对话重新识别
- F. 切换已有对话后旧引用失效
- G. 刷新后恢复
- H. 输入区域重渲染且不重复绑定
- I. 写回被 ChatGPT 内部状态接受且不自动发送
- J. 写回后继续人工编辑
- K. Enter / Shift+Enter 原行为
- L. Console 无新增持续错误或 observer 刷屏

### 人工验证步骤

1. 执行 `npm run build`，在 `chrome://extensions/` 重新加载 `dist-new/`。
2. 打开已登录的 `https://chatgpt.com/`，确认只出现一个 PromptPro 按钮。
3. 分别输入英文、中文、中英混合、多行、长文本和粘贴文本，点击现有优化入口；在预览中取消一次，确认原输入未变化。
4. 再次应用结果，确认文本进入当前 composer、发送按钮/宿主状态正常、没有自动发送。
5. 应用后继续输入，并分别验证 Enter 与 Shift+Enter；确认行为与未安装扩展时一致。
6. 在预览保持打开时人工修改输入，再应用旧结果；应失败且不覆盖新文本、不记录 history、不扣 usage。
7. 在预览保持打开时新建对话或切换已有对话，再应用旧结果；应因 stale identity 失败。
8. 依次验证新建对话、切换两个已有对话、浏览器刷新；每次确认按钮恢复、只有一个 host、读取的是当前输入框。
9. 在 DevTools Elements 中观察 composer 重挂载，确认旧元素断开后 handle 更新；在 Console 确认没有持续错误和高频 PromptPro 日志。
10. 可临时执行 `localStorage.setItem('promptpro:debug', '1')` 后切换会话，确认只在 selector id 变化时输出一次 selector 日志；验证后删除该 key。

## 10. 已知风险

1. ChatGPT DOM 是线上可变依赖；当前三层 selector 必须通过真实 Chrome 核对。若线上结构已不在 `main form` 下，代码会明确返回 `selector-mismatch`，但入口不会恢复，需基于实际 DOM 更新最小 selector 集合。
2. `execCommand` 已不推荐但在 contenteditable 编辑器兼容上仍有实际价值。本阶段保留并限制其 selection 范围，同时提供事件 fallback；最终可靠性必须由真实 ChatGPT 验证。
3. DOM 重新读取无法单独证明 React/ProseMirror 所有内部状态已同步；人工验证必须覆盖发送按钮状态、继续编辑和实际手动发送前的行为，但本阶段仍禁止自动发送测试消息。
4. route identity 使用 pathname/search；若 ChatGPT 在同一路由、同一元素实例内切换了不可见的编辑上下文，identity 无法仅靠 URL 识别。当前已同时依赖元素 mount identity，真实验收中需要关注此边界。
5. 其他平台通过 base adapter 获得了验证式 replace 兼容能力，但本阶段没有对 Claude、Gemini 等做真实回归，不对其稳定性做新承诺。

## 11. 现有功能影响

- 保留现有本地优化、preview、history、daily usage、模板插入和撤销入口。
- 只有写回成功后才记录优化和扣 usage，比旧流程更保守。
- 模板插入改用显式验证式写回；失败会保留输入并输出原因，不再静默当作成功。
- 未修改或迁移任何 `chrome.storage` 数据。
- 未调用或改造 `triggerSend()`；用户仍须自己发送。
- 未修改 manifest 权限、extension ID、Popup 或网站。

## 12. Git diff 摘要

本阶段预计变更 9 个文件（5 个现有文件修改，4 个新增文件；本文件计入新增）。工作区在本阶段开始前已有：

- `website/src/components/layout/language-switcher.tsx`：已修改，未触碰。
- `docs/REFACTOR_AUDIT.md`：用户提供/未跟踪，仅读取，未纳入本阶段实现改写。

最终以 `git diff --stat`、`git status --short` 和未跟踪文件清单为准。未提交、未推送。
