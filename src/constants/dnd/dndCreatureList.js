const prepareForSearch = require('./../../utils/prepareForSearch')
const extendCreature = require('./../../utils/extendCreature')
const generateTextLinks = require('./../../utils/generateTextLinks')

const SEARCH_PROP_NAME = require('./../SEARCH_PROP_NAME')
const dndCreatureRawList = require('./dndCreatureRawList')

const dndCreatureRawCollection = dndCreatureRawList.reduce(
  (collection, creature) => ({
    ...collection,
    [creature.id]: creature,
  }),
  {}
)

const handleListWithDescriptions = list => list
  ? list.map(
    action => action.description
      ? {
        ...action,
        description: generateTextLinks(action.description),
      }
      : action
  )
  : []

const dndCreatureList = dndCreatureRawList
  .map(
    creature => {
      if (creature.parentId) {
        const parent = dndCreatureRawCollection[creature.parentId]
        const creatureFilled = extendCreature({creature, parent})

        dndCreatureRawCollection[creature.id] = creatureFilled

        return creatureFilled
      }

      return creature
    }
  )
  .sort(
    ({name: A}, {name: B}) => A > B ? 1 : -1
  )
  .map(
  creature => ({
    ...creature,
    isFemale: Boolean(creature.isFemale),
    actionList: handleListWithDescriptions(creature.actionList),
    featureList: handleListWithDescriptions(creature.featureList),
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
