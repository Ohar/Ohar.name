import React from 'react'
import PropTypes from 'prop-types';

import DndCreatureDescription from './../DndCreatureDescription'

import './DndCreatureDescriptionListStyles.less'

const DndCreatureDescriptionListComponent = ({list}) => (
  <>
    {
      list.map(
        description => (
          <DndCreatureDescription {...description}/>
        )
      )
    }
  </>
)

DndCreatureDescriptionListComponent.propTypes = {
  list: PropTypes.array,
}

DndCreatureDescriptionListComponent.defaultProps = {
  list: [],
}

export default DndCreatureDescriptionListComponent
