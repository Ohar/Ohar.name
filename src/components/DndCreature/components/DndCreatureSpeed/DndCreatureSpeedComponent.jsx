import React from "react"
import PropTypes from "prop-types"

import { dndSpeedCollection } from "@/constants/dnd/dndSpeedList"
import {
  SPEED_CRAWL,
  SPEED_DIG,
  SPEED_FLY,
  SPEED_SWIM,
  SPEED_WALK,
} from '@/constants/dnd/dndSpeedList'

import DndCreatureInfo from "./../DndCreatureInfo";

import "./DndCreatureSpeedStyles.css"

const DndCreatureSpeedComponent = ({ speed }) => (
  <DndCreatureInfo header='Скорость'>
    {
      Object
        .keys(speed)
        .map(
          type => {
            const speedObj = dndSpeedCollection[type]
            const value = speed[type]
            const range = value.value || value
            const comment = typeof value === 'object'
              ? ` (${value.comment})`
              : ''

            return `${speedObj.name} ${range} фт.${comment}`
          },
        )
        .join(', ')
    }
  </DndCreatureInfo>
)

DndCreatureSpeedComponent.propTypes = {
  speed: PropTypes.shape({
    [SPEED_CRAWL]: PropTypes.number,
    [SPEED_DIG]: PropTypes.number,
    [SPEED_FLY]: PropTypes.number,
    [SPEED_SWIM]: PropTypes.number,
    [SPEED_WALK]: PropTypes.number,
  }).isRequired,
}

export default DndCreatureSpeedComponent
