import {
  faGem,
  faImage,
  faQuestion,
  faTools,
  faGavel,
  faUtensils,
  faTshirt,
} from '@fortawesome/free-solid-svg-icons'

import listToCollectionById from '@/utils/listToCollectionById'

export const LOOT_TYPE_ART = 'art'
export const LOOT_TYPE_CLOTH = 'cloth'
export const LOOT_TYPE_FOOD = 'food'
export const LOOT_TYPE_GEM = 'gem'
export const LOOT_TYPE_TOOL = 'tool'
export const LOOT_TYPE_TRINKET = 'trinket'
export const LOOT_TYPE_WEAPON = 'weapon'

const dndLootTypeList = [
  {
    id: LOOT_TYPE_ART,
    name: 'Предмет искусства',
    icon: faImage,
  },
  {
    id: LOOT_TYPE_CLOTH,
    name: 'Одежда',
    icon: faTshirt,
  },
  {
    id: LOOT_TYPE_FOOD,
    name: 'Продукты',
    icon: faUtensils,
  },
  {
    id: LOOT_TYPE_GEM,
    name: 'Драгоценный камень',
    icon: faGem,
  },
  {
    id: LOOT_TYPE_TOOL,
    name: 'Снаряжение',
    icon: faTools,
  },
  {
    id: LOOT_TYPE_TRINKET,
    name: 'Безделушка',
    icon: faQuestion,
  },
  {
    id: LOOT_TYPE_WEAPON,
    name: 'Оружие',
    icon: faGavel,
  },
]

export default dndLootTypeList
export const dndLootTypeCollection = listToCollectionById(dndLootTypeList)
