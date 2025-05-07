import React from 'react'
import declint from 'declint-ru'

const AttackBonus = ({ bonus }) => {
  const bonusModal = Math.abs(bonus)
  const bonusText = bonus >= 0 ? `+ ${bonusModal}` : `− ${bonusModal}`
  const diceText = declint(bonusModal, ['КУБ', 'КУБА', 'КУБОВ'])
  return (
    <span>{bonusText} {diceText}</span>
  )
}

export default AttackBonus
