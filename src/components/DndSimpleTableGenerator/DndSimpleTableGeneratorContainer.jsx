import React, { PureComponent } from "react"

import rollDice from '@/utils/rollDice'

import DndSimpleTableGeneratorComponent from './DndSimpleTableGeneratorComponent'

const ROLL_COUNT_MAX = 10

class DndSimpleTableGeneratorContainer extends PureComponent {
  state = {
    diceRollList: [],
    rollCount: 1,
  }

  updateRollCount = ({target: {value: rollCount}}) => {
    this.setState({rollCount})
  }

  generate = () => {
    let {rollCount} = this.state
    const {probabilitySumm, idListToPick, collection} = this.props

    const makeRoll = rollDice(probabilitySumm)
    const diceRollList = []

    while (rollCount) {
      const diceRoll = makeRoll()
      const treasureId = idListToPick[diceRoll]
      const treasure = collection[treasureId]

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
      <DndSimpleTableGeneratorComponent
        {...this.state}
        {...this.props}
        generate={this.generate}
        rollCountMax={ROLL_COUNT_MAX}
        updateRollCount={this.updateRollCount}
      />
    )
  }
}

export default DndSimpleTableGeneratorContainer
