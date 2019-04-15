import React, { Component } from "react"

import RadioSet from '@/components/RadioSet'

import genderFieldList from './constants/genderFieldList'
import typeFieldList from './constants/typeFieldList'

import generateName from './utils/generateName'

import './NameGeneratorStyles.css'

class NameGeneratorComponent extends Component {
  state = {
    gender: genderFieldList[0].value,
    type: typeFieldList[0].value,
    resultName: '',
  }

  onChangeRadio = name => value => {
    this.setState({
      [name]: value,
    })
  }

  generate = () => {
    const {gender, type, resultName} = this.state

    this.setState({
      resultName: generateName(gender, type),
    })
  }

  render() {
    const {gender, type, resultName} = this.state

    return (
      <section className='NameGenerator'>
        <RadioSet
          chosen={gender}
          fieldList={genderFieldList}
          name='gender'
          onChange={this.onChangeRadio('gender')}
          title='Пол'
        />
        <RadioSet
          chosen={type}
          fieldList={typeFieldList}
          name='type'
          onChange={this.onChangeRadio('type')}
          title='Тип'
        />

        <button
          className='NameGenerator_btn'
          type='button'
          onClick={this.generate}
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
  }
}

export default NameGeneratorComponent
