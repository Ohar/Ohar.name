import React from "react"

import DndCreatureInfo from "../DndCreatureInfo";

export default ({list, header, joiner}) => (
  <DndCreatureInfo header={header}>
    {
      list
        .join(`${joiner} `)
        .toLowerCase()
    }
  </DndCreatureInfo>
)
