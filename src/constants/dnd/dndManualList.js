import listToCollectionById from '@/utils/listToCollectionById'

const dndManualList = [
  {
    id: 'PHB',
    name: 'Книга игрока',
    nameEn: 'Player’s Handbook',
    shortName: 'КИ',
  },
  {
    id: 'DMG',
    name: 'Руководство мастера',
    nameEn: 'Dungeon Master’s Guide',
    shortName: 'РМ',
  },
  {
    id: 'MM',
    name: 'Бестиарий',
    nameEn: 'Monster Manual',
    shortName: 'Б',
    includeMonsters: true,
  },
  {
    id: 'VGtM',
    name: 'Руководство Воло по монстрам',
    nameEn: 'Volo’s Guide to Monsters',
    shortName: 'РВпМ',
    includeMonsters: true,
  },
  {
    id: 'ToA',
    name: 'Гробница аннигиляции',
    nameEn: 'Tomb of Annihilation',
    shortName: 'ГА',
    includeMonsters: true,
  },
  {
    id: 'Homebrew',
    name: 'Самоделка',
    nameEn: 'Homebrew',
    includeMonsters: true,
  },
]

export default dndManualList
export const dndManualCollection = listToCollectionById(dndManualList)
