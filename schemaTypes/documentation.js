import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'documentation',
  title: 'Documentation',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
  preview: {
    select: {
      title: 'name',
    },
  },
})
