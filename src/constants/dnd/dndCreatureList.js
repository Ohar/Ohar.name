import prepareForSearch from '@/utils/prepareForSearch'

import SEARCH_PROP_NAME from '@/constants/SEARCH_PROP_NAME'
import dndCreatureRawList from '@/constants/dnd/dndCreatureRawList'

const dndCreatureRawCollection = dndCreatureRawList.reduce(
  (collection, creature) => ({
    ...collection,
    [creature.id]: creature,
  }),
  {}
)

const extendList = ({creature, parent, nameList}) => {
  const RESULT_DEFAULT = {}

  const extended = nameList.reduce(
    (result, listName) => creature[listName] && parent[listName]
      ? {
        ...result,
        [listName]: [
          ...parent[listName],
          ...creature[listName],
        ]
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

const dndCreatureList = dndCreatureRawList
  .map(
    creature => {
      const parent = creature.parentId
        ? dndCreatureRawCollection[creature.parentId]
        : {}

      const creatureFilled = {
        ...parent,
        ...extendList({creature, parent, nameList: ['actionList', 'featureList']}),
      }

      if (creature.parentId) {
        dndCreatureRawCollection[creature.id] = creatureFilled
      }

      return creatureFilled
    }
  )
  .sort(
    ({name: A}, {name: B}) => A > B
  )
  .map(
  creature => ({
    ...creature,
    isFemale: Boolean(creature.isFemale),
    [SEARCH_PROP_NAME]: prepareForSearch(
      [
        creature.name,
        creature.nameAlt || '',
        creature.nameEn,
        creature.nameEnAlt || '',
        creature.description || '',
      ]
        .filter(e => e)
        .join('\n')
    ),
  })
)

export default dndCreatureList

export const dndCreatureCollection = dndCreatureList.reduce(
  (collection, creature) => ({
    ...collection,
    [creature.id]: creature,
  }),
  {}
)

export const dndCreatureNameList = dndCreatureList.map(
  ({id, name}) => ({
    id,
    name
  })
)
