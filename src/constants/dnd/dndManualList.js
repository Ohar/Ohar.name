import listToCollectionById from '@/utils/listToCollectionById'

const dndManualList = [
  {
    id: 'PHB',
    name: 'Книга игрока',
  },
  {
    id: 'DMM',
    name: 'Руководство мастера',
  },
  {
    id: 'MM',
    name: 'Бестиарий',
  },
  {
    id: 'VMG',
    name: 'Руководство Воло по монстрам',
  },
]

export const dndManualCollection = listToCollectionById(dndManualList)
