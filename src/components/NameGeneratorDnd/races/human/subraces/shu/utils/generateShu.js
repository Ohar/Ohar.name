import nameListFamily from "../dict/names_family"
import nameListFemale from "../dict/names_female"
import nameListMale from "../dict/names_male"

import generateFullNameHumanCommon from "../../../utils/generateFullNameHumanCommon"

const fullNameGenerator = ({firstName, surName}) => `${surName} ${firstName}`.trim()

export default generateFullNameHumanCommon({nameListFamily, nameListFemale, nameListMale, fullNameGenerator})
