import React from "react"
import PropTypes from "prop-types"

import RadioSet from "@/components/RadioSet"

import genderFieldList from "./constants/genderFieldList"
import typeFieldList from "./constants/typeFieldList"

import "./NameGeneratorStyles.css"

const NameGeneratorComponent = (
  {
    gender, type, resultName, onChangeRadio, onGenerate,
  },
) => (
  <section className='NameGenerator'>
    <RadioSet
      chosen={gender}
      fieldList={genderFieldList}
      name='gender'
      onChange={onChangeRadio("gender")}
      title='Пол'
    />
    <RadioSet
      chosen={type}
      fieldList={typeFieldList}
      name='type'
      onChange={onChangeRadio("type")}
      title='Тип'
    />

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
      value={resultName}
      readOnly
    />
  </section>
)

NameGeneratorComponent.propTypes = {
  gender: PropTypes.string,
  type: PropTypes.string,
  resultName: PropTypes.string,
  onChangeRadio: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
}

NameGeneratorComponent.defaultProps = {
  gender: 'all',
  type: 'all',
  resultName: '',
}

export default NameGeneratorComponent
