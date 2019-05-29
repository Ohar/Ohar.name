import React from "react"
import PropTypes from "prop-types"

import calcAverage from "./utils/calcAverage"

import "./DndCubeStyles.css"

const DndCubeComponent = ({ cube, cube: { cubeType = 0, cubeCount = 0, cubeBonus = 0 } }) => (
  <span className='DndCube'>
    {calcAverage(cube)}
    {' ('}
    {
      cubeCount
        ? `${cubeCount}к${cubeType}`
        : ''
    }
    {
      cubeCount && cubeBonus
        ? ' + '
        : ''
    }
    {cubeBonus || ''}
    )
  </span>
)

DndCubeComponent.defaultProps = {
  cube: {
    cubeType: 0,
    cubeCount: 0,
    cubeBonus: 0,
  },
}

DndCubeComponent.propTypes = {
  cube: PropTypes.shape({
    cubeType: PropTypes.number,
    cubeCount: PropTypes.number,
    cubeBonus: PropTypes.number,
  }),
}

export default DndCubeComponent
