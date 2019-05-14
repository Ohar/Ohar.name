import _ from "lodash"

import NUMBER_NOUN from "../dict/numberWordList"

import {SINGLE_NUMBER_TYPE} from "../constants/numberList"

const getRandomNumber = (
  {
    gender,
    numberType = SINGLE_NUMBER_TYPE,
  }
) => _.sample(
  NUMBER_NOUN.filter(
    ({type}) => type === numberType
  )
)[gender]

export default getRandomNumber
