import _ from 'lodash'

import CHULT_NAMES_FAMILY from "../dict/names_family"

export default function generateSurnameHumanChult(useSurname) {
  switch (useSurname) {
    case 'no_family':
      return '';

    case 'any':
      return Math.random() > 0.5
        ? _.sample(CHULT_NAMES_FAMILY)
        : ''

    default:
      return _.sample(CHULT_NAMES_FAMILY)
  }
}
