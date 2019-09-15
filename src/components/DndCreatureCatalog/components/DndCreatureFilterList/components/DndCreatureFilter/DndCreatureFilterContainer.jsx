import React from "react"
import PropTypes from "prop-types"

import DndCreatureFilterComponent from "./DndCreatureFilterComponent"

const DndCreatureFilterContainer = ({id, onSearch, ...rest}) => (
  <DndCreatureFilterComponent
    onChange={({ target: { value } }) => onSearch({name: id, value})}
    {...rest}
  />
)

DndCreatureFilterContainer.propTypes = {
  id: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default DndCreatureFilterContainer
