import _ from 'lodash'

import consonantList from '@/constants/consonantList'

import postfixCollection from './../constants/postfixCollection'

import getNameList from './getNameList'

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
  all: [
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

function generateName(gender, type) {
  const nameList = getNameList(gender, type)

  const firstname = _.sample(nameList)
  const surname = getSurname(nameList, gender)

  return `${firstname} ${surname} `
}
