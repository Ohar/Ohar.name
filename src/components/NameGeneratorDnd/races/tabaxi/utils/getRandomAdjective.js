import NAMES_ADJECTIVE from "../dict/names_adjective"

import getRandomWordData from "./getRandomWordData"

const getRandomAdjective = (gender, genderToUse) => getRandomWordData(
  NAMES_ADJECTIVE, gender, genderToUse || gender
)

export default getRandomAdjective
