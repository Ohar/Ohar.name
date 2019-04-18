import React, { Component } from "react"

import shopTypeList from "./constants/shopTypeList"

import goodsGenerator from "./utils/goodsGenerator"

import DndShopGeneratorComponent from "./DndShopGeneratorComponent"

class DndShopGeneratorContainer extends Component {
  state = {
    type: shopTypeList[0].value,
    goodList: [],
  }

  onChangeType = type => {
    this.setState({type})
  }

  generate = () => {
    console.log('generate');
    const {type} = this.state

    this.setState({
      goodList: goodsGenerator(type),
    })
  }

  render() {
    const {type, goodList} = this.state

    return (
      <DndShopGeneratorComponent
        onChangeType={this.onChangeType}
        onGenerate={this.generate}
        type={type}
        goodList={goodList}
      />
    )
  }
}

export default DndShopGeneratorContainer
