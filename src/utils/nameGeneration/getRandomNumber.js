import _ from "lodash"

import numberWordList from "@/constants/nameGeneration/wordDicts/numberWordList"

import {SINGLE_NUMBER_TYPE} from "@/constants/nameGeneration/numberTypeList"

export default (
  {
    gender,
    numberType = SINGLE_NUMBER_TYPE,
  }
) => _.sample(
  numberWordList.filter(
    ({type}) => type === numberType
  )
)[gender]