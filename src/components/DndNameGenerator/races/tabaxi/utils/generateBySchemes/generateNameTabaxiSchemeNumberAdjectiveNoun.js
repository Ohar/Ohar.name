import getRandomAdjective from './../getRandomAdjective'
import getRandomNounByNumber from '../getRandomNounByNumber'
import getRandomNumber from './../getRandomNumber'
import getRandomNumberType from './../getRandomNumberType'

const generateNameTabaxiSchemeNumberAdjectiveNoun = ({gender}) => {
    const numberType = getRandomNumberType()

    const number = getRandomNumber({gender, numberType}).nominative
    const adjective = getRandomAdjective({gender, numberType}).nominative
    const noun = getRandomNounByNumber({gender, numberType})

    return `${number} ${adjective} ${noun}`
}

export default generateNameTabaxiSchemeNumberAdjectiveNoun
