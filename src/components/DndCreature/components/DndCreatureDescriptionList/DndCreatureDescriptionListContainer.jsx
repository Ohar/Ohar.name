import React from 'react'
import arrify from "arrify"
import PropTypes from 'prop-types';

import DndCreatureDescriptionListComponent from './DndCreatureDescriptionListComponent'

const DndCreatureDescriptionListContainer = ({name, nameAlt, nameEn, nameEnAlt, description}) => {
  if (description) {
    const list = arrify(description).map(
      item => typeof item === 'string'
        ? {
          header: `${name}${nameAlt ? ` (${nameAlt})` : ''}`,
          subHeader: `${nameEn}${nameEnAlt ? ` (${nameEnAlt})` : ''}`,
          text: item,
        }
        : item
    )

    return (
      <DndCreatureDescriptionListComponent list={list}/>
    )
  }

  return null
}

DndCreatureDescriptionListContainer.propTypes = {
  name: PropTypes.string.isRequired,
  nameAlt: PropTypes.string,
  nameEn: PropTypes.string.isRequired,
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
