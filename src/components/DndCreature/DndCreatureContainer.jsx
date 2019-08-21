import React from "react"
import PropTypes from "prop-types"

import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"
import {dndCreatureCollection} from "@/constants/dnd/dndCreatureList"

import generateCreatureNameStr from "@/utils/generateCreatureNameStr"

import calculateColumnCount from "./utils/calculateColumnCount"

import DndCreatureComponent from "./DndCreatureComponent"

const DndCreatureContainer = ({id}) => {
  const {
    actionList,
    creatureTypeIdList,
    featureList,
    legendaryActionList,
    legendaryPoints,
    name,
    nameAlt,
    nameEn,
    nameEnAlt,
    description,
    ...rest
  } = dndCreatureCollection[id]

  const {genderId} = dndCreatureTypeCollection[creatureTypeIdList[0]]
  const columnCount = calculateColumnCount({actionList, featureList, legendaryPoints, legendaryActionList})
  const { header, title } = generateCreatureNameStr({ name, nameAlt, nameEn, nameEnAlt, description })

  return (
    <DndCreatureComponent
      actionList={actionList}
      creatureTypeIdList={creatureTypeIdList}
      featureList={featureList}
      genderId={genderId}
      legendaryActionList={legendaryActionList}
      legendaryPoints={legendaryPoints}
      columnCount={columnCount}
      header={header}
      name={name}
      title={title}
      {...rest}
    />
  )
}

DndCreatureContainer.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DndCreatureContainer
