import React from "react"

import DndWeaponProp from "./../DndWeaponProp"

import "./DndWeaponPropListStyles.less"

export default ({item: {weaponPropList}}) => weaponPropList && weaponPropList.length
  ? (
    <p className='DndWeaponPropList'>
      {
        weaponPropList.map(
          (weaponProp, i) => (
            <DndWeaponProp
              weaponProp={weaponProp}
              key={i}
            />
          )
        )
      }
    </p>
  )
  : null
