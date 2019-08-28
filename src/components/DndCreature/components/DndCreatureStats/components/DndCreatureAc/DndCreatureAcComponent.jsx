import arrify from "arrify"
import React from "react"

import DndCreatureInfo from "../DndCreatureInfo";

export default ({armor}) => (
  <DndCreatureInfo header='Класс доспеха'>
    {
      arrify(armor)
        .map(
          item => {
            const ac = item.ac || item
            const type = item.type || ''

            return type
              ? `${ac} (${type})`
              : ac
          }
        )
        .join(', ')
    }
  </DndCreatureInfo>
)
