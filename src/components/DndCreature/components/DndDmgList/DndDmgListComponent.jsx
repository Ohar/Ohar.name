import React from "react"

import {dndDamageTypeCollection} from '@/constants/dnd/dndDamageTypeList'

import DndCreatureInfo from "./../DndCreatureInfo";

export default ({list, header, joiner}) => (
  <DndCreatureInfo header={header}>
    {
      list
        .map(
          id => dndDamageTypeCollection[id].name
        )
        .join(`${joiner} `)
        .toLowerCase()
    }
  </DndCreatureInfo>
)
