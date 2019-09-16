import React, { Component } from 'react'

import tierList from './constants/tierList'

import DndLootGeneratorComponent from './DndLootGeneratorComponent'

class DndLootGeneratorContainer extends Component {
  state = {
    tier: tierList[0].id,
  }

  onChangeTier = tier => {
    this.setState({tier})
  }

  render () {
    const {tier} = this.state

    return (
      <DndLootGeneratorComponent
        tier={tier}
        onChangeTier={this.onChangeTier}
      />
    )
  }
}

export default DndLootGeneratorContainer
