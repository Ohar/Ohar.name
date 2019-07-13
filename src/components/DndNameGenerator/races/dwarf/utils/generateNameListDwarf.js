import nameListFemale from "./../dict/names_female"
import nameListMale from "./../dict/names_male"

export default gender => {
  switch (gender) {
    case 'female': {
      return nameListFemale
    }

    case 'male': {
      return nameListMale
    }

    case 'any':
    default: {
      return [
        ...nameListFemale,
        ...nameListMale,
      ]
    }
  }
}
