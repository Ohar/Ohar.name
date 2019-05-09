import _ from "lodash"

import generateNameListHumanIlluskan from "./generateNameListHumanIlluskan"

const generateFirstNameHumanIlluskan = ({gender, useSurname}) => {
  const nameList = generateNameListHumanIlluskan(gender, useSurname)

  return _.sample(nameList)
}

export default generateFirstNameHumanIlluskan
