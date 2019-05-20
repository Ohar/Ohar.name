import listToCollectionById from '@/utils/listToCollectionById'

const dndCreatureTypeList = [
  {
    id: 'any_race',
    name: 'любая раса',
  },
  {
    id: 'humanoid',
    name: 'гуманоид',
  },
  {
    id: 'goblinoid',
    name: 'гоблиноид',
  },
  {
    id: 'shapeshifter',
    name: 'перевёртыш',
  },
  {
    id: 'beast',
    name: 'зверь',
  },
  {
    id: 'fiend',
    name: 'Исчадие',
  },
  {
    id: 'celestial',
    name: 'небожитель',
  },
  {
    id: 'monster',
    name: 'чудовище',
  },
  {
    id: 'plant',
    name: 'растение',
  },
  {
    id: 'construct',
    name: 'конструкт',
  },
  {
    id: 'undead',
    name: 'нежить',
  },
  {
    id: 'dragon',
    name: 'дракон',
  },
  {
    id: 'aberration',
    name: 'аберрация',
  },
  {
    id: 'devil',
    name: 'дъявол',
  },
  {
    id: 'demon',
    name: 'демон',
  },
  {
    id: 'kobold',
    name: 'кобольд',
  },
]

export default dndCreatureTypeList

export const dndCreatureTypeCollection = listToCollectionById(dndCreatureTypeList)
