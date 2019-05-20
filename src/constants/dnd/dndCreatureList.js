import SEARCH_PROP_NAME from "@/constants/SEARCH_PROP_NAME";

const dndCreatureList = [
  {
    name: {
      ru: 'Обыватель',
      en: 'Commoner',
    },
    description: {
      ru: 'Описание',
      en: 'Description',
    },
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
    lairPoints: null,
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
    equipmentList: [],
    abilityList: [
      {
        typeId: 'ability',
        name: {
          ru: 'test ability name',
          en: 'test ability name',
        },
        description: {
          ru: 'test ability description',
          en: 'test ability description',
        },
      },
      {
        typeId: 'melee_attack',
        name: {
          ru: 'test melee_attack name',
          en: 'test melee_attack name',
        },
        description: {
          ru: 'test melee_attack description',
          en: 'test melee_attack description',
        },
      },
      {
        typeId: 'range_attack',
        name: {
          ru: 'test range_attack name',
          en: 'test range_attack name',
        },
        description: {
          ru: 'test range_attack description',
          en: 'test range_attack description',
        },
      },
      {
        typeId: 'reaction',
        name: {
          ru: 'test reaction name',
          en: 'test reaction name',
        },
        description: {
          ru: 'test reaction description',
          en: 'test reaction description',
        },
      },
      {
        typeId: 'legendary_action',
        name: {
          ru: 'test legendary_action name',
          en: 'test legendary_action name',
        },
        description: {
          ru: 'test legendary_action description',
          en: 'test legendary_action description',
        },
      },
      {
        typeId: 'lair_action',
        name: {
          ru: 'test lair_action name',
          en: 'test lair_action name',
        },
        description: {
          ru: 'test lair_action description',
          en: 'test lair_action description',
        },
      },
    ],
  },
].map(
  (creature, id) => ({
    ...creature,
    id,
    [SEARCH_PROP_NAME]: [
      creature.name.ru,
      creature.name.en,
      creature.description.ru,
      creature.description.en,
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
