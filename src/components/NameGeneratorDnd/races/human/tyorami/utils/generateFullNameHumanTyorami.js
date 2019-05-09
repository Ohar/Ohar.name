import generateFirstNameHumanTyorami from './generateFirstNameHumanTyorami'
import generateSurnameHumanTyorami from './generateSurnameHumanTyorami'

const generateFullNameHumanTyorami = ({gender, type}) => {
  const firstname = generateFirstNameHumanTyorami({gender, type})
  const surname = generateSurnameHumanTyorami(type)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanTyorami
