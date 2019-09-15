import React from 'react'
import arrify from 'arrify'
import PropTypes from 'prop-types';

import { dndManualCollection } from '@/constants/dnd/dndManualList';

import DndSourceInfoComponent from './DndSourceInfoComponent'

const DndSourceInfoContainer = ({ source, useFullName }) => (
  <>
    {
      arrify(source)
        .filter(e => e)
        .map(
          (sourceItem) => {
            if (sourceItem) {
              const key = sourceItem.id || sourceItem.url || sourceItem
              let url = ''
              let title = ''
              let text = ''

              if (typeof sourceItem === 'string' || (sourceItem.id && sourceItem.page)) {
                let page = ''
                let manualId = null

                if (typeof sourceItem === 'string') {
                  const [idItem, ...rest] = sourceItem.split(':')
                  manualId = idItem
                  page = [...rest].join(':')
                }

                if (sourceItem.id && sourceItem.page) {
                  manualId = sourceItem.id
                  page = sourceItem.page
                }

                if (manualId) {
                  const {name, shortName} = dndManualCollection[manualId]
                  const pageText = page
                    ? `, ${page}`
                    : ''

                  title = `${name}${pageText} страница`

                  text = useFullName
                    ? `${name}${pageText}`
                    : `${shortName}${pageText}`
                }
              }

              if (sourceItem.url && sourceItem.problemText) {
                url = sourceItem.url

                const {problemText} = sourceItem
                const {host} = new URL(url)

                text = host
                title = `Почему ${host}?\n\n${problemText}`
              }

              return (
                <DndSourceInfoComponent
                  key={key}
                  url={url}
                  title={title}
                  text={text}
                />
              )
            }
          }
        )
        .filter(e => e)
    }
  </>
)

DndSourceInfoContainer.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
    PropTypes.shape({
      url: PropTypes.string,
      problemText: PropTypes.string,
    }),
    PropTypes.shape({
      id: PropTypes.string,
      page: PropTypes.number,
    }),
  ]).isRequired,
  useFullName: PropTypes.bool,
}

DndSourceInfoContainer.defaultProps= {
  useFullName: false,
}

export default DndSourceInfoContainer
