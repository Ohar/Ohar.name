import React from "react"

import {dndSenseCollection} from "@/constants/dnd/dndSenseList"

export default ({list}) => (
  <span className='DndSenseList'>
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
  </span>
)
