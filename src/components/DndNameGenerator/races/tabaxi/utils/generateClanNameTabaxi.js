import generateRandomGender from '@/utils/nameGeneration/generateRandomGender'
import generateNameBySchemeAdjectiveNoun from '@/utils/nameGeneration/generateBySchemes/generateNameBySchemeAdjectiveNoun'

export default () => generateNameBySchemeAdjectiveNoun(
  {
    gender: generateRandomGender(),
    pickOnlyLocation: true,
  }
)
