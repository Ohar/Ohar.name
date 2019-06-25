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
) => (
  <section className='DndSentientItem'>
    <section>
      <h2>Тип предмета</h2>
      <p>{dndItemCollection[type].name}</p>
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

    <section>
      <h2>Черты характера</h2>
      <p>{char.good}, но {char.bad}.</p>
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

export default DndSentientItem
