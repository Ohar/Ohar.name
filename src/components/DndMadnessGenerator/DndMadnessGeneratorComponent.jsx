import React from 'react'

import PageTitle from '@/components/PageTitle'

import DndMadnessShortGenerator from './components/DndMadnessShortGenerator'
import DndMadnessLongGenerator from './components/DndMadnessLongGenerator'
import DndMadnessContiniousGenerator from './components/DndMadnessContiniousGenerator'

import './DndMadnessGenerator.css'

export default () => (
  <section className='DndMadnessGenerator'>
    <PageTitle>Генератор эффектов безумия для D&D</PageTitle>
    <ul className='DndMadnessGenerator_list'>
      <li className='DndMadnessGenerator_item'>
        <DndMadnessShortGenerator/>
      </li>
      <li className='DndMadnessGenerator_item'>
        <DndMadnessLongGenerator/>
      </li>
      <li className='DndMadnessGenerator_item'>
        <DndMadnessContiniousGenerator/>
      </li>
    </ul>
  </section>
)
