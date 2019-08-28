import React from "react"

import DndSourceInfo from "@/components/DndSourceInfo"

import DndCreatureInfo from "../DndCreatureInfo";

export default ({source}) => (
  <DndCreatureInfo header='Источник'>
    <DndSourceInfo
      source={source}
      useFullName
    />
  </DndCreatureInfo>
)
