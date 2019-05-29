import React from 'react'

import DndSourceInfoComponent from './DndSourceInfoComponent'

const DndSourceInfoContainer = ({ source }) => source
  ? <DndSourceInfoComponent source={source}/>
  : null

export default DndSourceInfoContainer
