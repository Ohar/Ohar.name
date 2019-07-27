import _ from 'lodash'

import schemaList, {
  ADJECTIVE_NOUN,
  NOUN_AT_NOUN,
  NOUN_OF_ADJECTIVE_NOUN,
  NOUN_OF_NOUN,
  NOUN_OF_NUMBER_ADJECTIVE_NOUN,
  NOUN_OF_NUMBER_NOUN,
  NUMBER_ADJECTIVE_NOUN,
  NUMBER_NOUN_OF_ADJECTIVE_NOUN,
  NUMBER_NOUN_OF_NOUN,
} from './../constants/schemaList'

import generateNameTabaxiSchemeAdjectiveNoun from './generateBySchemes/generateNameTabaxiSchemeAdjectiveNoun'
import generateNameTabaxiSchemeNounAtNoun from './generateBySchemes/generateNameTabaxiSchemeNounAtNoun'
import generateNameTabaxiSchemeNounOfNoun from './generateBySchemes/generateNameTabaxiSchemeNounOfNoun'
import generateNameTabaxiSchemeNounOfAdjectiveNoun from './generateBySchemes/generateNameTabaxiSchemeNounOfAdjectiveNoun'
import generateNameTabaxiSchemeNounOfNumberAdjectiveNoun from './generateBySchemes/generateNameTabaxiSchemeNounOfNumberAdjectiveNoun'
import generateNameTabaxiSchemeNounOfNumberNoun from './generateBySchemes/generateNameTabaxiSchemeNounOfNumberNoun'
import generateNameTabaxiSchemeNumberAdjectiveNoun from './generateBySchemes/generateNameTabaxiSchemeNumberAdjectiveNoun'
import generateNameTabaxiSchemeNumberNounOfAdjectiveNoun from './generateBySchemes/generateNameTabaxiSchemeNumberNounOfAdjectiveNoun'
import generateNameTabaxiSchemeNumberNounOfNoun from './generateBySchemes/generateNameTabaxiSchemeNumberNounOfNoun'

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
      result = generateNameTabaxiSchemeAdjectiveNoun({gender})
      break

    case NOUN_AT_NOUN:
      result = generateNameTabaxiSchemeNounAtNoun({gender})
      break

    case NOUN_OF_ADJECTIVE_NOUN:
      result = generateNameTabaxiSchemeNounOfAdjectiveNoun({gender})
      break

    case NOUN_OF_NOUN:
      result = generateNameTabaxiSchemeNounOfNoun({gender})
      break

    case NOUN_OF_NUMBER_ADJECTIVE_NOUN:
      result = generateNameTabaxiSchemeNounOfNumberAdjectiveNoun({gender})
      break

    case NOUN_OF_NUMBER_NOUN:
      result = generateNameTabaxiSchemeNounOfNumberNoun({gender})
      break

    case NUMBER_ADJECTIVE_NOUN:
      result = generateNameTabaxiSchemeNumberAdjectiveNoun({gender})
      break

    case NUMBER_NOUN_OF_ADJECTIVE_NOUN:
      result = generateNameTabaxiSchemeNumberNounOfAdjectiveNoun({gender})
      break

    case NUMBER_NOUN_OF_NOUN:
      result = generateNameTabaxiSchemeNumberNounOfNoun({gender})
      break

    default:
      result = 'Не готово ¯\\_(ツ)_/¯'
  }

  return result.replace(/\s+/g, ' ')
}

export default generateFullNameTabaxi
