import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'token',
  title: 'Token',
  type: 'document',
  fields: [
    defineField({
      name: 'h1',
      title: 'Heading 1',
      type: 'string',
    }),
    defineField({
        name: 'h2',
        title: 'Heading 2',
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
      name: 'heroBg',
      title: 'Hero Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'tokenImg',
        title: 'Token Image',
        type: 'image',
        options: {
            hotspot: true,
          },
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
