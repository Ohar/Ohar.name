import getRandomAdjective from './../getRandomAdjective'
import getRandomNoun from './../getRandomNoun'
import getRandomNounByNumber from '../getRandomNounByNumber'
import getRandomNumber from './../getRandomNumber'
import getRandomNumberType from './../getRandomNumberType'

const generateNameTabaxiSchemeNumberNounOfAdjectiveNoun = ({gender}) => {
    const numberType = getRandomNumberType()

    const number = getRandomNumber({gender, numberType}).nominative
    const adjective = getRandomAdjective({gender, numberType}).genitive
    const noun2nd = getRandomNoun({gender, numberType})
    const noun2ndText = noun2nd.genitive
    const noun1st = getRandomNounByNumber(
      {
          gender,
          numberType,
          nounToFilter: noun2nd,
      }
    )

    return `${number} ${noun1st} ${adjective} ${noun2ndText}`
}

export default generateNameTabaxiSchemeNumberNounOfAdjectiveNoun
