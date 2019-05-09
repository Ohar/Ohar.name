import _ from "lodash"

import generateNameListHumanMulan from "./generateNameListHumanMulan"

const generateFirstNameHumanMulan = ({gender, type}) => {
  const nameList = generateNameListHumanMulan(gender, type)

  return _.sample(nameList)
}

export default generateFirstNameHumanMulan
