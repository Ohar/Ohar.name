import _ from 'lodash'

import {
  ADJECTIVE_NOUN,
  NOUN_OF_NOUN,
  NOUN_OF_NUMBER_NOUN,
  NUMBER_ADJECTIVE_NOUN,
} from '@/constants/nameGeneration/nameSchemaList'

import generateNameBySchemeAdjectiveNoun from '@/utils/nameGeneration/generateBySchemes/generateNameBySchemeAdjectiveNoun'
import generateNameBySchemeNounOfNoun from '@/utils/nameGeneration/generateBySchemes/generateNameBySchemeNounOfNoun'
import generateNameBySchemeNounOfNumberNoun from '@/utils/nameGeneration/generateBySchemes/generateNameBySchemeNounOfNumberNoun'
import generateNameBySchemeNumberAdjectiveNoun from '@/utils/nameGeneration/generateBySchemes/generateNameBySchemeNumberAdjectiveNoun'

import generateClanNameTabaxi from './generateClanNameTabaxi'

export default ({gender, schema}) => {
  const clanName = generateClanNameTabaxi()
  const schemaToUse = schema === 'any'
    ? _.sample(
      [
        ADJECTIVE_NOUN,
        NOUN_OF_NOUN,
        NOUN_OF_NUMBER_NOUN,
        NUMBER_ADJECTIVE_NOUN,
      ]
        .filter(item => item !== 'any')
    )
    : schema

  let fullName = ''

  switch (schemaToUse) {
    case ADJECTIVE_NOUN:
      fullName = generateNameBySchemeAdjectiveNoun({gender})
      break

    case NOUN_OF_NOUN:
      fullName = generateNameBySchemeNounOfNoun({gender})
      break

    case NOUN_OF_NUMBER_NOUN:
      fullName = generateNameBySchemeNounOfNumberNoun({gender})
      break

    case NUMBER_ADJECTIVE_NOUN:
      fullName = generateNameBySchemeNumberAdjectiveNoun({gender})
      break
  }

  return `${fullName} из клана ${clanName}`
}
