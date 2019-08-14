import React from "react"

import getCreatureTypeName from './utils/getCreatureTypeName';

export default ({list}) => {
  const creatureType = [
    getCreatureTypeName(list[0]),
    list.length > 1
      ? list
        .slice(1)
        .map(getCreatureTypeName)
        .join(', ')
        .replace(/^/, '(')
        .replace(/$/, ')')
      : ''
  ]
    .filter(e => e)
    .join(' ')

  return <span>{creatureType}</span>
}
