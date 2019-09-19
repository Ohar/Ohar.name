import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {GENDER_ANY, GENDER_MALE} from "@/constants/genderList"

export default ({aligmentId = GENDER_ANY, genderId}) => {
  const {name} = dndAligmentCollection[aligmentId]
  const nameGenderized = name[genderId] || name[GENDER_ANY] || name[GENDER_MALE]

  return nameGenderized.nominative
}
