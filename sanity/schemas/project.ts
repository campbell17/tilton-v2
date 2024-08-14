import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'project',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'homepage',
      title: 'Show on Homepage?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'type',
      title: 'Genre',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      description: '(optional)',
      type: 'string',
    }),
    defineField({
      name: 'cover',
      title: 'Album Cover',
      type: 'image',
      options: {
        hotspot: false,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          description: 'What is this an image of?',
          title: 'Alt Text',
        }
      ]
    }),
    defineField({
      name: 'hero',
      title: 'Hero image (Slideover)',
      type: 'image',
      options: {
        hotspot: false,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          description: 'What is this an image of?',
          title: 'Alt Text',
        },
      ],
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: '(optional)',
      type: 'string',
    }),
    defineField({
      name: 'cta',
      title: 'Button text (Slideover)',
      type: 'string',
    }),    
    defineField({
      name: 'buttontype',
      title: 'Button Color',
      type: 'string',
      initialValue: 'indigo-600',
      options: {
        list: [
          {title: 'Default', value: 'indigo-600'},
          {title: 'Spotify', value: 'spotify'},
          {title: 'MGM+', value: 'mgm'},
          {title: 'Apple Music', value: 'apple-music'},
          {title: 'Paramount+', value: 'paramount'},
        ],
      },
    }), 
    defineField({
      name: 'ctalink',
      title: 'Button link (Slideover)',
      type: 'string',
    }),    
    defineField({
      name: 'ctaicon',
      title: 'Button icon (Slideover)',
      type: 'string',
      options: {
        list: [
          {title: 'Apple', value: 'Apple'},
          {title: 'Spotify', value: 'Spotify'},
          {title: 'Play', value: 'Play'},
          {title: 'Download', value: 'Download'},
          {title: 'Learn', value: '[#fc3c44]'},
        ],
      },
    }),
    defineField({
      name: 'ctaalt',
      title: 'Alternate Button text (Slideover)',
      type: 'string',
    }),    
    defineField({
      name: 'buttontypealt',
      title: 'Alternate Button Color',
      type: 'string',
      initialValue: 'indigo-600',
      options: {
        list: [
          {title: 'Default', value: 'indigo-600'},
          {title: 'Spotify', value: 'spotify'},
          {title: 'MGM+', value: 'mgm'},
          {title: 'Apple Music', value: 'apple-music'},
          {title: 'Paramount+', value: 'paramount'},
        ],
      },
    }), 
    defineField({
      name: 'ctalinkalt',
      title: 'Alternate Button link (Slideover)',
      type: 'string',
    }),    
    defineField({
      name: 'ctaiconalt',
      title: 'Alternate Button icon (Slideover)',
      type: 'string',
      options: {
        list: [
          {title: 'Apple', value: 'Apple'},
          {title: 'Spotify', value: 'Spotify'},
          {title: 'Play', value: 'Play'},
          {title: 'Download', value: 'Download'},
          {title: 'Learn', value: '[#fc3c44]'},
        ],
      },
    }),
    
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),    
    defineField({
      name: 'desc',
      title: 'Description (Slideover)',
      type: 'text',
    }),    
    defineField({
      name: 'album',
      title: 'Album',
      type: 'object',
      fields: [
        {name: 'name', title: 'Name', description: `Click 'Generate' to match the project name, which makes the tracks visible in the slideover`, type: 'slug', options: { source: 'project', slugify: input => input},},
        {
          name: 'songs', 
          title: 'Songs', 
          type: 'array', 
          of: [
            { 
              type: 'reference', 
              to: [{type: 'songs'}]
            }]
          },
      ],
    }),
  ],
})
