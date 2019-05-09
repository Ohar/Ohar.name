import _ from "lodash"

import generateNameListHumanTyorami from "./generateNameListHumanTyorami"

const generateFirstNameHumanTyorami = ({gender, useSurname}) => {
  const nameList = generateNameListHumanTyorami(gender, useSurname)

  return _.sample(nameList)
}

export default generateFirstNameHumanTyorami
