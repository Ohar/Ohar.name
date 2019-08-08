import SEARCH_PROP_NAME from "@/constants/SEARCH_PROP_NAME";
import {CR_0} from "@/constants/dnd/dndCrList"
import {SIZE_MEDIUM} from "@/constants/dnd/dndSizeList"
import {CREATURE_TYPE_HUMANOID} from "@/constants/dnd/dndCreatureTypeList"
import { ALIGMENT_ANY } from '@/constants/dnd/dndAligmentList'
import { SPEED_WALK } from '@/constants/dnd/dndSpeedList'
import { ACTION_M_ATTACK } from '@/constants/dnd/dndActionTypeList'
import { LANG_ANY_ONE } from '@/constants/dnd/dndLanguageList'
import { DAMAGE_BLUDGEONING } from '@/constants/dnd/dndDamageTypeList'

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
    armorClass: 10,
    armorType: 'голая жопа',
    cr: CR_0,
    sizeType: SIZE_MEDIUM,
    creatureTypeId: CREATURE_TYPE_HUMANOID,
    params: {
      cha: 10,
      con: 10,
      dex: 10,
      int: 10,
      str: 10,
      wit: 10,
    },
    languageList: [
      LANG_ANY_ONE,
    ],
    abilityList: [
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
          type: ACTION_M_ATTACK,
          bonus: 2,
          range: 5,
          targetCount: 1,
          damage: {
            cubeType: 4,
            cubeCount: 1,
          },
          damageType: DAMAGE_BLUDGEONING,
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
