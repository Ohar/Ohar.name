import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './RadioSetStyles.css'

const RadioSetComponent = ({title, name, fieldList, chosen, onChange}) => (
  <fieldset className='RadioSet'>
    <legend>{title}</legend>

    {
      fieldList.map(
        ({value, text, icon}) => {
          const isChecked = chosen === value
          return (
            <span
              key={`${name}_${value}`}
              className={classNames(
                'RadioSet_item',
                {
                  'RadioSet_item-isChecked': isChecked,
                }
              )}
            >
            <input
              type='radio'
              className='RadioSet_input'
              key={`${name}_${value}`}
              id={`${name}_${value}`}
              name={name}
              value={value}
              onChange={() => onChange(value)}
              checked={isChecked}
            />
            <label
              htmlFor={`${name}_${value}`}
              className={classNames('RadioSet_label', icon || '')}
            >
              {text}
            </label>
          </span>
          )
        }
      )
    }
  </fieldset>
)

RadioSetComponent.propTypes = {
  chosen: PropTypes.string.isRequired,
  fieldList: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default RadioSetComponent
