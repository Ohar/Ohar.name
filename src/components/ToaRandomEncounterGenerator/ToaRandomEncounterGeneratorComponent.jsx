import React from 'react'

import RadioSet from '@/components/RadioSet'
import PageTitle from "@/components/PageTitle"

import biomeList from './const/biomeList'

import './ToaRandomEncounterGeneratorStyles.css'

const ToaRandomEncounterGeneratorComponent = (
  {
    biome,
    diceResults,
    encounterEndDay,
    encounterNight,
    encounterStartDay,
    generateTodayEncounters,
    isEncounterHappensOnFirstPartOfNight,
    onBiomeChange,
  }
) => (
  <section className='ToaRandomEncounterGenerator'>
    <PageTitle>Гробница аннигиляции: генератор случайных столкновений</PageTitle>

    <section className="ToaRandomEncounterGenerator_controls">
      <RadioSet
        chosen={biome}
        fieldList={biomeList}
        name='biome'
        onChange={onBiomeChange}
        title='Тип местности'
      />

      <button
        className='ToaRandomEncounterGenerator_btnGenerate'
        onClick={generateTodayEncounters}
      >
        Сгенерировать столкновение {JSON.stringify(diceResults)}
      </button>
    </section>

    <table className='ToaRandomEncounterGenerator_table'>
      <thead className='ToaRandomEncounterGenerator_thead'>
      <tr className='ToaRandomEncounterGenerator_row'>
        <th className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'>Время суток</th>
        <th className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'>Дежурство</th>
        <th className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'>Название столкновения</th>
        <th className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'>Описание столкновения</th>
      </tr>
      </thead>
    <tbody>
      {
        [
          encounterStartDay,
          encounterEndDay,
          encounterNight,
          encounterNight,
        ]
          .map(
            (encounter, i) => (
              <tr
                className='ToaRandomEncounterGenerator_row'
                key={i}
              >
                {i === 0 && (
                  <th
                    colSpan='2'
                    className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'
                  >
                    Утро ({diceResults[i]})
                  </th>
                )}
                {i === 1 && (
                  <th
                    colSpan='2'
                    className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'
                  >
                    Вечер ({diceResults[i]})
                  </th>
                )}
                {i === 2 && (
                  <th
                    rowSpan='2'
                    className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'
                  >
                    Ночь ({diceResults[i]})
                  </th>
                )}
                {(i === 2 || i === 3) && (
                  <th className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'>
                    {i === 2 && 'Первое дежурство'}
                    {i === 3 && 'Второе дежурство'}
                  </th>
                )}
                {
                  encounter && (
                    i <= 1
                    || i === 2 && isEncounterHappensOnFirstPartOfNight
                    || i === 3 && !isEncounterHappensOnFirstPartOfNight
                  )
                    ? (
                      <>
                        <th className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'>{encounter.title}</th>
                        <td className='ToaRandomEncounterGenerator_cell'>
                          {
                            encounter.description.split('\n').map(
                              (item, i) => (
                                <p
                                  className='ToaRandomEncounterGenerator_paragraph'
                                  key={i}
                                >
                                  {item}
                                </p>
                              )
                            )
                          }
                        </td>
                      </>
                    )
                    : (
                      <td
                        className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-empty'
                        colSpan='2'
                        key={i}
                      >
                        —
                      </td>
                    )
                }
              </tr>
            )
          )
      }
    </tbody>
    </table>
  </section>
)

export default ToaRandomEncounterGeneratorComponent
