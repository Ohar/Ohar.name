import React from "react"
import arrify from "arrify"

import getAligmentNameById from "./utils/getAligmentNameById"

export default ({creature: {aligmentId, genderId}}) => {
  const textList = arrify(aligmentId).map(
    item => {
      if (typeof item === 'string') {
        return getAligmentNameById({genderId, aligmentId: item})
      }

      if (typeof item === 'object') {
        const {id: aligmentId} = item
        const aligmentText = getAligmentNameById({genderId, aligmentId})
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
