import React, { Component } from 'react'

import tierList, {tierCollection} from './constants/tierList'
import {EMPTY_KOEF_DEFAULT} from './constants/EMPTY_KOEF'

import DndLootGeneratorComponent from './DndLootGeneratorComponent'

class DndLootGeneratorContainer extends Component {
  state = {
    tier: tierList[0].id,
    emptyKoef: EMPTY_KOEF_DEFAULT,
  }

  onChangeTier = tier => {
    this.setState({tier})
  }

  onChangeEmptyKoef = emptyKoef => {
    this.setState({emptyKoef})
  }

  render () {
    const {tier, emptyKoef} = this.state
    const {list} = tierCollection[tier]

    return (
      <DndLootGeneratorComponent
        tier={tier}
        emptyKoef={emptyKoef}
        list={list}
        onChangeEmptyKoef={this.onChangeEmptyKoef}
        onChangeTier={this.onChangeTier}
      />
    )
  }
}

export default DndLootGeneratorContainer
