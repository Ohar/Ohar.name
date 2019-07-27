import maybePluralGender from './../maybePluralGender'
import getRandomAdjective from './../getRandomAdjective'
import getRandomNoun from './../getRandomNoun'
import getRandomNumber from './../getRandomNumber'
import getRandomNumberType from './../getRandomNumberType'

const generateNameTabaxiSchemeNounOfNumberAdjectiveNoun = ({gender}) => {
    const genderToUse1st = maybePluralGender(gender)
    const numberType = getRandomNumberType()

    const noun1st = getRandomNoun({gender, genderToUse: genderToUse1st})
    const noun1stText = noun1st.nominative
    const number2nd = getRandomNumber({gender, numberType}).genitive
    const adjective2nd = getRandomAdjective({gender, numberType}).genitive
    const noun2nd = getRandomNoun(
      {
          gender,
          numberType,
          nounToFilter: noun1st,
      }
    ).genitive

    return `${noun1stText} ${number2nd} ${adjective2nd} ${noun2nd}`
}

export default generateNameTabaxiSchemeNounOfNumberAdjectiveNoun
