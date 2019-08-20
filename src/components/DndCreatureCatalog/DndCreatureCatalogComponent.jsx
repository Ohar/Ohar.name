import React from "react"
import PropTypes from "prop-types"

import PageTitle from "@/components/PageTitle"
import DndCreature from "@/components/DndCreature"
import dndCreatureTypeList from '@/constants/dnd/dndCreatureTypeList';

import "./DndCreatureCatalogStyles.less"

const filterList = [
  {
    header: 'Тип',
    name: 'type',
    optionList: dndCreatureTypeList.map(
      ({id, name: {singular: {nominative: text}}}) => ({
        text,
        id,
      })
    )
  },
]

const DndCreatureCatalogComponent = (
  {
    filteredCreatureList,
    onSearch,
  },
) => (
  <section className='DndCreatureCatalog'>
    <PageTitle>Каталог существ (в разработке)</PageTitle>

    <section>
      Фильтры
      <ul>
        {
          filterList.map(
            ({header, name, optionList}) => (
              <li key={name}>
                <label>
                  {header}
                  <select name={name}>
                    {
                      optionList.map(
                        ({text, id}) => (
                          <option
                            value={id}
                            key={id}
                          >
                            {text}
                          </option>
                        )
                      )
                    }
                  </select>
                </label>
              </li>
            )
          )
        }
      </ul>
    </section>

    <input
      className='DndCreatureCatalog_input'
      onChange={({ target: { value } }) => onSearch(value)}
      type='search'
      placeholder='Введите строку поиска'
      autoFocus
    />

    {
      filteredCreatureList.length
        ? (
          <ul className='DndCreatureCatalog_list'>
            {
              filteredCreatureList.map(
                ({id}) => (
                  <li
                    className='DndCreatureCatalog_item'
                    key={id}
                  >
                    <DndCreature id={id}/>
                  </li>
                )
              )
            }
          </ul>
        )
        : <p className='DndCreatureCatalog_result'>Ничего не найдено</p>
    }
  </section>
)

DndCreatureCatalogComponent.defaultProps = {
  filteredCreatureList: [],
}

DndCreatureCatalogComponent.propTypes = {
  filteredCreatureList: PropTypes.array,
  onSearch: PropTypes.func.isRequired,
}

export default DndCreatureCatalogComponent
