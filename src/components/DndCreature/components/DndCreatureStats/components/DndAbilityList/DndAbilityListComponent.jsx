import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from 'react-markdown';
import arrify from "arrify"

import {GENDER_MALE} from '@/constants/genderList'

import formatSpellCastDescription from './utils/formatSpellCastDescription'
import generateAbilityHeader from './utils/generateAbilityHeader'

import DndAbility from './components/DndAbility'

import "./DndAbilityListStyles.less"

const DndAbilityListComponent = (
  {
    entry,
    header,
    genderId,
    list,
    name,
    spellCast,
    spellCastTogether,
  }
) => (
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
        arrify(spellCast)
          .concat(spellCastTogether)
          .map(
            (item, i) => item
              ? (
                <DndAbility
                  key={i}
                  header={
                    (
                      item.title || (
                        item.spellCasterLevel
                          ? 'Использование заклинаний'
                          : 'Врождённое колдовство'
                      )
                    ) + (
                      item.comment
                        ? ` (${item.comment})`
                        : ''
                    ) + '.'
                  }
                >
                  {formatSpellCastDescription({ spellCast: item, genderId, name })}
                </DndAbility>
              )
              : null,
          )
      }
    </ul>
  </section>
)

DndAbilityListComponent.propTypes = {
  entry: PropTypes.string,
  header: PropTypes.string,
  genderId: PropTypes.string,
  list: PropTypes.array,
  name: PropTypes.string,
  spellCast: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  spellCastTogether: PropTypes.object,
}

DndAbilityListComponent.defaultProps = {
  entry: '',
  header: '',
  genderId: GENDER_MALE,
  list: [],
  name: '',
  spellCast: null,
  spellCastTogether: null,
}

export default DndAbilityListComponent
