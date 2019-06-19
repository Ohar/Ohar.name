import React from "react"

import "./DndSentientItemStyles.css"

const DndSentientItem = ({ item }) => (
  <section className='DndSentientItem'>
    {JSON.stringify(item)}
  </section>
)

export default DndSentientItem
