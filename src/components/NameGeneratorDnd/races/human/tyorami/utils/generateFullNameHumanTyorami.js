import generateFirstNameHumanTyorami from './generateFirstNameHumanTyorami'
import generateSurnameHumanTyorami from './generateSurnameHumanTyorami'

const generateFullNameHumanTyorami = ({gender, useSurname}) => {
  const firstname = generateFirstNameHumanTyorami({gender, useSurname})
  const surname = generateSurnameHumanTyorami(useSurname)

  return `${firstname} ${surname}`.trim()
}

export default generateFullNameHumanTyorami
