import React from "react"

import {dndLanguageCollection} from "@/constants/dnd/dndLanguageList"

export default ({list}) => (
  <span className='DndLanguageList'>
    {
      list
        .map(
          langId => dndLanguageCollection[langId].name
        )
        .join(', ')
    }
  </span>
)
