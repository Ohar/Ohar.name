import React from "react"
import PropTypes from 'prop-types'

import {dndSizeCollection} from "@/constants/dnd/dndSizeList"

import getCreatureTypeGenderId from "./../../utils/getCreatureTypeGenderId"

const DndCreatureSizeComponent = ({creatureTypeIdList, sizeType, swarmSizeType}) => {
  const genderId = getCreatureTypeGenderId(creatureTypeIdList)

  let text = ''

  if (swarmSizeType) {
    const size = dndSizeCollection[sizeType].name.singular[genderId].nominative
    const swarmSize = dndSizeCollection[swarmSizeType].name.plural.genitive
    text = `${size} рой ${swarmSize}`
  } else {
    text = dndSizeCollection[sizeType].name.singular[genderId].nominative
  }

  return <span>{text}</span>
}

DndCreatureSizeComponent.propTypes = {
  creatureTypeIdList: PropTypes.array.isRequired,
  sizeType: PropTypes.string.isRequired,
  swarmSizeType: PropTypes.string,
}

DndCreatureSizeComponent.defaultProps = {
  swarmSizeType: null,
}

export default DndCreatureSizeComponent
