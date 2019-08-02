import nameSchemaList from '@/constants/nameGeneration/nameSchemaList'

export default nameSchemaList.map(
  item => ({
    ...item,
    show: {
      race: 'tabaxi',
    },
  })
)
