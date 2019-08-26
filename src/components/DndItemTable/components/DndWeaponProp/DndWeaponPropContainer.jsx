import React from "react"

import {
  dndWeaponPropCollection,
  WEAPON_RANGE,
  WEAPON_VERSATILE,
} from "@/constants/dnd/dndWeaponPropList"

import formatRange from "@/utils/formatRange"
import generateCube from "@/utils/generateCube"

import DndWeaponPropComponent from "./DndWeaponPropComponent"

const DndWeaponPropContainer = ({weaponProp}) => {
  const isObj = typeof weaponProp === 'object'
  const id = isObj
    ? weaponProp.id
    : weaponProp

  const value = isObj
    ? weaponProp.value
    : null

  let valueText = ''

  if (value) {
    if (id === WEAPON_RANGE) {
      valueText = ` (${formatRange(value)})`
    }

    if (id === WEAPON_VERSATILE) {
      valueText = `: ${generateCube(value)}`
    }
  }

  const {name, description} = dndWeaponPropCollection[id]

  const head = `${name}\n${description}`
  const text = `${name}${valueText}`

  return (
    <DndWeaponPropComponent
      head={head}
      text={text}
    />
  )
}

export default DndWeaponPropContainer
