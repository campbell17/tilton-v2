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

    // defineField({
    //   name: 'src',
    //   title: 'Album Cover',
    //   type: 'image',
    //   // description: `Format: "/images/cover-art/mycover.jpg"`,
    // }),
    // defineField({
    //   name: 'hero',
    //   title: 'Hero image (Slideover)',
    //   type: 'image',
    //   // description: `Format: "bg-[url('/images/hero-myimage.jpg')]"`,
    // }),    
    // defineField({
    //   name: 'color',
    //   title: 'Color',
    //   type: 'string',
    //   description: `Format: "bg-[#HEXHEX]"`,
    // }),
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
          {title: 'Spotify', value: '[#1DB954]'},
          {title: 'MGM+', value: '[#c7a338]'},
          {title: 'Paramount+', value: '[#0164FF]'},
          {title: 'Apple Music', value: '[#FC3C44]'},
        ],
      },
    }), 
    defineField({
      name: 'ctalink',
      title: 'Button link (Slideover)',
      type: 'string',
    }),    
    // defineField({
    //   name: 'ctabrand',
    //   title: 'Button color (Slideover)',
    //   type: 'string',
    //   description: `Format: "bg-[#HEXHEX] hover:bg-[#HEXHEX]"`
    // }),    
    {
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
    },
    // defineField({
    //   name: 'ctaicon',
    //   title: 'Button icon (Slideover)',
    //   type: 'string',
    //   description: `Use "Play", "Learn", "Spotify", or "Download" to set the icon type.`
    // }),    
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
    // defineField({
    //   name: 'songs',
    //   title: 'Songs',
    //   type: 'array',
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{type: 'songs'}]
    //     }
    //   ]
    // }),
    // defineField({
    //   name: 'songsdata',
    //   title: 'Songs',
    //   type: 'array',
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{type: 'songsdata'}]
    //     }
    //   ]
    // }),
  ],
})
