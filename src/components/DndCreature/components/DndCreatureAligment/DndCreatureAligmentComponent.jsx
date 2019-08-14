import React from "react"

import {dndAligmentCollection} from "@/constants/dnd/dndAligment"

export default ({aligmentId}) => {
  const {name: {nominative: aligment}} = dndAligmentCollection[aligmentId]

  return <span>{aligment}</span>
}
