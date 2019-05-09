import _ from "lodash"

import generateNameListHumanTyorami from "./generateNameListHumanTyorami"

const generateFirstNameHumanTyorami = ({gender, type}) => {
  const nameList = generateNameListHumanTyorami(gender, type)

  return _.sample(nameList)
}

export default generateFirstNameHumanTyorami
