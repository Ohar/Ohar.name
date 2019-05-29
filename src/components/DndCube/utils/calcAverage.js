const calcAverage = (
  {
    cubeType = 0,
    cubeCount = 0,
    cubeBonus = 0,
  },
) => cubeCount + Math.floor((cubeType * cubeCount - cubeCount) / 2) + cubeBonus

export default calcAverage
