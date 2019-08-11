import React from "react"
import PropTypes from "prop-types"

import DndAbilityListComponent from "./DndAbilityListComponent"

const DndAbilityListContainer = (
  {
    entry,
    list,
    spellCast,
    ...rest,
  }
) => entry || spellCast || list.length
  ? (
    <DndAbilityListComponent
      entry={entry}
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
