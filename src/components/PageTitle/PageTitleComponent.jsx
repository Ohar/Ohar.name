import React from 'react'
import PropTypes from 'prop-types'

import './PageTitleStyles.css'

const PageTitleComponent = ({children, className = ''}) => (
  <h1 className={`PageTitle ${className}`}>
    {children}
  </h1>
)

PageTitleComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTitleComponent
