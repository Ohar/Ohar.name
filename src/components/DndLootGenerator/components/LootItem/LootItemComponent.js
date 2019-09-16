import React from 'react'

import DndPrice from '@/components/DndPrice'

import Icon from '@/components/Icon'

const LootItem = ({ text, title, cost, icon }) => (
  <span
    title={title}
    className='LootItem'
  >
    {
      icon
        ? <Icon icon={icon}/>
        : null
    }
    {text} (<DndPrice price={cost}/>)
  </span>
)

export default LootItem
