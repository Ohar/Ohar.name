import maybePluralGender from './../maybePluralGender'
import getRandomNoun from './../getRandomNoun'
import getRandomNumber from './../getRandomNumber'
import getRandomNumberType from './../getRandomNumberType'

const generateNameTabaxiSchemeNounOfNumberNoun = ({gender}) => {
    const genderToUse1st = maybePluralGender(gender)
    const numberType = getRandomNumberType()

    const noun1st = getRandomNoun({gender, genderToUse: genderToUse1st}).nominative
    const number2nd = getRandomNumber({gender, numberType}).genitive
    const noun2nd = getRandomNoun({gender, numberType}).genitive

    return `${noun1st} ${number2nd} ${noun2nd}`
}

export default generateNameTabaxiSchemeNounOfNumberNoun
