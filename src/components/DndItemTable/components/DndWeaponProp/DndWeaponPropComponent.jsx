import React from "react"
import "./DndWeaponPropStyles.less"

const DndWeaponPropComponent = ({head, text}) => {
  return (
    <span
      className='DndWeaponProp'
      title={head}
    >
      {text}
    </span>
  )
}

export default DndWeaponPropComponent
