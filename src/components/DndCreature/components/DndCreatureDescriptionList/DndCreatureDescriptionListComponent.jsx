import React from 'react'
import PropTypes from 'prop-types';

import DndCreatureDescription from './../DndCreatureDescription'

const DndCreatureDescriptionListComponent = ({description}) => (
  <>
    {
      description.map(
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
  description: PropTypes.array,
}

DndCreatureDescriptionListComponent.defaultProps = {
  description: [],
}

export default DndCreatureDescriptionListComponent
