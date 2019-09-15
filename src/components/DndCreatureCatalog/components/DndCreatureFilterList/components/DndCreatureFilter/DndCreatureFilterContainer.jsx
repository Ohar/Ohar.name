import React from "react"
import PropTypes from "prop-types"

import DndCreatureFilterComponent from "./DndCreatureFilterComponent"

const DndCreatureFilterContainer = ({id, onSearch, list, ...rest}) => {
  const handleAsArray = (
    list
    && list.length
    && list.some(({value}) => Array.isArray(value))
  )

  return (
    <DndCreatureFilterComponent
      onChange={
        ({ target: { value } }) => onSearch(
          {
            name: id,
            value: handleAsArray
              ? value.split(',')
              : value,
          }
        )
      }
      list={list}
      {...rest}
    />
  )
}

DndCreatureFilterContainer.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.array,
  onSearch: PropTypes.func.isRequired,
}

export default DndCreatureFilterContainer
