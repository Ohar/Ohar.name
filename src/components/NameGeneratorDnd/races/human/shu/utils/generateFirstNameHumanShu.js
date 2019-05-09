import _ from "lodash"

import generateNameListHumanShu from "./generateNameListHumanShu"

const generateFirstNameHumanShu = ({gender, type}) => {
  const nameList = generateNameListHumanShu(gender, type)

  return _.sample(nameList)
}

export default generateFirstNameHumanShu
