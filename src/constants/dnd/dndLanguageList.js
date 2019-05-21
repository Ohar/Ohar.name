import listToCollectionById from '@/utils/listToCollectionById'

const dndLanguageList = [
  {
    id: 'common',
    name: 'Общий',
  },
  {
    id: 'any_one',
    name: 'Любой один язык (обычно — Общий)',
  },
  {
    id: 'any_two',
    name: 'Любые два языка',
  },
  {
    id: 'all_known_at_life',
    name: 'Все языки, известные при жизни',
  },
]

export const dndLanguageCollection = listToCollectionById(dndLanguageList)
