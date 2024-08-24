import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'h1',
      title: 'Heading 1',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'h1',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'btnText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'heroBg',
      title: 'Hero Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'logo',
        title: 'Logo',
        type: 'reference',
        to: {type: 'logo'},
      }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
        title: 'name',
        media: 'heroBg',
      },
  },
})
