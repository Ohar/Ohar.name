import maybePluralGender from './../maybePluralGender'
import getRandomNoun from './../getRandomNoun'

const generateNameTabaxiSchemeNounAtNoun = ({gender}) => {
  const genderToUseSecond = maybePluralGender(gender)

  const nounFirst = getRandomNoun({gender})
  const nounFirstText = nounFirst.nominative
  const nounSecond = getRandomNoun(
    {
      gender,
      genderToUseSecond,
      nounToFilter: nounFirst,
    }
  ).genitive

  return `${nounFirstText} ${nounSecond}`
}

export default generateNameTabaxiSchemeNounAtNoun
