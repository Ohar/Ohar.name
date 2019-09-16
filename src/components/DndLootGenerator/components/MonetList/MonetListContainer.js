import React from 'react'

import rollDice from '@/utils/rollDice'

import DndMonet from '@/components/DndMonet'

const MonetList = ({ list }) => (
  <>
    {
      list.map(
        ({ monetId, multiplier, dice: { count, type } }) => {
          const roll = rollDice(type)
          let money = 0

          while (count) {
            money += ((roll() + 1) * multiplier)
            count--
          }

          return (
            <DndMonet
              key={monetId}
              count={money}
              type={monetId}
            />
          )
        },
      )
    }
  </>
)

export default MonetList
