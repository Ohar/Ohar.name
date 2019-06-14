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
  {
    id: 'ToA',
    name: 'Гробница Аннигиляции',
  },
]

export const dndManualCollection = listToCollectionById(dndManualList)
