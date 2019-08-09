export default bonus => {
  const bonusAbs = Math.abs(bonus)

  return bonus < 0
    ? `−ss${bonusAbs}`
    : `+${bonusAbs}`
}
