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

const creatureData = [
  {
    name: {
      bar: [2, 3],
    },
  },
  {
    name: 'Киянка',
  },
]

const parentData = {
  name: {
    bar: 3,
    buzz: 3,
  },
}

const result = foo({
  creature: creatureData,
  parent: parentData,
})

console.log('result', result);
