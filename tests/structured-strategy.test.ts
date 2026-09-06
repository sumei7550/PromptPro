import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

interface StructuredCase {
  id: string
  locale: 'zh' | 'en'
  style: 'structured'
  original: string
  beforeSnapshot: string
  afterReference: string
}

const cases = JSON.parse(
  await readFile(resolve('benchmarks/structured-cases.json'), 'utf8'),
) as StructuredCase[]

const expectedOriginals = [
  'write a story',
  '写一封请假邮件',
  '帮我分析支付失败原因',
  '写一个react登录组件',
  '帮我写一份产品介绍',
]

test('keeps the five fixed Structured benchmark inputs unchanged', () => {
  assert.equal(cases.length, 5)
  assert.deepEqual(cases.map(item => item.original), expectedOriginals)
  assert.ok(cases.every(item => item.style === 'structured'))
})

test('simple Structured reference stays lightweight and does not force sections', () => {
  const result = cases[0]?.afterReference ?? ''
  assert.equal(result.split('\n').length, 1)
  assert.doesNotMatch(result, /Role|Background|Objective|Workflow|Constraints|Output Format/i)
  assert.doesNotMatch(result, /\b\d{3,4}\s*[-–]\s*\d{3,4}\s+words\b/i)
})

test('leave-email reference uses placeholders instead of invented facts', () => {
  const result = cases[1]?.afterReference ?? ''
  assert.match(result, /占位符/)
  assert.match(result, /正式、简洁、礼貌/)
  assert.doesNotMatch(result, /\b20\d{2}[年/-]/)
})

test('payment reference asks for evidence without pre-answering causes or solutions', () => {
  const result = cases[2]?.afterReference ?? ''
  assert.match(result, /错误信息、支付方式和失败发生阶段/)
  assert.match(result, /不超过 3 个/)
  assert.doesNotMatch(result, /余额不足|银行卡问题|网络故障|风控拦截|解决方案|排查建议/)
})

test('React reference adds general quality without inventing technical contracts', () => {
  const result = cases[3]?.afterReference ?? ''
  assert.match(result, /可复用/)
  assert.match(result, /loading 和 error/)
  assert.doesNotMatch(result, /TypeScript|CSS-in-JS|username|email|onLogin\s*\(|密码长度|模拟异步/)
})

test('product-introduction reference limits clarification and preserves language', () => {
  const result = cases[4]?.afterReference ?? ''
  assert.match(result, /产品是什么、解决什么问题、核心价值以及目标用户或使用场景/)
  assert.match(result, /不超过 3 个/)
  assert.match(result, /不要编造产品事实/)
  assert.doesNotMatch(result, /Role|Background|Objective|Workflow|Constraints|Output Format/i)
  assert.ok(cases.slice(1).every(item => /[\u3400-\u9fff]/u.test(item.afterReference)))
  assert.doesNotMatch(cases[0]?.afterReference ?? '', /[\u3400-\u9fff]/u)
})
