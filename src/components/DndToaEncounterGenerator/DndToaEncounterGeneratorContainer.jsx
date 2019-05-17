import React, { PureComponent } from 'react'

import biomeList from './const/biomeList'
import encounterByBiomeList from './const/encounterByBiomeList'
import encounterList from './const/encounterList'
import ENCOUNTER_D20_MIN from './const/ENCOUNTER_D20_MIN'

import rollD20 from './utils/rollD20'
import rollD100 from './utils/rollD100'

import DndToaEncounterGeneratorComponent from './DndToaEncounterGeneratorComponent'

export default class DndToaEncounterGeneratorContainer extends PureComponent {
  state = {
    biome: biomeList[0].value,
    encounterList: [],
    isEncounterHappensOnFirstPartOfNight: false,
    useAdditionalZombies: true,
  }

  onBiomeChange = biome => {
    this.setState({biome})
  }

  generateEncounter = () => {
    const d20Roll = rollD20() + 1
    const isEncounter = d20Roll >= ENCOUNTER_D20_MIN

    if (isEncounter) {
      const { biome, useAdditionalZombies } = this.state
      const diceResult = rollD100()

      let encounterId = encounterByBiomeList[biome](diceResult)

      if (useAdditionalZombies && encounterId === 'nezhit_zombi') {
        encounterId = 'nezhit_zombi_additional'
      }

      return {
        d20Roll,
        encounter: encounterList.find(({id}) => id === encounterId),
      }
    } else {
      return {
        d20Roll,
        encounter: null,
      }
    }
  }

  generateTodayEncounters = () => {
    const isEncounterHappensOnFirstPartOfNight = Math.random() >= 0.5
    const encounterList = [
      this.generateEncounter(),
      this.generateEncounter(),
      this.generateEncounter(),
      this.generateEncounter(),
    ]

    this.setState({
      encounterList,
      isEncounterHappensOnFirstPartOfNight,
    })
  }

  setAdditionalZombies = useAdditionalZombies => {
    this.setState({
      useAdditionalZombies,
    })
  }

  render() {
    const {
      biome,
      encounterList,
      isEncounterHappensOnFirstPartOfNight,
      useAdditionalZombies,
    } = this.state

    return (
      <DndToaEncounterGeneratorComponent
        biome={biome}
        encounterList={encounterList}
        generateTodayEncounters={this.generateTodayEncounters}
        isEncounterHappensOnFirstPartOfNight={isEncounterHappensOnFirstPartOfNight}
        onBiomeChange={this.onBiomeChange}
        setAdditionalZombies={this.setAdditionalZombies}
        useAdditionalZombies={useAdditionalZombies}
      />
    )
  }
}
