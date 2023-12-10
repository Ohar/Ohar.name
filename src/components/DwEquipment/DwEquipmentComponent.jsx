import React from 'react'

import DwTag from '@/components/DwTag'

import DwEquipmentDwarf from './components/DwEquipmentDwarf'
import DwEquipmentDruid from './components/DwEquipmentDruid'
import DwEquipmentInventor from './components/DwEquipmentInventor'
import DwEquipmentNoble from './components/DwEquipmentNoble'
import DwEquipmentIncinerator from './components/DwEquipmentIncinerator'
import DwEquipmentSavage from './components/DwEquipmentSavage'
import DwEquipmentShorty from './components/DwEquipmentShorty'
import DwEquipmentSorcerer from './components/DwEquipmentSorcerer'
import DwEquipmentRanger from './components/DwEquipmentRanger'
import DwEquipmentThief from './components/DwEquipmentThief'
import DwEquipmentWarrior from './components/DwEquipmentWarrior'
import DwEquipmentWarlock from './components/DwEquipmentWarlock'

import './DwEquipmentStyles.less'

const DwEquipmentComponent = ({id}) => {
  let Equipment = null

  switch (id) {
    case 'druid':
      Equipment = DwEquipmentDruid
      break
    case 'dwarf':
      Equipment = DwEquipmentDwarf
      break
    case 'incinerator':
      Equipment = DwEquipmentIncinerator
      break
    case 'inventor':
      Equipment = DwEquipmentInventor
      break
    case 'noble':
      Equipment = DwEquipmentNoble
      break
    case 'ranger':
      Equipment = DwEquipmentRanger
      break
    case 'savage':
      Equipment = DwEquipmentSavage
      break
    case 'shorty':
      Equipment = DwEquipmentShorty
      break
    case 'sorcerer':
      Equipment = DwEquipmentSorcerer
      break
    case 'thief':
      Equipment = DwEquipmentThief
      break
    case 'warlock':
      Equipment = DwEquipmentWarlock
      break
    case 'warrior':
      Equipment = DwEquipmentWarrior
      break
  }

  return (
    <section className='DwPcClass__equipment DwPcClass__section'>
      <h2>Снаряжение</h2>
      <Equipment/>
      <h3>Нагрузка</h3>
      <section
        className='DwPcClass__capacity'
        id='capacity'
      >
        <p>Твоя максимальная нагрузка равна <strong>9</strong>. Каждый предмет (кроме <DwTag id='subtle'>Мелких</DwTag>) добавляет свой вес к твоей нагрузке.</p>
        <ul>
          <li><strong>1–3</strong> веса — это лёгкая нагрузка (ты <em>быстр</em> и <em>тих</em>);</li>
          <li><strong>4–6</strong> нормальная нагрузка;</li>
          <li><strong>7–9</strong> тяжёлая (ты <em>медленен</em>, <em>шумен</em>, тебе <em>жарко</em> и ты <em>быстро устаёшь</em>).</li>
        </ul>
      </section>
    </section>
  )
}

export default DwEquipmentComponent
