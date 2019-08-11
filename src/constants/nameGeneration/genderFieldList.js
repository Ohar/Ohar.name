import { faGenderless } from '@fortawesome/free-solid-svg-icons'
import {
  genderCollection,
  GENDER_ANY,
  GENDER_MALE,
  GENDER_FEMALE,
  GENDER_MIDDLE,
} from '@/constants/genderList'

export default [
  {
    text: genderCollection[GENDER_ANY],
    value: GENDER_ANY,
  },
  {
    icon: 'icon-male',
    text: genderCollection[GENDER_MALE],
    value: GENDER_MALE,
  },
  {
    icon: 'icon-female',
    text: genderCollection[GENDER_FEMALE],
    value: GENDER_FEMALE,
  },
  {
    icon: faGenderless,
    text: genderCollection[GENDER_MIDDLE],
    value: GENDER_MIDDLE,
    show: {
      race: 'tabaxi',
    },
  },
]
