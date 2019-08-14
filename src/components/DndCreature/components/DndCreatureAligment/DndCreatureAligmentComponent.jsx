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

  const aligment = [
    textList.slice(0, textList.length - 1).join(', '),
    textList.slice(textList.length - 1),
  ]
    .join(' или ')


  return <span>{aligment}</span>
}
