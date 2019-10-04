import React from "react"

import {dndSizeCollection} from "@/constants/dnd/dndSizeList"

import getCreatureTypeGenderId from "./../../utils/getCreatureTypeGenderId"

export default ({creatureTypeIdList, sizeType, swarmSizeType = null}) => {
  const genderId = getCreatureTypeGenderId(creatureTypeIdList)

  let text = ''

  if (swarmSizeType) {
    const size = dndSizeCollection[sizeType].name.singular[genderId].nominative
    const swarmSize = dndSizeCollection[swarmSizeType].name.plural.genitive
    text = `${size} рой ${swarmSize}`
  } else {
    text = dndSizeCollection[sizeType].name.singular[genderId].nominative
  }

  return <span>{text}</span>
}
