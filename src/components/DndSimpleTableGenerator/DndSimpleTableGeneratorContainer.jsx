import React, { PureComponent } from "react"

import rollD100 from '@/utils/rollD100'

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
    let {list, pickId} = this.props

    const diceRollList = []

    while (rollCount) {
      const diceRoll = rollD100()
      const treasureId = pickId(diceRoll)
      const treasure = list.find(({id}) => id === treasureId)

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
