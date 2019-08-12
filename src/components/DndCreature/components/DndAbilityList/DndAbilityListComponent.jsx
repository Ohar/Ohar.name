import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from 'react-markdown';

import formatSpellCastDescription from './utils/formatSpellCastDescription'
import generateAbilityHeader from './utils/generateAbilityHeader'

import DndAbility from './components/DndAbility'

import "./DndAbilityListStyles.css"

const DndAbilityListComponent = ({ header, list, name, spellCast, isFemale, entry }) => (
  <section className='DndAbilityList'>
    {
      header && (
        <header className='DndAbilityList_header'>{header}</header>
      )
    }
    {
      entry && (
        <ReactMarkdown className='DndAbilityList_entry'>
          {entry}
        </ReactMarkdown>
      )
    }

    <ul className='DndAbilityList_list'>
      {
        list.length
          ? list.map(
            ({description, ...rest}) => {
              const itemHeader = generateAbilityHeader(rest)

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
          <DndAbility header={
            spellCast.isInnerSpellCasting
              ? 'Врождённое колдовство'
              : 'Использование заклинаний'
          }>
            {formatSpellCastDescription({spellCast, isFemale, name})}
          </DndAbility>
        )
      }
    </ul>
  </section>
)

DndAbilityListComponent.propTypes = {
  entry: PropTypes.string,
  header: PropTypes.string,
  isFemale: PropTypes.bool,
  list: PropTypes.array,
  name: PropTypes.string,
  spellCast: PropTypes.object,
}

DndAbilityListComponent.defaultProps = {
  entry: '',
  header: '',
  isFemale: false,
  list: [],
  name: '',
  spellCast: null,
}

export default DndAbilityListComponent
