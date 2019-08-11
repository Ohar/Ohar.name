import React from 'react'

import DndAbilityList from './../DndAbilityList'

export default ({description, ...rest}) => (
  <DndAbilityList
    header='Описание'
    entry={description}
    {...rest}
  />
)
