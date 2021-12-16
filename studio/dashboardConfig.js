export default {
  widgets: [
    {
      name: 'document-list',
      options: { title: 'Latest Articles', order: 'publicationDate desc', types: ['article'] },
      layout: { width: 'medium', height: 'small' }
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  title: 'David Odyssey',
                  name: 'davidodyssey',
                  apiId: '7c07b417-e3a5-4db9-b654-74518b4294fe',
                  // buildHookId: '608b06dc8fc171513ce1049a'
                },
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jacob-Fromm/david-odyssey-burger',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://davidodyssey.com',
            category: 'apps'
          }
        ]
      }
    },
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
    //   }
    // },
    { name: 'project-users', layout: { height: 'auto' } },
  ]
}

