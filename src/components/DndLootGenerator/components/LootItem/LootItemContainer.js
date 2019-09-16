import React from 'react'
import { dndLootCollection } from '@/constants/dnd/dndLootList'

import LootItemComponent from './LootItemComponent'

const LootItemContainer = ({ id }) => {
  const { name, description, cost } = dndLootCollection[id]
  const title = description
    ? `${name}\n\n${description}`
    : null

  return (
    <LootItemComponent
      text={name}
      title={title}
      cost={cost}
    />
  )
}

export default LootItemContainer
