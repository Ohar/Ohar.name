import React from "react"
import PropTypes from "prop-types"

import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"
import {dndSizeCollection} from "@/constants/dnd/dndSizeList"

import getCreatureTypeName from "./utils/getCreatureTypeName"

import DndCreatureComponent from "./DndCreatureComponent"

const DndCreatureContainer = (
  {
    creature: {
      actionList,
      aligmentId,
      creatureTypeIdList,
      featureList,
      legendaryPoints,
      sizeType,
      ...rest,
    },
  },
) => {
  const {genderId} = dndCreatureTypeCollection[creatureTypeIdList[0]]
  const size = dndSizeCollection[sizeType].name.single[genderId].nominative
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

  const featureCount = featureList && featureList.length || 0
  const actionCount = actionList && actionList.length || 0

  const showTwoColumns = legendaryPoints || (
    (featureCount + actionCount) >= 5
  )

  return (
    <DndCreatureComponent
      actionList={actionList}
      aligment={aligment}
      creatureType={creatureType}
      featureList={featureList}
      legendaryPoints={legendaryPoints}
      showTwoColumns={showTwoColumns}
      size={size}
      {...rest}
    />
  )
}

DndCreatureContainer.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureContainer
