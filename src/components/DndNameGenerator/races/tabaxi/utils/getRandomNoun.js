import _ from "lodash"

import NAMES_NOUN from "../dict/names_noun"

import {SINGLE_NUMBER_TYPE} from '../constants/numberList'

const getRandomNoun = (
  {
    gender,
    genderToUse,
    nounToFilter = null,
    numberType = SINGLE_NUMBER_TYPE,
  }
) => _.sample(
  NAMES_NOUN.filter(
    item => (
      item !== nounToFilter
      && (
        item.gender === gender
        || item.gender === genderToUse
      )
    )
  )
)[numberType]

export default getRandomNoun
