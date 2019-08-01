import React from "react"
import ReactMarkdown from "react-markdown"

import {dndParamCollection} from "@/constants/dnd/dndParamList"
import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndItemCollection} from "@/constants/dnd/dndItemList"

import "./DndSentientItemStyles.css"

const DndSentientItem = (
  {
    item: {
      aligmentId,
      bond,
      char,
      communication,
      creator,
      goal,
      ideal,
      interactions,
      manner,
      senses,
      stats,
      type,
      weakness,
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
    <table className='DndSentientItem'>
    <tbody>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Тип предмета</th>
        <td
          className='DndSentientItem_cell'
          title={`${typeCategory} ${typeSubcategory}\n${typeDescription}`}
        >
          {typeName}
        </td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Параметры</th>
        <td className='DndSentientItem_cell'>
          <ul>
            {
              stats.map(
                ({id, value}) => (
                  <li key={id}>
                    {dndParamCollection[id].shortName} {value}
                  </li>
                )
              )
            }
          </ul>
        </td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Черты характера</th>
        <td className='DndSentientItem_cell DndSentientItem_cell-charText'>
          {char.good}, но {char.bad}.
        </td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Мировоззрение</th>
        <td className='DndSentientItem_cell DndSentientItem_cell-aligment'>{dndAligmentCollection[aligmentId].name.nominative}</td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Чувства</th>
        <td className='DndSentientItem_cell'>{senses}</td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Общение</th>
        <td className='DndSentientItem_cell'>{interactions.description}</td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Предназначение</th>
        <td className='DndSentientItem_cell'>
          <ReactMarkdown>{goal}</ReactMarkdown>
        </td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Манеры</th>
        <td className='DndSentientItem_cell'>{manner}</td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Идеал</th>
        <td className='DndSentientItem_cell DndSentientItem_cell-idealText'>{ideal}</td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Особенности</th>
        <td className='DndSentientItem_cell'>{communication}</td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Привязанность</th>
        <td className='DndSentientItem_cell'>{bond}</td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Слабость или тайна</th>
        <td className='DndSentientItem_cell'>{weakness}</td>
      </tr>
      <tr className='DndSentientItem_row'>
        <th className='DndSentientItem_cell DndSentientItem_cell-head'>Создатель</th>
        <td className='DndSentientItem_cell'>
          <ReactMarkdown>{creator}</ReactMarkdown>
        </td>
      </tr>
    </tbody>
    </table>
  )
}

export default DndSentientItem
