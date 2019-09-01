const extendCreature = ({creature, parent, extendPropNameList}) => {
  const RESULT_DEFAULT = {}

  const extended = extendPropNameList.reduce(
    (result, listName) => creature.extendPropCollection[listName] && parent[listName]
      ? {
        ...result,
        [listName]: Array.isArray(creature.extendPropCollection[listName])
          ? [
            ...parent[listName],
            ...creature.extendPropCollection[listName],
          ]
          : {
            ...parent[listName],
            ...creature.extendPropCollection[listName],
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

module.exports = extendCreature
