import React from "react"

const DndItemCreator = ({creator: {title, description}}) => (
  <section className='DndItemCreator'>
    <p><b>{title}</b></p>
    <p>{description}</p>
  </section>
)

export default DndItemCreator
