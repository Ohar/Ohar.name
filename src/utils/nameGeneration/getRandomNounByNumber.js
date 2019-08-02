import {
  SINGLE_NUMBER_TYPE,
  PLURAL_NUMBER_TYPE,
} from "@/constants/nameGeneration/numberTypeList"

import getRandomNoun from '@/utils/nameGeneration/getRandomNoun'

export default (
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
