import React from 'react'
import PropTypes from 'prop-types'

import {dndCreatureCollection} from "@/constants/dnd/dndCreatureList"

import DndCreatureLinkComponent from './DndCreatureLinkComponent'

const DndCreatureLinkContainer = ({ creatureId }) => {
  if (creatureId) {
    const creature = dndCreatureCollection[creatureId]

    return (
      <DndCreatureLinkComponent creature={creature}/>
    )
  }

  return null
}

DndCreatureLinkContainer.propTypes = {
  creatureId: PropTypes.string,
}

DndCreatureLinkContainer.defaultProps = {
  creatureId: null,
}

export default DndCreatureLinkContainer
