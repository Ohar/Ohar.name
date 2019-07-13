import _ from 'lodash'

import NAMES_ADJECTIVE from '../dict/names_adjective'

import {
  PLURAL_NUMBER_TYPE,
  SINGLE_NUMBER_TYPE,
} from '../constants/numberList'

const getRandomAdjective = (
  {
    gender,
    genderToUse,
    numberType = SINGLE_NUMBER_TYPE,
  }
) => {
  const data = _.sample(NAMES_ADJECTIVE)[numberType]

  switch (numberType) {
    case PLURAL_NUMBER_TYPE: {
      return data
    }

    default: {
      return data[gender || genderToUse]
    }
  }
}

export default getRandomAdjective
