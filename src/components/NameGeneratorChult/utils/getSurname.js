import _ from 'lodash'

import NAMES_FAMILY from "./../dict/names_family"

export default function getSurname(type) {
  switch (type) {
    case 'no_family':
      return '';

    case 'all':
      return Math.random() > 0.5
        ? _.sample(NAMES_FAMILY.names)
        : ''

    default:
      return _.sample(NAMES_FAMILY.names)
  }
}
