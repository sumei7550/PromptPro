// Test script for bilingual optimizer
const { localOptimize } = require('./dist/assets/index.ts-YLsrksMg.js');

// Test cases
const tests = [
  {
    name: 'English input - coding',
    input: 'fix the bug in my authentication function',
    expectedLang: 'en'
  },
  {
    name: 'Chinese input - coding',
    input: '修复我的登录函数bug',
    expectedLang: 'zh'
  },
  {
    name: 'English input - content',
    input: 'write a blog post about healthy eating',
    expectedLang: 'en'
  },
  {
    name: 'Chinese input - content',
    input: '写一篇关于健康饮食的文案',
    expectedLang: 'zh'
  },
  {
    name: 'English input - general',
    input: 'help me plan my weekend',
    expectedLang: 'en'
  },
  {
    name: 'Chinese input - general',
    input: '帮我规划周末',
    expectedLang: 'zh'
  }
];

console.log('Testing Bilingual Optimizer\n' + '='.repeat(50));

tests.forEach((test, index) => {
  console.log(`\n${index + 1}. ${test.name}`);
  console.log(`Input: ${test.input}`);

  try {
    const result = localOptimize(test.input);
    console.log(`Output (${test.expectedLang}): ${result.substring(0, 100)}...`);

    // Simple check: if expected Chinese, output should contain Chinese characters
    const hasChinese = /[一-龥]/.test(result);
    const isCorrect = (test.expectedLang === 'zh' && hasChinese) ||
                      (test.expectedLang === 'en' && !hasChinese);

    console.log(`✓ Language check: ${isCorrect ? 'PASS' : 'FAIL'}`);
  } catch (error) {
    console.log(`✗ Error: ${error.message}`);
  }
});

console.log('\n' + '='.repeat(50));
