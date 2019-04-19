import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

import "./DndItemTableStyles.css"

const DndItemTableComponent = ({ itemList, className }) => {
  const columnList = itemList.reduce(
    (list, item) => _.uniq([
      ...list,
      ...Object.keys(item),
    ]),
    [],
  )
  return (
    <table className={`DndItemTable ${className}`}>
      <thead className='DndItemTable_head'>
      <tr className='DndItemTable_row'>
        {
          columnList.map(
            columnName => (
              <th
                key={columnName}
                className='DndItemTable_cell DndItemTable_cell-head'
              >
                {columnName}
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
              key={item.name}
              className='DndItemTable_row'
            >
              {
                columnList.map(
                  columnName => (
                    <td
                      key={columnName}
                      className='DndItemTable_cell'
                    >
                      {item[columnName]}
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
}

DndItemTableComponent.defaultProps = {
  className: '',
}

DndItemTableComponent.propTypes = {
  itemList: PropTypes.array.isRequired,
  className: PropTypes.string,
}

export default DndItemTableComponent
