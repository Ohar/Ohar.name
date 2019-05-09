import generateFirstNameHumanShu from './generateFirstNameHumanShu'
import generateSurnameHumanShu from './generateSurnameHumanShu'

const generateFullNameHumanShu = ({gender, useSurname}) => {
  const firstname = generateFirstNameHumanShu({gender, useSurname})
  const surname = generateSurnameHumanShu(useSurname)

  return `${surname} ${firstname}`.trim()
}

export default generateFullNameHumanShu
