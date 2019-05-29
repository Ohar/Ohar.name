import React, { PureComponent } from "react"

import DndSimpleTableGenerator from '@/components/DndSimpleTableGenerator'

import treasureList from './constants/treasureList'

import treasureProbability from './utils/treasureProbability'

class DndToaTreasureGeneratorContainer extends PureComponent {
  render () {
    return (
      <DndSimpleTableGenerator
        title='Генератор выпавших сокровищ для кампании Гробницы Аннигиляции'
        list={treasureList}
        pickId={treasureProbability}
      />
    )
  }
}

export default DndToaTreasureGeneratorContainer
