import generateFirstNameHumanDamar from './generateFirstNameHumanDamar'
import generateSurnameHumanDamar from './generateSurnameHumanDamar'

const generateFullNameHumanDamar = ({gender, type}) => {
  const firstname = generateFirstNameHumanDamar({gender, type})
  const surname = generateSurnameHumanDamar(type)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanDamar
