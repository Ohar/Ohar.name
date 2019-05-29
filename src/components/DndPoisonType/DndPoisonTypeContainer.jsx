import React from 'react'

import DndPoisonTypeComponent from './DndPoisonTypeComponent'

const DndPoisonTypeContainer = ({poisonType}) => poisonType
  ? <DndPoisonTypeComponent poisonType={poisonType} />
  : null

export default DndPoisonTypeContainer
