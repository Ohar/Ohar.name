const listToCollectionById = require('./../utils/listToCollectionById')

const GENDER_ANY = 'any'
const GENDER_MALE = 'male'
const GENDER_FEMALE = 'female'
const GENDER_MIDDLE = 'middle'

const genderList = [
  {
    name: 'Любой',
    id: GENDER_ANY,
  },
  {
    name: 'Мужской',
    id: GENDER_MALE,
  },
  {
    name: 'Женский',
    id: GENDER_FEMALE,
  },
  {
    name: 'Средний',
    id: GENDER_MIDDLE,
  },
]

module.exports = genderList

module.exports.genderCollection = listToCollectionById(genderList)

module.exports.GENDER_ANY = GENDER_ANY
module.exports.GENDER_MALE = GENDER_MALE
module.exports.GENDER_FEMALE = GENDER_FEMALE
module.exports.GENDER_MIDDLE = GENDER_MIDDLE
