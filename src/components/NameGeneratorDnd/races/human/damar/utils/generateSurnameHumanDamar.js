import _ from 'lodash'

import DAMAR_NAMES_FAMILY from "../dict/names_family"

export default function generateSurnameHumanDamar(type) {
  switch (type) {
    case 'no_family':
      return '';

    case 'any':
      return Math.random() > 0.5
        ? _.sample(DAMAR_NAMES_FAMILY)
        : ''

    default:
      return _.sample(DAMAR_NAMES_FAMILY)
  }
}
