import {
  faGem,
  faImage,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons'

import listToCollectionById from '@/utils/listToCollectionById'

export const LOOT_TYPE_ART = 'art'
export const LOOT_TYPE_GEM = 'gem'
export const LOOT_TYPE_TRINKET = 'trinket'

const dndLootTypeList = [
  {
    id: LOOT_TYPE_ART,
    name: 'Предмет искусства',
    icon: faImage,
  },
  {
    id: LOOT_TYPE_GEM,
    name: 'Драгоценный камень',
    icon: faGem,
  },
  {
    id: LOOT_TYPE_TRINKET,
    name: 'Безделушка',
    icon: faQuestion,
  },
]

export default dndLootTypeList
export const dndLootTypeCollection = listToCollectionById(dndLootTypeList)
