import {defineField, defineType} from 'sanity'
import CurrentTrackInput from '../components/CurrentTrackInput'

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
      of: [{
        type: 'object',
        fields: [
          {name: 'trackName', title: 'Track Name', type: 'string'},
          {name: 'trackSource', title: 'Track Source', type: 'file'},
        ],
      }],
    }) as any, // Type assertion to bypass TypeScript error
    defineField({
      name: 'currentTrack',
      title: 'Current Track (Optional)',
      type: 'number',
      description: 'Optionally select a specific track index for this week. Leave empty for random selection.',
      validation: Rule => Rule.min(0),
      // Remove the components property as we'll handle this differently
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      songs: 'songs',
      currentTrack: 'currentTrack',
    },
    prepare(selection) {
      const {title, songs, currentTrack} = selection
      return {
        title: title,
        subtitle: currentTrack !== undefined && songs[currentTrack] 
          ? `Current: ${songs[currentTrack].trackName}` 
          : 'Random selection'
      }
    }
  }
})