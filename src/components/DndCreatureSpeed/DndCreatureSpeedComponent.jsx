import React from "react"
import PropTypes from "prop-types"

import { dndSpeedCollection } from "@/constants/dnd/dndSpeedList"

import "./DndCreatureSpeedStyles.css"

const DndCreatureSpeedComponent = ({ speed }) => (
  <section className='DndCreatureSpeed'>
    <b>Скорость</b>

    {
      speed.map(
        ({ type, value }) => (
          <span key={type}>
            {dndSpeedCollection[type].name}: {value} футов
          </span>
        ),
      )
    }
  </section>
)

DndCreatureSpeedComponent.propTypes = {
  speed: PropTypes.array.isRequired,
}

export default DndCreatureSpeedComponent
