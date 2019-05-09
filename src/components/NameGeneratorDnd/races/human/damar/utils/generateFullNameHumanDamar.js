import generateFirstNameHumanDamar from './generateFirstNameHumanDamar'
import generateSurnameHumanDamar from './generateSurnameHumanDamar'

const generateFullNameHumanDamar = ({gender, useSurname}) => {
  const firstname = generateFirstNameHumanDamar({gender, useSurname})
  const surname = generateSurnameHumanDamar(useSurname)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanDamar
