import generateFirstNameHumanShu from './generateFirstNameHumanShu'
import generateSurnameHumanShu from './generateSurnameHumanShu'

const generateFullNameHumanShu = ({gender, type}) => {
  const firstname = generateFirstNameHumanShu({gender, type})
  const surname = generateSurnameHumanShu(type)

  return `${surname} ${firstname}`.trim()
}

export default generateFullNameHumanShu
