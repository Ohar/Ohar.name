import React from 'react'

import './DndRangeStyles.css'

const DndRangeComponent = ({range: {normal, max}}) => (
    <span className='DndRange'>{normal}/{max}</span>
)

export default DndRangeComponent
