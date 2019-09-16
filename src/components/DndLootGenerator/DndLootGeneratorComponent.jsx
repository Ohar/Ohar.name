import React from 'react'

import DndSimpleTableGenerator from '@/components/DndSimpleTableGenerator'

import RadioSet from "@/components/RadioSet"

import tierFieldList from './constants/tierFieldList'
import {EMPTY_KOEF_MAX, EMPTY_KOEF_MIN} from './constants/EMPTY_KOEF'

const DndLootGeneratorComponent = ({tier, emptyKoef, list, onChangeTier, onChangeEmptyKoef}) => (
  <DndSimpleTableGenerator
    title='Индивидуальные сокровища'
    list={list}
    emptyKoef={emptyKoef}
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
    <label>
      <p>Вероятность пустых карманов: {emptyKoef * 100}%</p>
      <input
        className='DndLootGenerator_range'
        type='range'
        min={EMPTY_KOEF_MIN}
        step='0.1'
        max={EMPTY_KOEF_MAX}
        value={emptyKoef}
        onChange={({target: {value}}) => onChangeEmptyKoef(value)}
      />
    </label>
  </DndSimpleTableGenerator>
)

export default DndLootGeneratorComponent
