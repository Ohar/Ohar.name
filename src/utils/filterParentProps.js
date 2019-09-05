const arrify = require('arrify')

function foo ({parent, creature}) {
  console.log(1, parent, creature);
  if (parent && creature) {
    console.log(2);
    return arrify(creature)
      .some(
        creatureItem => {
          console.log(3, creatureItem);

          const isPrimitive = (
            typeof creatureItem === 'string'
            || typeof creatureItem === 'number'
          )

          console.log(4, isPrimitive);

          const itemResult = isPrimitive
            ? creatureItem === parent
            : Object
              .keys(creatureItem)
              .every(
                propName => {
                  console.log(5, propName);
                  const everyResult = foo(
                    {
                      parent: parent[propName],
                      creature: creatureItem[propName],
                    }
                  )

                  console.log(6, everyResult);

                  return everyResult
                }
              )

          console.log(7, itemResult);

          return itemResult
        }
      )
  }
  return false
}

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

module.exports = foo
