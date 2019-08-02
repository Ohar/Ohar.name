import _ from 'lodash'

import genderFieldList from '@/constants/nameGeneration/genderFieldList'

const genderListToPick = genderFieldList
  .map(({ value }) => value)
  .filter(e => e !== 'any')

export default () => _.sample(genderListToPick)
