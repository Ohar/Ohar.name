import React, { Component } from 'react';
import PropTypes from "prop-types"

import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"
import {dndCreatureCollection} from "@/constants/dnd/dndCreatureList"

import calculateColumnCount from "./utils/calculateColumnCount"

import DndCreatureStatsComponent from "./DndCreatureStatsComponent"

class DndCreatureStatsContainer extends Component {
  render() {
    const { id } = this.props;
    const creature = dndCreatureCollection[id];
    const { genderId } = dndCreatureTypeCollection[creature.creatureTypeIdList[0]];
    const columnCount = calculateColumnCount(creature);

    return (
      <DndCreatureStatsComponent
        genderId={genderId}
        columnCount={columnCount}
        {...creature}
      />
    );
  }
}

DndCreatureStatsContainer.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DndCreatureStatsContainer
