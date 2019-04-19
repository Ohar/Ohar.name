import React from 'react'
import PropTypes from 'prop-types'

import './RadioGroupStyles.css'

const RadioGroupComponent = ({children}) => (
  <section className='RadioGroup'>
    {children}
  </section>
)

RadioGroupComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RadioGroupComponent
