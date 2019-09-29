import React from "react"
import arrify from "arrify"

import getAligmentNameById from "./utils/getAligmentNameById"
import joinText from "@/utils/joinText"

export default ({creature: {aligmentId, genderId}}) => {
  const aligment = joinText(
    arrify(aligmentId)
      .map(
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
  )

  return <span>{aligment}</span>
}
