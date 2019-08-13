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
    [SPEED_CRAWL]: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    [SPEED_DIG]: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    [SPEED_FLY]: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    [SPEED_SWIM]: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    [SPEED_WALK]: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  }).isRequired,
}

export default DndCreatureSpeedComponent
