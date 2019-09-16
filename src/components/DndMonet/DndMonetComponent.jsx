import React from 'react'

import './DndMonetStyles.less'

const DndMonetComponent = ({ title, type, text }) => (
  <span
    className={`DndMonet DndMonet-${type}`}
    title={title}
  >
    {text}
  </span>
)

export default DndMonetComponent
