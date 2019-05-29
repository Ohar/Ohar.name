import React from 'react'

import DndAbilityCheckComponent from './DndAbilityCheckComponent'

const DndAbilityCheckContainer = ({ abilityCheck }) => abilityCheck
  ? <DndAbilityCheckComponent abilityCheck={abilityCheck}/>
  : null

export default DndAbilityCheckContainer
