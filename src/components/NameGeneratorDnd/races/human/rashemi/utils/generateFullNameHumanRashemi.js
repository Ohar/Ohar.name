import generateFirstNameHumanRashemi from './generateFirstNameHumanRashemi'
import generateSurnameHumanRashemi from './generateSurnameHumanRashemi'

const generateFullNameHumanRashemi = ({gender, type}) => {
  const firstname = generateFirstNameHumanRashemi({gender, type})
  const surname = generateSurnameHumanRashemi(type)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanRashemi
