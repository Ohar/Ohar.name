import React from "react"
import PropTypes from "prop-types"

import declension from "@/utils/declension"

import "./DndLegendaryActionListStyles.css"

const DndLegendaryActionListComponent = (
  {
    name,
    legendaryPoints,
  }
) => legendaryPoints && (
  <p className='DndLegendaryActionList'>
    {name} может совершить
    {declension(
      [
        'легендарное действие',
        'легендарных действия',
        'легендарных действий',
      ],
      legendaryPoints
    )},
    выбирая из представленных ниже вариантов.
    За один раз можно использовать только одно легендарное действие, и только
    в конце хода другого существа.
    {name} восстанавливает использованные легендарные действия в начале своего
    хода.
  </p>
)

DndLegendaryActionListComponent.propTypes = {
  name: PropTypes.string.isRequired,
  legendaryPoints: PropTypes.number.isRequired,
}

export default DndLegendaryActionListComponent
