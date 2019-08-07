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

import "./DndCreatureStyles.css"

const DndCreatureComponent = (
  {
    creature,
    creature: {
      aligment,
      armorClass,
      cr,
      description,
      hp,
      languageList,
      legendaryPoints,
      name,
      nameEn,
      params,
      size,
      source,
      speed,
      typeId,
    },
  },
) => (
  <section className='DndCreature'>
    <header className='DndCreature_name'>
      {name} [{nameEn}]
    </header>
    <p className='DndCreature_info'>
      {dndSizeCollection[size].name} {dndCreatureTypeCollection[typeId].name.singular.nominative}, {dndAligmentCollection[aligment].name.nominative}
    </p>
    <section className='DndCreature_infoBlock'>
      <p className='DndCreature_armorClass'>
        <b className='DndCreature_blockHeader'>Класс доспеха</b>
        {armorClass}
      </p>
      <p className='DndCreature_hitPoint'>
        <b className='DndCreature_blockHeader'>Хиты</b>
        <DndCube cube={hp}/>
      </p>
      {/*<DndCreatureSpeed speed={speed} />*/}
    </section>
    <section className='DndCreature_infoBlock'>
      <DndParamList params={params} />
    </section>
    <section className='DndCreature_infoBlock'>
      <p className='DndCreature_cr'>
        <b className='DndCreature_blockHeader'>Уровень опасности</b>
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

      <p className='DndCreature_description'>
        <ReactMarkdown>{description}</ReactMarkdown>
      </p>

      <p>
        {JSON.stringify(creature)}
      </p>
    </section>
  </section>
)

DndCreatureComponent.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureComponent
