import PLURAL_KOEF from "../constants/PLURAL_KOEF"

const maybePluralGender = gender => Math.random() <= PLURAL_KOEF
  ? 'plural'
  : gender

export default maybePluralGender
