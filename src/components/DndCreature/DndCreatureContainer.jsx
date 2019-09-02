import React, { Component } from 'react';
import PropTypes from "prop-types"

import {dndCreatureCollection} from "@/constants/dnd/dndCreatureList"

import DndCreatureComponent from "./DndCreatureComponent"

class DndCreatureContainer extends Component {
  state = {
    creature: dndCreatureCollection[this.props.id],
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props;

    if (id !== prevProps.id) {
      const creature = dndCreatureCollection[id];
      this.setState({creature})
    }
  }

  extendCreature = creature => {
    this.setState({creature})
  }

  render () {
    const {creature} = this.state

    return (
      <DndCreatureComponent
        creature={creature}
        extendCreature={this.extendCreature}
      />
    )
  }
}

DndCreatureContainer.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DndCreatureContainer
