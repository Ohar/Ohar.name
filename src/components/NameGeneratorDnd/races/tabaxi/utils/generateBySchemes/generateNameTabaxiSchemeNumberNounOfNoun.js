import getRandomNoun from './../getRandomNoun'
import getRandomNumber from './../getRandomNumber'
import getRandomNumberType from './../getRandomNumberType'

const generateNameTabaxiSchemeNumberNounOfNoun = ({gender}) => {
    const numberType = getRandomNumberType()

    const number = getRandomNumber({gender, numberType}).nominative
    const noun1st = getRandomNoun({gender, numberType}).nominative
    const noun2nd = getRandomNoun({gender, numberType}).genitive

    return `${number} ${noun1st} ${noun2nd}`
}

export default generateNameTabaxiSchemeNumberNounOfNoun
