import React, { Component } from 'react';
import PropTypes from "prop-types"

import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"
import {dndCreatureCollection} from "@/constants/dnd/dndCreatureList"

import calculateColumnCount from "./utils/calculateColumnCount"

import DndCreatureStatsComponent from "./DndCreatureStatsComponent"

class DndCreatureStatsContainer extends Component {
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

  render() {
    const { creature } = this.state;

    if (creature) {
      const { genderId } = dndCreatureTypeCollection[creature.creatureTypeIdList[0]];
      const columnCount = calculateColumnCount(creature);

      return (
        <DndCreatureStatsComponent
          genderId={genderId}
          creature={creature}
          columnCount={columnCount}
          extendCreature={this.extendCreature}
        />
      );
    }

    return null
  }
}

DndCreatureStatsContainer.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DndCreatureStatsContainer
