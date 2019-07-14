import _ from "lodash";

import generateNameListHalfling from "./utils/generateNameListHalfling"
import generateFamilyNameHalfling from "./utils/generateFamilyNameHalfling"

export default ({gender}) => {
  const genderToUse = (gender === 'male' || gender === 'female')
    ? gender
    : _.sample(['male', 'female'])
  const name = _.sample(generateNameListHalfling(genderToUse))
  const familyName = generateFamilyNameHalfling(genderToUse)

  return `${name} ${familyName}`
}
