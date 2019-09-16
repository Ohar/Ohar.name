import React from 'react'

import LootItem from './../LootItem'

import './LootListStyles.less'

const LootList = ({ list }) => list && list.length
  ? (
    <ul className='LootList'>
      {list.map(
        id => (
          <li
            className='LootList_item'
            key={id}
          >
            <LootItem id={id}/>
          </li>
        ),
      )}
    </ul>
  )
  : null

export default LootList
