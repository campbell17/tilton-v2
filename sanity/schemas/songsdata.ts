import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'songsdata',
  title: 'Songs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      description: `Format: "/music/songtitle.mp3"`
    }),
  ]
})

