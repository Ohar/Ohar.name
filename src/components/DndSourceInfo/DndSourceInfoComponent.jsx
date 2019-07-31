import React from 'react'

import { dndManualCollection } from '@/constants/dnd/dndManualList'

import './DndSourceInfoStyles.css'

const DndSourceInfoComponent = ({ source }) => {
  const [sourceName, sourcePage] = source.split(':')
  const sourceData = dndManualCollection[sourceName]

  if (sourceData) {
    const pageText = sourcePage
      ? `, ${sourcePage}`
      : ''

    const title = `${sourceData.name}${pageText}`
    const text = `${sourceData.shortName}${pageText}`

    return (
      <section
        className='DndSourceInfo'
        title={title}
      >
        {text}
      </section>
    )
  }

  return null
}

export default DndSourceInfoComponent
