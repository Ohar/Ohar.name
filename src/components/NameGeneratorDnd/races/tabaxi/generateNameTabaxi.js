import _ from "lodash"
import genderFieldList from "@/constants/genderFieldList"

import generateFullNameTabaxi from './utils/generateFullNameTabaxi'

const generateNameTabaxi = ({gender}) => {
  switch (gender) {
    case 'any': {
      const genderList = _.map(genderFieldList, 'value').filter(e => e !== 'any')
      return generateFullNameTabaxi(_.sample(genderList))
    }

    default: {
      return generateFullNameTabaxi(gender)
    }
  }
}

export default generateNameTabaxi
