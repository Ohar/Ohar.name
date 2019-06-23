import React from "react"
import PropTypes from "prop-types"

import dndSizeList from "@/constants/dnd/dndSizeList"
import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndCrCollection} from "@/constants/dnd/dndCrList"
import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"
import {dndManualCollection} from "@/constants/dnd/dndManualList"

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
      challengeRating,
      description,
      hitPoint,
      languageList,
      legendaryPoints,
      name: [nameSingle],
      params,
      sizeType,
      source,
      speed,
      typeId,
    },
  },
) => (
  <section className='DndCreature'>
    <header className='DndCreature_name'>
      {nameSingle}
    </header>
    <p className='DndCreature_description'>
      {description}
    </p>
    <p className='DndCreature_info'>
      {dndSizeList[sizeType]}
      {dndCreatureTypeCollection[typeId].name},
      {dndAligmentCollection[aligment].name.nominative}
    </p>
    <p className='DndCreature_armorClass'>
      <b>Класс доспеха</b> {armorClass}
    </p>
    <p className='DndCreature_hitPoint'>
      <b>Хитов</b> {hitPoint}
    </p>

    <DndCreatureSpeed speed={speed} />

    <p className='DndCreature_cr'>
      <b>Уровень опасности</b> {dndCrCollection[challengeRating].cr}
      <span className='DndCreature_exp'>
        ({dndCrCollection[challengeRating].exp} опыта)
      </span>
    </p>

    <DndParamList params={params} />

    <p className='DndCreature_source'>
      <b>Источник</b> {dndManualCollection[source].name}
    </p>

    <DndLegendaryActionList
      name={nameSingle}
      legendaryPoints={legendaryPoints}
    />

    <p>
      {JSON.stringify(creature)}
    </p>
  </section>
)

DndCreatureComponent.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureComponent
