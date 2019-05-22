import React from "react"
import PropTypes from "prop-types"

import {dndParamCollection} from "@/constants/dnd/dndParamList"

import calcParamBonus from "./utils/calcParamBonus"

import "./DndParamStyles.css"

const DndParamComponent = ({ id, value }) => (
  <span className='DndParam'>
    <b>{dndParamCollection[id].shortName}</b>: {value} ({calcParamBonus(value)})
  </span>
)

DndParamComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default DndParamComponent
