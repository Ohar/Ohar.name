import React from 'react'
import ReactMarkdown from "react-markdown"

import './DndCreatureDescriptionStyles.less'
import PropTypes from 'prop-types';

const DndCreatureDescriptionComponent = ({header, subHeader, text, columnCount}) => (
  <article className={`DndCreatureDescription DndCreatureDescription-columnCount_${columnCount}`}>
    <header className='DndCreatureDescription_header'>
      {header}
      {
        subHeader && (
          <div className='DndCreatureDescription_subHeader'>
            {subHeader}
          </div>
        )
      }
    </header>
    <ReactMarkdown className='DndCreatureDescription_content'>{text}</ReactMarkdown>
  </article>
)

DndCreatureDescriptionComponent.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
  text: PropTypes.string.isRequired,
  columnCount: PropTypes.number.isRequired,
}

DndCreatureDescriptionComponent.defaultProps = {
  subHeader: '',
}

export default DndCreatureDescriptionComponent
