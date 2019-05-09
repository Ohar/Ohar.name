import generateSurnameHumanCommon from "./generateSurnameHumanCommon"
import generateFirstNameHumanCommon from "./generateFirstNameHumanCommon"

const fullNameDefaultGenerator = ({firstName, surName}) => `${firstName} ${surName}`.trim()

export default (
    {
        nameListFamily,
        nameListFemale,
        nameListMale,
        fullNameGenerator = fullNameDefaultGenerator,
    }
) => ({gender, useSurname}) => {
    const firstName = generateFirstNameHumanCommon(nameListFemale, nameListMale)(gender)
    const surName = generateSurnameHumanCommon(nameListFamily)(useSurname)

    return fullNameGenerator({firstName, surName})
}
