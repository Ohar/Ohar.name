import React from 'react'

import PageTitle from "@/components/PageTitle"
import './DndToaTreasureGenerator.css'

const DndToaTreasureGeneratorComponent = (
  {
    diceRollList,
    generate,
    rollCount,
    rollCountMax,
    updateRollCount,
  }
) => (
  <section className='DndToaTreasureGenerator'>
    <PageTitle>Генератор выпавших сокровищ для кампании Гробницы Аннигиляции</PageTitle>
    <label className='DndToaTreasureGenerator_label'>
      <p>Сгенерировать сокровищ: {rollCount}</p>
      <input
        className='DndToaTreasureGenerator_range'
        type='range'
        max={rollCountMax}
        value={rollCount}
        onChange={updateRollCount}
      />
    </label>

    <button
      className='DndToaTreasureGenerator_btnGenerate'
      onClick={generate}
    >
      Сгенерировать
    </button>

    <table className='DndToaTreasureGenerator_table'>
      <thead className='DndToaTreasureGenerator_thead'>
      <tr className='DndToaTreasureGenerator_row'>
        <th className='DndToaTreasureGenerator_cell DndToaTreasureGenerator_cell-head'>Бросок к100</th>
        <th className='DndToaTreasureGenerator_cell DndToaTreasureGenerator_cell-head'>Сокровище</th>
      </tr>
      </thead>
      <tbody>
      {
        diceRollList.map(
          ({diceRoll, treasure: {id, description}}, i) => (
            <tr
              className='DndToaTreasureGenerator_row'
              key={`${i}_${diceRoll}_${id}`}
            >
              <td className='DndToaTreasureGenerator_cell'>{diceRoll}</td>
              <td className='DndToaTreasureGenerator_cell'>{description}</td>
            </tr>
          )
        )
      }
      </tbody>
    </table>
  </section>
)

export default DndToaTreasureGeneratorComponent
