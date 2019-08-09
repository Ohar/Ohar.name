import React from "react"

import {dndSkillCollection} from "@/constants/dnd/dndSkillList"

import formatBonus from "@/utils/formatBonus"

import DndCreatureInfo from "./../DndCreatureInfo";

export default ({collection}) => (
  <DndCreatureInfo header='Навыки'>
    {
      Object
        .keys(collection)
        .map(
          id => {
            const {name} = dndSkillCollection[id]
            const bonus = formatBonus(collection[id])

            return `${name} ${bonus}`
          }
        )
        .join(', ')
    }
  </DndCreatureInfo>
)
