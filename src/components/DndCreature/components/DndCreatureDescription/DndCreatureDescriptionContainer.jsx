import React from 'react'

import DndCreatureDescriptionComponent from './DndCreatureDescriptionComponent'

const DndCreatureDescriptionContainer = ({name, nameAlt, nameEn, nameEnAlt, description}) => {
  const nameEnAltText = nameEnAlt
    ? ` (${nameEnAlt})`
    : ''
  const nameAltText = nameAlt
    ? ` (${nameAlt})`
    : ''
  const nameText = `${name}${nameAltText}`
  const nameEnText = `${nameEn}${nameEnAltText}`

  return (
    <DndCreatureDescriptionComponent
      nameText={nameText}
      nameEnText={nameEnText}
      description={description}
    />
  )
}

export default DndCreatureDescriptionContainer
