import React from 'react'

import './DwMoveStyles.less'

const DwMoveComponent = ({id, name, text}) => (
  <section
    className={`DwMove DwMove-${id}`}
    id={id}
  >
    <header className='DwMove__title'>{name}</header>
    <div className='DwMove__text'>{text}</div>
  </section>
)

export default DwMoveComponent
