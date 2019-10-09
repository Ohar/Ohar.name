import React, { Component } from 'react'
import _ from 'lodash'

import undeadList from './constants/undeadList'
import WAND_HP_LIMIT from './constants/WAND_HP_LIMIT.js'

import calcDiceAverage from "@/utils/calcDiceAverage"
import dndCrList, {dndCrCollection} from "@/constants/dnd/dndCrList"

import WandOfOrcusComponent from './WandOfOrcusComponent'

class WandOfOrcusContainer extends Component {
  state = {
    generatedUndeadIdList: [],
    minCrId: dndCrList[1].id,
  }

  onChangeMinCr = ({ target: { value: minCrId } }) => {
    this.setState({minCrId})
  }

  onSummonUndead = () => {
    const {minCrId} = this.state
    const {exp: minExp} = dndCrCollection[minCrId]
    const tempUndeadIdList = []
    let currentUndeadList = undeadList
    let hpLeft = WAND_HP_LIMIT

    while (currentUndeadList.length && hpLeft > 0) {
      currentUndeadList = currentUndeadList.filter(
        ({hp, cr}) => (
          hpLeft >= calcDiceAverage(hp)
          && cr.exp >= minExp
        )
      )

      const undead = _.sample(currentUndeadList)

      tempUndeadIdList.push(undead)

      hpLeft -= calcDiceAverage(undead.hp)
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
    const {generatedUndeadIdList, minCrId} = this.state

    return (
      <WandOfOrcusComponent
        onSummonUndead={this.onSummonUndead}
        onChangeMinCr={this.onChangeMinCr}
        undeadIdList={generatedUndeadIdList}
        minCrId={minCrId}
      />
    )
  }
}

export default WandOfOrcusContainer
