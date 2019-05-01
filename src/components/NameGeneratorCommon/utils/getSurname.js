import _ from 'lodash'

import consonantList from '@/constants/consonantList'

import postfixCollection from './../constants/postfixCollection'

const isConsonant = string => _.includes(consonantList, string)

const postfixes = {
  female: [
    postfixCollection.female,
    postfixCollection.unisex,
  ],
  male: [
    postfixCollection.male,
    postfixCollection.unisex,
  ],
  any: [
    postfixCollection.male,
    postfixCollection.female,
    postfixCollection.unisex,
  ],
}

export default function getSurname(nameList, gender) {
  let basis = _.sample(nameList)
  const postfix = _.sample(postfixes[gender])

  while (
    basis.length
    && !isConsonant(basis[basis.length - 1])
  ) {
    basis = basis.substring(0, basis.length - 1)
  }

  return basis + postfix
}
