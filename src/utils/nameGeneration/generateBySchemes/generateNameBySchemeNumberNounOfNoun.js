import getRandomNoun from '@/utils/nameGeneration/getRandomNoun'
import getRandomNounByNumber from '@/utils/nameGeneration/getRandomNounByNumber'
import getRandomNumber from '@/utils/nameGeneration/getRandomNumber'
import getRandomNumberType from '@/utils/nameGeneration/getRandomNumberType'

export default ({gender}) => {
    const numberType = getRandomNumberType()

    const number = getRandomNumber({gender, numberType}).nominative
    const noun2nd = getRandomNoun({gender, numberType})
    const noun2ndText = noun2nd.genitive
    const noun1st = getRandomNounByNumber(
      {
          gender,
          numberType,
          nounToFilter: noun2nd,
      }
    )

    return `${number} ${noun1st} ${noun2ndText}`
}
