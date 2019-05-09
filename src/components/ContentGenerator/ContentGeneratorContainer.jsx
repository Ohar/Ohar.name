import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import ContentGeneratorComponent from './ContentGeneratorComponent'
import enhanceTypeCollectionWithVisibility from './utils/enhanceTypeCollectionWithVisibility'

class ContentGeneratorContainer extends PureComponent {
  state = {
    typeCollection: {},
    result: '',
  }

  componentDidMount() {
    const {typeList} = this.props

    const typeCollection = enhanceTypeCollectionWithVisibility(
      typeList.reduce(
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
    )

    this.setState({typeCollection})
  }

  onChangeRadio = type => chosen => {
    const {typeCollection: typeCollectionPrev} = this.state
    const typeCollection = enhanceTypeCollectionWithVisibility({
      ...typeCollectionPrev,
      [type]: {
        ...typeCollectionPrev[type],
        chosen,
      },
    })

    this.setState({typeCollection})
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
    const typeList = Object
      .values(typeCollection)
      .filter(
        ({visible}) => visible
      )
      .map(
        ({list, ...rest}) => ({
            ...rest,
            list: list.filter(({visible}) => visible)
        })
      )

    return (
      <ContentGeneratorComponent
        onChangeRadio={this.onChangeRadio}
        onGenerate={this.onGenerate}
        result={result}
        typeList={typeList}
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
