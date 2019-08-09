import React from "react"

import {dndLanguageCollection} from "@/constants/dnd/dndLanguageList"

import DndCreatureInfo from "./../DndCreatureInfo";

export default ({list}) => (
  <DndCreatureInfo header='Языки'>
    {
      list
        .map(
          langId => dndLanguageCollection[langId].name
        )
        .join(', ')
    }
  </DndCreatureInfo>
)
