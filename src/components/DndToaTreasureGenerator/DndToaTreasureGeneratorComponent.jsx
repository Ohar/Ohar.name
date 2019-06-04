import React from "react"

import DndSimpleTableGenerator from '@/components/DndSimpleTableGenerator'

import treasureList from './constants/treasureList'

export default () => (
  <DndSimpleTableGenerator
    title='Генератор выпавших сокровищ для кампании Гробницы Аннигиляции'
    list={treasureList}
  />
)
