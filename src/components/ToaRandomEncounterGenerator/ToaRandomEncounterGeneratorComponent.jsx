import React from 'react'

import RadioSet from '@/components/RadioSet'
import PageTitle from "@/components/PageTitle"

import biomeList from './const/biomeList'
import additionalZombiesRadioList from './const/additionalZombiesRadioList'

import './ToaRandomEncounterGeneratorStyles.css'

const ToaRandomEncounterGeneratorComponent = (
  {
    biome,
    encounterList,
    encounterEndDay,
    encounterNight,
    encounterStartDay,
    generateTodayEncounters,
    isEncounterHappensOnFirstPartOfNight,
    onBiomeChange,
    setAdditionalZombies,
    useAdditionalZombies,
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
      <RadioSet
        chosen={useAdditionalZombies}
        fieldList={additionalZombiesRadioList}
        name='biome'
        onChange={setAdditionalZombies}
        title='Дополнительные зомби'
      />

      <button
        className='ToaRandomEncounterGenerator_btnGenerate'
        onClick={generateTodayEncounters}
      >
        Сгенерировать столкновение
      </button>
    </section>

    <table className='ToaRandomEncounterGenerator_table'>
      <thead className='ToaRandomEncounterGenerator_thead'>
      <tr className='ToaRandomEncounterGenerator_row'>
        <th className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'>Бросок к20</th>
        <th className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'>Время суток</th>
        <th className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'>Дежурство</th>
        <th className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'>Название столкновения</th>
        <th className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'>Описание столкновения</th>
      </tr>
      </thead>
    <tbody>
      {
        encounterList
          .map(
            ({encounter, d20Roll}, i) => (
              <tr
                className='ToaRandomEncounterGenerator_row'
                key={i}
              >
                <th
                  colSpan
                  className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'
                >
                  {d20Roll}
                </th>
                {i === 0 && (
                  <th
                    colSpan='2'
                    className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'
                  >
                    Утро
                  </th>
                )}
                {i === 1 && (
                  <th
                    colSpan='2'
                    className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'
                  >
                    Вечер
                  </th>
                )}
                {i === 2 && (
                  <th
                    rowSpan='2'
                    className='ToaRandomEncounterGenerator_cell ToaRandomEncounterGenerator_cell-head'
                  >
                    Ночь
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
