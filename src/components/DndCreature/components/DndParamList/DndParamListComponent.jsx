import React from "react"
import PropTypes from "prop-types"

import DndParam from "./../DndParam"

import "./DndParamListStyles.css"

const DndParamListComponent = ({ params, className }) => (
  <section className={`DndParamList ${className}`}>
    {
      Object
        .keys(params)
        .map(
          id => (
            <DndParam
              id={id}
              key={id}
              value={params[id]}
            />
          )
        )
    }
  </section>
)

DndParamListComponent.propTypes = {
  params: PropTypes.object.isRequired,
  className: PropTypes.string,
}

DndParamListComponent.defaultProps = {
  className: '',
}

export default DndParamListComponent
