import _ from 'lodash'

import schemaList, {
  ADJECTIVE_NOUN,
  NOUN_AT_NOUN,
  NOUN_OF_ADJECTIVE_NOUN,
  NOUN_OF_NOUN,
} from './../constants/schemaList'

import generateNameTabaxiSchemeAdjectiveNoun from './generateNameTabaxiSchemeAdjectiveNoun'
import generateNameTabaxiSchemeNounAtNoun from './generateNameTabaxiSchemeNounAtNoun'
import generateNameTabaxiSchemeNounOfNoun from './generateNameTabaxiSchemeNounOfNoun'
import generateNameTabaxiSchemeNounOfAdjectiveNoun from './generateNameTabaxiSchemeNounOfAdjectiveNoun'

// TODO
// Кланы табакси
const generateFullNameTabaxi = ({gender, schema}) => {
  const schemaToUse = schema === 'any'
    ? _.sample(schemaList)
    : schema

  switch (schemaToUse) {
    case ADJECTIVE_NOUN:
      return generateNameTabaxiSchemeAdjectiveNoun({gender})

    case NOUN_AT_NOUN:
      return generateNameTabaxiSchemeNounAtNoun({gender})

    case NOUN_OF_NOUN:
      return generateNameTabaxiSchemeNounOfNoun({gender})

    case NOUN_OF_ADJECTIVE_NOUN:
      return generateNameTabaxiSchemeNounOfAdjectiveNoun({gender})

    default:
      return 'Не готово ¯\\_(ツ)_/¯'
  }
}

export default generateFullNameTabaxi
