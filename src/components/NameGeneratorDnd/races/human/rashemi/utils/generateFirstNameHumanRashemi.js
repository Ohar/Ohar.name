import _ from "lodash"

import generateNameListHumanRashemi from "./generateNameListHumanRashemi"

const generateFirstNameHumanRashemi = ({gender, useSurname}) => {
  const nameList = generateNameListHumanRashemi(gender, useSurname)

  return _.sample(nameList)
}

export default generateFirstNameHumanRashemi
