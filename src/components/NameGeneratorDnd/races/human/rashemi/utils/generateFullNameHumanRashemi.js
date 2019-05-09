import generateFirstNameHumanRashemi from './generateFirstNameHumanRashemi'
import generateSurnameHumanRashemi from './generateSurnameHumanRashemi'

const generateFullNameHumanRashemi = ({gender, useSurname}) => {
  const firstname = generateFirstNameHumanRashemi({gender, useSurname})
  const surname = generateSurnameHumanRashemi(useSurname)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanRashemi
