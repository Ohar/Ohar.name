const arrify = require('arrify')

const prepareForSearch = require('./../../utils/prepareForSearch')
const extendCreature = require('./../../utils/extendCreature')

const SEARCH_PROP_NAME = require('./../SEARCH_PROP_NAME')
const dndCreatureRawList = require('./dndCreatureRawList')

const dndCreatureRawCollection = dndCreatureRawList.reduce(
  (collection, creature) => ({
    ...collection,
    [creature.id]: creature,
  }),
  {}
)

const handleDescription = (
  {
    description,
    name,
    nameAlt,
    nameEn,
    nameEnAlt,
  }
) => arrify(description)
  .map(
    item => typeof item === 'string'
      ? {
        header: `${name}${nameAlt ? ` (${nameAlt})` : ''}`,
        subHeader: `${nameEn}${nameEnAlt ? ` (${nameEnAlt})` : ''}`,
        text: item,
      }
      : item
  )
  .map(
    ({ text, ...rest }) => ({
      text: text.replace(/CREATURE:/g, '/dnd/creature-catalog/'),
      ...rest
    })
  )

const dndCreatureList = dndCreatureRawList
  .map(
    creature => {
      const parent = creature.parentId
        ? dndCreatureRawCollection[creature.parentId]
        : {}

      const creatureFilled = extendCreature({creature, parent})

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
    description: handleDescription(creature),
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
