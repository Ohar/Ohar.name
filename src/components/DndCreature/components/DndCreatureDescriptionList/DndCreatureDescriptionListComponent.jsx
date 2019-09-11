import React from 'react'
import PropTypes from 'prop-types';

import DndCreatureDescription from './../DndCreatureDescription'
import arrify from 'arrify';

const DndCreatureDescriptionListComponent = ({description}) => (
  <>
    {
      arrify(description).map(
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
    PropTypes.string,
  ]),
}

DndCreatureDescriptionListComponent.defaultProps = {
  description: [],
}

export default DndCreatureDescriptionListComponent
