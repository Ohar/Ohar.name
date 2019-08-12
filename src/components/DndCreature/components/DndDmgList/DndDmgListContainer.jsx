import React, {Component} from "react"

import {dndDamageTypeCollection} from '@/constants/dnd/dndDamageTypeList'

import DndDmgListComponent from "./DndDmgListComponent";

class DndDmgListContainer extends Component {
  render () {
    const {list, ...rest} = this.props

    const joiner = list.find(item => dndDamageTypeCollection[item].isEnumeration)
      ? ';'
      : ','

    return list && list.length
      ? (
        <DndDmgListComponent
          list={list}
          joiner={joiner}
          {...rest}
        />
      )
      : null
  }
}

export default DndDmgListContainer
