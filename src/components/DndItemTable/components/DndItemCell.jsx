import React from "react"
import ReactMarkdown from "react-markdown"

import formatRange from "@/utils/formatRange"
import generateCube from "@/utils/generateCube"

import BooleanMark from "@/components/BooleanMark"
import DndAbilityCheck from "@/components/DndAbilityCheck"
import DndAc from "@/components/DndAc"
import DndDamageType from "@/components/DndDamageType"
import DndPoisonType from "@/components/DndPoisonType"
import DndPrice from "@/components/DndPrice"
import DndRequirementList from "@/components/DndRequirementList"
import DndSourceInfo from "@/components/DndSourceInfo"

import DndItemCategory from "./DndItemCategory"
import DndWeaponPropList from "./DndWeaponPropList"

const DndItemCell = ({columnName, item}) => {
  switch (columnName) {
    case 'cost': {
      return <DndPrice price={item[columnName]}/>
    }

    case 'damage': {
      return generateCube(item[columnName])
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
      return formatRange(item[columnName])
    }

    case 'acChangeTo': {
      return <DndAc item={item}/>
    }

    case 'category':
    case 'subcategory': {
      return <DndItemCategory catId={item[columnName]}/>
    }

    case 'blockHiding': {
      return <BooleanMark val={item[columnName]}/>
    }

    case 'requirementList': {
      return <DndRequirementList list={item[columnName]}/>
    }

    case 'description': {
      return (
        <>
          <DndWeaponPropList item={item} />
          <ReactMarkdown>
            {item[columnName]}
          </ReactMarkdown>
        </>
      )
    }

    default: {
      return (
        <ReactMarkdown>
          {String(item[columnName] || '')}
        </ReactMarkdown>
      )
    }
  }
}

export default DndItemCell
