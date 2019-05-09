import _ from "lodash"

import generateNameListHumanChondatan from "./generateNameListHumanChondatan"

const generateFirstNameHumanChondatan = ({gender, type}) => {
  const nameList = generateNameListHumanChondatan(gender, type)

  return _.sample(nameList)
}

export default generateFirstNameHumanChondatan
