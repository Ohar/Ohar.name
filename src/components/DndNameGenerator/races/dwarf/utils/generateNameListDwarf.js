import nameListFemale from "./../dict/names_female"
import nameListMale from "./../dict/names_male"

export default gender => {
  switch (gender) {
    case 'any': {
      return [
        ...nameListFemale,
        ...nameListMale,
      ]
    }

    case 'female': {
      return nameListFemale
    }

    case 'male': {
      return nameListMale
    }
  }
}
