import React from 'react'

import {dndPoisonTypeCollection} from "@/constants/dnd/dndPoisonTypeList"

import './DndPoisonTypeStyles.css'

const DndPoisonTypeComponent = ({poisonType}) => (
    <span
      className='DndPoisonType'
      title={dndPoisonTypeCollection[poisonType].description}
    >
        {dndPoisonTypeCollection[poisonType].name}
    </span>
)

export default DndPoisonTypeComponent
