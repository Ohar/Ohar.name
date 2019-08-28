import React from "react"
import PropTypes from "prop-types"

import {dndParamCollection} from "@/constants/dnd/dndParamList"

import formatParamBonus from "@/utils/formatParamBonus"

import "./DndParamStyles.css"

const DndParamComponent = ({ id, value }) => {
  const bonus = formatParamBonus(value)

  return (
    <span className='DndParam'>
      <b className='DndParam_header'>
        {dndParamCollection[id].shortName}
      </b>
      <span className='DndParam_value'>
        {value} ({bonus})
      </span>
    </span>
  )
}

DndParamComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default DndParamComponent
