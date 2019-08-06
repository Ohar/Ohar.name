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
      {name}
    </header>
    <p className='DndCreature_description'>
      <ReactMarkdown>{description}</ReactMarkdown>
    </p>
    <p className='DndCreature_info'>
      {dndSizeCollection[size].name} {dndCreatureTypeCollection[typeId].name.singular.nominative}, {dndAligmentCollection[aligment].name.nominative}
    </p>
    <p className='DndCreature_armorClass'>
      <b>Класс доспеха</b> {armorClass}
    </p>
    <p className='DndCreature_hitPoint'>
      <b>Хитов</b>
      <DndCube cube={hp}/>
    </p>

    {/*<DndCreatureSpeed speed={speed} />*/}

    <p className='DndCreature_cr'>
      <b>Уровень опасности</b> {dndCrCollection[cr].name}
      <span className='DndCreature_exp'>
        ({dndCrCollection[cr].exp} опыта)
      </span>
    </p>

    <DndParamList params={params} />

    <p className='DndCreature_source'>
      <b>Источник</b> <DndSourceInfo source={source}/>
    </p>

    {/*<DndLegendaryActionList*/}
    {/*  name={name}*/}
    {/*  legendaryPoints={legendaryPoints}*/}
    {/*/>*/}

    <p>
      {JSON.stringify(creature)}
    </p>
  </section>
)

DndCreatureComponent.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureComponent
