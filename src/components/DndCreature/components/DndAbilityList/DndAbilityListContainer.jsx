import React from "react"
import PropTypes from "prop-types"

import DndAbilityListComponent from "./DndAbilityListComponent"

const DndAbilityListContainer = (
  {
    list,
    spellCast,
    ...rest,
  }
) => spellCast || list.length
  ? (
    <DndAbilityListComponent
      spellCast={spellCast}
      list={list}
      {...rest}
    />
  )
  : null

DndAbilityListContainer.propTypes = {
  list: PropTypes.array,
}

DndAbilityListContainer.defaultProps = {
  list: [],
}

export default DndAbilityListContainer
