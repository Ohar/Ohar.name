import React from 'react'

import DndSimpleTableGenerator from '@/components/DndSimpleTableGenerator'

import RadioSet from "@/components/RadioSet"

import {tierCollection} from './constants/tierList'
import tierFieldList from './constants/tierFieldList'

const DndLootGeneratorComponent = ({tier, onChangeTier}) => (
  <DndSimpleTableGenerator
    title='Индивидуальные сокровища'
    list={tierCollection[tier].list}
  >
    <RadioSet
      chosen={tier}
      fieldList={tierFieldList}
      name='tier'
      onChange={onChangeTier}
      title='Показатель опасности'
    />
  </DndSimpleTableGenerator>
)

export default DndLootGeneratorComponent
