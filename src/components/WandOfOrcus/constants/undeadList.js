import dndCreatureList from "@/constants/dnd/dndCreatureList"
import {CREATURE_TYPE_UNDEAD} from "@/constants/dnd/dndCreatureTypeList"

import calcDiceAverage from "@/utils/calcDiceAverage"

import WAND_HP_LIMIT from "./WAND_HP_LIMIT"

export default dndCreatureList
  .filter(
    ({creatureTypeIdList, hp}) => (
      creatureTypeIdList.includes(CREATURE_TYPE_UNDEAD)
      && calcDiceAverage(hp) <= WAND_HP_LIMIT
    )
  )
  // .map(
  //   ({hp, id}) => ({
  //     id,
  //     hp: calcDiceAverage(hp),
  //   })
  // )
