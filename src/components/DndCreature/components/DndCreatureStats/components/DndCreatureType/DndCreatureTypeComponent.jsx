import React from 'react'
import PropTypes from 'prop-types'

const DndCreatureTypeComponent = ({ text }) => <span>{text}</span>

DndCreatureTypeComponent.propTypes = {
  text: PropTypes.string.isRequired,
}

export default DndCreatureTypeComponent
