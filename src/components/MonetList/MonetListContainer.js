import React from 'react'

import DndMonet from '@/components/DndMonet'

const MonetList = ({ list }) => (
  <>
    {
      list.map(
        ({ monetId, count }) => (
          <DndMonet
            key={monetId}
            count={count}
            type={monetId}
          />
        ),
      )
    }
  </>
)

export default MonetList
