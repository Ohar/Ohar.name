import _ from 'lodash'

import getNameList from './getNameList'
import getSurname from './getSurname'

export default function generateName({gender, type}) {
  const nameList = getNameList(gender, type)

  const firstname = _.sample(nameList)
  const surname = getSurname(type)

  return `${firstname} ${surname}`.trim()
}
