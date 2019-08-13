import React, {Component} from "react"

import DndImmunityConditionList from "./DndImmunityConditionListComponent";

export default class DndImmunityConditionListContainer extends Component {
  render () {
    const {list} = this.props

    return list && list.length
      ? (
        <DndImmunityConditionList
          header='Иммунитет к состоянию'
          list={list}
        />
      )
      : null
  }
}
