import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'songs',
  title: 'Songs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'track',
      title: 'Upload Track',
      type: 'file',
    }),
  ]
})

//   name: 'songs',
//   title: 'Songs',
//   type: 'file',
//   fields: [
//     { 
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     },
//   ],
// })