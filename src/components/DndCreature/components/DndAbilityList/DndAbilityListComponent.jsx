import React from "react"
import PropTypes from "prop-types"
import proschet from 'proschet'

import formatSpellCastDescription from './utils/formatSpellCastDescription'

import DndAbility from './components/DndAbility'

import "./DndAbilityListStyles.css"
import ReactMarkdown from 'react-markdown';

const getActionWord = proschet(['действие', 'действия', 'действий'])

const generateAbilityHeader = ({name, limit, cost}) => {
  const limitText = limit
    ? `${limit.count}/${limit.period}`
    : ''
  const costText = cost
    ? `стоит ${cost} ${getActionWord(cost)}`
    : ''
  const additionalText = limit || cost
    ? ` (${limitText}${costText})`
    : ''
  return `${name}${additionalText}.`
}

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
