import React from "react"
import ReactMarkdown from "react-markdown";

import "./DndAbilityStyles.less"

const DndAbility = ({header, children}) => (
  <li
    key={header}
    className='DndAbility'
  >
    <b className='DndAbility_header'>
      {`${header} `}
    </b>
    <ReactMarkdown className='DndAbility_description'>
      {children}
    </ReactMarkdown>
  </li>
)

export default DndAbility
