import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import columnNameCollection from './constants/columnNameCollection'

import DndItemCell from './components/DndItemCell'

import checkIfNarrow from './utils/checkIfNarrow'

import './DndItemTableStyles.css'

const DndItemTableComponent = ({ itemList, columnList, className }) => (
  <table className={`DndItemTable ${className}`}>
    <thead className='DndItemTable_head'>
    <tr className='DndItemTable_row'>
      {
        columnList.map(
          columnName => (
            <th
              key={columnName}
              className={classNames(
                'DndItemTable_cell',
                'DndItemTable_cell-head',
                {
                  'DndItemTable_cell-narrow': checkIfNarrow(columnName),
                }
              )}
            >
              <span className='DndItemTable_narrowWrapper'>
                {columnNameCollection[columnName] || columnName}
              </span>
            </th>
          ),
        )
      }
    </tr>
    </thead>
    <tbody className='DndItemTable_body'>
    {
      itemList.map(
        item => (
          <tr
            key={item.id || item.name}
            className='DndItemTable_row'
          >
            {
              columnList.map(
                columnName => (
                  <td
                    key={columnName}
                    className='DndItemTable_cell'
                  >
                    <DndItemCell
                      columnName={columnName}
                      item={item}
                    />
                  </td>
                ),
              )
            }
          </tr>
        ),
      )
    }
    </tbody>
  </table>
)

DndItemTableComponent.defaultProps = {
  className: '',
}

DndItemTableComponent.propTypes = {
  columnList: PropTypes.array.isRequired,
  itemList: PropTypes.array.isRequired,
  className: PropTypes.string,
}

export default DndItemTableComponent
