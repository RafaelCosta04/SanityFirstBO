import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Equipa',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'treinador',
      title: 'Treinador',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'jogador',
      title: 'Jogadores',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'data',
      title: 'Data de Fundação',
      type: 'date',
    }),
    defineField({
      name: 'body',
      title: 'Descrição do Clube',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'titulo',
      author: 'author.name',
      media: 'logo',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `Treinador: ${author}`}
    },
  },
})
