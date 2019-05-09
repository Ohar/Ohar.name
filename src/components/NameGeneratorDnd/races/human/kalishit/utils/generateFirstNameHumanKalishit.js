import _ from "lodash"

import generateNameListHumanKalishit from "./generateNameListHumanKalishit"

const generateFirstNameHumanKalishit = ({gender, type}) => {
  const nameList = generateNameListHumanKalishit(gender, type)

  return _.sample(nameList)
}

export default generateFirstNameHumanKalishit
