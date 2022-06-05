export default {
  name: 'siteSection',
  type: 'document',
  title: 'Site Sections',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      description: 'Descriptions of main sections of David Odyssey Site',
      of: [
        {
          type: 'block'
        }
      ]
    },
     {
      name: 'buttonText',
      type: 'string',
      title: 'button text'
    },
  ]
}
