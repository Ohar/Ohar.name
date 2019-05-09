import _ from "lodash"

import generateNameListHumanDamar from "./generateNameListHumanDamar"

const generateFirstNameHumanDamar = ({gender, useSurname}) => {
  const nameList = generateNameListHumanDamar(gender, useSurname)

  return _.sample(nameList)
}

export default generateFirstNameHumanDamar
