const listToCollectionById = require('./../../utils/listToCollectionById')

const {
  GENDER_MALE,
  GENDER_FEMALE,
  GENDER_MIDDLE,
} = require('./../genderList')

const TARGET_CREATURE = 'creature'
const TARGET_OBJECT = 'object'
const TARGET_POINT = 'point'

const dndTargetList = [
  {
    id: TARGET_CREATURE,
    genderId: GENDER_MIDDLE,
    name: {
      singular: {
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
      singular: {
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
      singular: {
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

module.exports = dndTargetList

module.exports.dndTargetCollection = listToCollectionById(dndTargetList)

module.exports.TARGET_CREATURE = TARGET_CREATURE
module.exports.TARGET_OBJECT = TARGET_OBJECT
module.exports.TARGET_POINT = TARGET_POINT
