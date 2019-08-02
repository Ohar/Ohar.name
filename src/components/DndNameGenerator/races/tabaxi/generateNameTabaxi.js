import generateRandomGender from '@/utils/nameGeneration/generateRandomGender'

import generateFullNameTabaxi from './utils/generateFullNameTabaxi'

const generateNameTabaxi = ({gender, ...rest}) => {
  switch (gender) {
    case 'female':
    case 'male':
    case 'middle': {
      return generateFullNameTabaxi({gender, ...rest})
    }

    default:
    case 'any': {
      return generateFullNameTabaxi({
        gender: generateRandomGender(),
        ...rest,
      })
    }
  }
}

export default generateNameTabaxi
