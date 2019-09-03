const filterParentProps = ({creature, parent, propName}) => {
  const propParent = parent[propName]
  const propCreature = creature.filterPropCollection[propName]

  if (propName === 'actionList') {
    const propCreatureList = Object.keys(propCreature)

    return propParent
      .filter(
        parentItem => {
          const propParentList = Object.keys(parentItem)

          return propCreatureList.every(
            propCreatureName => (
              propParentList.includes(propCreatureName)
              && Object
                .keys(propCreature[propCreatureName])
                .every(
                  creatuPropName => propCreature[propCreatureName][creatuPropName]
                    .includes(parentItem[propCreatureName][creatuPropName])
                )
            )
          )
        }
      )
  }

  return false
}

module.exports = filterParentProps
