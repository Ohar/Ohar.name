import _ from "lodash"

import generateNameListHumanShu from "./generateNameListHumanShu"

const generateFirstNameHumanShu = ({gender, useSurname}) => {
  const nameList = generateNameListHumanShu(gender, useSurname)

  return _.sample(nameList)
}

export default generateFirstNameHumanShu
