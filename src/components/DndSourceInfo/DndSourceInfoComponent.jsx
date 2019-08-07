import React from 'react'
import PropTypes from "prop-types"

import { dndManualCollection } from '@/constants/dnd/dndManualList'

import './DndSourceInfoStyles.css'

const DndSourceInfoComponent = ({ source, useFullName }) => {
  const [sourceName, sourcePage] = source.split(':')
  const sourceData = dndManualCollection[sourceName]

  if (sourceData) {
    const pageText = sourcePage
      ? `, ${sourcePage}`
      : ''

    const fullText = `${sourceData.name}${pageText}`
    const shortText = `${sourceData.shortName}${pageText}`
    const title = `${fullText} страница`

    return useFullName
      ? (
        <span
          className='DndSourceInfo'
          title={title}
        >
          {fullText}
        </span>
      )
      : (
        <span
          className='DndSourceInfo'
          title={title}
        >
          {shortText}
        </span>
      )
  }

  return null
}

DndSourceInfoComponent.propTypes = {
  source: PropTypes.string.isRequired,
  useFullName: PropTypes.bool,
}

DndSourceInfoComponent.defaultProps= {
  useFullName: false,
}

export default DndSourceInfoComponent
