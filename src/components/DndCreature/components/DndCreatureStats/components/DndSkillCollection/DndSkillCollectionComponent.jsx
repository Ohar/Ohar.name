import React from "react"

import {dndSkillCollection} from "@/constants/dnd/dndSkillList"

import formatBonus from "@/utils/formatBonus"

import DndCreatureInfo from "../DndCreatureInfo";

export default ({list}) => (
  <DndCreatureInfo header='Навыки'>
    {
      list
        .map(
          ([id, value]) => {
            const {name} = dndSkillCollection[id]
            const bonus = formatBonus(value)

            return `${name} ${bonus}`
          }
        )
        .join(', ')
    }
  </DndCreatureInfo>
)
