import listToCollectionById from '@/utils/listToCollectionById'

export const GENDER_ANY = 'any'
export const GENDER_MALE = 'male'
export const GENDER_FEMALE = 'female'
export const GENDER_MIDDLE = 'middle'

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

export default genderList

export const genderCollection = listToCollectionById(genderList)
