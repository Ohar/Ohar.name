import arrify from "arrify"
import React from "react"

import DndCreatureInfo from "../DndCreatureInfo";

export default ({armor}) => (
  <DndCreatureInfo header='Класс доспеха'>
    {
      arrify(armor)
        .map(
          item => {
            if (typeof item === 'string' || typeof item === 'number') {
              return item
            }

            if (typeof item === 'object') {
              const {ac, type, comment = ''} = item
              const typeStr = type
                ? `(${type})`
                : ''

              return `${ac} ${typeStr} ${comment}`
            }

            return null
          }
        )
        .filter(e => e)
        .join(', ')
    }
  </DndCreatureInfo>
)
