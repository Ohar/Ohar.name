import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from 'react-markdown';

import formatSpellCastDescription from './utils/formatSpellCastDescription'
import generateAbilityHeader from './utils/generateAbilityHeader'

import DndAbility from './components/DndAbility'

import "./DndAbilityListStyles.less"

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
            ({description, ...rest}, i) => {
              const itemHeader = generateAbilityHeader(rest)

              return (
                <DndAbility
                  header={itemHeader}
                  key={i}
                >
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
            (
              spellCast.title || spellCast.spellCasterLevel
                ? 'Использование заклинаний'
                : 'Врождённое колдовство'
            ) + (
              spellCast.comment
                ? ` (${spellCast.comment})`
                : ''
            )
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
