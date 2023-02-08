import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'equipa',
  title: 'Equipa',
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
      to: {type: 'treinador'},
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
      of: [{type: 'reference', to: {type: 'jogador'}}],
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
      treinador: 'treinador.name',
      media: 'logo',
    },
    prepare(selection) {
      const {treinador} = selection
      return {...selection, subtitle: treinador && `Treinador: ${treinador}`}
    },
  },
})
