import { defineField, defineType } from 'sanity'
import positions from '../positions/positions'
export default defineType({
  name: 'jogadores',
  title: 'Jogadores',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'nome',
      title: 'Último Nome',
      type: 'string',
    }),
    defineField({
      name: 'posicao',
      title: 'Posicao',
      type: 'string',
      options: {
        list: [
          ...positions
        ],
      }
    }),
    defineField({
      name: 'data',
      title: 'Data de Nascimento',
      type: 'date',
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'treinador',
      title: 'Treinador',
      type: 'reference',
      to: {type: 'treinador'},
    }),
  ],
})
