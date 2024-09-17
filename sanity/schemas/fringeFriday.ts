import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fringeFriday',
  title: 'Fringe Friday',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'songs',
      title: 'Songs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'trackName', title: 'Track Name', type: 'string'},
            {name: 'trackSource', title: 'Track Source', type: 'file'},
          ],
        },
      ],
    }),
  ],
})