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

import "./DndCreatureSpeedStyles.css"

const DndCreatureSpeedComponent = ({ speed }) => (
  <span className='DndCreatureSpeed'>
    {
      Object.keys(speed).map(
        type => (
          <span key={type}>
            {dndSpeedCollection[type].name} {speed[type]} фт.
          </span>
        ),
      )
    }
  </span>
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
