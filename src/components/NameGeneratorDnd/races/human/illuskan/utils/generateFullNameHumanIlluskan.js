import generateFirstNameHumanIlluskan from './generateFirstNameHumanIlluskan'
import generateSurnameHumanIlluskan from './generateSurnameHumanIlluskan'

const generateFullNameHumanIlluskan = ({gender, type}) => {
  const firstname = generateFirstNameHumanIlluskan({gender, type})
  const surname = generateSurnameHumanIlluskan(type)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanIlluskan
