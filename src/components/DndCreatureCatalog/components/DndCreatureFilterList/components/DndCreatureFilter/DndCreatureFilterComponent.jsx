import React from "react"
import PropTypes from "prop-types"

import "./DndCreatureFilterStyles.less"

const DndCreatureFilterComponent = ({id, label, type, list, value, onSearch}) => (
  <div className='DndCreatureFilter'>
    {
      type === 'input'
        ? (
          <input
            className='DndCreatureCatalog_input'
            onChange={({ target: { value } }) => onSearch({name: id, value})}
            type='search'
            placeholder={label}
            value={value}
            autoFocus
          />
        )
        : (
          <>
            <span className='DndCreatureFilter_label'>{label}</span>
            <select
              className='DndCreatureFilter_select'
              value={value}
              onChange={({ target: { value } }) => onSearch({name: id, value})}
            >
              {
                list.map(
                  ({text, value}) => (
                    <option
                      value={value}
                      key={value}
                      className='DndCreatureFilter_option'
                    >
                      {text}
                    </option>
                  )
                )
              }
            </select>
          </>
        )
    }
  </div>
)

DndCreatureFilterComponent.defaultProps = {
  list: [],
}

DndCreatureFilterComponent.propTypes = {
  value: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  list: PropTypes.array,
}

export default DndCreatureFilterComponent
