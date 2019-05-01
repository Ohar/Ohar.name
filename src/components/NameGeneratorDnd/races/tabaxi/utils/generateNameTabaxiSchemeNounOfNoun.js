import maybePluralGender from './maybePluralGender'
import getRandomNoun from './getRandomNoun'

const generateNameTabaxiSchemeNounAtNoun = ({gender}) => {
  const genderToUseSecond = maybePluralGender(gender)

  const nounFirst = getRandomNoun(gender).nominative
  const nounSecond = getRandomNoun(gender, genderToUseSecond).genitive

  return `${nounFirst} ${nounSecond}`
}

export default generateNameTabaxiSchemeNounAtNoun
