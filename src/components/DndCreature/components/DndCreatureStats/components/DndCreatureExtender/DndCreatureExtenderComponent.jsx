import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/Icon'

import './DndCreatureExtenderStyles.less'

const DndCreatureExtenderComponent = ({ list, className, extend }) => (
  <span className={`DndCreatureExtender ${className}`}>
    {
      list.length
        ? 'Применить шаблон'
        : null
    }
    {
      list.map(
        (template, i) => (
          <button
            className='DndCreatureExtender_btn'
            onClick={() => extend(template)}
            key={i}
            type='button'
            title={template.templateName}
          >
            <Icon icon={template.templateIcon}/>
          </button>
        )
      )
    }
  </span>
);

DndCreatureExtenderComponent.defaultProps = {
  className: '',
  list: []
};

DndCreatureExtenderComponent.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
};

export default DndCreatureExtenderComponent;
