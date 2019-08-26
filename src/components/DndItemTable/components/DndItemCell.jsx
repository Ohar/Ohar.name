import React from "react"
import ReactMarkdown from "react-markdown"

import generateCube from "@/utils/generateCube"

import BooleanMark from "@/components/BooleanMark"
import DndAbilityCheck from "@/components/DndAbilityCheck"
import DndPrice from "@/components/DndPrice"
import DndPoisonType from "@/components/DndPoisonType"
import DndDamageType from "@/components/DndDamageType"
import DndSourceInfo from "@/components/DndSourceInfo"
import DndRange from "@/components/DndRange"
import DndAc from "@/components/DndAc"
import DndRequirementList from "@/components/DndRequirementList"
import DndItemCategory from "./DndItemCategory"

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
      return <DndRange range={item[columnName]}/>
    }

    case 'acChangeTo': {
      return <DndAc item={item}/>
    }

    case 'category':
    case 'subcategory': {
      return <DndItemCategory catId={item[columnName]}/>
    }

    case 'blockHiding':
    case 'isFinesse':
    case 'isHeavy':
    case 'isLight':
    case 'isReach':
    case 'isReloading':
    case 'isSpecial':
    case 'isThrown':
    case 'isTwoHanded':
    case 'needAmmo': {
      return <BooleanMark val={item[columnName]}/>
    }

    case 'requirementList': {
      return <DndRequirementList list={item[columnName]}/>
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
