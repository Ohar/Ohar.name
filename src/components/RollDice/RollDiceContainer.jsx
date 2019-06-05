import React, { Component } from 'react'

import rollDice from '@/utils/rollDice'

import RollDiceComponent from './RollDiceComponent'

class RollDiceContainer extends Component {
  state = {
    result: 0,
  }

  onRoll = diceType => () => {
    const result = rollDice(diceType)() + 1

    this.setState({result})
  }

  render() {
    const {result} = this.state

    return (
      <RollDiceComponent
        result={result}
        onRoll={this.onRoll}
      />
    )
  }
}

export default RollDiceContainer
