import _ from "lodash"

import generateNameListHumanRashemi from "./generateNameListHumanRashemi"

const generateFirstNameHumanRashemi = ({gender, type}) => {
  const nameList = generateNameListHumanRashemi(gender, type)

  return _.sample(nameList)
}

export default generateFirstNameHumanRashemi
