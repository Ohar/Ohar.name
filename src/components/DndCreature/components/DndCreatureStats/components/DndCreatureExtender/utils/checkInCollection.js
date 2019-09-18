import arrify from 'arrify'

export default ({ creature, collection }) =>
  propName =>
    arrify(creature[propName])
      .some(
        id => collection[propName].includes(id),
      )
