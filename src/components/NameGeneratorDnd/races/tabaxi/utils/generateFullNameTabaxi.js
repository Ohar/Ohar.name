import _ from 'lodash'

import schemaList, {
  ADJECTIVE_NOUN,
  NOUN_AT_NOUN,
  NOUN_OF_ADJECTIVE_NOUN,
  NOUN_OF_NOUN,
  NOUN_OF_NUMBER_ADJECTIVE_NOUN,
  NOUN_OF_NUMBER_NOUN,
  NUMBER_ADJECTIVE_NOUN,
  NUMBER_NOUN_AT_NOUN,
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
import generateNameTabaxiSchemeNumberNounAtNoun from './generateBySchemes/generateNameTabaxiSchemeNumberNounAtNoun'
import generateNameTabaxiSchemeNumberNounOfAdjectiveNoun from './generateBySchemes/generateNameTabaxiSchemeNumberNounOfAdjectiveNoun'
import generateNameTabaxiSchemeNumberNounOfNoun from './generateBySchemes/generateNameTabaxiSchemeNumberNounOfNoun'

// TODO
// Кланы табакси
const generateFullNameTabaxi = ({gender, schema}) => {
  const schemaToUse = schema === 'any'
    ? _.sample(schemaList).value
    : schema

  switch (schemaToUse) {
    case ADJECTIVE_NOUN:
      return generateNameTabaxiSchemeAdjectiveNoun({gender})

    case NOUN_AT_NOUN:
      return generateNameTabaxiSchemeNounAtNoun({gender})

    case NOUN_OF_ADJECTIVE_NOUN:
      return generateNameTabaxiSchemeNounOfAdjectiveNoun({gender})

    case NOUN_OF_NOUN:
      return generateNameTabaxiSchemeNounOfNoun({gender})

    case NOUN_OF_NUMBER_ADJECTIVE_NOUN:
      return generateNameTabaxiSchemeNounOfNumberAdjectiveNoun({gender})

    case NOUN_OF_NUMBER_NOUN:
      return generateNameTabaxiSchemeNounOfNumberNoun({gender})

    case NUMBER_ADJECTIVE_NOUN:
      return generateNameTabaxiSchemeNumberAdjectiveNoun({gender})

    case NUMBER_NOUN_AT_NOUN:
      return generateNameTabaxiSchemeNumberNounAtNoun({gender})

    case NUMBER_NOUN_OF_ADJECTIVE_NOUN:
      return generateNameTabaxiSchemeNumberNounOfAdjectiveNoun({gender})

    case NUMBER_NOUN_OF_NOUN:
      return generateNameTabaxiSchemeNumberNounOfNoun({gender})

    default:
      return 'Не готово ¯\\_(ツ)_/¯'
  }
}

export default generateFullNameTabaxi
