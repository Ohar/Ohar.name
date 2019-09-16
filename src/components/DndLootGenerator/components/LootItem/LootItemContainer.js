import React from 'react'

import {dndLootCollection} from '@/constants/dnd/dndLootList'
import {dndLootTypeCollection} from '@/constants/dnd/dndLootTypeList'

import LootItemComponent from './LootItemComponent'

const LootItemContainer = ({ id }) => {
  const { name, description, cost, type } = dndLootCollection[id]
  const {icon, name: typeName} = dndLootTypeCollection[type]
  const nameText = `${name} (${typeName})`

  const title = description
    ? `${nameText}\n\n${description}`
    : nameText

  return (
    <LootItemComponent
      cost={cost}
      icon={icon}
      name={name}
      description={description}
      title={title}
    />
  )
}

export default LootItemContainer