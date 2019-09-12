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
    includeMonsters: true,
  },
  {
    id: 'VGtM',
    name: 'Руководство Воло по монстрам',
    shortName: 'РВпМ',
    includeMonsters: true,
  },
  {
    id: 'ToA',
    name: 'Гробница аннигиляции',
    shortName: 'ГА',
    includeMonsters: true,
  },
  {
    id: 'Homebrew',
    name: 'Самоделка',
    includeMonsters: true,
  },
]

export default dndManualList
export const dndManualCollection = listToCollectionById(dndManualList)
