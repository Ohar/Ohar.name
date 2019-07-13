import _ from "lodash";

import generateNameListDwarf from "./utils/generateNameListDwarf"
import clanNameList from "./dict/names_clan"

export default ({gender}) => {
  const name = _.sample(generateNameListDwarf(gender))
  const clanName = _.sample(clanNameList)

  return `${name} из клана ${clanName}`
}
