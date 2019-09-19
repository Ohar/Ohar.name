import React from 'react'
import arrify from "arrify"
import PropTypes from 'prop-types';

import formatAltName from '@/utils/formatAltName'

import DndCreatureDescriptionListComponent from './DndCreatureDescriptionListComponent'

const DndCreatureDescriptionListContainer = ({name, nameAlt, nameEn, nameEnAlt, description}) => {
  if (description) {
    const list = arrify(description).map(
      item => {
        if (typeof item === 'string') {
          const nameAltText = formatAltName(nameAlt)
          const nameEnAltText = formatAltName(nameEnAlt)

          return {
            header: `${name}${nameAltText}`,
            subHeader: `${nameEn}${nameEnAltText}`,
            text: item,
          }
        }

        return item
      }
    )

    return (
      <DndCreatureDescriptionListComponent list={list}/>
    )
  }

  return null
}

DndCreatureDescriptionListContainer.propTypes = {
  name: PropTypes.string.isRequired,
  nameAlt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  nameEn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  nameEnAlt: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.shape({
      header: PropTypes.string,
      subHeader: PropTypes.string,
      text: PropTypes.string,
    }),
  ]).isRequired,
}

DndCreatureDescriptionListContainer.defaultProps = {
  nameAlt: '',
  nameEnAlt: '',
}

export default DndCreatureDescriptionListContainer
