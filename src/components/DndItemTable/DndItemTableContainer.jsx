import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import addAdditionalColumns from './utils/addAdditionalColumns'
import columnSorter from './utils/columnSorter'
import filterTechColumns from './utils/filterTechColumns'

import DndItemTableComponent from './DndItemTableComponent'

const DndItemTableContainer = ({ itemList, ...rest }) => {
  const columnList = itemList
    .reduce(
      (list, item) => {
        const columnListSmall = Object.keys(item)
        const columnListAdditional = columnListSmall.reduce(addAdditionalColumns, [])

        return _.uniq([
          ...list,
          ...columnListAdditional,
          ...columnListSmall.filter(filterTechColumns),
        ])
      },
      [],
    )
    .filter(e => e)
    .sort(columnSorter)

  return (
    <DndItemTableComponent
      columnList={columnList}
      itemList={itemList}
      {...rest}
    />
  )
}

DndItemTableContainer.propTypes = {
  itemList: PropTypes.array.isRequired,
}

export default DndItemTableContainer
