import dndCreatureList from "@/constants/dnd/dndCreatureList"
import {CREATURE_TYPE_UNDEAD} from "@/constants/dnd/dndCreatureTypeList"

import calcDiceAverage from "@/utils/calcDiceAverage"
import { dndCrCollection } from '@/constants/dnd/dndCrList'

import WAND_HP_LIMIT from "./WAND_HP_LIMIT"
import CR_MIN_DEFAULT from "./CR_MIN_DEFAULT"

export default dndCreatureList.filter(
  ({creatureTypeIdList, cr, hp}) => (
    creatureTypeIdList.includes(CREATURE_TYPE_UNDEAD)
    && calcDiceAverage(hp) <= WAND_HP_LIMIT
    && dndCrCollection[cr].exp >= dndCrCollection[CR_MIN_DEFAULT].exp
  )
)
