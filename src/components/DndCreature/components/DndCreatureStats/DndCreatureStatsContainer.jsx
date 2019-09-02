import React from 'react';
import PropTypes from 'prop-types';

import { dndCreatureTypeCollection } from '@/constants/dnd/dndCreatureTypeList';

import calculateColumnCount from './utils/calculateColumnCount';

import DndCreatureStatsComponent from './DndCreatureStatsComponent';

const DndCreatureStatsContainer = ({ creature, ...rest }) => {
  if (creature) {
    const { genderId } = dndCreatureTypeCollection[creature.creatureTypeIdList[0]];
    const columnCount = calculateColumnCount(creature);

    return (
      <DndCreatureStatsComponent
        genderId={genderId}
        creature={creature}
        columnCount={columnCount}
        {...rest}
      />
    );
  }

  return null;
}

DndCreatureStatsContainer.defaultProps = {
  creature: null,
}

DndCreatureStatsContainer.propTypes = {
  creature: PropTypes.shape({
    creatureTypeIdList: PropTypes.array,
  }),
}

export default DndCreatureStatsContainer
