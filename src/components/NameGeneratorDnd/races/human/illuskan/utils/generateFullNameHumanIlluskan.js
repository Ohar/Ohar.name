import generateFirstNameHumanIlluskan from './generateFirstNameHumanIlluskan'
import generateSurnameHumanIlluskan from './generateSurnameHumanIlluskan'

const generateFullNameHumanIlluskan = ({gender, useSurname}) => {
  const firstname = generateFirstNameHumanIlluskan({gender, useSurname})
  const surname = generateSurnameHumanIlluskan(useSurname)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanIlluskan
