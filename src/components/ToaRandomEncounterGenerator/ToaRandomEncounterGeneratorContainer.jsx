import React, { PureComponent } from 'react'

import biomeList from './const/biomeList'
import encounterByBiomeList from './const/encounterByBiomeList'
import encounterList from './const/encounterList'
import ENCOUNTER_D20_MIN from './const/ENCOUNTER_D20_MIN'

import ToaRandomEncounterGeneratorComponent from './ToaRandomEncounterGeneratorComponent'

export default class ToaRandomEncounterGeneratorContainer extends PureComponent {
  state = {
    biome: biomeList[0].value,
    encounterList: [],
    isEncounterHappensOnFirstPartOfNight: false,
    useAdditionalZombies: true,
  }

  rollDice = diceNum => () => Math.round(Math.random() * (diceNum - 1))

  rollD20 = this.rollDice(20)
  rollD100 = this.rollDice(100)

  onBiomeChange = biome => {
    this.setState({biome})
  }

  generateEncounter = () => {
    const d20Roll = this.rollD20() + 1
    const isEncounter = d20Roll >= ENCOUNTER_D20_MIN

    if (isEncounter) {
      const { biome, useAdditionalZombies } = this.state
      const diceResult = this.rollD100()

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
      <ToaRandomEncounterGeneratorComponent
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
