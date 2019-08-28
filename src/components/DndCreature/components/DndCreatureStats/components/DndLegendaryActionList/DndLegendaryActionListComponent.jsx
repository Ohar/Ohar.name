import React from 'react'

import DndAbilityList from '../DndAbilityList'

import './DndLegendaryActionListStyles.css'

const DndLegendaryActionListComponent = props => (
  <DndAbilityList
    header='Легендарные действия'
    {...props}
  />
)

export default DndLegendaryActionListComponent
