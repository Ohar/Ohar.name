import _ from "lodash";

import generateNameListElf from "./utils/generateNameListElf"
import familyNameList from "./dict/names_family"
import childNameList from "./dict/names_child"

export default ({gender, age}) => {
  if (age === 'child') {
    return _.sample(childNameList)
  }

  const name = _.sample(generateNameListElf(gender))
  const familyName = _.sample(familyNameList)

  return `${name} ${familyName}`
}
