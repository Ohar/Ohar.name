import React from "react"

import {dndSenseCollection} from "@/constants/dnd/dndSenseList"

import DndCreatureInfo from "./../DndCreatureInfo";

export default ({list}) => (
  <DndCreatureInfo header='Чувства'>
    {
      list
        .map(
          ({id, value}) => {
            const {name, noUnits = false} = dndSenseCollection[id]
            const units = noUnits
              ? ''
              : ' фт.'

            return `${name} ${value}${units}`
          }
        )
        .join(', ')
    }
  </DndCreatureInfo>
)
