import React from "react"

import {dndDamageTypeCollection} from '@/constants/dnd/dndDamageTypeList'

import DndCreatureInfo from "./../DndCreatureInfo";

export default ({list}) => list && list.length
  ? (
    <DndCreatureInfo header='Иммунитет к урону'>
      {
        list
          .map(
            id => dndDamageTypeCollection[id].name
          )
          .join(', ')
      }
    </DndCreatureInfo>
  )
  : null
