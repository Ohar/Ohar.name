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

            const bonus = typeof value === 'object'
              ? formatBonus(value.value)
              : formatBonus(value)

            const commentText = value.comment
              ? ` (${value.comment})`
              : ''

            return `${name} ${bonus}${commentText}`
          }
        )
        .join(', ')
    }
  </DndCreatureInfo>
)
