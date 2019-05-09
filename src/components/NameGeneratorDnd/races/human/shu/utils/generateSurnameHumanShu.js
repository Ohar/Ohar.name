import _ from 'lodash'

import NAMES_FAMILY from "../dict/names_family"

export default function generateSurnameHumanShu(useSurname) {
  switch (useSurname) {
    case 'no_family':
      return '';

    case 'any':
      return Math.random() > 0.5
        ? _.sample(NAMES_FAMILY)
        : ''

    default:
      return _.sample(NAMES_FAMILY)
  }
}
