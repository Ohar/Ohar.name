import CHULT_NAMES_FEMALE from "../dict/names_female"
import CHULT_NAMES_MALE from "../dict/names_male"

export default function getNameList(gender) {
  switch (gender) {
    case 'all': {
      return [
        ...CHULT_NAMES_FEMALE,
        ...CHULT_NAMES_MALE,
      ]
    }

    case 'female': {
      return CHULT_NAMES_FEMALE
    }

    case 'male': {
      return CHULT_NAMES_MALE
    }
  }
}
