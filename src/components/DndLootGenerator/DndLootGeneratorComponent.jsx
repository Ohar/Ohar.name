import React from 'react'

import DndSimpleTableGenerator from '@/components/DndSimpleTableGenerator'

import RadioSet from "@/components/RadioSet"

import tierFieldList from './constants/tierFieldList'

const DndLootGeneratorComponent = ({tier, list, onChangeTier}) => (
  <DndSimpleTableGenerator
    title='Индивидуальные сокровища'
    list={list}
    showDiceRolls={false}
    showRowNumber={true}
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
