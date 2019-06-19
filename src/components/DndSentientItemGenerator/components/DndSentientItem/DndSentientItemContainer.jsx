import React from "react"

import DndSentientItemComponent from "./DndSentientItemComponent"

const DndSentientItemContainer = ({item}) => item
  ? <DndSentientItemComponent item={item}/>
  : null

export default DndSentientItemContainer
