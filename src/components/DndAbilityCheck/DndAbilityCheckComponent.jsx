import React from 'react'

import {dndParamCollection} from "@/constants/dnd/dndParamList"

import './DndAbilityCheckStyles.css'

const DndAbilityCheckComponent = ({ abilityCheck: {type, dc} }) => (
    <span
      className='DndAbilityCheck'
      title={`${dndParamCollection[type].name}, сложность: ${dc}`}
    >
        {dndParamCollection[type].shortName} {dc}
    </span>
)

export default DndAbilityCheckComponent
