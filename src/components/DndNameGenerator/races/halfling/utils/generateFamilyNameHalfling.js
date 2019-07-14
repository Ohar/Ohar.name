import _ from "lodash";

import familyName1StList from "./../dict/names_family_1st_part"
import familyName2ndList from "./../dict/names_family_2nd_part"
import familyNameListSingle from "./../dict/names_family_single"

const USE_COMPOSITE_FAMILY_NAME_COEF = .95

export default gender => {
  if (Math.random() <= USE_COMPOSITE_FAMILY_NAME_COEF) {
    const familyName1St = _.sample(familyName1StList)
    const familyName2nd = _.sample(familyName2ndList)[gender]

    return `${familyName1St}${familyName2nd}`
  } else {
    return _.sample(familyNameListSingle)[gender]
  }
}
