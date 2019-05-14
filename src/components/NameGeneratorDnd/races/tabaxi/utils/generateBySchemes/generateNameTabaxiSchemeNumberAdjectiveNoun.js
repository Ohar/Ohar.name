import getRandomAdjective from './../getRandomAdjective'
import getRandomNoun from './../getRandomNoun'
import getRandomNumber from './../getRandomNumber'
import getRandomNumberType from './../getRandomNumberType'

const generateNameTabaxiSchemeNumberAdjectiveNoun = ({gender}) => {
    const numberType = getRandomNumberType()

    const number = getRandomNumber({gender, numberType}).nominative
    const adjective = getRandomAdjective({gender, numberType}).nominative
    const noun = getRandomNoun({gender, numberType}).nominative

    return `${number} ${adjective} ${noun}`
}

export default generateNameTabaxiSchemeNumberAdjectiveNoun
