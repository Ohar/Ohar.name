import _ from "lodash"

import filterByGender from "./filterByGender"

const getRandomWordData = (list, gender, genderToUse) => _.sample(
  filterByGender(list, gender, genderToUse)
)[genderToUse]

export default getRandomWordData
