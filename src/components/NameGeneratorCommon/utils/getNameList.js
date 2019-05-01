import _ from "lodash"

import NAMES_GREEK_FEMALE from "./../dict/names_greek_female"
import NAMES_GREEK_MALE from "./../dict/names_greek_male"
import NAMES_SLAVIC_FEMALE from "./../dict/names_slavic_female"
import NAMES_SLAVIC_MALE from "./../dict/names_slavic_male"
import NAMES_SOVIET_FEMALE from "./../dict/names_soviet_female"
import NAMES_SOVIET_MALE from "./../dict/names_soviet_male"

export default function getNameList(gender, type) {
  let names = [
    NAMES_SLAVIC_FEMALE,
    NAMES_SLAVIC_MALE,
    NAMES_SOVIET_FEMALE,
    NAMES_SOVIET_MALE,
    NAMES_GREEK_FEMALE,
    NAMES_GREEK_MALE,
  ]

  if (gender !== "any") {
    names = _.filter(names, { gender })
  }

  if (type !== "any") {
    names = _.filter(names, { type })
  }

  return _.flatten(_.map(names, "names"))
}
