import React from "react"
import PropTypes from "prop-types"

import formatSpellCastDescription from './utils/formatSpellCastDescription'

import DndAbility from './components/DndAbility'

import "./DndAbilityListStyles.css"

const DndAbilityListComponent = ({ header, list, name, spellCast, isFemale }) => (
  <section className='DndAbilityList'>
    {
      header && (
        <header className='DndAbilityList_header'>{header}</header>
      )
    }

    <ul className='DndAbilityList_list'>
      {
        list.length
          ? list.map(
            ({name, description, limit}) => {
              const itemHeader = limit
                ? `${name} (${limit.count}/${limit.period}).`
                : `${name}.`

              return (
                <DndAbility header={itemHeader}>
                  {description}
                </DndAbility>
              )
            }
          )
          : null
      }

      {
        spellCast && (
          <DndAbility header='Использование заклинаний'>
            {formatSpellCastDescription({spellCast, isFemale, name})}
          </DndAbility>
        )
      }
    </ul>
  </section>
)

DndAbilityListComponent.propTypes = {
  list: PropTypes.array,
}

DndAbilityListComponent.defaultProps = {
  list: [],
}

export default DndAbilityListComponent
