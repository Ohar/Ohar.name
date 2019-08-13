import arrify from "arrify"
import React from "react"

import DndCreatureInfo from "./../DndCreatureInfo";

export default ({armor}) => (
  <DndCreatureInfo header='Класс доспеха'>
    {
      arrify(armor)
        .map(
        ({ac, type = ''}) => type
          ? `${ac} (${type})`
          : ac
        )
        .join(', ')
    }
  </DndCreatureInfo>
)
