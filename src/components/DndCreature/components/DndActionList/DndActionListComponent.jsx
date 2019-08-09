import React from "react"

import DndAbilityList from './../DndAbilityList'

import "./DndActionListStyles.css"

const DndActionListComponent = props => (
  <section className='DndActionList'>
    <header className='DndActionList_header'>Действия</header>
    <DndAbilityList {...props}/>
  </section>
)

export default DndActionListComponent
