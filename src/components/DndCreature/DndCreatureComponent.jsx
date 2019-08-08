import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown";

import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndCrCollection} from "@/constants/dnd/dndCrList"
import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"
import {dndSizeCollection} from "@/constants/dnd/dndSizeList"

import DndCube from "@/components/DndCube"
import DndSourceInfo from "@/components/DndSourceInfo"

import DndCreatureSpeed from "./components/DndCreatureSpeed"
import DndLegendaryActionList from "./components/DndLegendaryActionList"
import DndParamList from "./components/DndParamList"
import DndAbilityList from "./components/DndAbilityList"

import "./DndCreatureStyles.css"

const getCreatureTypeName = id => dndCreatureTypeCollection[id].name.singular.nominative

const DndCreatureComponent = (
  {
    creature,
    creature: {
      abilityList,
      aligmentId,
      armorClass,
      armorType,
      cr,
      creatureTypeIdList,
      description,
      hp,
      languageList,
      legendaryPoints,
      name,
      nameEn,
      params,
      sizeType,
      source,
      speed,
    },
  },
) => {
  const size = dndSizeCollection[sizeType].name
  const aligment = dndAligmentCollection[aligmentId].name.nominative
  const creatureType = [
    getCreatureTypeName(creatureTypeIdList[0]),
    creatureTypeIdList.length > 1
      ? creatureTypeIdList
        .slice(1)
        .map(getCreatureTypeName)
        .join(', ')
        .replace(/^/, '(')
        .replace(/$/, ')')
      : ''
  ]
    .filter(e => e)
    .join(' ')

  return (
    <section className='DndCreature'>
      <header className='DndCreature_name'>
        {name} [{nameEn}]
      </header>

      <p className='DndCreature_info'>
        {size} {creatureType}, {aligment}
      </p>

      <section className='DndCreature_infoBlock'>
        <p className='DndCreature_armorClass'>
          <b className='DndCreature_blockHeader'>Класс доспеха</b>
          {armorClass}
          {
            armorType
              ? ` (${armorType})`
              : ''
          }
        </p>
        <p className='DndCreature_hitPoint'>
          <b className='DndCreature_blockHeader'>Хиты</b>
          <DndCube cube={hp}/>
        </p>
        <p className='DndCreature_hitPoint'>
          <b className='DndCreature_blockHeader'>Скорость</b>
          <DndCreatureSpeed speed={speed} />
        </p>
      </section>

      <DndParamList
        className='DndCreature_infoBlock'
        params={params}
      />

      <section className='DndCreature_infoBlock'>
        <p className='DndCreature_cr'>
          <b className='DndCreature_blockHeader'>Опасность</b>
          {dndCrCollection[cr].name}
          <span className='DndCreature_exp'>
          ({dndCrCollection[cr].exp} опыта)
        </span>
        </p>
        <p className='DndCreature_source'>
          <b className='DndCreature_blockHeader'>Источник</b>
          <DndSourceInfo source={source} useFullName/>
        </p>
      </section>

      <section className='DndCreature_infoBlock'>
        {/*<DndLegendaryActionList*/}
        {/*  name={name}*/}
        {/*  legendaryPoints={legendaryPoints}*/}
        {/*/>*/}
      </section>

      <DndAbilityList list={abilityList}/>

      <div className='DndCreature_description'>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>

      <p>
        {JSON.stringify(creature)}
      </p>
    </section>
  )
}

DndCreatureComponent.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureComponent
