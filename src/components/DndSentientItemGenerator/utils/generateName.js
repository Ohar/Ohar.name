import _ from "lodash"

import generateRandomGender from "@/utils/nameGeneration/generateRandomGender"

import {
  ADJECTIVE_NOUN,
  NOUN_OF_NOUN,
} from '@/constants/nameGeneration/nameSchemaList'

import generateNameBySchemeAdjectiveNoun from '@/utils/nameGeneration/generateBySchemes/generateNameBySchemeAdjectiveNoun'
import generateNameBySchemeNounOfNoun from '@/utils/nameGeneration/generateBySchemes/generateNameBySchemeNounOfNoun'

const schemaList = [
  ADJECTIVE_NOUN,
  NOUN_OF_NOUN,
]

export default () => {
  const gender = generateRandomGender()
  const schemaToUse = _.sample(schemaList)

  let result = ''

  switch (schemaToUse) {
    case NOUN_OF_NOUN:
      result = generateNameBySchemeNounOfNoun({gender})
      break

    case ADJECTIVE_NOUN:
    default:
        result = generateNameBySchemeAdjectiveNoun({gender})
      break
  }

  return result.replace(/\s+/g, ' ')
}
