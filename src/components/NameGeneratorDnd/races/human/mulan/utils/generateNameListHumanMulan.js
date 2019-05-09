import NAMES_FEMALE from "../dict/names_female"
import NAMES_MALE from "../dict/names_male"

export default function generateNameListHumanMulan(gender) {
  switch (gender) {
    case 'any': {
      return [
        ...NAMES_FEMALE,
        ...NAMES_MALE,
      ]
    }

    case 'female': {
      return NAMES_FEMALE
    }

    case 'male': {
      return NAMES_MALE
    }
  }
}
