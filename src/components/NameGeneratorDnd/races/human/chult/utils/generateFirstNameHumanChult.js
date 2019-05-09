import _ from "lodash"

import generateNameListHumanChult from "./generateNameListHumanChult"

const generateFirstNameHumanChult = ({gender, useSurname}) => {
  const nameList = generateNameListHumanChult(gender, useSurname)

  return _.sample(nameList)
}

export default generateFirstNameHumanChult
