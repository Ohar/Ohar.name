import _ from "lodash"

import generateNameListHumanMulan from "./generateNameListHumanMulan"

const generateFirstNameHumanMulan = ({gender, useSurname}) => {
  const nameList = generateNameListHumanMulan(gender, useSurname)

  return _.sample(nameList)
}

export default generateFirstNameHumanMulan
