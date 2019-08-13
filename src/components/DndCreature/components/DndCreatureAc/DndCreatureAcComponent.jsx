import React from "react"

import DndCreatureInfo from "./../DndCreatureInfo";

export default ({armor}) => (
  <DndCreatureInfo header='Класс доспеха'>
    {
      (
        Array.isArray(armor)
          ? armor
          : [armor]
      )
        .map(
        ({ac, type = ''}) => type
          ? `${ac} (${type})`
          : ac
        )
        .join(', ')
    }
  </DndCreatureInfo>
)
