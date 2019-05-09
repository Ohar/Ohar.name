import _ from "lodash"

import generateNameListHumanChondatan from "./generateNameListHumanChondatan"

const generateFirstNameHumanChondatan = ({gender, useSurname}) => {
  const nameList = generateNameListHumanChondatan(gender, useSurname)

  return _.sample(nameList)
}

export default generateFirstNameHumanChondatan
