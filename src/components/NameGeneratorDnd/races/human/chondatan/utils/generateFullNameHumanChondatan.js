import generateFirstNameHumanChondatan from './generateFirstNameHumanChondatan'
import generateSurnameHumanChondatan from './generateSurnameHumanChondatan'

const generateFullNameHumanChondatan = ({gender, type}) => {
  const firstname = generateFirstNameHumanChondatan({gender, type})
  const surname = generateSurnameHumanChondatan(type)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanChondatan
