import generateFirstNameHumanChult from './generateFirstNameHumanChult'
import generateSurnameHumanChult from './generateSurnameHumanChult'

const generateFullNameHumanChult = ({gender, type}) => {
  const firstname = generateFirstNameHumanChult({gender, type})
  const surname = generateSurnameHumanChult(type)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanChult
