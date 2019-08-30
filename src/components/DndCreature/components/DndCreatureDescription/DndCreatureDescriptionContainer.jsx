import React from 'react'

import DndCreatureDescriptionComponent from './DndCreatureDescriptionComponent'

const COLUMN_COEF = 1500
const MAX_COLUMN = 3
const MAX_LEN_TO_HANDLE = MAX_COLUMN * COLUMN_COEF

const DndCreatureDescriptionContainer = ({name, nameAlt, nameEn, nameEnAlt, description = '', ...rest}) => {
  const nameEnAltText = nameEnAlt
    ? ` (${nameEnAlt})`
    : ''
  const nameAltText = nameAlt
    ? ` (${nameAlt})`
    : ''
  const nameText = `${name}${nameAltText}`
  const nameEnText = `${nameEn}${nameEnAltText}`

  const columnCount = description.length > MAX_LEN_TO_HANDLE
    ? MAX_COLUMN
    : Math.ceil(description.length / COLUMN_COEF)

  return (
    <DndCreatureDescriptionComponent
      nameText={nameText}
      nameEnText={nameEnText}
      description={description}
      columnCount={columnCount}
      {...rest}
    />
  )
}

export default DndCreatureDescriptionContainer
