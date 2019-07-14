import _ from "lodash";

import generateNameListHalfling from "./utils/generateNameListHalfling"
import familyNameList from "./dict/names_family"

export default ({gender}) => {
  const genderToUse = (gender === 'male' || gender === 'female')
    ? gender
    : _.sample(['male', 'female'])
  const name = _.sample(generateNameListHalfling(genderToUse))
  const familyName = _.sample(familyNameList)[genderToUse]

  return `${name} ${familyName}`
}
