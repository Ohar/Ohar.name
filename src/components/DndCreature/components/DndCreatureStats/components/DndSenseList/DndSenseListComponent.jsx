import React from "react"

import {dndSenseCollection} from "@/constants/dnd/dndSenseList"

import pickTextByGender from "./utils/pickTextByGender";

import DndCreatureInfo from "../DndCreatureInfo";

export default ({list, genderId}) => (
  <DndCreatureInfo header='Чувства'>
    {
      list
        .map(
          ({id, value, isBlindOutside, comment = ''}) => {
            const {name, noUnits = false} = dndSenseCollection[id]
            const units = noUnits
              ? ''
              : ' фт.'
            const blindText = isBlindOutside
              ? pickTextByGender(genderId)
              : ''
            const parenthesisText = comment || blindText
              ? [comment, blindText]
                .filter(e => e)
                .join(' ')
                .replace(/^/, ' (')
                .replace(/$/, ')')
              : ''

            return `${name} ${value}${units}${parenthesisText}`
          }
        )
        .join(', ')
    }
  </DndCreatureInfo>
)
