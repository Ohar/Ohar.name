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
    searchStr,
  },
) => {
  const creatureCollectionKeysList = Object.keys(creatureCollection)

  return (
    <section className={`DndCreatureCatalog DndCreatureCatalog-lettersCount_${creatureCollectionKeysList.length}`}>
      <PageTitle>Каталог существ (в разработке)</PageTitle>

      <input
        className='DndCreatureCatalog_input'
        onChange={({ target: { value } }) => onSearch({searchStr: value})}
        type='search'
        placeholder='Введите имя существа на русском или английском'
        value={searchStr}
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
                            ({id, ...rest }, i) => {
                              const { header, title } = generateCreatureNameStr(rest)

                              return (
                                <li
                                  className='DndCreatureCatalog_creatureItem'
                                  key={id}
                                  {
                                    ...(
                                      i === 0
                                        ? { 'data-letter':letter }
                                        : {}
                                    )
                                  }
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
          : null
      }

      {
        searchStr && !creatureCollectionKeysList.length
          ? <p className='DndCreatureCatalog_result'>Ничего не найдено</p>
          : null
      }
    </section>
  )
}

DndCreatureCatalogComponent.defaultProps = {
  creatureCollection: {},
  searchStr: '',
}

DndCreatureCatalogComponent.propTypes = {
  creatureCollection: PropTypes.object,
  onSearch: PropTypes.func.isRequired,
  searchStr: PropTypes.string,
}

export default DndCreatureCatalogComponent
