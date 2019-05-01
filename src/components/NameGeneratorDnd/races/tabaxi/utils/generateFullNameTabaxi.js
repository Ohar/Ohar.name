import generateFirstNameTabaxi from './generateFirstNameTabaxi'
import generateSecondNameTabaxi from './generateSecondNameTabaxi'

// TODO: generate by schemas
const generateFullNameTabaxi = gender => {
  const firstName = generateFirstNameTabaxi(gender)
  const secondName = generateSecondNameTabaxi(gender)

  return `${firstName} ${secondName}`
}

export default generateFullNameTabaxi
