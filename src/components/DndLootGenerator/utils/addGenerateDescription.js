import React from 'react'
import _ from 'lodash'

import MonetList from '@/components/MonetList'
import LootList from './../components/LootList'

import { dndMonetCollection } from '@/constants/dnd/dndMonetTypeList'
import dndLootList from '@/constants/dnd/dndLootList'

import generateMonet from './generateMonet'
import generateItemCountToCheck from './generateItemCountToCheck'

export default ({ list, ...rest }) => ({
  ...rest,
  generateDescription: () => {
    const monetList = list.map(generateMonet)
    const cost = monetList.reduce(
      (summ, { monetId, count }) => {
        const { koef } = dndMonetCollection[monetId]

        return summ + koef * count
      },
      0,
    )

    let costItems = Math.floor(cost / 2)

    const lootIdList = []

    const countItemToCheck = generateItemCountToCheck()

    for (let i = 1; i <= countItemToCheck; i++) {
      const loot = _.sample(
        dndLootList.filter(
          item => item.cost <= costItems,
        ),
      )

      if (loot) {
        const { id, cost: lootCost } = loot

        lootIdList.push(id)
        costItems -= lootCost
      } else {
        break
      }
    }

    return (
      <ol>
        <MonetList list={monetList}/>
        <LootList list={_.uniq(lootIdList)}/>
      </ol>
    )
  },
})
