export default {
    name: 'publication',
    title: 'Publications',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            description: "Must include 'https://' to be a valid URL"
        }
    ]
}