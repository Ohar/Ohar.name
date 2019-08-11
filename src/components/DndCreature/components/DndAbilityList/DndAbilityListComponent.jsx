import React from "react"
import PropTypes from "prop-types"
import proschet from 'proschet'

import formatSpellCastDescription from './utils/formatSpellCastDescription'

import DndAbility from './components/DndAbility'

import "./DndAbilityListStyles.css"
import ReactMarkdown from 'react-markdown';

const getActionWord = proschet(['действие', 'действия', 'действий'])

const generateAbilityHeader = ({name, limit, cost, restore}) => {
  const textList = [
    limit
      ? `${limit.count}/${limit.period}`
      : '',
    cost
      ? `стоит ${cost} ${getActionWord(cost)}`
      : '',
    restore
      ? `перезарядка ${restore.from}–${restore.to}`
      : '',
  ].filter(e => e)

  const additionalText = textList.length
    ? ` (${textList.join(', ')})`
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
