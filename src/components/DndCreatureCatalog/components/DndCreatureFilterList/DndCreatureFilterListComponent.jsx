import React from 'react'
import PropTypes from 'prop-types'

import DndCreatureFilter from './components/DndCreatureFilter'

import './DndCreatureFilterListStyles.less'

const DndCreatureFilterListComponent = ({filterCollection, ...rest}) => (
  <ul className='DndCreatureFilterList'>
    {
      Object
        .keys(filterCollection)
        .map(
          filterName => (
            <li
              className='DndCreatureFilterList_item'
              key={filterName}
            >
              <DndCreatureFilter
                id={filterName}
                {...filterCollection[filterName]}
                {...rest}
              />
            </li>
          )
        )
    }
  </ul>
)

DndCreatureFilterListComponent.defaultProps = {
  filterCollection: {},
}

DndCreatureFilterListComponent.propTypes = {
  filterCollection: PropTypes.object,
}

export default DndCreatureFilterListComponent
