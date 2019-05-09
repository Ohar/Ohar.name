import generateFirstNameHumanKalishit from './generateFirstNameHumanKalishit'
import generateSurnameHumanKalishit from './generateSurnameHumanKalishit'

const generateFullNameHumanKalishit = ({gender, useSurname}) => {
  const firstname = generateFirstNameHumanKalishit({gender, useSurname})
  const surname = generateSurnameHumanKalishit(useSurname)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanKalishit
