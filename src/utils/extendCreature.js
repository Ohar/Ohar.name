const filterData = require('./filterData')

const extendCreature = ({creature, parent}) => {
  const RESULT_DEFAULT = {}

  const filteredParent = Object
    .keys(creature.filterPropCollection || {})
    .reduce(
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

  const editedParent = Object
    .keys(creature.editPropCollection || {})
    .reduce(
      (resultObj, propName) => ({
        ...resultObj,
        [propName]: creature.editPropCollection[propName](filteredParent),
      }),
      {}
    )

  const extended = Object
    .keys(creature.extendPropCollection || {})
    .reduce(
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
    && !creature.extendPropCollection
    && !creature.filterPropCollection
    && !creature.editPropCollection
  )
    ? creature
    : {
      ...filteredParent,
      ...creature,
      ...extended,
      ...editedParent,
    }

  const replaceEmptyParent = Object
    .keys(creature.replaceEmptyPropCollection || {})
    .reduce(
      (parentObj, propName) => ({
        ...parentObj,
        [propName]: parentObj[propName] || creature.replaceEmptyPropCollection[propName](parentObj),
      }),
      {...resultObj}
    )

  return creature.replaceEmptyPropCollection
    ? replaceEmptyParent
    : resultObj
}

module.exports = extendCreature
