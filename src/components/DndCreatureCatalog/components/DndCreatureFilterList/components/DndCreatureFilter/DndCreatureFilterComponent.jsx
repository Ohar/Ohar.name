import React from "react"
import PropTypes from "prop-types"

import "./DndCreatureFilterStyles.less"

const DndCreatureFilterComponent = ({label, type, list, value, onChange}) => (
  <div className='DndCreatureFilter'>
    {
      type === 'input'
        ? (
          <input
            className='DndCreatureCatalog_input'
            onChange={onChange}
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
              onChange={onChange}
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
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  list: PropTypes.array,
}

export default DndCreatureFilterComponent
