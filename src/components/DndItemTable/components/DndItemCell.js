import React from "react"
import ReactMarkdown from "react-markdown"

import DndAbilityCheck from "@/components/DndAbilityCheck"
import DndCube from "@/components/DndCube"
import DndPrice from "@/components/DndPrice"
import DndPoisonType from "@/components/DndPoisonType"
import DndDamageType from "@/components/DndDamageType"
import DndSourceInfo from "@/components/DndSourceInfo"

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

    case 'source': {
      return <DndSourceInfo source={item[columnName]}/>
    }

    default: {
      return (
        <ReactMarkdown>{String(item[columnName] || '')}</ReactMarkdown>
      )
    }
  }
}

export default DndItemCell
