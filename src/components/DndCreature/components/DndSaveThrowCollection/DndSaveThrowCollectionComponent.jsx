import React from "react"

import {dndParamCollection} from "@/constants/dnd/dndParamList"

import formatBonus from "@/utils/formatBonus"

import DndCreatureInfo from "./../DndCreatureInfo";

export default ({list}) => (
  <DndCreatureInfo header='Спасброски'>
    {
      list
        .map(
          ([id, value]) => {
            const {shortName} = dndParamCollection[id]
            const bonus = formatBonus(value)

            return `${shortName} ${bonus}`
          }
        )
        .join(', ')
    }
  </DndCreatureInfo>
)
