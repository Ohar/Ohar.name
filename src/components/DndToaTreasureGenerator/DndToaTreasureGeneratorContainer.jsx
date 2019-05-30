import React, { PureComponent } from "react"

import DndSimpleTableGenerator from '@/components/DndSimpleTableGenerator'

import treasureList, {treasureListProbabilitySumm, treasureIdListToPick, treasureCollection} from './constants/treasureList'

class DndToaTreasureGeneratorContainer extends PureComponent {
  render () {
    return (
      <DndSimpleTableGenerator
        title='Генератор выпавших сокровищ для кампании Гробницы Аннигиляции'
        list={treasureList}
        collection={treasureCollection}
        idListToPick={treasureIdListToPick}
        probabilitySumm={treasureListProbabilitySumm}
      />
    )
  }
}

export default DndToaTreasureGeneratorContainer
