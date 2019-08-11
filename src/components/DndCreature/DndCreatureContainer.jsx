import React from "react"
import PropTypes from "prop-types"

import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndSizeCollection} from "@/constants/dnd/dndSizeList"

import getCreatureTypeName from "./utils/getCreatureTypeName"

import DndCreatureComponent from "./DndCreatureComponent"

const DndCreatureContainer = (
  {
    creature: {
      aligmentId,
      creatureTypeIdList,
      sizeType,
      ...rest,
    },
  },
) => {
  const {name: size} = dndSizeCollection[sizeType]
  const {name: {nominative: aligment}} = dndAligmentCollection[aligmentId]
  const creatureType = [
    getCreatureTypeName(creatureTypeIdList[0]),
    creatureTypeIdList.length > 1
      ? creatureTypeIdList
        .slice(1)
        .map(getCreatureTypeName)
        .join(', ')
        .replace(/^/, '(')
        .replace(/$/, ')')
      : ''
  ]
    .filter(e => e)
    .join(' ')

  return (
    <DndCreatureComponent
      aligment={aligment}
      creatureType={creatureType}
      size={size}
      {...rest}
    />
  )
}

DndCreatureContainer.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureContainer
