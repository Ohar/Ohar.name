import React, {Component} from "react"

import {dndDamageTypeCollection} from '@/constants/dnd/dndDamageTypeList'

import DndDmgListComponent from "./DndDmgListComponent";

export default class DndDmgListContainer extends Component {
  render () {
    const {list, ...rest} = this.props

    if (list && list.length) {
      const joiner = list.some(
        item => typeof item === 'string'
          ? dndDamageTypeCollection[item].isEnumeration
          : dndDamageTypeCollection[item.id].isEnumeration
      )
        ? ';'
        : ','

      const textList = list.map(
        item => {
          const id = typeof item === 'string'
            ? item
            : item.id

          const {name} = dndDamageTypeCollection[id]
          let commentText = ''

          if (item.comment) {
            commentText = ` (${item.comment})`
          }

          return `${name}${commentText}`
        }
      )

      return (
        <DndDmgListComponent
          list={textList}
          joiner={joiner}
          {...rest}
        />
      )
    }

    return null
  }
}
