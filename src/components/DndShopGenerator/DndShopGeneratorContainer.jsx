import React, { Component } from "react"

import shopTypeList from "./constants/shopTypeList"
import cityTypeList from "./constants/cityTypeList"

import goodsGenerator from "./utils/goodsGenerator"

import DndShopGeneratorComponent from "./DndShopGeneratorComponent"

class DndShopGeneratorContainer extends Component {
  state = {
    shopType: shopTypeList[0].value,
    cityType: cityTypeList[0].value,
    goodList: [],
  }

  onChangeShopType = shopType => {
    this.setState({shopType})
  }

  onChangeCityType = cityType => {
    this.setState({cityType})
  }

  generate = () => {
    const {shopType, cityType} = this.state

    this.setState({
      goodList: goodsGenerator(shopType, cityType),
    })
  }

  render() {
    const {shopType, cityType, goodList} = this.state

    return (
      <DndShopGeneratorComponent
        onChangeShopType={this.onChangeShopType}
        onChangeCityType={this.onChangeCityType}
        onGenerate={this.generate}
        cityType={cityType}
        shopType={shopType}
        goodList={goodList}
      />
    )
  }
}

export default DndShopGeneratorContainer
