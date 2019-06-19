import React from 'react'

import BtnGenerate from "@/components/BtnGenerate"
import PageTitle from "@/components/PageTitle"

import './DndSimpleTableGenerator.css'

const DndSimpleTableGeneratorComponent = (
  {
    title,
    diceRollList,
    generate,
    rollCount,
    rollCountMax,
    updateRollCount,
  }
) => (
  <section className='DndSimpleTableGenerator'>
    <PageTitle>{title}</PageTitle>
    <label className='DndSimpleTableGenerator_label'>
      <p>Сгенерировать раз: {rollCount}</p>
      <input
        className='DndSimpleTableGenerator_range'
        type='range'
        min='1'
        max={rollCountMax}
        value={rollCount}
        onChange={updateRollCount}
      />
    </label>

    <BtnGenerate onClick={generate}/>

    <table className='DndSimpleTableGenerator_table'>
      <thead className='DndSimpleTableGenerator_thead'>
      <tr className='DndSimpleTableGenerator_row'>
        <th className='DndSimpleTableGenerator_cell DndSimpleTableGenerator_cell-head'>Бросок к100</th>
        <th className='DndSimpleTableGenerator_cell DndSimpleTableGenerator_cell-head'>Результат</th>
      </tr>
      </thead>
      <tbody>
      {
        diceRollList.map(
          ({diceRoll, treasure: {id, description}}, i) => (
            <tr
              className='DndSimpleTableGenerator_row'
              key={`${i}_${diceRoll}_${id}`}
            >
              <td className='DndSimpleTableGenerator_cell'>{diceRoll}</td>
              <td className='DndSimpleTableGenerator_cell'>{description}</td>
            </tr>
          )
        )
      }
      </tbody>
    </table>
  </section>
)

export default DndSimpleTableGeneratorComponent
