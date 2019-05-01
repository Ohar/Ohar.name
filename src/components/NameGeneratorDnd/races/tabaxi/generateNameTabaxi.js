import _ from "lodash"

import genderFieldList from "@/constants/genderFieldList"

import generateFullNameTabaxi from './utils/generateFullNameTabaxi'

const generateNameTabaxi = ({gender, ...rest}) => {
  switch (gender) {
    case 'any': {
      const genderList = _.map(genderFieldList, 'value').filter(e => e !== 'any')
      return generateFullNameTabaxi({
        gender: _.sample(genderList),
        ...rest,
      })
    }

    default: {
      return generateFullNameTabaxi({gender, ...rest})
    }
  }
}

export default generateNameTabaxi
