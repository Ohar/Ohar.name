import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown";

import "./DndAbilityListStyles.css"

const DndAbilityListComponent = ({ list }) => (
  <ul className='DndAbilityList'>
    {
      list.map(
        ({name, description, limit}) => {
          const limitText = limit
            ? ` (${limit.count}/${limit.period})`
            : ''

          return (
            <li
              key={name}
              className='DndAbilityList_item'
            >
              <b className='DndAbilityList_itemHeader'>
                {name}{limitText}.
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
)

DndAbilityListComponent.propTypes = {
  list: PropTypes.array,
}

DndAbilityListComponent.defaultProps = {
  list: [],
}

export default DndAbilityListComponent
