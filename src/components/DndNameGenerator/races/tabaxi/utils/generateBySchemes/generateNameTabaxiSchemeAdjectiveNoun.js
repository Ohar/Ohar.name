import getRandomNoun from './../getRandomNoun'
import getRandomAdjective from './../getRandomAdjective'

const generateNameTabaxiSchemeAdjectiveNoun = ({gender}) => {
  const adjectiveFirst = getRandomAdjective({gender}).nominative
  const nounSecond = getRandomNoun({gender}).nominative

  return `${adjectiveFirst} ${nounSecond}`
}

export default generateNameTabaxiSchemeAdjectiveNoun
