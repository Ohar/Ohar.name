import React from 'react'
import PropTypes from 'prop-types'

import './PageTitleStyles.css'

const PageTitleComponent = ({children}) => (
  <h1 className='PageTitle'>
    {children}
  </h1>
)

PageTitleComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTitleComponent
