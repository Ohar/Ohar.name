import getRandomNoun from './getRandomNoun'

import { SINGLE_NUMBER_TYPE, PLURAL_NUMBER_TYPE } from '../constants/numberList'

const getRandomNounByNumber = (
  {
    numberType = SINGLE_NUMBER_TYPE,
    ...rest
  },
) => {
  const nounObj = getRandomNoun({ numberType, ...rest })

  return numberType === PLURAL_NUMBER_TYPE
    ? nounObj.genitive
    : nounObj.nominative
}

export default getRandomNounByNumber
