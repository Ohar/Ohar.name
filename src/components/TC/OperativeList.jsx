import React from 'react'

import Operative from '@/components/TC/Operative'

const OperativeList = ({ idList }) => {
  return (
    <ul>
      {idList.map(
        (id) => <li><Operative id={id} key={id}/></li>
      )}
    </ul>
  )
}

export default OperativeList
