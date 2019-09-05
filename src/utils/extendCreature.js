const filterParentProps = require('./filterParentProps')

const extendCreature = ({creature, parent}) => {
  const RESULT_DEFAULT = {}

  const filterPropNameList = creature.filterPropCollection
    ? Object.keys(creature.filterPropCollection)
    : []

  const filteredParent = filterPropNameList.reduce(
    (parentObj, propName) => ({
      ...parentObj,
      [propName]: filterParentProps(
        {
          creature: creature[propName],
          parent: parent[propName],
        }
      ),
    }),
    {...parent}
  )

  const extendPropNameList = creature.extendPropCollection
    ? Object.keys(creature.extendPropCollection)
    : []

  const extended = extendPropNameList.reduce(
    (result, listName) => {
      const {extendPropCollection} = creature

      return extendPropCollection[listName] && filteredParent[listName]
        ? {
          ...result,
          [listName]: Array.isArray(extendPropCollection[listName])
            ? [
              ...filteredParent[listName],
              ...extendPropCollection[listName],
            ]
            : {
              ...filteredParent[listName],
              ...extendPropCollection[listName],
            },
        }
        : result
    },
    RESULT_DEFAULT
  )

  return extended === RESULT_DEFAULT
    ? creature
    : {
      ...filteredParent,
      ...creature,
      ...extended,
    }
}

module.exports = extendCreature
