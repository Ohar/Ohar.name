import maybePluralGender from '@/utils/nameGeneration/maybePluralGender'
import getRandomNoun from '@/utils/nameGeneration/getRandomNoun'
import getRandomAdjective from '@/utils/nameGeneration/getRandomAdjective'

export default ({gender}) => {
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
