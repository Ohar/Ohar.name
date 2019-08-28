import React from 'react'
import proschet from 'proschet'
import PropTypes from 'prop-types'

import DndLegendaryActionListComponent from './DndLegendaryActionListComponent'

const getLegActionWord = proschet([
  'легендарное действие',
  'легендарных действия',
  'легендарных действий'
])

const DndLegendaryActionListContainer = (
  {
    name,
    points,
    list,
    ...rest,
  }
) => {
  const variantText = list.length === 1
    ? `используя описанный ниже ${list[0].name}`
    : 'выбирая из представленных ниже вариантов'
  const entryText = `${name} может совершить ${points} ${getLegActionWord(points)}, ${variantText}. За один раз можно использовать только одно легендарное действие, и только в конце хода другого существа. ${name} восстанавливает использованные легендарные действия в начале своего хода.`

  return points
    ? (
      <DndLegendaryActionListComponent
        entry={entryText}
        points={points}
        list={list}
        {...rest}
      />
    )
    : null
}

DndLegendaryActionListContainer.defaultProps = {
  list: [],
}

DndLegendaryActionListContainer.propTypes = {
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  list: PropTypes.array,
}

export default DndLegendaryActionListContainer
