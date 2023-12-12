import {defineType} from 'sanity'

export default defineType ({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    {
      name: 'show',
      title: 'Show news?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'content',
      title: 'Homepage announcement text (goes above main heading)',
      type: 'string',
      description: 'Example: "MGM+ Renews Sci-Fi Horror Series FROM for Season Three"',
      hidden: ({document}) => !document.show,
    },
    {
      name: 'urltext',
      title: 'Link text',
      type: 'string',
      description: 'Example: "Read more"',
      hidden: ({document}) => !document.show,
    },
    {
      name: 'url',
      title: 'Link url',
      type: 'string',
      description: 'Example: "https://press.epix.com/mgm-renews-sci-fi-horror-series-from-for-season-three/"',
      hidden: ({document}) => !document.show,
    }
  ]
})