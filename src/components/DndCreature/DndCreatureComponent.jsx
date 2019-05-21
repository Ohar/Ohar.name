import React from "react"
import PropTypes from "prop-types"

import {dndManualCollection} from "@/constants/dnd/dndManualList"
import {dndCrCollection} from "@/constants/dnd/dndCrList"
import {dndSpeedCollection} from "@/constants/dnd/dndSpeedList"
import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndCreatureTypeCollection} from "@/constants/dnd/dndCreatureTypeList"
import dndSizeList from "@/constants/dnd/dndSizeList"

import DndParamList from "@/components/DndParamList"

import "./DndCreatureStyles.css"

const LANG = 'ru'

const DndCreatureComponent = (
  {
    creature,
    creature: {
      aligment,
      armorClass,
      challengeRating,
      description,
      hitPoint,
      name,
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
      {name[LANG]}
    </header>
    <p className='DndCreature_description'>
      {description[LANG]}
    </p>
    <p className='DndCreature_aligment'>
      Мировоззрение: {dndAligmentCollection[aligment].name}
    </p>
    <p className='DndCreature_info'>
      {dndSizeList[sizeType]} {dndCreatureTypeCollection[typeId].name}
    </p>
    <p className='DndCreature_armorClass'>
      Класс доспеха: {armorClass}
    </p>
    <p className='DndCreature_hitPoint'>
      Хитов: {hitPoint}
    </p>
    <p className='DndCreature_source'>
      Источник: {dndManualCollection[source].name[LANG]}
    </p>
    <p className='DndCreature_cr'>
      Уровень опасности: {dndCrCollection[challengeRating].cr}
    </p>
    <p className='DndCreature_exp'>
      Опыт: {dndCrCollection[challengeRating].exp}
    </p>

    <DndParamList params={params} />

    {
      speed.map(
        ({type, value}) => (
          <p key={type}>
            {dndSpeedCollection[type].name[LANG]}: {value}
          </p>
        )
      )
    }

    <p>
      {JSON.stringify(creature)}
    </p>
  </section>
)

DndCreatureComponent.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureComponent
