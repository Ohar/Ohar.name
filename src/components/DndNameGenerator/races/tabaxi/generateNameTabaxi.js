import generateRandomGender from '@/utils/nameGeneration/generateRandomGender'

import generateFullNameTabaxi from './utils/generateFullNameTabaxi'

const generateNameTabaxi = ({gender, ...rest}) => {
  let genderToUse = ''

  switch (gender) {
    case 'female':
    case 'male':
    case 'middle': {
      genderToUse = gender
      break
    }

    default:
    case 'any': {
      genderToUse = generateRandomGender()
      break
    }
  }

  return generateFullNameTabaxi({gender: genderToUse, ...rest})
    .replace(/\s+/g, ' ')
}

export default generateNameTabaxi
