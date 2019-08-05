import _ from "lodash"

import nounList, {nounLocationList} from "@/constants/nameGeneration/wordDicts/nounList"

import {SINGLE_NUMBER_TYPE} from "@/constants/nameGeneration/numberTypeList"

export default (
  {
    gender,
    genderToUse,
    pickOnlyLocation = false,
    nounToFilter = null,
    numberType = SINGLE_NUMBER_TYPE,
  }
) => {
  const list = pickOnlyLocation
    ? nounLocationList
    : nounList

  return _.sample(
    list.filter(
      noun => (
        noun !== nounToFilter
        && (
          noun.gender === gender
          || noun.gender === genderToUse
        )
      )
    )
  )[numberType]
}
