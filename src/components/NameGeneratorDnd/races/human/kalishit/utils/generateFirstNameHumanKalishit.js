import _ from "lodash"

import generateNameListHumanKalishit from "./generateNameListHumanKalishit"

const generateFirstNameHumanKalishit = ({gender, useSurname}) => {
  const nameList = generateNameListHumanKalishit(gender, useSurname)

  return _.sample(nameList)
}

export default generateFirstNameHumanKalishit
