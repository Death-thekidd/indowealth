import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    }),
  ],
})
