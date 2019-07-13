import getRandomNoun from './../getRandomNoun'
import getRandomNumberType from "../getRandomNumberType"
import getRandomNumber from "../getRandomNumber"

const generateNameTabaxiSchemeNumberNounAtNoun = ({gender}) => {
  const numberType = getRandomNumberType()

  const number = getRandomNumber({gender, numberType}).nominative
  const nounFirst = getRandomNoun({gender, numberType}).nominative
  const nounSecond = getRandomNoun({gender, numberType}).prepositional

  return `${number} ${nounFirst} На ${nounSecond}`
}

export default generateNameTabaxiSchemeNumberNounAtNoun
