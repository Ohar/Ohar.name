import listToCollectionById from '@/utils/listToCollectionById'

const dndManualList = [
  {
    id: 'PHB',
    name: {
      ru: 'Книга игрока',
      en: 'Player\'s Handbook',
    },
  },
  {
    id: 'DMM',
    name: {
      ru: 'Руководство мастера',
      en: 'Dungeon Master Manual',
    },
  },
  {
    id: 'MM',
    name: {
      ru: 'Бестиарий',
      en: 'Monster Manual',
    },
  },
  {
    id: 'VMG',
    name: {
      ru: 'Руководство Воло по монстрам',
      en: 'Volo\'s Monster Guide',
    },
  },
]

export const dndManualCollection = listToCollectionById(dndManualList)
