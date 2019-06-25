import React from "react"

import {dndParamCollection} from "@/constants/dnd/dndParamList"
import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndItemCollection} from "@/constants/dnd/dndItemList"

import "./DndSentientItemStyles.css"

const DndSentientItem = (
  {
    item: {
      aligmentId,
      char,
      communication,
      interactions,
      manner,
      type,
      senses,
      stats,
      goal,
    }
  }
) => {
  const {
    name: typeName,
    description: typeDescription,
    category: typeCategory,
    subcategory,
  } = dndItemCollection[type]

  const typeSubcategory = subcategory
    ? ` — ${subcategory}`
    : ''

  return (
    <section className='DndSentientItem'>
      <section>
        <h2>Тип предмета</h2>
        <p title={`${typeCategory} ${typeSubcategory}\n${typeDescription}`}>
          {typeName}
        </p>
      </section>

      <section>
        <h2>Параметры</h2>
        <ul>
          {
            stats.map(
              ({id, value}) => (
                <li key={id}>
                  {dndParamCollection[id].shortName}
                  {value}
                </li>
              )
            )
          }
        </ul>
      </section>

      <section className='DndSentientItem_char'>
        <h2>Черты характера</h2>
        <p className='DndSentientItem_charText'>{char.good}, но {char.bad}.</p>
      </section>

      <section>
        <h2>Мировоззрение</h2>
        <p>{dndAligmentCollection[aligmentId].name.nominative}</p>
      </section>

      <section>
        <h2>Чувства</h2>
        <p>{senses}</p>
      </section>

      <section>
        <h2>Общение</h2>
        <p>{interactions.description}</p>
      </section>

      <section>
        <h2>Предназначение</h2>
        <p>{goal}</p>
      </section>

      <section>
        <h2>Манеры</h2>
        <p>{manner}</p>
      </section>

      <section>
        <h2>Особенности</h2>
        <p>{communication}</p>
      </section>
    </section>
  )
}

export default DndSentientItem
