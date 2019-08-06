import SEARCH_PROP_NAME from "@/constants/SEARCH_PROP_NAME";
import {CR_0} from "@/constants/dnd/dndCrList"
import {SIZE_MEDIUM} from "@/constants/dnd/dndSizeList"
import {CREATURE_TYPE_HUMANOID} from "@/constants/dnd/dndCreatureTypeList"
import { ALIGMENT_ANY } from '@/constants/dnd/dndAligmentList'

const dndCreatureList = [
  {
    name: 'Обыватель',
    nameEn: 'Commoner',
    description: '**Обыватели** включают в себя крестьян, крепостных, рабов, слуг, пилигримов, торговцев, ремесленников и отшельников.',
    aligment: ALIGMENT_ANY,
    source: 'MM:346',
    speed: {
      walk: 30,
    },
    hp: {
      cubeType: 8,
      cubeCount: 1,
    },
    armorClass: 10,
    cr: CR_0,
    size: SIZE_MEDIUM,
    typeId: CREATURE_TYPE_HUMANOID,
    params: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wit: 10,
      cha: 10,
    },
    languageList: ['any_one'],
    abilityList: [
      {
        typeId: 'melee_attack',
        name: 'Дубина',
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
