import React from "react"
import PropTypes from "prop-types"

import RadioSet from "@/components/RadioSet"

import "./NameGeneratorStyles.css"

const NameGeneratorComponent = (
  {
    onChangeRadio,
    onGenerate,
    result,
    typeList,
  },
) => (
  <section className='NameGenerator'>
    {
      typeList.map(
        ({type, title, chosen, list}) => (
          <RadioSet
            key={type}
            chosen={chosen}
            fieldList={list}
            name={type}
            onChange={onChangeRadio(type)}
            title={title}
          />
        )
      )
    }

    <button
      className='NameGenerator_btn'
      type='button'
      onClick={onGenerate}
    >
      Сгенерить
    </button>

    <input
      className='NameGenerator_result'
      type='text'
      value={result}
      readOnly
    />
  </section>
)

NameGeneratorComponent.propTypes = {
  typeList: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    chosen: PropTypes.string,
    list: PropTypes.array,
  })),
  result: PropTypes.string,
  onChangeRadio: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
}

NameGeneratorComponent.defaultProps = {
  result: '',
}

export default NameGeneratorComponent
