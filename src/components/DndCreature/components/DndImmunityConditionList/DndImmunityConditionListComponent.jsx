import React from "react"

import {dndConditionCollection} from '@/constants/dnd/dndConditionList'

import DndCreatureInfo from "./../DndCreatureInfo";

export default ({list, header}) => (
  <DndCreatureInfo header={header}>
    {
      list
        .map(
          id => dndConditionCollection[id].name
        )
        .join(`, `)
        .toLowerCase()
    }
  </DndCreatureInfo>
)
