const calcAverage = (
  {
    cubeType,
    cubeCount,
    cubeBonus,
  },
) => cubeCount + Math.floor((cubeType * cubeCount - cubeCount) / 2) + cubeBonus

export default calcAverage
