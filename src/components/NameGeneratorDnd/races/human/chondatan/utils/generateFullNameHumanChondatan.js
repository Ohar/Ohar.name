import generateFirstNameHumanChondatan from './generateFirstNameHumanChondatan'
import generateSurnameHumanChondatan from './generateSurnameHumanChondatan'

const generateFullNameHumanChondatan = ({gender, useSurname}) => {
  const firstname = generateFirstNameHumanChondatan({gender, useSurname})
  const surname = generateSurnameHumanChondatan(useSurname)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanChondatan
