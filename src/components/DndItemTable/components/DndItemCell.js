import React from "react"

import DndAbilityCheck from "@/components/DndAbilityCheck"
import DndCube from "@/components/DndCube"
import DndPrice from "@/components/DndPrice"
import DndPoisonType from "@/components/DndPoisonType"
import DndDamageType from "@/components/DndDamageType"

const DndItemCell = ({columnName, item}) => {
  switch (columnName) {
    case 'cost': {
      return (
        <DndPrice price={item[columnName]}/>
      )
    }

    case 'damage': {
      return <DndCube cube={item[columnName]}/>
    }

    case 'poisonType': {
      return <DndPoisonType poisonType={item[columnName]}/>
    }

    case 'saveThrow': {
      return <DndAbilityCheck abilityCheck={item[columnName]}/>
    }

    case 'damageType': {
      return <DndDamageType damageType={item[columnName]}/>
    }

    default: {
      return (
        <span>{item[columnName]}</span>
      )
    }
  }
}

export default DndItemCell
