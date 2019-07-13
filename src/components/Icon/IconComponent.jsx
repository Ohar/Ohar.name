import React from "react"
import PropTypes from 'prop-types'

import './IconStyles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconComponent = ({icon}) => icon
  ? (
    typeof icon === 'string'
      ? <span className={`${icon} Icon`}/>
      : <FontAwesomeIcon icon={icon} className='Icon'/>
  )
  : null

IconComponent.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
}

IconComponent.defaultProps = {
  icon: '',
}

export default IconComponent
