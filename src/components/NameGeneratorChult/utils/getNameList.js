import _ from "lodash"

import NAMES_FEMALE from "./../dict/names_female"
import NAMES_MALE from "./../dict/names_male"

export default function getNameList(gender) {
  let names = [
    NAMES_FEMALE,
    NAMES_MALE,
  ]

  if (gender !== "all") {
    names = _.filter(names, { gender })
  }

  return _.flatten(_.map(names, "names"))
}
