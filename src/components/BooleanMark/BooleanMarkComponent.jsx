import React from 'react'

const BooleanMarkComponent = ({val}) => {
  return (
    <section>
      {
        val
          ? '✔'
          : ''
      }
    </section>
  )
}

export default BooleanMarkComponent
