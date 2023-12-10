import React from 'react'

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

import DwEquipmentComponent from './DwEquipmentComponent'

const DwEquipmentContainer = ({id}) => {
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

  return Equipment
    ? (
      <DwEquipmentComponent>
        <Equipment/>
      </DwEquipmentComponent>
    )
    : null
}

export default DwEquipmentContainer
