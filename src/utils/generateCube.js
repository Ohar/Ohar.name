export default cube => {
  if (cube) {
    const {
      cubeType = 0,
      cubeCount = 0,
      cubeBonus = 0
    } = cube

    const average = cubeCount + cubeBonus + Math.floor((cubeType * cubeCount - cubeCount) / 2)
    const count = cubeCount
      ? `${cubeCount}к${cubeType}`
      : ''
    const bonusSign = cubeBonus > 0
      ? ' + '
      : ' − '
    const bonusSignText = cubeCount && cubeBonus
      ? bonusSign
      : ''
    const bonus = cubeBonus
      ? Math.abs(cubeBonus)
      : ''

    return `${average} (${count}${bonusSignText}${bonus})`
  }

  return  ''
}
