import getRandomNoun from '@/utils/nameGeneration/getRandomNoun'
import getRandomAdjective from '@/utils/nameGeneration/getRandomAdjective'

export default ({gender}) => {
  const adjectiveFirst = getRandomAdjective({gender}).nominative
  const nounSecond = getRandomNoun({gender}).nominative

  return `${adjectiveFirst} ${nounSecond}`
}
