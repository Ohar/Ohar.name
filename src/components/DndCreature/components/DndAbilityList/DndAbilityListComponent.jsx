import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown";

import "./DndAbilityListStyles.css"

const DndAbilityListComponent = ({ header, list }) => (
  <section className='DndAbilityList'>
    {
      header && (
        <header className='DndAbilityList_header'>{header}</header>
      )
    }

    <ul className='DndAbilityList_list'>
      {
        list.map(
          ({name, description, limit}) => {
            const itemHeader = limit
              ? `${name} (${limit.count}/${limit.period}).`
              : `${name}.`

            return (
              <li
                key={name}
                className='DndAbilityList_item'
              >
                <b className='DndAbilityList_itemHeader'>
                  {itemHeader}
                </b>
                <ReactMarkdown className='DndAbilityList_itemDescription'>
                  {description}
                </ReactMarkdown>
              </li>
            )
          }
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
