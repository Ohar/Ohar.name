import React from "react"
import PropTypes from "prop-types"

import DndAbilityListComponent from "./DndAbilityListComponent"

const DndAbilityListContainer = (
  {
    entry,
    list,
    spellCast,
    spellCastTogether,
    ...rest,
  }
) => entry || spellCast || spellCastTogether || list.length
  ? (
    <DndAbilityListComponent
      entry={entry}
      spellCast={spellCast}
      spellCastTogether={spellCastTogether}
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
