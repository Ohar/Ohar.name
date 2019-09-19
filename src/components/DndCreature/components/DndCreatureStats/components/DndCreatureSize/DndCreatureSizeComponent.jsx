import React from "react"

import {dndSizeCollection} from "@/constants/dnd/dndSizeList"

import getCreatureTypeGenderId from "./../../utils/getCreatureTypeGenderId"

export default ({creature: {creatureTypeIdList, sizeType}}) => {
  const genderId = getCreatureTypeGenderId(creatureTypeIdList)
  const size = dndSizeCollection[sizeType].name.singular[genderId].nominative

  return <span>{size}</span>
}
