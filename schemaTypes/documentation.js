import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'document',
  title: 'Document',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name is required').unique(),
    },
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
  ],
})
