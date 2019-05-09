import generateFirstNameHumanChult from './generateFirstNameHumanChult'
import generateSurnameHumanChult from './generateSurnameHumanChult'

const generateFullNameHumanChult = ({gender, useSurname}) => {
  const firstname = generateFirstNameHumanChult({gender, useSurname})
  const surname = generateSurnameHumanChult(useSurname)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanChult
