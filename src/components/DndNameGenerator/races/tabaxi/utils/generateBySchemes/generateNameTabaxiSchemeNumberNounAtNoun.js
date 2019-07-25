import getRandomNoun from './../getRandomNoun'
import getRandomNounByNumber from '../getRandomNounByNumber'
import getRandomNumber from "../getRandomNumber"
import getRandomNumberType from "../getRandomNumberType"

const generateNameTabaxiSchemeNumberNounAtNoun = ({gender}) => {
  const numberType = getRandomNumberType()

  const number = getRandomNumber({gender, numberType}).nominative
  const nounFirst = getRandomNounByNumber({gender, numberType})
  const nounSecond = getRandomNoun({gender, numberType}).prepositional

  return `${number} ${nounFirst} На ${nounSecond}`
}

export default generateNameTabaxiSchemeNumberNounAtNoun
