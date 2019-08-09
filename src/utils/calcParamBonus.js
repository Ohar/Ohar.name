const NORMAL_PARAM = 10
const KOEF_STEP = 2

export default value => {
  const bonus = Math.floor((value - NORMAL_PARAM) / KOEF_STEP)
  const bonusAbs = Math.abs(bonus)

  return  bonus < 0
    ? `−${bonusAbs}`
    : `+${bonusAbs}`

}
