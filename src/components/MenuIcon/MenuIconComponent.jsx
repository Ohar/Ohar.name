import React from "react"
import PropTypes from 'prop-types'

const MenuIconComponent = ({iconClass}) => iconClass
  ? <span className={iconClass}/>
  : null

MenuIconComponent.propTypes = {
  iconClass: PropTypes.string,
}

MenuIconComponent.defaultProps = {
  iconClass: '',
}

export default MenuIconComponent
