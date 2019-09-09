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

      return extendPropCollection[listName]
        ? {
          ...result,
          [listName]: Array.isArray(extendPropCollection[listName])
            ? [
              ...(filteredParent[listName] || []),
              ...extendPropCollection[listName],
            ]
            : {
              ...(filteredParent[listName] || {}),
              ...extendPropCollection[listName],
            },
        }
        : result
    },
    RESULT_DEFAULT
  )

  const resultObj = (
    extended === RESULT_DEFAULT
    && !filterPropNameList.length
    && !editPropNameList.length
  )
    ? creature
    : {
      ...filteredParent,
      ...creature,
      ...extended,
      ...editedParent,
    }

  const replaceEmptyPropNameList = creature.replaceEmptyPropCollection
    ? Object.keys(creature.replaceEmptyPropCollection)
    : []

  const replaceEmptyParent = replaceEmptyPropNameList.reduce(
    (parentObj, propName) => ({
      ...parentObj,
      [propName]: parentObj[propName] || creature.replaceEmptyPropCollection[propName](parentObj),
    }),
    {...resultObj}
  )

  return replaceEmptyPropNameList.length
    ? replaceEmptyParent
    : resultObj
}

module.exports = extendCreature
