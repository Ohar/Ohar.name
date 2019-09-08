const filterData = require('./filterData')

const extendCreature = ({creature, parent}) => {
  const RESULT_DEFAULT = {}

  const filterPropNameList = creature.filterPropCollection
    ? Object.keys(creature.filterPropCollection)
    : []

  const filteredParent = filterPropNameList.reduce(
    (parentObj, propName) => ({
      ...parentObj,
      [propName]: filterData(
        {
          filters: creature.filterPropCollection[propName],
          data: parent[propName],
        }
      ),
    }),
    {...parent}
  )

  const editPropNameList = creature.editPropCollection
    ? Object.keys(creature.editPropCollection)
    : []

  const editedParent = editPropNameList.reduce(
    (resultObj, propName) => ({
      ...resultObj,
      [propName]: creature.editPropCollection[propName](filteredParent),
    }),
    {}
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

  return extended === RESULT_DEFAULT && !filterPropNameList.length && !editPropNameList.length
    ? creature
    : {
      ...filteredParent,
      ...creature,
      ...extended,
      ...editedParent,
    }
}

module.exports = extendCreature
