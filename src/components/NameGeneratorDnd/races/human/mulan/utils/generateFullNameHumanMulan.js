import generateFirstNameHumanMulan from './generateFirstNameHumanMulan'
import generateSurnameHumanMulan from './generateSurnameHumanMulan'

const generateFullNameHumanMulan = ({gender, type}) => {
  const firstname = generateFirstNameHumanMulan({gender, type})
  const surname = generateSurnameHumanMulan(type)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanMulan
