import React from "react"

import {dndSizeCollection} from "@/constants/dnd/dndSizeList"

export default ({genderId, sizeType}) => {
  const size = dndSizeCollection[sizeType].name.single[genderId].nominative

  return <span>{size}</span>
}
