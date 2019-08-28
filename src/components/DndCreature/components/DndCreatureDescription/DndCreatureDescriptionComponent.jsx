import React from 'react'
import ReactMarkdown from "react-markdown"

import './DndCreatureDescriptionStyles.less'

export default ({nameText, nameEnText, description}) => (
  <article className='DndCreatureDescription'>
    <header className='DndCreatureDescription_header'>
      {nameText}
      <div className='DndCreatureDescription_subHeader'>
        {nameEnText}
      </div>
    </header>
    <ReactMarkdown className='DndCreatureDescription_content'>{description}</ReactMarkdown>
  </article>
)
