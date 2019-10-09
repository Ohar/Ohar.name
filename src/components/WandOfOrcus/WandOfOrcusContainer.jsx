import React, { Component } from 'react'
import _ from 'lodash'

import undeadList from './constants/undeadList'
import WAND_HP_LIMIT from './constants/WAND_HP_LIMIT.js'

import calcDiceAverage from "@/utils/calcDiceAverage"

import WandOfOrcusComponent from './WandOfOrcusComponent'

class WandOfOrcusContainer extends Component {
  state = {
    generatedUndeadIdList: [],
  }

  onSummonUndead = () => {
    const tempUndeadIdList = []
    let currentUndeadList = undeadList
    let hpLeft = WAND_HP_LIMIT

    while (currentUndeadList.length && hpLeft > 0) {
      const undead = _.sample(currentUndeadList)

      tempUndeadIdList.push(undead)

      hpLeft -= calcDiceAverage(undead.hp)

      currentUndeadList = currentUndeadList.filter(({hp}) => hpLeft >= calcDiceAverage(hp))
    }

    const generatedUndeadIdList = tempUndeadIdList.reduce(
      (resultArr, creature) => {
        const savedCreature = resultArr.find(({id}) => id === creature.id)

        return savedCreature
          ? [
            ...resultArr.filter(({id}) => id !== savedCreature.id),
            {
              ...savedCreature,
              summonedCount: savedCreature.summonedCount + 1,
            },
          ]
          : [
            ...resultArr,
            {
              ...creature,
              summonedCount: 1,
            },
          ]
      },
      []
    )

    this.setState({generatedUndeadIdList})
  }

  render() {
    const {generatedUndeadIdList} = this.state

    return (
      <WandOfOrcusComponent
        onSummonUndead={this.onSummonUndead}
        undeadIdList={generatedUndeadIdList}
      />
    )
  }
}

export default WandOfOrcusContainer
