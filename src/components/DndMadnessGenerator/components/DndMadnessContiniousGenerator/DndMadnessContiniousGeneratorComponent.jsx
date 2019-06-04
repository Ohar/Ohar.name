import React from 'react'

import DndSimpleTableGenerator from '@/components/DndSimpleTableGenerator'

import list from './constants/list'

export default () => (
  <DndSimpleTableGenerator
    title='Бессрочное безумие'
    list={list}
  />
)
