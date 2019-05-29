import listToCollectionById from '@/utils/listToCollectionById'

const dndManualList = [
  {
    id: 'PHB',
    name: 'Книга игрока',
  },
  {
    id: 'DMG',
    name: 'Руководство мастера',
  },
  {
    id: 'MM',
    name: 'Бестиарий',
  },
  {
    id: 'VGtM',
    name: 'Руководство Воло по монстрам',
  },
]

export const dndManualCollection = listToCollectionById(dndManualList)
