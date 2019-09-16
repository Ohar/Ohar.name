import listToCollectionById from '@/utils/listToCollectionById'
import {LOOT_TYPE_ART, LOOT_TYPE_TRINKET, LOOT_TYPE_GEM} from '@/constants/dnd/dndLootTypeList'

const dndLootList = [
  {
    cost: 1000,
    type: LOOT_TYPE_GEM,
    name: `Азурит`,
    description: `непрозрачный, пёстрый тёмно-синий`,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 1000,
    type: LOOT_TYPE_GEM,
    name: `Бирюза`,
    description: `непрозрачная, зелёно-голубая`,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 1000,
    type: LOOT_TYPE_GEM,
    name: `Гематит`,
    description: `непрозрачный, серо-чёрный`,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 2500,
    type: LOOT_TYPE_ART,
    name: `Серебряный кувшин`,
    description: ``,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 2500,
    type: LOOT_TYPE_ART,
    name: `Резная статуэтка из кости`,
    description: ``,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 2500,
    type: LOOT_TYPE_ART,
    name: `Вышитый шёлковый носовой платок`,
    description: ``,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 2500,
    type: LOOT_TYPE_ART,
    name: `Маленький золотой браслет`,
    description: ``,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 2500,
    type: LOOT_TYPE_ART,
    name: `Одеяние из золотой парчи`,
    description: ``,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 2500,
    type: LOOT_TYPE_ART,
    name: `Чёрная бархатная маска, вышитая серебряной нитью`,
    description: ``,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 2500,
    type: LOOT_TYPE_ART,
    name: `Медная чаша с серебряной филигранью`,
    description: ``,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 2500,
    type: LOOT_TYPE_ART,
    name: `Пара гравированных игральных костей`,
    description: ``,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 2500,
    type: LOOT_TYPE_ART,
    name: `Небольшое зеркальце в расписной деревянной раме`,
    description: ``,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 2500,
    type: LOOT_TYPE_ART,
    name: `Золотой медальон с портретом возлюбленной внутри`,
    description: ``,
    source: {
      id: 'DMG',
      page: 135,
    },
  },
  {
    cost: 1,
    type: LOOT_TYPE_TRINKET,
    name: `Мумифицированная рука гоблина`,
    description: ``,
    source: {
      id: 'PHB',
      page: 161,
    },
  },
  {
    cost: 1,
    type: LOOT_TYPE_TRINKET,
    name: `Старая стеклянная шахматная фигура`,
    description: ``,
    source: {
      id: 'PHB',
      page: 161,
    },
  },
  {
    cost: 100,
    type: LOOT_TYPE_TRINKET,
    name: `Золотая монета, отчеканенная в неизвестной стране`,
    description: ``,
    source: {
      id: 'PHB',
      page: 161,
    },
  },
  {
    cost: 1,
    type: LOOT_TYPE_TRINKET,
    name: `Кусочек кристалла, слабо светящийся в лунном свете`,
    description: ``,
    source: {
      id: 'PHB',
      page: 161,
    },
  },
  {
    cost: 1,
    type: LOOT_TYPE_TRINKET,
    name: `Дневник, написанный на неизвестном вам языке`,
    description: ``,
    source: {
      id: 'PHB',
      page: 161,
    },
  },
  {
    cost: 1,
    type: LOOT_TYPE_TRINKET,
    name: `Латунное кольцо, которое не темнеет со временем`,
    description: ``,
    source: {
      id: 'PHB',
      page: 161,
    },
  },
].map(
  (loot, i) => ({
    ...loot,
    id: `loot_${i + 1}`,
  }),
)

export default dndLootList
export const dndLootCollection = listToCollectionById(dndLootList)
