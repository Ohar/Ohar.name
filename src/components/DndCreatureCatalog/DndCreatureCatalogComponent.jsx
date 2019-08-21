import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import PageTitle from "@/components/PageTitle"

import generateCreatureNameStr from "@/utils/generateCreatureNameStr"
import generateCreaturePageUrlById from "@/utils/generateCreaturePageUrlById"

import "./DndCreatureCatalogStyles.less"

const DndCreatureCatalogComponent = (
  {
    creatureCollection,
    onSearch,
  },
) => {
  const creatureCollectionKeysList = Object.keys(creatureCollection)

  return (
    <section className='DndCreatureCatalog'>
      <PageTitle>Каталог существ (в разработке)</PageTitle>

      <input
        className='DndCreatureCatalog_input'
        onChange={({ target: { value } }) => onSearch(value)}
        type='search'
        placeholder='Введите строку поиска'
        autoFocus
      />

      {
        creatureCollectionKeysList.length
          ? (
            <ul className='DndCreatureCatalog_letterList'>
              {
                creatureCollectionKeysList.map(
                  letter => (
                    <li
                      className='DndCreatureCatalog_letterItem'
                      key={letter}
                    >
                      <ul
                        className='DndCreatureCatalog_creatureList'
                      >
                        {
                          creatureCollection[letter].map(
                            ({id, ...rest }) => {
                              const { header, title } = generateCreatureNameStr(rest)
                              return (
                                <li
                                  className='DndCreatureCatalog_creatureItem'
                                  key={id}
                                  data-letter={letter}
                                >
                                  <Link
                                    title={title}
                                    to={generateCreaturePageUrlById(id)}
                                  >
                                    {header}
                                  </Link>
                                </li>
                              )
                            }
                          )
                        }
                      </ul>
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
}

DndCreatureCatalogComponent.defaultProps = {
  creatureCollection: {},
}

DndCreatureCatalogComponent.propTypes = {
  creatureCollection: PropTypes.object,
  onSearch: PropTypes.func.isRequired,
}

export default DndCreatureCatalogComponent
