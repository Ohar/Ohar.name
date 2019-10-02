import React from "react"
import arrify from "arrify"

import joinText from "@/utils/joinText"

import {GENDER_MALE} from "@/constants/genderList"

import getAligmentNameById from "./utils/getAligmentNameById"

export default ({aligmentId, genderId, swarmSizeType = null}) => {
  const realGenderId = swarmSizeType
    ? GENDER_MALE
    : genderId
  const aligment = joinText(
    arrify(aligmentId)
      .map(
        item => {
          if (typeof item === 'string') {
            return getAligmentNameById({genderId: realGenderId, aligmentId: item})
          }

          if (typeof item === 'object') {
            const {id: aligmentId} = item
            const aligmentText = getAligmentNameById({genderId: realGenderId, aligmentId})
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
