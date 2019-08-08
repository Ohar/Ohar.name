import React from "react"
import PropTypes from "prop-types"

import PageTitle from "@/components/PageTitle"
import DndCreature from "@/components/DndCreature"

import "./DndCreatureCatalogStyles.css"

const DndCreatureCatalogComponent = (
  {
    filteredCreatureList,
    isTooMuch,
    onSearch,
  },
) => (
  <section className='DndCreatureCatalog'>
    <PageTitle>Каталог существ</PageTitle>

    <input
      className='DndCreatureCatalog_input'
      onChange={onSearch}
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
                creature => (
                  <li
                    className='DndCreatureCatalog_item'
                    key={creature.id}
                  >
                    <DndCreature
                      creature={creature}
                      id={creature.id}
                    />
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
  isTooMuch: false,
  filteredCreatureList: [],
}

DndCreatureCatalogComponent.propTypes = {
  filteredCreatureList: PropTypes.array,
  onSearch: PropTypes.func.isRequired,
  isTooMuch: PropTypes.bool,
}

export default DndCreatureCatalogComponent
