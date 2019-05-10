import React from 'react'

import './DndMonetStyles.css'

const DndMonetComponent = ({count, type}) => (
    <span className={`DndMonet DndMonet-${type}`}>
        {count}
    </span>
)

export default DndMonetComponent
