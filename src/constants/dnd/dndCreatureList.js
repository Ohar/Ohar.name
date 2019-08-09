import SEARCH_PROP_NAME from "@/constants/SEARCH_PROP_NAME";
import {CR_0} from "@/constants/dnd/dndCrList"
import {SIZE_MEDIUM} from "@/constants/dnd/dndSizeList"
import {
  CREATURE_HUMANOID,
  CREATURE_ANY_RACE,
} from "@/constants/dnd/dndCreatureTypeList"
import { ALIGMENT_ANY } from '@/constants/dnd/dndAligmentList'
import { SPEED_WALK } from '@/constants/dnd/dndSpeedList'
import { ACTION_MELEE_WEAPON_ATTACK } from '@/constants/dnd/dndActionTypeList'
import { LANG_ANY_ONE } from '@/constants/dnd/dndLanguageList'
import { DAMAGE_BLUDGEONING } from '@/constants/dnd/dndDamageTypeList'
import { SENSE_PASSIVE_PERCEPTION } from '@/constants/dnd/dndSenseList'

const dndCreatureList = [
  {
    name: 'Обыватель',
    nameEn: 'Commoner',
    description: '**Обыватели** включают в себя крестьян, крепостных, рабов, слуг, пилигримов, торговцев, ремесленников и отшельников.',
    aligmentId: ALIGMENT_ANY,
    source: 'MM:346',
    speed: {
      [SPEED_WALK]: 30,
    },
    hp: {
      cubeType: 8,
      cubeCount: 1,
    },
    armor: {
      ac: 10,
      type: 'голая жопа',
    },
    cr: CR_0,
    sizeType: SIZE_MEDIUM,
    creatureTypeIdList: [
      CREATURE_HUMANOID,
      CREATURE_ANY_RACE,
    ],
    params: {
      cha: 10,
      con: 10,
      dex: 10,
      int: 10,
      str: 9,
      wit: 10,
    },
    languageList: [
      LANG_ANY_ONE,
    ],
    senseList: [
      {
        id: SENSE_PASSIVE_PERCEPTION,
        value: 10,
      },
    ],
    featureList: [
      {
        name: 'Тупость',
        description: 'Обыватель тупит.',
      },
    ],
    reactionList: [
      {
        name: 'Тупость',
        description: 'Обыватель тупит.',
      },
    ],
    actionList: [
      {
        name: 'Дубина',
        limit: {
          count: 1,
          period: 'ход',
        },
        attack: {
          type: ACTION_MELEE_WEAPON_ATTACK,
          bonus: 2,
          range: 5,
          targetCount: 1,
          damageType: DAMAGE_BLUDGEONING,
          damage: {
            cubeType: 4,
            cubeCount: 1,
          },
        },
        description: 'Рукопашная атака оружием: +2 к попаданию, досягаемость 5 фт., одна цель. Попадание: Дробящий урон 2 (1к4). ',
      },
    ],
  },
].map(
  creature => ({
    ...creature,
    id: creature.nameEn,
    [SEARCH_PROP_NAME]: [
      creature.name,
      creature.nameEn,
      creature.description,
    ]
      .join('\n'),
  })
)

export default dndCreatureList

export const dndCreatureCollection = dndCreatureList.reduce(
  (collection, creature) => ({
    ...collection,
    [creature.id]: creature,
  }),
  {}
)

export const dndCreatureNameList = dndCreatureList.map(
  ({id, name}) => ({
    id,
    name
  })
)
