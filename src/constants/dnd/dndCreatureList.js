import SEARCH_PROP_NAME from "@/constants/SEARCH_PROP_NAME";

const dndCreatureList = [
  {
    name: [
      'Обыватель',
      'Обывателя',
      'Обывателей',
    ],
    nameEn: 'Commoner',
    description: 'Описание',
    aligment: 'any',
    source: 'PHB',
    speed: [
      {
        type: 'walk',
        value: 30,
      },
    ],
    hitPoint: 10,
    armorClass: 10,
    challengeRating: '1',
    sizeType: 2,
    lairPoints: 0,
    legendaryPoints: 1,
    typeId: 'humanoid',
    params: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wit: 10,
      cha: 10,
    },
    skillList: [],
    languageList: ['any_one'],
    spellList: [],
    equipmentList: [],
    abilityList: [
      {
        typeId: 'melee_attack',
        name: 'Дубина',
        description: 'Рукопашная атака оружием: +2 к попаданию, досягаемость 5 фт., одна цель. Попадание: Дробящий урон 2 (1к4). ',
      },
    ],
  },
  {
    name: [
      'Тарраск',
      'Тарраска',
      'Таррасков',
    ],
    nameEn: 'Tarrasque',
    description: 'Описание',
    aligment: 'any',
    source: 'PHB',
    speed: [
      {
        type: 'walk',
        value: 30,
      },
    ],
    hitPoint: 10,
    armorClass: 10,
    challengeRating: '1',
    sizeType: 2,
    lairPoints: 0,
    legendaryPoints: 1,
    typeId: 'humanoid',
    params: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wit: 10,
      cha: 10,
    },
    skillList: [],
    languageList: [],
    spellList: [],
    equipmentList: [],
    abilityList: [
      {
        typeId: 'melee_attack',
        name: 'test melee_attack name',
        description: 'test melee_attack description',
      },
      {
        typeId: 'range_attack',
        name: 'test range_attack name',
        description: 'test range_attack description',
      },
      {
        typeId: 'reaction',
        name: 'test reaction name',
        description: 'test reaction description',
      },
      {
        typeId: 'legendary_action',
        name: 'Ничего',
        description: 'Обыватель ничего не делает',
      },
      {
        typeId: 'lair_action',
        name: 'test lair_action name',
        description: 'test lair_action description',
      },
    ],
  },
].map(
  (creature, id) => ({
    ...creature,
    id,
    [SEARCH_PROP_NAME]: [
      creature.name[0],
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
