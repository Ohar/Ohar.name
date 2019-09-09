import arrify from 'arrify';

export default ({ creature, collection }) =>
  propName =>
    arrify(creature[propName])
      .every(
        id => collection[propName].includes(id)
      )
