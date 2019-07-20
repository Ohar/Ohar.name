import React from "react"
import ReactMarkdown from "react-markdown"

import DndAbilityCheck from "@/components/DndAbilityCheck"
import DndCube from "@/components/DndCube"
import DndPrice from "@/components/DndPrice"
import DndPoisonType from "@/components/DndPoisonType"
import DndDamageType from "@/components/DndDamageType"
import DndSourceInfo from "@/components/DndSourceInfo"
import DndRange from "@/components/DndRange"
import DndAc from "@/components/DndAc"

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

    case 'range': {
      return <DndRange range={item[columnName]}/>
    }

    case 'acChangeTo': {
      return <DndAc item={item}/>
    }

    default: {
      return (
        <ReactMarkdown>{String(item[columnName] || '')}</ReactMarkdown>
      )
    }
  }
}

export default DndItemCell
