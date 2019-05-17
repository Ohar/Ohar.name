import React, { PureComponent } from "react"

import rollD100 from '@/utils/rollD100'

import treasureList from './constants/treasureList'

import treasureProbability from './utils/treasureProbability'

import DndToaTreasureGeneratorComponent from './DndToaTreasureGeneratorComponent'

const ROLL_COUNT_MAX = 10

class DndToaTreasureGeneratorContainer extends PureComponent {
  state = {
    diceRollList: [],
    rollCount: 1,
  }

  updateRollCount = ({target: {value: rollCount}}) => {
    this.setState({rollCount})
  }

  generate = () => {
    let {rollCount} = this.state

    const diceRollList = []

    while (rollCount) {
      const diceRoll = rollD100()
      const treasureId = treasureProbability(diceRoll)
      const treasure = treasureList.find(({id}) => id === treasureId)

      diceRollList.push({
        diceRoll,
        treasure,
      })

      rollCount--;
    }

    this.setState({diceRollList})
  }

  render () {
    return (
      <DndToaTreasureGeneratorComponent
        {...this.state}
        generate={this.generate}
        rollCountMax={ROLL_COUNT_MAX}
        updateRollCount={this.updateRollCount}
      />
    )
  }
}

export default DndToaTreasureGeneratorContainer
