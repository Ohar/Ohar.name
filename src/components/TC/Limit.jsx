import React from 'react'

const Limit = ({ limit }) => {
  const max = typeof limit === 'object' ? limit.max : limit
  const min = typeof limit === 'object' ? limit.min : limit
  const limitText = max === min
    ? limit
    : `${min}–${max}`

  return (
    <span>{limitText}</span>
  )
}

export default Limit
