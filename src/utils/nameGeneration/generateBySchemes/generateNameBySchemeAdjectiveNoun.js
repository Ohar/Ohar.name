import getRandomNoun from '@/utils/nameGeneration/getRandomNoun'
import getRandomAdjective from '@/utils/nameGeneration/getRandomAdjective'

export default ({gender, ...rest}) => {
  const adjectiveFirst = getRandomAdjective({gender, ...rest}).nominative
  const nounSecond = getRandomNoun({gender, ...rest}).nominative

  return `${adjectiveFirst} ${nounSecond}`
}
