import React from "react"
import PropTypes from "prop-types"

import {dndCreatureCollection} from "@/constants/dnd/dndCreatureList"

import DndCreatureComponent from "./DndCreatureComponent"

const DndCreatureContainer = ({id}) => {
  const creature = dndCreatureCollection[id]

  return (
    <DndCreatureComponent creature={creature} />
  )
}

DndCreatureContainer.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DndCreatureContainer
