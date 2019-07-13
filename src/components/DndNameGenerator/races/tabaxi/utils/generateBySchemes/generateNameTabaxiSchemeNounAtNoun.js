import maybePluralGender from './../maybePluralGender'
import getRandomNoun from './../getRandomNoun'

const generateNameTabaxiSchemeNounAtNoun = ({gender}) => {
  const genderToUseSecond = maybePluralGender(gender)

  const nounFirst = getRandomNoun({gender}).nominative
  const nounSecond = getRandomNoun({gender, genderToUseSecond}).prepositional

  return `${nounFirst} На ${nounSecond}`
}

export default generateNameTabaxiSchemeNounAtNoun
