import { defineField, defineType } from 'sanity'

export const heroType = defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'intro',
            title: 'Intro/Subheadline',
            type: 'text',
        }),
        defineField({
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            initialValue: 'v1.0 Early Access is coming',
        }),
    ],
})
