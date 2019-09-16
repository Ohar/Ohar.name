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

    for (let i = 1; i < countItemToCheck; i++) {
      const { id, cost: lootCost } = _.sample(dndLootList)

      if (lootCost > cost) {
        break
      }

      lootIdList.push(id)
      costItems -= lootCost
    }

    console.log('cost', cost)

    return (
      <>
        <MonetList list={monetList}/>
        <LootList list={_.uniq(lootIdList)}/>
      </>
    )
  },
})
