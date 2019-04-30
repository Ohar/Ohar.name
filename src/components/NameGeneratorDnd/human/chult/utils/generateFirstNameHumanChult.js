import _ from "lodash"

import generateNameListHumanChult from "./generateNameListHumanChult"

const generateFirstNameHumanChult = ({gender, type}) => {
  const nameList = generateNameListHumanChult(gender, type)

  return _.sample(nameList)
}

export default generateFirstNameHumanChult
