import React from "react"
import PropTypes from "prop-types"

import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"
import {dndSizeCollection} from "@/constants/dnd/dndSizeList"

import calculateColumnCount from "./utils/calculateColumnCount"

import DndCreatureComponent from "./DndCreatureComponent"

const DndCreatureContainer = (
  {
    creature: {
      actionList,
      creatureTypeIdList,
      featureList,
      legendaryActionList,
      legendaryPoints,
      sizeType,
      ...rest,
    },
  },
) => {
  const {genderId} = dndCreatureTypeCollection[creatureTypeIdList[0]]
  const size = dndSizeCollection[sizeType].name.single[genderId].nominative

  const columnCount = calculateColumnCount({actionList, featureList, legendaryPoints, legendaryActionList})

  return (
    <DndCreatureComponent
      actionList={actionList}
      creatureTypeIdList={creatureTypeIdList}
      featureList={featureList}
      legendaryActionList={legendaryActionList}
      legendaryPoints={legendaryPoints}
      columnCount={columnCount}
      size={size}
      {...rest}
    />
  )
}

DndCreatureContainer.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureContainer
