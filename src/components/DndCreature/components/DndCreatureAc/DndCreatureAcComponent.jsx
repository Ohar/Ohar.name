import React from "react"

import DndCreatureInfo from "./../DndCreatureInfo";

export default ({armor: {ac, type = ''}}) => (
  <DndCreatureInfo header='Класс доспеха'>
    {ac}
    {
      type
        ? ` (${type})`
        : ''
    }
  </DndCreatureInfo>
)
