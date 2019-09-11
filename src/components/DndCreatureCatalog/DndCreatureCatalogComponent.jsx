import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import PageTitle from "@/components/PageTitle"

import generateCreatureNameStr from "@/utils/generateCreatureNameStr"
import generateCreaturePageUrlById from "@/utils/generateCreaturePageUrlById"

import DndCreatureFilterList from "./components/DndCreatureFilterList"

import "./DndCreatureCatalogStyles.less"

const DndCreatureCatalogComponent = (
  {
    creatureCollection,
    onSearch,
    filterCollection,
  },
) => {
  const creatureCollectionKeysList = Object.keys(creatureCollection)

  return (
    <section className={`DndCreatureCatalog DndCreatureCatalog-lettersCount_${creatureCollectionKeysList.length}`}>
      <PageTitle>Каталог существ (в разработке)</PageTitle>

      <DndCreatureFilterList
        filterCollection={filterCollection}
        onSearch={onSearch}
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
    </section>
  )
}

DndCreatureCatalogComponent.defaultProps = {
  creatureCollection: {},
}

DndCreatureCatalogComponent.propTypes = {
  creatureCollection: PropTypes.object,
  filterCollection: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default DndCreatureCatalogComponent
