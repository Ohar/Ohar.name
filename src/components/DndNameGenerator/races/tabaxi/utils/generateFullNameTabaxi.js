import _ from 'lodash'

import schemaList, {
  ADJECTIVE_NOUN,
  NOUN_OF_NOUN,
  NOUN_OF_NUMBER_NOUN,
  NUMBER_ADJECTIVE_NOUN,
} from '@/constants/nameGeneration/nameSchemaList'

import generateNameBySchemeAdjectiveNoun from '@/utils/nameGeneration/generateBySchemes/generateNameBySchemeAdjectiveNoun'
import generateNameBySchemeNounOfNoun from '@/utils/nameGeneration/generateBySchemes/generateNameBySchemeNounOfNoun'
import generateNameBySchemeNounOfNumberNoun from '@/utils/nameGeneration/generateBySchemes/generateNameBySchemeNounOfNumberNoun'
import generateNameBySchemeNumberAdjectiveNoun from '@/utils/nameGeneration/generateBySchemes/generateNameBySchemeNumberAdjectiveNoun'

// TODO
// Кланы табакси
const generateFullNameTabaxi = ({gender, schema}) => {
  const schemaToUse = schema === 'any'
    ? _.sample(
      schemaList.filter(({value}) => value !== 'any')
    ).value
    : schema

  let result = ''

  switch (schemaToUse) {
    case ADJECTIVE_NOUN:
      result = generateNameBySchemeAdjectiveNoun({gender})
      break

    case NOUN_OF_NOUN:
      result = generateNameBySchemeNounOfNoun({gender})
      break

    case NOUN_OF_NUMBER_NOUN:
      result = generateNameBySchemeNounOfNumberNoun({gender})
      break

    case NUMBER_ADJECTIVE_NOUN:
      result = generateNameBySchemeNumberAdjectiveNoun({gender})
      break

    default:
      result = 'Не готово ¯\\_(ツ)_/¯'
  }

  return result.replace(/\s+/g, ' ')
}

export default generateFullNameTabaxi
