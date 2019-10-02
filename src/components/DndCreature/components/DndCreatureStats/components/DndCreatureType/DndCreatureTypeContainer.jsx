import React from 'react'
import PropTypes from 'prop-types'

import getCreatureTypeName from './utils/getCreatureTypeName'

import DndCreatureTypeComponent from './DndCreatureTypeComponent'

const DndCreatureTypeContainer = (
  {
    creatureTypeIdList: list,
    swarmSizeType = null,
  }
) => {
  const isSwarm = Boolean(swarmSizeType)
  const type1st = getCreatureTypeName({id: list[0], isSwarm})

  const otherTypeList = list.length > 1
    ? list
      .slice(1)
      .map(id => getCreatureTypeName({id, isSwarm}))
      .join(', ')
      .replace(/^/, '(')
      .replace(/$/, ')')
    : ''

  const text = [type1st, otherTypeList].filter(e => e).join(' ')

  return (
    <DndCreatureTypeComponent text={text}/>
  )
}

DndCreatureTypeContainer.propTypes = {
  creatureTypeIdList: PropTypes.array.isRequired,
  swarmSizeType: PropTypes.string,
}

export default DndCreatureTypeContainer
