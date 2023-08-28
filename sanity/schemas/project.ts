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
    defineField({
      name: 'ctaicon',
      title: 'Button icon (Slideover)',
      type: 'string',
      description: `Use "Play", "Learn", "Spotify", or "Download" to set the icon type.`
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
        {name: 'name', title: 'Name', description: 'MUST match Project name', type: 'string',},
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
