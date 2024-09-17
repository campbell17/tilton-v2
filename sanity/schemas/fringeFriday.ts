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
    defineField({
      name: 'currentTrack',
      title: 'Current Track (Optional)',
      type: 'object',
      fields: [
        {name: 'trackName', title: 'Track Name', type: 'string'},
        {name: 'trackSource', title: 'Track Source', type: 'file'},
      ],
      description: 'Optionally select a specific track for this week. Leave empty for random selection.',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
    }),
  ],
})