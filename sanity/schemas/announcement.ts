import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({
      name: 'url',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'urltext',
      title: 'Link text',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Announcement text',
      type: 'string',
    }),
  ]
})