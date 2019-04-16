import React from 'react'
import PropTypes from 'prop-types'

const RadioSet = ({title, name, fieldList, chosen, onChange}) => (
  <fieldset>
    <legend>{title}</legend>

    {
      fieldList.map(
        ({value, text, iconClass}) => (
          <span key={`${name}_${value}`}>
            <input
              type='radio'
              key={`${name}_${value}`}
              id={`${name}_${value}`}
              name={name}
              value={value}
              onChange={() => onChange(value)}
              checked={chosen === value}
            />
            <label
              htmlFor={`${name}_${value}`}
              className={iconClass || ''}
            >
              {text}
            </label>
          </span>
        )
      )
    }
  </fieldset>
)

RadioSet.propTypes = {
  chosen: PropTypes.string.isRequired,
  fieldList: PropTypes.arrayOf(PropTypes.shape({
    iconClass: PropTypes.string,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default RadioSet
