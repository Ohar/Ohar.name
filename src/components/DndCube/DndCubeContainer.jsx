import React, { Component } from "react"
import PropTypes from "prop-types"

import DndCubeComponent from "./DndCubeComponent"

class DndCubeContainer extends Component {
  render() {
    const { cube } = this.props

    return cube
      ? <DndCubeComponent cube={cube}/>
      : null
  }
}

DndCubeContainer.default = {
  cube: null,
}

DndCubeContainer.propTypes = {
  cube: PropTypes.shape({
    cubeType: PropTypes.number,
    cubeCount: PropTypes.number,
    cubeBonus: PropTypes.number,
  }),
}

export default DndCubeContainer
