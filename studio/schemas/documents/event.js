export default {
    name: 'event',
    title: 'Events',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Event Name',
            type: 'string'
        },
        {
            name: 'duration',
            title: 'Duration',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            description: 'price in USD',
            type: 'number'
        },
        {
            name: 'url',
            title: 'Registration URL',
            type: 'url',
            description: "Must include 'https://' to be a valid URL"
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            options: {
                rows: 10,
            }
        },
        {
            name: 'eventDate',
            title: 'Date',
            type: 'datetime',
             options: {
                dateFormat: 'MMMM Do, YYYY',
                timeFormat: 'h:mm a'
        } 
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
    ]
}

