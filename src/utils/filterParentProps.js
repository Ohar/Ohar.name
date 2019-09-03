const arrify = require('arrify')

const filterParentProps = ({creature, parent, propName}) => {
  const propParent = parent[propName]
  const propCreatureList = arrify(creature.filterPropCollection[propName])

  if (propName === 'actionList') {
    return propCreatureList.reduce(
      (result, propCreature) => {
        const propCreatureNameList = Object.keys(propCreature)

        return [
          ...result,
          ...propParent
            .filter(
              parentItem => {
                const propParentList = Object.keys(parentItem)

                return propCreatureNameList.every(
                  propCreatureName => (
                    propParentList.includes(propCreatureName)
                    && arrify(propCreature[propCreatureName]).some(
                      item => Object
                        .keys(item)
                        .every(
                          creaturePropName => {
                            const parentProp = parentItem[propCreatureName]

                            if (parentProp) {
                              if (typeof item[creaturePropName] === 'string') {
                                return item[creaturePropName] === parentProp[creaturePropName]
                              }

                              if (Array.isArray(item[creaturePropName])) {
                                return item[creaturePropName].includes(parentProp[creaturePropName])
                              }
                            }
                          }
                        )
                    )
                  )
                )
              }
            ),
        ]
      },
      []
    )
  }

  return false
}

module.exports = filterParentProps
