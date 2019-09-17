import React from "react"
import PropTypes from "prop-types"

import { dndSpeedCollection } from "@/constants/dnd/dndSpeedList"
import {
  SPEED_CLIMB,
  SPEED_DIG,
  SPEED_FLY,
  SPEED_SWIM,
  SPEED_WALK,
} from '@/constants/dnd/dndSpeedList'

import DndCreatureSpeedComponent from "./DndCreatureSpeedComponent";

const DndCreatureSpeedContainer = ({ speed }) => {
  const text = Object
    .keys(speed)
    .map(
      type => {
        const {name} = dndSpeedCollection[type]
        const value = speed[type]
        const range = value.value || value
        const comment = typeof value === 'object'
          ? ` (${value.comment})`
          : ''

        return `${name} ${range} фт.${comment}`
      },
    )
    .join(', ')

  return (
    <DndCreatureSpeedComponent text={text}/>
  )
}

DndCreatureSpeedContainer.propTypes = {
  speed: PropTypes.shape({
    [SPEED_CLIMB]: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    [SPEED_DIG]: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    [SPEED_FLY]: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    [SPEED_SWIM]: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    [SPEED_WALK]: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  }).isRequired,
}

export default DndCreatureSpeedContainer
