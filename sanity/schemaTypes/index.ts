import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './heroType'
import { faqType } from './faqType'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [heroType, faqType],
}
