import React, { Component } from "react"

import genderFieldList from './constants/genderFieldList'
import typeFieldList from './constants/typeFieldList'

import generateName from './utils/generateName'
import NameGeneratorComponent from './NameGeneratorComponent'

class NameGeneratorContainer extends Component {
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

  onGenerate = () => {
    const {gender, type} = this.state

    this.setState({
      resultName: generateName(gender, type),
    })
  }

  render() {
    const {gender, type, resultName} = this.state

    return (
      <NameGeneratorComponent
        gender={gender}
        type={type}
        resultName={resultName}
        onGenerate={this.onGenerate}
        onChangeRadio={this.onChangeRadio}
      />
    )
  }
}

export default NameGeneratorContainer
