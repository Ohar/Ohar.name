import React from 'react'

import {dndManualCollection} from "@/constants/dnd/dndManualList"

import './DndSourceInfoStyles.css'

const DndSourceInfoComponent = ({ source }) => {
    const [sourceName, sourcePage] = source.split(':')
    const sourceData = dndManualCollection[sourceName]

    return sourceData ? (
      <section className='DndSourceInfo'>
          {sourceData.name}
          {
              sourcePage
                ? `, ${sourcePage}`
                : ''
          }
      </section>
    ) : null
}

export default DndSourceInfoComponent
