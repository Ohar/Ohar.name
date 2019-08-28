import React from 'react'
import PropTypes from "prop-types"

import { dndManualCollection } from '@/constants/dnd/dndManualList'

import './DndSourceInfoStyles.less'

const DndSourceInfoComponent = ({ source: sourceStr, useFullName }) => {
  const [sourceId, ...pageList] = sourceStr.split(':')
  const page = [...pageList].join(':')
  const source = dndManualCollection[sourceId]

  if (source) {
    const {name, shortName, isUrl} = source

    if (isUrl) {
      const text = useFullName
        ? name
        : shortName

      return (
        <a
          className='DndSourceInfo DndSourceInfo-link'
          title={name}
          rel='nofollow noopener noreferrer'
          href={page}
          target='_blank'
        >
          {text}
        </a>
      )
    } else {
      const pageText = page
        ? `, ${page}`
        : ''

      const nameText = `${name}${pageText}`
      const text = useFullName
        ? `${name}${pageText}`
        : `${shortName}${pageText}`

      return (
        <span
          className='DndSourceInfo'
          title={`${nameText} страница`}
        >
          {text}
        </span>
      )
    }
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
