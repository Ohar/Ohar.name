import React from 'react'

import RadioSet from '@/components/RadioSet'
import PageTitle from "@/components/PageTitle"

import biomeList from './const/biomeList'
import additionalZombiesRadioList from './const/additionalZombiesRadioList'

import './DndToaEncounterGeneratorStyles.css'

const DndToaEncounterGeneratorComponent = (
  {
    biome,
    encounterList,
    generateTodayEncounters,
    isEncounterHappensOnFirstPartOfNight,
    onBiomeChange,
    setAdditionalZombies,
    useAdditionalZombies,
  }
) => (
  <section className='DndToaEncounterGenerator'>
    <PageTitle>Гробница аннигиляции: генератор случайных столкновений</PageTitle>

    <section className="DndToaEncounterGenerator_controls">
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
        className='DndToaEncounterGenerator_btnGenerate'
        onClick={generateTodayEncounters}
      >
        Сгенерировать столкновение
      </button>
    </section>

    <table className='DndToaEncounterGenerator_table'>
      <thead className='DndToaEncounterGenerator_thead'>
      <tr className='DndToaEncounterGenerator_row'>
        <th className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-head'>Бросок к20</th>
        <th className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-head'>Время суток</th>
        <th className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-head'>Дежурство</th>
        <th className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-head'>Название столкновения</th>
        <th className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-head'>Описание столкновения</th>
      </tr>
      </thead>
    <tbody>
      {
        encounterList
          .map(
            ({encounter, d20Roll}, i) => (
              <tr
                className='DndToaEncounterGenerator_row'
                key={i}
              >
                <th
                  colSpan
                  className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-head'
                >
                  {d20Roll}
                </th>
                {i === 0 && (
                  <th
                    colSpan='2'
                    className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-head'
                  >
                    Утро
                  </th>
                )}
                {i === 1 && (
                  <th
                    colSpan='2'
                    className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-head'
                  >
                    Вечер
                  </th>
                )}
                {i === 2 && (
                  <th
                    rowSpan='2'
                    className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-head'
                  >
                    Ночь
                  </th>
                )}
                {(i === 2 || i === 3) && (
                  <th className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-head'>
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
                        <th className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-head'>{encounter.title}</th>
                        <td className='DndToaEncounterGenerator_cell'>
                          {
                            encounter.description.split('\n').map(
                              (item, i) => (
                                <p
                                  className='DndToaEncounterGenerator_paragraph'
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
                        className='DndToaEncounterGenerator_cell DndToaEncounterGenerator_cell-empty'
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

export default DndToaEncounterGeneratorComponent
