import _ from "lodash"

import nounList from "@/constants/nameGeneration/wordDicts/nounList"

import {SINGLE_NUMBER_TYPE} from "@/constants/nameGeneration/numberTypeList"

export default (
  {
    gender,
    genderToUse,
    nounToFilter = null,
    numberType = SINGLE_NUMBER_TYPE,
  }
) => _.sample(
  nounList.filter(
    noun => (
      noun !== nounToFilter
      && (
        noun.gender === gender
        || noun.gender === genderToUse
      )
    )
  )
)[numberType]
