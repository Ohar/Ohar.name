import React from "react"

import DndPrice from "@/components/DndPrice"

const DndItemCell = ({columnName, item}) => {
  switch (columnName) {
    case 'cost': {
      return (
        <DndPrice price={item[columnName]}/>
      )
    }

    case 'damage':
    case 'saveThrow':
    case 'poisonType': {
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
