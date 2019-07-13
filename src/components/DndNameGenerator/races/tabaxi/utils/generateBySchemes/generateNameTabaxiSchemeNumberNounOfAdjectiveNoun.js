import getRandomAdjective from './../getRandomAdjective'
import getRandomNoun from './../getRandomNoun'
import getRandomNumber from './../getRandomNumber'
import getRandomNumberType from './../getRandomNumberType'

const generateNameTabaxiSchemeNumberNounOfAdjectiveNoun = ({gender}) => {
    const numberType = getRandomNumberType()

    const number = getRandomNumber({gender, numberType}).nominative
    const noun1st = getRandomNoun({gender, numberType}).nominative
    const adjective = getRandomAdjective({gender, numberType}).genitive
    const noun2nd = getRandomNoun({gender, numberType}).genitive

    return `${number} ${noun1st} ${adjective} ${noun2nd}`
}

export default generateNameTabaxiSchemeNumberNounOfAdjectiveNoun
