import NAMES_NOUN from "../dict/names_noun"

import getRandomWordData from "./getRandomWordData"

const getRandomNoun = (gender, genderToUse) => getRandomWordData(
  NAMES_NOUN, gender, genderToUse || gender
)

export default getRandomNoun
