const calcCubeAverage = (
  {
    cubeType = 0,
    cubeCount = 0,
    cubeBonus = 0,
  },
) => cubeCount + Math.floor((cubeType * cubeCount - cubeCount) / 2) + cubeBonus

const generateCube = cube => {
  const {
    cubeType = 0,
    cubeCount = 0,
    cubeBonus = 0
  } = cube

  const average = calcCubeAverage(cube)
  const count = cubeCount
    ? `${cubeCount}к${cubeType}`
    : ''
  const bonusSign = cubeBonus > 0
    ? ' + '
    : ' − '
  const bonusSignText = cubeCount && cubeBonus
    ? bonusSign
    : ''
  const bonus = cubeBonus || ''

  return `${average} (${count}${bonusSignText}${bonus})`
}

export default generateCube;
