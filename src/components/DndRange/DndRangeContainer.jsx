import React from 'react'

import DndRangeComponent from './DndRangeComponent'

const DndRangeContainer = ({range}) => range
  ? <DndRangeComponent range={range} />
  : null

export default DndRangeContainer
