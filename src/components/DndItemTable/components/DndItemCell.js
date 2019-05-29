import React from "react"

import DndCube from "@/components/DndCube"
import DndPrice from "@/components/DndPrice"
import DndPoisonType from "@/components/DndPoisonType"

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
      return (
        <section>
          {JSON.stringify(item[columnName])}
        </section>
      )
    }

    default: {
      return (
        <span>{item[columnName]}</span>
      )
    }
  }
}

export default DndItemCell
