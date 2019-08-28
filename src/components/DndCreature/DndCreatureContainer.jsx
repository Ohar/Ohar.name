import React from "react"
import PropTypes from "prop-types"

import {dndCreatureCollection} from "@/constants/dnd/dndCreatureList"

import DndCreatureStatsComponent from "./DndCreatureComponent"

const DndCreatureContainer = ({id}) => {
  const creature = dndCreatureCollection[id]

  return (
    <DndCreatureStatsComponent creature={creature} />
  )
}

DndCreatureContainer.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DndCreatureContainer
