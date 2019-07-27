import maybePluralGender from './../maybePluralGender'
import getRandomNoun from './../getRandomNoun'
import getRandomAdjective from './../getRandomAdjective'

const generateNameTabaxiSchemeNounOfAdjectiveNoun = ({gender}) => {
    const genderToUseSecond = maybePluralGender(gender)

    const nounFirst = getRandomNoun({gender})
    const nounFirstText = nounFirst.nominative
    const adjectiveSecond = getRandomAdjective({gender, genderToUseSecond}).genitive
    const nounSecond = getRandomNoun(
      {
          gender,
          genderToUseSecond,
          nounToFilter: nounFirst,
      }
    ).genitive

    return `${nounFirstText} ${adjectiveSecond} ${nounSecond}`
}

export default generateNameTabaxiSchemeNounOfAdjectiveNoun
