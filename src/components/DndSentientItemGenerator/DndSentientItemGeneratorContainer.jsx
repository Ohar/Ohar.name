import React, { Component } from "react"

import SentientItem from "./SentientItem"
import DndSentientItemGeneratorComponent from "./DndSentientItemGeneratorComponent"

class DndSentientItemGeneratorContainer extends Component {
  state = {
    item: null,
  }

  onGenerate = () => {
    this.setState({
      item: new SentientItem(),
    })
  }

  render() {
    const {item} = this.state

    return (
      <DndSentientItemGeneratorComponent
        item={item}
        onGenerate={this.onGenerate}
      />
    )
  }
}

export default DndSentientItemGeneratorContainer
