import React from 'react'

import DndRequirementListComponent from './DndRequirementListComponent'

const DndRequirementListContainer = ({ list }) => list && list.length
  ? <DndRequirementListComponent list={list}/>
  : null

export default DndRequirementListContainer
