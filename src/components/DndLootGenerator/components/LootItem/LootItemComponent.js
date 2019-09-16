import React from 'react'

import DndPrice from '@/components/DndPrice'

const LootItem = ({ text, title, cost }) => (
  <span
    title={title}
    className='LootItem'
  >
    {text} (<DndPrice price={cost}/>)
  </span>
)

export default LootItem
