import listToCollectionById from '@/utils/listToCollectionById'

const dndManualList = [
  {
    id: 'PHB',
    name: 'Книга игрока',
    shortName: 'КИ',
  },
  {
    id: 'DMG',
    name: 'Руководство мастера',
    shortName: 'РМ',
  },
  {
    id: 'MM',
    name: 'Бестиарий',
    shortName: 'Б',
  },
  {
    id: 'VGtM',
    name: 'Руководство Воло по монстрам',
    shortName: 'РВпМ',
  },
  {
    id: 'ToA',
    name: 'Гробница аннигиляции',
    shortName: 'ГА',
  },
  {
    id: 'Homebrew',
    name: 'Самоделка',
  },
  {
    id: 'R20',
    name: 'Roll20',
    isUrl: true,
  },
]

export const dndManualCollection = listToCollectionById(dndManualList)
