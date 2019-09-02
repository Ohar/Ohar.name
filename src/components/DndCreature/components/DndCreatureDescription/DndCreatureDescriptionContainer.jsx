import React from 'react';

import DndCreatureDescriptionComponent from './DndCreatureDescriptionComponent';
import PropTypes from 'prop-types';

const COLUMN_COEF = 1500;
const MAX_COLUMN = 3;
const MAX_LEN_TO_HANDLE = MAX_COLUMN * COLUMN_COEF;

const DndCreatureDescriptionContainer = ({ text, ...rest }) => {
  const columnCount = text.length > MAX_LEN_TO_HANDLE
    ? MAX_COLUMN
    : Math.ceil(text.length / COLUMN_COEF);

  return (
    <DndCreatureDescriptionComponent
      columnCount={columnCount}
      text={text}
      {...rest}
    />
  );
};

DndCreatureDescriptionContainer.propTypes = {
  text: PropTypes.string.isRequired,
}

export default DndCreatureDescriptionContainer;
