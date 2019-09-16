import React from 'react'

import './DndMonetStyles.less'

const DndMonetComponent = ({ title, type, text, src, alt }) => (
  <span
    className={`DndMonet DndMonet-${type}`}
    title={title}
  >
    <span className='DndMonet_text'>{text}</span>
    <img
      className='DndMonet_image'
      src={src}
      alt={alt}
    />
  </span>
)

export default DndMonetComponent
