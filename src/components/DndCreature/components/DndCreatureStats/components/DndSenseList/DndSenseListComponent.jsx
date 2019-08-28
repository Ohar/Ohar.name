import React from "react"

import {dndSenseCollection} from "@/constants/dnd/dndSenseList"

import DndCreatureInfo from "../DndCreatureInfo";

export default ({list}) => (
  <DndCreatureInfo header='Чувства'>
    {
      list
        .map(
          ({id, value, comment = ''}) => {
            const {name, noUnits = false} = dndSenseCollection[id]
            const units = noUnits
              ? ''
              : ' фт.'
            const commentText = comment
              ? ` (${comment})`
              : ''

            return `${name} ${value}${units}${commentText}`
          }
        )
        .join(', ')
    }
  </DndCreatureInfo>
)
