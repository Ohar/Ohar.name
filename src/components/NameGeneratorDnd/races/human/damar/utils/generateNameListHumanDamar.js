import DAMAR_NAMES_FEMALE from "../dict/names_female"
import DAMAR_NAMES_MALE from "../dict/names_male"

export default function generateNameListHumanDamar(gender) {
  switch (gender) {
    case 'any': {
      return [
        ...DAMAR_NAMES_FEMALE,
        ...DAMAR_NAMES_MALE,
      ]
    }

    case 'female': {
      return DAMAR_NAMES_FEMALE
    }

    case 'male': {
      return DAMAR_NAMES_MALE
    }
  }
}
