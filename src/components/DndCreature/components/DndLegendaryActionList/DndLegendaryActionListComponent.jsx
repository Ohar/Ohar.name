import React from 'react'
import proschet from 'proschet'
import PropTypes from 'prop-types'

import DndAbilityList from './../DndAbilityList'

import './DndLegendaryActionListStyles.css'

const getLegActionWord = proschet([
  'легендарное действие',
  'легендарных действия',
  'легендарных действий'
])

const DndLegendaryActionListComponent = (
  {
    name,
    points,
    ...rest,
  }
) => {
  const entryText = `${name} может совершить ${points} ${getLegActionWord(points)} выбирая из представленных ниже вариантов. За один раз можно использовать только одно легендарное действие, и только в конце хода другого существа. ${name} восстанавливает использованные легендарные действия в начале своего хода.`

  return (
    <DndAbilityList
      header='Легендарные действия'
      entry={entryText}
      {...rest}
    />
  )
}

DndLegendaryActionListComponent.propTypes = {
  list: PropTypes.array,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
}

export default DndLegendaryActionListComponent
