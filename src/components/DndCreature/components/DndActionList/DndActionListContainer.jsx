import React from "react"
import PropTypes from "prop-types"

import generateAttackDescription from "./utils/generateAttackDescription"

import DndActionListComponent from './DndActionListComponent'

const DndActionListContainer = ({ list }) => {
  const abilityList = list.map(
    (
      {
        attack,
        description = '',
        ...rest,
      }
    ) => ({
      ...rest,
      description: `${generateAttackDescription(attack)} ${description}`,
    })
  )

  return (
    <DndActionListComponent list={abilityList}/>
  )
}

DndActionListContainer.propTypes = {
  list: PropTypes.array,
}

DndActionListContainer.defaultProps = {
  list: [],
}

export default DndActionListContainer
