import React from 'react'
import PropTypes from 'prop-types'

import BtnGenerate from "@/components/BtnGenerate"
import PageTitle from "@/components/PageTitle"

import './DndSimpleTableGenerator.less'

const DndSimpleTableGeneratorComponent = (
  {
    children,
    diceRollList,
    generate,
    rollCount,
    rollCountMax,
    showDiceRolls,
    showRowNumber,
    showTableHeader,
    title,
    updateRollCount,
  }
) => (
  <section className='DndSimpleTableGenerator'>
    <PageTitle>{title}</PageTitle>

    <div className='DndSimpleTableGenerator_controls'>
      {children}

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

      <BtnGenerate
        onClick={generate}
        className='DndSimpleTableGenerator_btnGenerate'
      />
    </div>

    <table className='DndSimpleTableGenerator_table'>
      {
        showTableHeader
          ? (
            <thead className='DndSimpleTableGenerator_thead'>
            <tr className='DndSimpleTableGenerator_row'>
              {
                showDiceRolls
                  ? (
                    <th className='DndSimpleTableGenerator_cell DndSimpleTableGenerator_cell-head'>
                      Бросок к100
                    </th>
                  )
                  : null
              }
              {
                showRowNumber
                  ? (
                    <th className='DndSimpleTableGenerator_cell DndSimpleTableGenerator_cell-head'>
                      №
                    </th>
                  )
                  : null
              }
              <th className='DndSimpleTableGenerator_cell DndSimpleTableGenerator_cell-head'>
                Результат
              </th>
            </tr>
            </thead>
          )
          : null
      }

      <tbody>
      {
        diceRollList.map(
          ({diceRoll, treasure: {id, description}}, i) => (
            <tr
              className={`DndSimpleTableGenerator_row DndSimpleTableGenerator_row-${id}`}
              key={`${i}_${diceRoll}_${id}`}
            >
              {
                showDiceRolls
                  ? <td className='DndSimpleTableGenerator_cell'>{diceRoll}</td>
                  : null
              }
              {
                showRowNumber
                  ? (
                    <td className='DndSimpleTableGenerator_cell DndSimpleTableGenerator_cell-rowNum'>
                      {i + 1}
                    </td>
                  )
                  : null
              }
              <td className='DndSimpleTableGenerator_cell'>{description}</td>
            </tr>
          )
        )
      }
      </tbody>
    </table>
  </section>
)

DndSimpleTableGeneratorComponent.defaultProps = {
  children: null,
  showDiceRolls: true,
  showRowNumber: false,
  showTableHeader: true,
}

DndSimpleTableGeneratorComponent.propTypes = {
  children: PropTypes.any,
  diceRollList: PropTypes.array.isRequired,
  generate: PropTypes.func.isRequired,
  rollCount: PropTypes.number.isRequired,
  rollCountMax: PropTypes.number.isRequired,
  showDiceRolls: PropTypes.bool,
  showRowNumber: PropTypes.bool,
  showTableHeader: PropTypes.bool,
  title: PropTypes.string.isRequired,
  updateRollCount: PropTypes.func.isRequired,
}

export default DndSimpleTableGeneratorComponent
