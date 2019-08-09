import React from "react"

import './DndCreatureInfoStyles.css'

const DndCreatureInfoComponent = ({header, children}) => (
  <p className='DndCreatureInfo'>
    <b className='DndCreatureInfo_header'>
      {header}
    </b>
    {children}
  </p>
)

export default DndCreatureInfoComponent
