import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import ContentGeneratorComponent from './ContentGeneratorComponent'

class ContentGeneratorContainer extends PureComponent {
  state = {
    typeCollection: {},
    result: '',
  }

  componentDidMount() {
    const {typeList} = this.props

    const typeCollection = typeList.reduce(
      (summ, item) => ({
        ...summ,
        [item.type]: {
          ...item,
          chosen: 'chosen' in item
            ? item.chosen
            : item.list[0].value
        },
      }),
      {}
    )

    this.setState({typeCollection})
  }

  onChangeRadio = type => chosen => {
    const {typeCollection} = this.state

    this.setState({
      typeCollection: {
        ...typeCollection,
        [type]: {
          ...typeCollection[type],
          chosen,
        },
      },
    })
  }

  onGenerate = () => {
    const {typeCollection} = this.state
    const {generate} = this.props

    const params = Object.keys(typeCollection).reduce(
      (summ, type) => ({
        ...summ,
        [type]: typeCollection[type].chosen,
      }),
      {}
    )

    this.setState({
      result: generate(params),
    })
  }

  render() {
    const {result, typeCollection} = this.state

    return (
      <ContentGeneratorComponent
        onChangeRadio={this.onChangeRadio}
        onGenerate={this.onGenerate}
        result={result}
        typeList={Object.values(typeCollection)}
      />
    )
  }
}

ContentGeneratorContainer.propTypes = {
  typeList: PropTypes.array,
  generate: PropTypes.func.isRequired,
}

ContentGeneratorContainer.defaultProps = {
  typeList: [],
}

export default ContentGeneratorContainer
