import _ from "lodash"

import generateNameListHumanIlluskan from "./generateNameListHumanIlluskan"

const generateFirstNameHumanIlluskan = ({gender, type}) => {
  const nameList = generateNameListHumanIlluskan(gender, type)

  return _.sample(nameList)
}

export default generateFirstNameHumanIlluskan
