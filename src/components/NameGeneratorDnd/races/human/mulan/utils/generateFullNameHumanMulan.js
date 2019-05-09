import generateFirstNameHumanMulan from './generateFirstNameHumanMulan'
import generateSurnameHumanMulan from './generateSurnameHumanMulan'

const generateFullNameHumanMulan = ({gender, useSurname}) => {
  const firstname = generateFirstNameHumanMulan({gender, useSurname})
  const surname = generateSurnameHumanMulan(useSurname)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanMulan
