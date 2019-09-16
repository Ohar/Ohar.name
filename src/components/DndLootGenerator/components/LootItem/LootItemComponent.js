import React from 'react'

import DndPrice from '@/components/DndPrice'

import Icon from '@/components/Icon'

const LootItem = ({ name, description, title, cost, icon }) => (
  <span
    title={title}
    className='LootItem'
  >
    {
      icon
        ? <Icon icon={icon}/>
        : null
    }
    <b>{name}</b>{description ? ', ' : ' '}
    {`${description} `}
    (<DndPrice price={cost}/>)
  </span>
)

export default LootItem
