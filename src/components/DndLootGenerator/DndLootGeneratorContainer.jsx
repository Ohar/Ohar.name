import React, { Component } from 'react'

import tierList, {tierCollection} from './constants/tierList'

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
    const {list} = tierCollection[tier]

    return (
      <DndLootGeneratorComponent
        tier={tier}
        list={list}
        onChangeTier={this.onChangeTier}
      />
    )
  }
}

export default DndLootGeneratorContainer
