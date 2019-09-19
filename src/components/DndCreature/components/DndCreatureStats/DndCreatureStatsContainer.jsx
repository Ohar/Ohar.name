import React from 'react';
import PropTypes from 'prop-types';

import calculateColumnCount from './utils/calculateColumnCount';

import DndCreatureStatsComponent from './DndCreatureStatsComponent';

const DndCreatureStatsContainer = ({ creature, ...rest }) => {
  if (creature) {
    const columnCount = calculateColumnCount(creature);;

    return (
      <DndCreatureStatsComponent
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
  creature: PropTypes.object,
}

export default DndCreatureStatsContainer
