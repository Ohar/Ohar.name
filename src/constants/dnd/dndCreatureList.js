const prepareForSearch = require('./../../utils/prepareForSearch')

const SEARCH_PROP_NAME = require('./../SEARCH_PROP_NAME')
const dndCreatureRawList = require('./dndCreatureRawList')

const dndCreatureRawCollection = dndCreatureRawList.reduce(
  (collection, creature) => ({
    ...collection,
    [creature.id]: creature,
  }),
  {}
)

const extendList = ({creature, parent, extendPropNameList}) => {
  const RESULT_DEFAULT = {}

  const extended = extendPropNameList.reduce(
    (result, listName) => creature[listName] && parent[listName]
      ? {
        ...result,
        [listName]: Array.isArray(creature[listName])
          ? [
            ...parent[listName],
            ...creature[listName],
          ]
          : {
            ...parent[listName],
            ...creature[listName],
          },
      }
      : result,
    RESULT_DEFAULT
  )

  return extended === RESULT_DEFAULT
    ? creature
    : {
      ...creature,
      ...extended,
    }
}

const handleDescription = text => text
  .replace(/CREATURE:/g, '/dnd/creature-catalog/')

const dndCreatureList = dndCreatureRawList
  .map(
    creature => {
      const parent = creature.parentId
        ? dndCreatureRawCollection[creature.parentId]
        : {}

      const extendPropNameList = creature.extendPropCollection
        ? Object.keys(creature.extendPropCollection)
        : []

      const creatureFilled = {
        ...parent,
        ...extendList(
          {
            creature,
            parent,
            extendPropNameList,
          }
        ),
      }

      if (creature.parentId) {
        dndCreatureRawCollection[creature.id] = creatureFilled
      }

      return creatureFilled
    }
  )
  .sort(
    ({name: A}, {name: B}) => A > B ? 1 : -1
  )
  .map(
  creature => ({
    ...creature,
    isFemale: Boolean(creature.isFemale),
    description: handleDescription(creature.description),
    [SEARCH_PROP_NAME]: prepareForSearch(
      [
        creature.name,
        creature.nameAlt || '',
        creature.nameEn,
        creature.nameEnAlt || '',
      ]
        .filter(e => e)
        .join('\n')
    ),
  })
)

module.exports = dndCreatureList

module.exports.dndCreatureCollection = dndCreatureList.reduce(
  (collection, creature) => ({
    ...collection,
    [creature.id]: creature,
  }),
  {}
)

module.exports.dndCreatureNameList = dndCreatureList.map(
  ({id, name, nameAlt, nameEn, nameEnAlt, description, ...rest}) => ({
    id,
    name,
    nameAlt,
    nameEn,
    nameEnAlt,
    description,
    [SEARCH_PROP_NAME]: rest[SEARCH_PROP_NAME],
  })
)
