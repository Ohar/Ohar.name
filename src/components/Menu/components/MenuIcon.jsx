import React from "react"
import PropTypes from 'prop-types'

const MenuIcon = ({iconClass}) => iconClass
  ? <span className={iconClass}/>
  : null

MenuIcon.propTypes = {
  iconClass: PropTypes.string,
}

MenuIcon.defaultProps = {
  iconClass: '',
}

export default MenuIcon
