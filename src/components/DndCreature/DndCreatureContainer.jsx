import React from "react"
import PropTypes from "prop-types"

import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndSizeCollection} from "@/constants/dnd/dndSizeList"

import getCreatureTypeName from "./utils/getCreatureTypeName"

import DndCreatureComponent from "./DndCreatureComponent"

const DndCreatureContainer = (
  {
    creature: {
      actionList,
      aligmentId,
      armor,
      cr,
      creatureTypeIdList,
      description,
      featureList,
      hp,
      isFemale,
      languageList,
      legendaryActionList,
      legendaryPoints,
      name,
      nameEn,
      params,
      reactionList,
      saveThrowCollection,
      senseList,
      sizeType,
      skillCollection,
      source,
      speed,
      spellCast,
    },
  },
) => {
  const size = dndSizeCollection[sizeType].name
  const aligment = dndAligmentCollection[aligmentId].name.nominative
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
      actionList={actionList}
      aligment={aligment}
      aligmentId={aligmentId}
      armor={armor}
      cr={cr}
      creatureType={creatureType}
      creatureTypeIdList={creatureTypeIdList}
      description={description}
      featureList={featureList}
      hp={hp}
      isFemale={isFemale}
      languageList={languageList}
      legendaryActionList={legendaryActionList}
      legendaryPoints={legendaryPoints}
      name={name}
      nameEn={nameEn}
      params={params}
      reactionList={reactionList}
      saveThrowCollection={saveThrowCollection}
      senseList={senseList}
      size={size}
      sizeType={sizeType}
      skillCollection={skillCollection}
      source={source}
      speed={speed}
      spellCast={spellCast}
    />
  )
}

DndCreatureContainer.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureContainer
