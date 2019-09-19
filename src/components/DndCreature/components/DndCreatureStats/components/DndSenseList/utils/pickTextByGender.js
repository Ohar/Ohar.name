import {GENDER_FEMALE, GENDER_MALE, GENDER_MIDDLE} from '@/constants/genderList'

const endText = `за пределами этого радиуса`

export default genderId => {
  switch (genderId) {
    case GENDER_FEMALE:
      return `слепа ${endText}`

    case GENDER_MIDDLE:
      return `слепо ${endText}`

    case GENDER_MALE:
    default:
      return `слеп ${endText}`
  }
}
