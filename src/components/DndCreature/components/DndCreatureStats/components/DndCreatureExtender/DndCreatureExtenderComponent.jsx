import React from 'react';
import PropTypes from 'prop-types';

const DndCreatureExtenderComponent = ({ list, creature, className, extend }) => (
  <span className={`DndCreatureExtender ${className}`}>
    {
      list.map(
        (template, i) => {
          const title = template.templateTitle.replace('NAME', creature.name);

          return (
            <button
              className='DndCreatureExtender_btn'
              onClick={() => extend(template)}
              key={i}
              type='button'
              title={title}
            >
              {template.templateName}
            </button>
          );
        }
      )
    }
  </span>
);

DndCreatureExtenderComponent.defaultProps = {
  className: '',
  creature: null,
  list: []
};

DndCreatureExtenderComponent.propTypes = {
  className: PropTypes.string,
  creature: PropTypes.object,
  list: PropTypes.array,
};

export default DndCreatureExtenderComponent;
