import React from "react"

import {dndCrCollection} from "@/constants/dnd/dndCrList"

import DndCreatureInfo from "../DndCreatureInfo";

export default ({cr}) => {
  const {name, exp} = dndCrCollection[cr]

  return (
    <DndCreatureInfo header='Опасность'>
      {name} ({exp} опыта)
    </DndCreatureInfo>
  )
}
