import React from "react"
import arrify from "arrify"

import getAligmentNameById from "./utils/getAligmentNameById"

export default ({aligmentId}) => {
  const textList = arrify(aligmentId).map(
    item => {
      if (typeof item === 'string') {
        return getAligmentNameById(item)
      }

      if (typeof item === 'object') {
        const aligmentText = getAligmentNameById(item.id)
        const commentText = item.comment
          ? ` (${item.comment})`
          : ''

        return `${aligmentText}${commentText}`
      }

      return ''
    }
  )

  const len = textList.length
  const aligment = len > 1
    ? [
      textList.slice(0, len - 1).join(', '),
      textList.slice(len - 1),
    ]
      .join(' или ')
    : textList[0]


  return <span>{aligment}</span>
}
