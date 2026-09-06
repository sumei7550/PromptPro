import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const cases = JSON.parse(await readFile(resolve('benchmarks/structured-cases.json'), 'utf8'))
const endpoint = process.env.BENCHMARK_API_URL
const origin = process.env.PROMPTPRO_EXTENSION_ORIGIN

async function runAI(testCase) {
  if (!endpoint || !origin) {
    return { status: 'NOT_RUN', result: 'REAL DEEPSEEK CALL NOT VERIFIED' }
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: origin },
      body: JSON.stringify({
        originalText: testCase.original,
        locale: testCase.locale,
        style: testCase.style,
        platform: 'chatgpt',
      }),
    })
    const body = await response.json()
    return response.ok
      ? { status: 'COMPLETED', result: body.result.improvedText }
      : { status: 'FAILED', result: body.error?.code ?? `HTTP ${response.status}` }
  } catch (error) {
    return { status: 'FAILED', result: error instanceof Error ? error.message : 'Unknown error' }
  }
}

const results = []
for (const testCase of cases) {
  const aiResult = await runAI(testCase)
  results.push({
    id: testCase.id,
    original: testCase.original,
    beforeSnapshot: testCase.beforeSnapshot,
    afterReference: testCase.afterReference,
    currentAIResult: aiResult.result,
    aiStatus: aiResult.status,
    manualReview: {
      preservesIntent: null,
      moreExecutable: null,
      avoidsMeaninglessLength: null,
      avoidsUnconfirmedAssumptions: null,
      avoidsMechanicalStructure: null,
      avoidsAnsweringTask: null,
      handlesMissingInformation: null,
      languageMatches: null,
      moreNaturalThanBefore: null,
      retainsStructuredValue: null,
    },
  })
}

console.log(JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2))
