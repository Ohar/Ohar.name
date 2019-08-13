import listToCollectionById from '@/utils/listToCollectionById'
import {
  GENDER_MALE,
  GENDER_FEMALE,
  GENDER_MIDDLE,
} from '@/constants/genderList'

export const TARGET_CREATURE = 'creature'
export const TARGET_OBJECT = 'object'
export const TARGET_POINT = 'point'

const dndTargetList = [
  {
    id: TARGET_CREATURE,
    genderId: GENDER_MIDDLE,
    name: {
      single: {
        nominative: 'существо',
        genitive: 'существа',
        dative: 'существу',
        accusative: 'существа',
        instrumental: 'существом',
        prepositional: 'существе',
      },
      plural: {
        nominative: 'существа',
        genitive: 'существ',
        dative: 'существам',
        accusative: 'существ',
        instrumental: 'существами',
        prepositional: 'существах',
      },
    },
  },
  {
    id: TARGET_OBJECT,
    genderId: GENDER_MALE,
    name: {
      single: {
        nominative: 'предмет',
        genitive: 'предмета',
        dative: 'предмету',
        accusative: 'предмет',
        instrumental: 'предметом',
        prepositional: 'предмете',
      },
      plural: {
        nominative: 'предметы',
        genitive: 'предметов',
        dative: 'предметам',
        accusative: 'предметы',
        instrumental: 'предметами',
        prepositional: 'предметах',
      },
    },
  },
  {
    id: TARGET_POINT,
    genderId: GENDER_FEMALE,
    name: {
      single: {
        nominative: 'точка в пространстве',
        genitive: 'точки в пространстве',
        dative: 'точке в пространстве',
        accusative: 'точку в пространстве',
        instrumental: 'точкой в пространстве',
        prepositional: 'точке в пространстве',
      },
      plural: {
        nominative: 'точки в пространстве',
        genitive: 'точек в пространстве',
        dative: 'точкам в пространстве',
        accusative: 'точек в пространстве',
        instrumental: 'точками в пространстве',
        prepositional: 'точках в пространстве',
      },
    },
  },
]

export default dndTargetList
export const dndTargetCollection = listToCollectionById(dndTargetList)
