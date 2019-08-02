import maybePluralGender from '@/utils/nameGeneration/maybePluralGender'
import getRandomNoun from '@/utils/nameGeneration/getRandomNoun'

export default ({gender}) => {
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
