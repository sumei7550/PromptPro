import { PromptTemplate } from '../types'
import { writingTemplates } from './writing'
import { workplaceTemplates } from './workplace'
import { codingTemplates } from './coding'
import { translationTemplates } from './translation'
import { marketingTemplates } from './marketing'
import { academicTemplates } from './academic'
import { analysisTemplates } from './analysis'
import { creativeTemplates } from './creative'

export const allTemplates: PromptTemplate[] = [
  ...writingTemplates,
  ...workplaceTemplates,
  ...codingTemplates,
  ...translationTemplates,
  ...marketingTemplates,
  ...academicTemplates,
  ...analysisTemplates,
  ...creativeTemplates,
]

export {
  writingTemplates,
  workplaceTemplates,
  codingTemplates,
  translationTemplates,
  marketingTemplates,
  academicTemplates,
  analysisTemplates,
  creativeTemplates,
}
