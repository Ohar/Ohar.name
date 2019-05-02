import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import ContentGeneratorComponent from './ContentGeneratorComponent'

const enhanceTypeCollectionWithVisibility = typeCollection => Object
  .keys(typeCollection)
  .reduce(
    (result, type) => {
      const {show} = typeCollection[type]
      const isTypeVisible = !(
        show
        && Object.keys(show).find(
          key => typeCollection[key].chosen !== show[key]
        )
      )

      const list = typeCollection[type].list.map(
        ({show: showItem, ...rest}) => {
          const visible = !(
            showItem && Object.keys(showItem).find(
            key => typeCollection[key].chosen !== showItem[key]
            )
          )

          return {
            ...rest,
            show: showItem,
            visible,
          }
        }
      )

      return {
        ...result,
        [type]: {
          ...typeCollection[type],
          visible: isTypeVisible,
          list,
        },
      }
    },
    {}
  )

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
