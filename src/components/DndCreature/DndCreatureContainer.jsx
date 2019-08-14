import React from "react"
import PropTypes from "prop-types"

import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"

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
      ...rest,
    },
  },
) => {
  const {genderId} = dndCreatureTypeCollection[creatureTypeIdList[0]]
  const columnCount = calculateColumnCount({actionList, featureList, legendaryPoints, legendaryActionList})

  return (
    <DndCreatureComponent
      actionList={actionList}
      creatureTypeIdList={creatureTypeIdList}
      featureList={featureList}
      genderId={genderId}
      legendaryActionList={legendaryActionList}
      legendaryPoints={legendaryPoints}
      columnCount={columnCount}
      {...rest}
    />
  )
}

DndCreatureContainer.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureContainer
