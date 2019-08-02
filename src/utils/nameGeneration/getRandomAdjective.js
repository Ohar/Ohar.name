import _ from 'lodash'

import adjectiveList from '@/constants/nameGeneration/wordDicts/adjectiveList'

import {
  PLURAL_NUMBER_TYPE,
  SINGLE_NUMBER_TYPE,
} from "@/constants/nameGeneration/numberTypeList"

export default (
  {
    gender,
    genderToUse,
    numberType = SINGLE_NUMBER_TYPE,
  }
) => {
  const data = _.sample(adjectiveList)[numberType]

  switch (numberType) {
    case PLURAL_NUMBER_TYPE: {
      return data
    }

    default: {
      return data[gender || genderToUse]
    }
  }
}
