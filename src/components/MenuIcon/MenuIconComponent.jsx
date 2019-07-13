import React from "react"
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuIconComponent = ({icon}) => icon
  ? (
    typeof icon === 'string'
      ? <span className={icon} className='MenuIcon'/>
      : <FontAwesomeIcon icon={icon} className='MenuIcon'/>
  )
  : null

MenuIconComponent.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
}

MenuIconComponent.defaultProps = {
  icon: '',
}

export default MenuIconComponent
