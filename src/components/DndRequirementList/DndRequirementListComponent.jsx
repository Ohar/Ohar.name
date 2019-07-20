import React from 'react'

import DndRequirementItem from './components/DndRequirementItem'


function DndRequirementListComponent({ list }) {
  return list.length > 1
    ? (
      <ul>
        {
          list.map(
            (item, i) => (
              <li key={i}>
                <DndRequirementItem requirement={item}/>
              </li>
            ),
          )
        }
      </ul>
    )
    : <DndRequirementItem requirement={list[0]}/>
}

export default DndRequirementListComponent
