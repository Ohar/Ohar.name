import React from 'react'
import PropTypes from 'prop-types';

import DndCreatureDescription from './../DndCreatureDescription'

const DndCreatureDescriptionListComponent = ({list}) => (
  <>
    {
      list.map(
        (item, i) => (
          <DndCreatureDescription
            key={i}
            {...item}
          />
        )
      )
    }
  </>
)

DndCreatureDescriptionListComponent.propTypes = {
  description: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
}

DndCreatureDescriptionListComponent.defaultProps = {
  description: [],
}

export default DndCreatureDescriptionListComponent
