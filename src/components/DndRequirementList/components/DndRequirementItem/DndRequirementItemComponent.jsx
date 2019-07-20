import React from 'react'

import {dndParamCollection} from "@/constants/dnd/dndParamList"

function DndRequirementItemComponent(
  {
    requirement,
    requirement: {
      type,
      paramType,
      min,
    },
  }
) {
  let text = ''

  switch (type) {
    case 'param':
      const paramName = dndParamCollection[paramType].shortName
      text = `${paramName} ${min}`
      break

    default:
      text = JSON.stringify(requirement)
  }

  return (
    <p>{text}</p>
  )
}

export default DndRequirementItemComponent
