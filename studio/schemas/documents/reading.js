export default {
    name: 'reading',
    title: 'Readings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: ['Astrology', 'Tarot', 'Combo Packages'],
                layout: 'radio'
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'

        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'url',
            title: 'Calendly URL',
            type: 'url',
            description: "Must include 'https://' to be a valid URL"
        }
    ]
}

