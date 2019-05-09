import generateFirstNameHumanKalishit from './generateFirstNameHumanKalishit'
import generateSurnameHumanKalishit from './generateSurnameHumanKalishit'

const generateFullNameHumanKalishit = ({gender, type}) => {
  const firstname = generateFirstNameHumanKalishit({gender, type})
  const surname = generateSurnameHumanKalishit(type)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanKalishit
