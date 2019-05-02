import _ from "lodash"

import generateNameListHumanDamar from "./generateNameListHumanDamar"

const generateFirstNameHumanDamar = ({gender, type}) => {
  const nameList = generateNameListHumanDamar(gender, type)

  return _.sample(nameList)
}

export default generateFirstNameHumanDamar
