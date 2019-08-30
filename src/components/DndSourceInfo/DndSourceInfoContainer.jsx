import React from 'react'

import DndSourceInfoComponent from './DndSourceInfoComponent'
import { dndManualCollection } from '@/constants/dnd/dndManualList';
import PropTypes from 'prop-types';

const DndSourceInfoContainer = ({ source, useFullName }) => {
  if (source) {
    let url = ''
    let title = ''
    let text = ''

    if (typeof source === 'string') {
      const [manualId, ...pageList] = source.split(':')
      const page = [...pageList].join(':')
      const manual = dndManualCollection[manualId]

      if (manual) {
        const {name, shortName} = manual
        const pageText = page
          ? `, ${page}`
          : ''

        title = `${name}${pageText} страница`

        text = useFullName
          ? `${name}${pageText}`
          : `${shortName}${pageText}`
      }
    }

    if (source.url) {
      url = source.url

      const {problemText} = source
      const {host} = new URL(url)

      text = host
      title = `Почему ${host}?\n\n${problemText}`
    }

    return (
      <DndSourceInfoComponent
        url={url}
        title={title}
        text={text}
      />
    )
  }

  return null
}

DndSourceInfoContainer.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      problemText: PropTypes.string,
    }),
  ]).isRequired,
  useFullName: PropTypes.bool,
}

DndSourceInfoContainer.defaultProps= {
  useFullName: false,
}

export default DndSourceInfoContainer
