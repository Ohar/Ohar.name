import React, {Component} from "react"

import {dndDamageTypeCollection} from '@/constants/dnd/dndDamageTypeList'

import DndDmgListComponent from "./DndDmgListComponent";

export default class DndDmgListContainer extends Component {
  render () {
    const {list, ...rest} = this.props

    if (list && list.length) {
      const joiner = list.some(item => dndDamageTypeCollection[item].isEnumeration)
        ? ';'
        : ','

      return (
        <DndDmgListComponent
          list={list}
          joiner={joiner}
          {...rest}
        />
      )
    }

    return null
  }
}
