import React from 'react'

import LootItem from './../LootItem'

import './LootListStyles.less'

const LootList = ({ list }) => list && list.length
  ? (
    <>
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
    </>
  )
  : null

export default LootList
