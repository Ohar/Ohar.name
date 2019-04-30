import _ from 'lodash'

import CHULT_NAMES_FAMILY from "../dict/names_family"

export default function generateSurnameHumanChult(type) {
  switch (type) {
    case 'no_family':
      return '';

    case 'all':
      return Math.random() > 0.5
        ? _.sample(CHULT_NAMES_FAMILY)
        : ''

    default:
      return _.sample(CHULT_NAMES_FAMILY)
  }
}
