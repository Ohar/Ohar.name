import React from "react"
import PropTypes from "prop-types"

import DndCreatureInfo from "../DndCreatureInfo";

const DndCreatureSpeedComponent = ({ text }) => (
  <DndCreatureInfo header='Скорость'>
    {text}
  </DndCreatureInfo>
)

DndCreatureSpeedComponent.propTypes = {
  text: PropTypes.string.isRequired,
}

export default DndCreatureSpeedComponent
