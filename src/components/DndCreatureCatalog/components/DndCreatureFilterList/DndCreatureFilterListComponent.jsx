import React from 'react'
import PropTypes from 'prop-types'

import DndCreatureFilter from './components/DndCreatureFilter'

import './DndCreatureFilterListStyles.less'

const DndCreatureFilterListComponent = ({filterCollection, ...rest}) => {
  const keyList = Object.keys(filterCollection)

  const filterTypeList = [
    'select',
    'input',
  ]

  const filterBlockList = filterTypeList.map(
    type => ({
      type,
      list: keyList.filter(
        filterName => filterCollection[filterName].type === type
      ),
    })
  )

  return (
    <ul className='DndCreatureFilterList'>
      {
        filterBlockList.map(
          ({type, list}) => (
            <li
              className='DndCreatureFilterList_item'
              key={type}
            >
              <ul className='DndCreatureFilterList_blockList'>
                {
                  list.map(
                    filterName => (
                      <li
                        className={`DndCreatureFilterList_blockItem DndCreatureFilterList_blockItem-${type}`}
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
            </li>
          )
        )
      }
    </ul>
  )
}

DndCreatureFilterListComponent.defaultProps = {
  filterCollection: {},
}

DndCreatureFilterListComponent.propTypes = {
  filterCollection: PropTypes.object,
}

export default DndCreatureFilterListComponent
