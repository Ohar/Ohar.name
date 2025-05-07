import React from 'react'
import declint from 'declint-ru'

const Cost = ({ cost }) => {
  const ducatText = declint(cost, ['дукат', 'дуката', 'дукатов'])
  return (
    <span>{cost} {ducatText}</span>
  )
}

export default Cost
