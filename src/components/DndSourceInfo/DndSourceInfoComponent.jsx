import React from 'react'
import PropTypes from "prop-types"

import './DndSourceInfoStyles.less'

const DndSourceInfoComponent = ({ url, title, text }) => url
  ? (
    <a
      className='DndSourceInfo DndSourceInfo-link'
      title={title}
      rel='nofollow noopener noreferrer'
      href={url}
      target='_blank'
    >
      {text}
    </a>
  )
  : (
    <span
      className='DndSourceInfo'
      title={title}
    >
      {text}
    </span>
  )

DndSourceInfoComponent.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
}

DndSourceInfoComponent.defaultProps= {
  title: '',
  url: '',
}

export default DndSourceInfoComponent
