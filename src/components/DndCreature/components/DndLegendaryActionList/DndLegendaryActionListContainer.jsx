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
    ...rest,
  }
) => {
  const entryText = `${name} может совершить ${points} ${getLegActionWord(points)} выбирая из представленных ниже вариантов. За один раз можно использовать только одно легендарное действие, и только в конце хода другого существа. ${name} восстанавливает использованные легендарные действия в начале своего хода.`

  return points
    ? (
      <DndLegendaryActionListComponent
        entry={entryText}
        points={points}
        {...rest}
      />
    )
    : null
}

DndLegendaryActionListContainer.propTypes = {
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
}

export default DndLegendaryActionListContainer
