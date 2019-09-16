import React, { PureComponent } from "react"
import PropTypes from 'prop-types'

import calcListProbabilitySumm from '@/utils/calcListProbabilitySumm'
import listToCollectionById from '@/utils/listToCollectionById'
import listToIdListToPick from '@/utils/listToIdListToPick'
import rollDice from '@/utils/rollDice'

import DndSimpleTableGeneratorComponent from './DndSimpleTableGeneratorComponent'

const ROLL_COUNT_MAX = 10

class DndSimpleTableGeneratorContainer extends PureComponent {
  state = {
    collection: listToCollectionById(this.props.list),
    diceRollList: [],
    idListToPick: [],
    probabilitySumm: 0,
    rollCount: 1,
  }

  componentDidMount() {
    const {list} = this.props

    this.updateData(list)
  }

  componentDidUpdate(prevProps) {
    const {list} = this.props

    if (prevProps.list !== list) {
      this.updateData(list)
    }
  }

  updateData = list => {
    const collection = listToCollectionById(list)
    const idListToPick = listToIdListToPick(list)
    const probabilitySumm = calcListProbabilitySumm(list)

    this.setState({
      collection,
      idListToPick,
      probabilitySumm,
    })
  }

  updateRollCount = ({target: {value: rollCount}}) => {
    this.setState({rollCount})
  }

  generate = () => {
    let {rollCount} = this.state
    const {collection, idListToPick, probabilitySumm} = this.state
    const {emptyKoef} = this.props

    const makeRoll = rollDice(probabilitySumm)
    const diceRollList = []

    while (rollCount) {
      let diceRoll = ' — '
      let treasure = {
        id: 'empty',
        description: ' — ',
      }

      if (Math.random() >= emptyKoef) {
        diceRoll = makeRoll()
        const treasureId = idListToPick[diceRoll]
        const treasureObj = collection[treasureId]
        treasure = treasureObj.description
          ? treasureObj
          : {
            ...treasureObj,
            description: treasureObj.generateDescription()
          }
      }

      diceRollList.push({
        diceRoll,
        treasure,
      })

      rollCount--;
    }

    this.setState({diceRollList})
  }

  render () {
    return (
      <DndSimpleTableGeneratorComponent
        {...this.state}
        {...this.props}
        generate={this.generate}
        rollCountMax={ROLL_COUNT_MAX}
        updateRollCount={this.updateRollCount}
      />
    )
  }
}

DndSimpleTableGeneratorContainer.defaultProps = {
  list: [],
  emptyKoef: 0,
}

DndSimpleTableGeneratorContainer.propTypes = {
  list: PropTypes.array,
  emptyKoef: PropTypes.number,
}

export default DndSimpleTableGeneratorContainer
