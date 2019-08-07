import React from 'react'

import DndSourceInfoComponent from './DndSourceInfoComponent'

const DndSourceInfoContainer = ({ source, ...rest }) => source
  ? (
    <DndSourceInfoComponent
      source={source}
      {...rest}
    />
  )
  : null

export default DndSourceInfoContainer
