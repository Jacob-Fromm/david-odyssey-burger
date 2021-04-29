export default {
    name: 'article',
    title: 'Articles',
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
            type: 'reference',
            to: {type: 'publication'}
        },
        {
            name: 'publicationDate',
            title: 'Publication Date',
            type: 'date',
             options: {
                dateFormat: 'MM.DD.YYYY',
                calendarTodayLabel: 'Today'
        } 
        },
        {
            name: 'image',
            title: 'Article Image',
            type: 'figure'
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'person' }
        }
    ]
}

