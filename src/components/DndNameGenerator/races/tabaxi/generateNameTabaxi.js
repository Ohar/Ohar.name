import _ from "lodash"

import genderFieldList from "@/constants/genderFieldList"

import generateFullNameTabaxi from './utils/generateFullNameTabaxi'

const generateNameTabaxi = ({gender, ...rest}) => {
  switch (gender) {
    case 'female':
    case 'male':
    case 'undefined': {
      return generateFullNameTabaxi({gender, ...rest})
    }

    default:
    case 'any': {
      const genderList = _.map(genderFieldList, 'value').filter(e => e !== 'any')

      return generateFullNameTabaxi({
        gender: _.sample(genderList),
        ...rest,
      })
    }
  }
}

export default generateNameTabaxi
