export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        {
            name: 'headline',
            title: 'Headline',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'headline'
            }
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'publication',
            title: 'Publication',
            type: 'string'
        },
        {
            name: 'publicationDate',
            title: 'Publication Date',
            type: 'date'
        },
        {
            name: 'image',
            title: 'Article Image',
            type: 'figure'
        },
        // {
        //     name: 'image',
        //     title: 'Article Image',
        //     type: 'image',
        //     hidden: false,
        //     readOnly: false,
        //     description: 'article image',
        //     options: {
        //         hotspot: true
        //     },
        //     fields: [
        //         {
        //             name: 'caption',
        //             type: 'string',
        //             title: 'Caption',
        //             options: {
        //                 isHighlighted: true
        //             }
        //         },
        //         {
        //             name: 'attribution',
        //             type: 'string',
        //             title: 'Attribution',
        //         }
        //     ]
        // },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'person' }
        }
    ]
}

