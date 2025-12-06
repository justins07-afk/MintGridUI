import { defineField, defineType } from 'sanity'

export const faqType = defineType({
    name: 'faq',
    title: 'FAQ Item',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'text',
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            initialValue: 0
        })
    ],
})
