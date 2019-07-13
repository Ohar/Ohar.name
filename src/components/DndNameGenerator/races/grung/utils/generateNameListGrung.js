import nameListFemale from "./../dict/names_female"
import nameListMale from "./../dict/names_male"
import nameListUnisex from "./../dict/names_unisex"

export default gender => {
  switch (gender) {
    case 'female': {
      return [
        ...nameListFemale,
        ...nameListUnisex,
      ]
    }

    case 'male': {
      return [
        ...nameListMale,
        ...nameListUnisex,
      ]
    }

    default:
    case 'any': {
      return [
        ...nameListFemale,
        ...nameListMale,
        ...nameListUnisex,
      ]
    }
  }
}
