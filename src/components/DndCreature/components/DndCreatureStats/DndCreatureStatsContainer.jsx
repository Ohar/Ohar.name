import React from "react"
import PropTypes from "prop-types"

import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"
import {dndCreatureCollection} from "@/constants/dnd/dndCreatureList"

import calculateColumnCount from "./utils/calculateColumnCount"

import DndCreatureStatsComponent from "./DndCreatureStatsComponent"

const DndCreatureStatsContainer = ({id}) => {
  const {
    actionList,
    creatureTypeIdList,
    featureList,
    legendaryActionList,
    legendaryPoints,
    spellCast,
    spellCastTogether,
    ...rest
  } = dndCreatureCollection[id]

  const {genderId} = dndCreatureTypeCollection[creatureTypeIdList[0]]
  const columnCount = calculateColumnCount({actionList, featureList, legendaryPoints, legendaryActionList, spellCast, spellCastTogether})

  return (
    <DndCreatureStatsComponent
      actionList={actionList}
      creatureTypeIdList={creatureTypeIdList}
      featureList={featureList}
      genderId={genderId}
      legendaryActionList={legendaryActionList}
      legendaryPoints={legendaryPoints}
      columnCount={columnCount}
      spellCast={spellCast}
      spellCastTogether={spellCastTogether}
      {...rest}
    />
  )
}

DndCreatureStatsContainer.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DndCreatureStatsContainer
