import React from 'react'

import DndMonet from '@/components/DndMonet'

const MonetList = ({ list }) => (
  <>
    {
      list.map(
        ({ monetId, count }) => (
          <li key={monetId}>
            <DndMonet
              count={count}
              type={monetId}
            />
          </li>
        ),
      )
    }
  </>
)

export default MonetList
